import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Nodemailer transport configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amantrivedi598@gmail.com",
        pass: "yplr urfb zoei udpa", // Replace with your Gmail app password
      },
    });

    // Sending email
    await transporter.sendMail({
      from: email, // Sender email
      to: "amantrivedi598@gmail.com", // Your email
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
