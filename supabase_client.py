import os
import httpx
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL", "https://shdsvylhtzuuleaicehe.supabase.co")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json"
}

async def query(table: str, params: str = "") -> list:
    """Query a Supabase table and return rows."""
    url = f"{SUPABASE_URL}/rest/v1/{table}{'?' + params if params else ''}"
    async with httpx.AsyncClient() as client:
        res = await client.get(url, headers=HEADERS)
        res.raise_for_status()
        return res.json()

async def get_platform_stats() -> dict:
    """Get a full snapshot of platform metrics."""
    try:
        contractors  = await query("contractors", "select=id,status,trade,city,created_at")
        homeowners   = await query("homeowners", "select=id,city,created_at")
        jobs         = await query("jobs", "select=id,status,trade_needed,city,created_at")
        proposals    = await query("proposals", "select=id,status,price,created_at")
        reviews      = await query("reviews", "select=id,rating,created_at")

        active_contractors  = [c for c in contractors if c["status"] == "active"]
        pending_contractors = [c for c in contractors if c["status"] == "pending"]
        open_jobs           = [j for j in jobs if j["status"] == "open"]
        completed_jobs      = [j for j in jobs if j["status"] == "completed"]
        accepted_proposals  = [p for p in proposals if p["status"] == "accepted"]

        # Revenue: 10% fee on completed proposals with a price
        completed_with_price = [p for p in proposals if p["status"] == "completed" and p.get("price")]
        gross_revenue = sum(float(p["price"]) for p in completed_with_price)
        platform_fees = gross_revenue * 0.10

        # Avg rating
        avg_rating = round(sum(r["rating"] for r in reviews) / len(reviews), 2) if reviews else 0

        # Top trades
        from collections import Counter
        trade_counts = Counter(j["trade_needed"] for j in jobs if j.get("trade_needed"))
        top_trades = trade_counts.most_common(5)

        # Top cities
        city_counts = Counter(j["city"] for j in jobs if j.get("city"))
        top_cities = city_counts.most_common(5)

        return {
            "contractors": {
                "total": len(contractors),
                "active": len(active_contractors),
                "pending": len(pending_contractors),
            },
            "homeowners": {"total": len(homeowners)},
            "jobs": {
                "total": len(jobs),
                "open": len(open_jobs),
                "completed": len(completed_jobs),
                "accepted": len([j for j in jobs if j["status"] == "accepted"]),
            },
            "proposals": {
                "total": len(proposals),
                "accepted": len(accepted_proposals),
            },
            "revenue": {
                "gross": round(gross_revenue, 2),
                "platform_fees": round(platform_fees, 2),
                "completed_jobs": len(completed_with_price),
            },
            "reviews": {
                "total": len(reviews),
                "avg_rating": avg_rating,
            },
            "top_trades": top_trades,
            "top_cities": top_cities,
        }
    except Exception as e:
        return {"error": str(e)}

async def get_pending_contractors() -> list:
    """Get contractors awaiting approval."""
    try:
        return await query("contractors", "status=eq.pending&select=id,name,email,trade,city,license_number,created_at&order=created_at.desc")
    except Exception as e:
        return []

async def get_recent_jobs(limit: int = 10) -> list:
    """Get most recently posted jobs."""
    try:
        return await query("jobs", f"order=created_at.desc&limit={limit}&select=id,title,trade_needed,city,status,created_at")
    except Exception as e:
        return []
