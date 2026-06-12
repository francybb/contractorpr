
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) return { statusCode: 500, body: 'Missing RESEND_API_KEY' };

  let body;
  try { body = JSON.parse(event.body); } 
  catch { return { statusCode: 400, body: 'Invalid JSON' }; }

  const { type, data } = body;

  const templates = {
    proposal_received: {
      to: data.homeowner_email,
      subject: `Nueva propuesta recibida — ${data.job_title}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1a1a2e;padding:24px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:22px">ContractingPR</h1>
          </div>
          <div style="padding:32px">
            <h2 style="color:#111;margin-top:0">Recibiste una nueva propuesta</h2>
            <p style="color:#555">El contratista <strong>${data.contractor_name}</strong> envió una propuesta para tu trabajo:</p>
            <div style="background:#f9fafb;border-left:4px solid #2563eb;padding:16px;border-radius:4px;margin:20px 0">
              <p style="margin:0;font-weight:600;color:#111">${data.job_title}</p>
              <p style="margin:8px 0 0;color:#2563eb;font-size:20px;font-weight:700">$${data.amount}</p>
            </div>
            <a href="https://contractingpr.com/dashboard-homeowner.html" 
               style="display:inline-block;background:#2563eb;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;margin-top:8px">
              Ver Propuesta
            </a>
          </div>
          <div style="background:#f9fafb;padding:16px;text-align:center;color:#9ca3af;font-size:12px">
            ContractingPR · Puerto Rico · <a href="https://contractingpr.com" style="color:#9ca3af">contractingpr.com</a>
          </div>
        </div>
      `
    },
    proposal_accepted: {
      to: data.contractor_email,
      subject: `¡Tu propuesta fue aceptada! — ${data.job_title}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1a1a2e;padding:24px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:22px">ContractingPR</h1>
          </div>
          <div style="padding:32px">
            <h2 style="color:#111;margin-top:0">¡Tu propuesta fue aceptada!</h2>
            <p style="color:#555">El propietario aceptó tu propuesta para:</p>
            <div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:16px;border-radius:4px;margin:20px 0">
              <p style="margin:0;font-weight:600;color:#111">${data.job_title}</p>
              <p style="margin:8px 0 0;color:#16a34a;font-size:20px;font-weight:700">$${data.amount}</p>
              <p style="margin:8px 0 0;color:#555;font-size:14px">El pago está en custodia. Completa el trabajo para recibir tus fondos.</p>
            </div>
            <a href="https://contractingpr.com/dashboard-contractor.html" 
               style="display:inline-block;background:#16a34a;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;margin-top:8px">
              Ver Dashboard
            </a>
          </div>
          <div style="background:#f9fafb;padding:16px;text-align:center;color:#9ca3af;font-size:12px">
            ContractingPR · Puerto Rico · <a href="https://contractingpr.com" style="color:#9ca3af">contractingpr.com</a>
          </div>
        </div>
      `
    },
    job_completed: {
      to: [data.homeowner_email, data.contractor_email],
      subject: `Trabajo completado — ${data.job_title}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1a1a2e;padding:24px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:22px">ContractingPR</h1>
          </div>
          <div style="padding:32px">
            <h2 style="color:#111;margin-top:0">Trabajo marcado como completado</h2>
            <div style="background:#f9fafb;border-left:4px solid #7c3aed;padding:16px;border-radius:4px;margin:20px 0">
              <p style="margin:0;font-weight:600;color:#111">${data.job_title}</p>
              <p style="margin:8px 0 0;color:#555;font-size:14px">Contratista: ${data.contractor_name}</p>
            </div>
            <p style="color:#555">El pago de <strong>$${data.amount}</strong> será liberado al contratista. Por favor deja una reseña sobre tu experiencia.</p>
            <a href="https://contractingpr.com/dashboard-homeowner.html" 
               style="display:inline-block;background:#7c3aed;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;margin-top:8px">
              Dejar Reseña
            </a>
          </div>
          <div style="background:#f9fafb;padding:16px;text-align:center;color:#9ca3af;font-size:12px">
            ContractingPR · Puerto Rico · <a href="https://contractingpr.com" style="color:#9ca3af">contractingpr.com</a>
          </div>
        </div>
      `
    },
    contractor_approved: {
      to: data.contractor_email,
      subject: '¡Tu cuenta en ContractingPR ha sido aprobada!',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1a1a2e;padding:24px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:22px">ContractingPR</h1>
          </div>
          <div style="padding:32px">
            <h2 style="color:#111;margin-top:0">¡Bienvenido, ${data.contractor_name}! 🎉</h2>
            <p style="color:#555">Tu cuenta de contratista ha sido aprobada. Ya puedes iniciar sesión y empezar a recibir trabajos.</p>
            <a href="https://contractingpr.com/dashboard-contractor.html"
               style="display:inline-block;background:#0066CC;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;margin-top:8px">
              Ir a mi dashboard →
            </a>
          </div>
          <div style="background:#f9fafb;padding:16px;text-align:center;color:#9ca3af;font-size:12px">
            ContractingPR · Puerto Rico · <a href="https://contractingpr.com" style="color:#9ca3af">contractingpr.com</a>
          </div>
        </div>
      `
    },
    review_received: {
      to: data.contractor_email,
      subject: `Nueva reseña recibida — ${data.job_title}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#1a1a2e;padding:24px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:22px">ContractingPR</h1>
          </div>
          <div style="padding:32px">
            <h2 style="color:#111;margin-top:0">¡Recibiste una nueva reseña!</h2>
            <p style="color:#555">El propietario dejó una reseña sobre tu trabajo:</p>
            <div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:16px;border-radius:4px;margin:20px 0">
              <p style="margin:0;font-weight:600;color:#111">${data.job_title}</p>
              <p style="margin:8px 0 0;font-size:24px">${'⭐'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}</p>
              ${data.comment ? `<p style="margin:10px 0 0;color:#555;font-style:italic">"${data.comment}"</p>` : ''}
            </div>
            <a href="https://contractingpr.com/dashboard-contractor.html"
               style="display:inline-block;background:#f59e0b;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;margin-top:8px">
              Ver mi perfil
            </a>
          </div>
          <div style="background:#f9fafb;padding:16px;text-align:center;color:#9ca3af;font-size:12px">
            ContractingPR · Puerto Rico · <a href="https://contractingpr.com" style="color:#9ca3af">contractingpr.com</a>
          </div>
        </div>
      `
    }
  };

  const template = templates[type];
  if (!template) return { statusCode: 400, body: `Unknown email type: ${type}` };

  // Support single or multiple recipients
  const recipients = Array.isArray(template.to) ? template.to : [template.to];
  
  try {
    const results = await Promise.all(recipients.map(to =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'ContractingPR <noreply@contractingpr.com>',
          to,
          subject: template.subject,
          html: template.html
        })
      }).then(r => r.json())
    ));

    return { statusCode: 200, body: JSON.stringify({ success: true, results }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
