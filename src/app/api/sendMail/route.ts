import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
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
    
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send message. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}