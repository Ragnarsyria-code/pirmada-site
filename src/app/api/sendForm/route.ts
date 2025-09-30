// app/api/send-email/route.ts

export const runtime = "nodejs"; // Ensure Node.js runtime for using Nodemailer

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message, name, number } = await req.json();
    if (!email || !message || !name || !number) {
      return NextResponse.json(
        { error: "Email, message, name, and number are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // لازم يكون هو نفسه بريدك
      to: process.env.SMTP_USER,   // يوصلك على نفس البريد
      subject: "New Contact Form Submission",
      text: `New Contact Form Submission

Sender Details:
Name: ${name}
Email: ${email}
Phone Number: ${number}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border: 1px solid #e0e0e0;">
            <h2 style="color: #222;">New Inquiry</h2>
            <p>You have received a new message from the <strong>Pirmada</strong> website contact form.</p>
            <h3>Sender Details</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone Number:</strong> ${number}</li>
            </ul>
            <h3>Message</h3>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
