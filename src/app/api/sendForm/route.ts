export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const LIMITS = { name: 120, email: 254, number: 40, company: 120, message: 4000 } as const

type Field = keyof typeof LIMITS

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d][\d\s().-]{5,}$/

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = (await req.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const data = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    number: clean(body.number, LIMITS.number),
    company: clean(body.company, LIMITS.company),
    message: clean(body.message, LIMITS.message),
  }

  const errors: Partial<Record<Field, string>> = {}
  if (data.name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (!PHONE_RE.test(data.number)) errors.number = 'Please enter a valid phone number.'
  if (data.message.length < 10) errors.message = 'Tell us a little more about the project.'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 })
  }

  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) {
    console.error('sendForm: SMTP_USER / SMTP_PASS are not configured')
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  })

  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    number: escapeHtml(data.number),
    company: escapeHtml(data.company),
    message: escapeHtml(data.message).replace(/\n/g, '<br/>'),
  }

  const subject = `New project inquiry from ${data.name}`

  const text = [
    'New inquiry from the Pirmada website',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.number}`,
    data.company ? `Company: ${data.company}` : null,
    '',
    'Message:',
    data.message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f4f4f1; padding:24px;">
      <div style="max-width:600px; margin:0 auto; background:#ffffff; padding:28px; border:1px solid #e5e5e2; border-radius:8px;">
        <p style="margin:0 0 4px; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:#77777a;">Pirmada website</p>
        <h2 style="margin:0 0 20px; font-size:20px; color:#111;">New project inquiry</h2>
        <table style="width:100%; border-collapse:collapse; font-size:14px; color:#222;">
          <tr><td style="padding:6px 0; color:#77777a; width:110px;">Name</td><td style="padding:6px 0;">${safe.name}</td></tr>
          <tr><td style="padding:6px 0; color:#77777a;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe.email}" style="color:#0a9aa5;">${safe.email}</a></td></tr>
          <tr><td style="padding:6px 0; color:#77777a;">Phone</td><td style="padding:6px 0;">${safe.number}</td></tr>
          ${safe.company ? `<tr><td style="padding:6px 0; color:#77777a;">Company</td><td style="padding:6px 0;">${safe.company}</td></tr>` : ''}
        </table>
        <hr style="border:0; border-top:1px solid #e5e5e2; margin:20px 0;" />
        <p style="margin:0 0 8px; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:#77777a;">Message</p>
        <p style="margin:0; font-size:15px; line-height:1.6; color:#222;">${safe.message}</p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: user,
      to: process.env.CONTACT_TO ?? user,
      replyTo: data.email,
      subject,
      text,
      html,
    })
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('sendForm: failed to send email', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
