import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", 
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.USER_EMAIL, 
        pass: process.env.USER_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: email, 
      to: "support@novarkvethealth.be", 
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}

