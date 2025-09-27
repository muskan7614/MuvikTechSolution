export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, budget, message, agree } = req.body;

  // Validation
  if (!name || !email || !service || !message || !agree) {
    return res.status(400).json({
      message: 'Missing required fields',
      errors: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        service: !service ? 'Service is required' : null,
        message: !message ? 'Message is required' : null,
        agree: !agree ? 'You must agree to be contacted' : null
      }
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Invalid email format',
      errors: { email: 'Please enter a valid email address' }
    });
  }

  try {
    // In a real application, you would:
    // 1. Send email using a service like SendGrid, Mailgun, or Nodemailer
    // 2. Save to database
    // 3. Send notifications
    
    // For now, we'll just log the data and return success
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      service,
      budget,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // You can integrate with email services here
    // Example with nodemailer:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'vinaychaudhary9899@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    });
    */

    return res.status(200).json({
      message: 'Thank you for your message! We will get back to you soon.',
      success: true
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'There was an error sending your message. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}