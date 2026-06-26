'use server'

import nodemailer from 'nodemailer'

export type FormState = {
  success?: boolean
  error?: string
}

export async function submitWholesaleForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const businessName = formData.get('businessName') as string
  const businessType = formData.get('businessType') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Please fill in all required fields.' }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'amit@iscream-gelato.com',
    replyTo: email,
    subject: `Wholesale Inquiry from ${name} – ${businessName || 'New Partner'}`,
    html: `
      <h2>New Wholesale Partnership Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Phone</td><td style="padding:8px">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Business Name</td><td style="padding:8px">${businessName || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Business Type</td><td style="padding:8px">${businessType || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Message</td><td style="padding:8px">${message}</td></tr>
      </table>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (err) {
    console.error('Mail error:', err)
    return { error: 'Failed to send your message. Please try again or contact us directly.' }
  }
}
