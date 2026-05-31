import subprocess
import sys
import os

agents = [
    "ceo_agent.py",
    "dev_agent.py",
    "marketing_agent.py",
    "support_agent.py",
    "finance_agent.py",
    "legal_agent.py"
]

processes = []

for agent in agents:
    print(f"Starting {agent}...")
    p = subprocess.Popen([sys.executable, agent])
    processes.append(p)

print("All 6 agents running.")

for p in processes:
    p.wait()