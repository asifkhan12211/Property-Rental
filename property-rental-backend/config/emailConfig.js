import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD.replace(/\s+/g, '') // Remove spaces from app password
    }
  });

  return transporter;
};

// Email templates
const emailTemplates = {
  forgotPassword: (otp) => ({
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}\nThis OTP will expire in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; text-align: center;">Password Reset Request</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
          <p style="font-size: 16px;">Your OTP for password reset is:</p>
          <h2 style="text-align: center; color: #1f2937; font-size: 32px; letter-spacing: 4px;">${otp}</h2>
          <p style="color: #4b5563;">This OTP will expire in 10 minutes.</p>
          <p style="color: #dc2626; font-size: 14px;">If you didn't request this, please ignore this email.</p>
        </div>
      </div>
    `
  })
};

// Send email helper function
const sendEmail = async (to, template, data) => {
  try {
    const transporter = createTransporter();
    const emailTemplate = emailTemplates[template](data);

    const mailOptions = {
      from: `"Property Rental" <${process.env.EMAIL_USER}>`,
      to,
      subject: emailTemplate.subject,
      text: emailTemplate.text,
      html: emailTemplate.html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

export { sendEmail };
