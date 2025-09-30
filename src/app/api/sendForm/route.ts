// app/api/send-email/route.ts

export const runtime = "nodejs"; // Ensure Node.js runtime for using Nodemailer

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Parse the request body and extract required fields
    const { email, message, name, number } = await req.json();
    if (!email || !message || !name || !number) {
      return NextResponse.json(
        { error: "Email, message, name, and number are required" },
        { status: 400 }
      );
    }

    // Configure transporter with Gmail SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // secure: true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the professional email content with styling
    const mailOptions = {
      from: "Website Contact Form",
      to: process.env.SMTP_USER, // Destination email
      subject: "New Contact Form Submission",
      text: `New Contact Form Submission

Sender Details:
Name: ${name}
Email: ${email}
Phone Number: ${number}

Message:
${message}

Best regards,
Pirmada`,
      html: `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border: 1px solid #e0e0e0;">
          <h2 style="color: #222;">New Inquiry</h2>
          <p>Hello,</p>
          <p>You have received a new message from the <strong>Pirmada</strong> website contact form.</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <h3 style="color: #222;">Sender Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px;">${number}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <h3 style="color: #222;">Message</h3>
          <p style="padding: 10px; background: #f0f0f0; border-radius: 4px;">
            ${message.replace(/\n/g, "<br/>")}
          </p>
          <p style="margin-top: 20px;">Best regards,<br/>Pirmada Website</p>
        </div>
      </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
