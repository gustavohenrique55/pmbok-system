import nodemailer, { Transporter } from 'nodemailer';
import { config } from '../../config/index.js';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.port === 465,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
    });
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    await this.transporter.sendMail({
      from: config.smtp.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
  }

  async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
    const resetUrl = `${config.cors.origin}/reset-password?token=${resetToken}`;

    await this.sendEmail({
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h1>Password Reset</h1>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
      `,
    });
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    await this.sendEmail({
      to: email,
      subject: 'Welcome to Financial API',
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Thank you for registering with Financial API.</p>
        <p>Start managing your finances today!</p>
      `,
    });
  }

  async sendBillReminderEmail(
    email: string,
    description: string,
    amount: number,
    dueDate: Date
  ): Promise<void> {
    await this.sendEmail({
      to: email,
      subject: `Bill Reminder: ${description}`,
      html: `
        <h1>Bill Due Reminder</h1>
        <p>You have a bill due soon:</p>
        <ul>
          <li><strong>Description:</strong> ${description}</li>
          <li><strong>Amount:</strong> R$ ${amount.toFixed(2)}</li>
          <li><strong>Due Date:</strong> ${dueDate.toLocaleDateString('pt-BR')}</li>
        </ul>
      `,
    });
  }
}
