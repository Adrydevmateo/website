'use server'

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

type ContactResult = { success: true } | { success: false; error: string }

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContact(payload: ContactPayload): Promise<ContactResult> {
  const { name, email, subject, message } = payload

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL || 'adrydevmateo@gmail.com'

  // If no Resend key is configured, fall back to a logged success
  // (replace with your preferred email service)
  if (!apiKey) {
    console.log('[Contact form] No RESEND_API_KEY configured. Payload:', payload)
    return { success: true }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        subject: `[Portfolio] ${subject ? subject + ' — ' : ''}${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || '—'}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
        reply_to: email,
      }),
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      console.error('[Contact form] Resend error:', body)
      return { success: false, error: 'Failed to send message. Please try emailing me directly.' }
    }

    return { success: true }
  } catch (err) {
    console.error('[Contact form] Network error:', err)
    return { success: false, error: 'Network error. Please try again later.' }
  }
}
