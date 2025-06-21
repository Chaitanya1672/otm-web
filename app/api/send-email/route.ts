import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: 'All fields are required.' }),
      { status: 400 },
    )
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email details
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Replace with the recipient email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
    })
  }
}
