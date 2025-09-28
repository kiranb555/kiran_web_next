import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a test account using ethereal.email for development
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'kiranb2040@gmail.com',
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h2>New Contact Form Submission from your portfolio website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    
    // For development, log the preview URL
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!',
      previewUrl: nodemailer.getTestMessageUrl(info) // Only for development
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
