// Vercel Serverless Function — POST /api/waitlist
// Captures early-access signups. For now it validates + logs the submission.
// TODO: connect to [Resend / Loops / Airtable / your CRM] to persist and notify.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const email = (body.email || '').trim();
    const company = (body.company || '').trim(); // honeypot
    const role = (body.role || '').trim();

    // Spam trap: real users never fill the hidden company field.
    if (company) return res.status(200).json({ ok: true });

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) return res.status(400).json({ error: 'Please enter a valid email address.' });

    // TODO: persist to your store / CRM and send a confirmation email.
    // e.g. await resend.emails.send(...) or await airtable(...).create({ email, role })
    console.log('[waitlist] new signup', { email, role, at: new Date().toISOString() });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[waitlist] error', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
