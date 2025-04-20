// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Set up transporter with your Gmail account
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // e.g., jhdzanja@gmail.com
      pass: process.env.EMAIL_PASS, // App password, not your real Gmail password!
    },
  });
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`, // Always your email
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `Email: ${email}\n\n${message}`,
    replyTo: email, // This makes replies go to the user
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
