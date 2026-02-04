import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Site Softline" <${process.env.SMTP_USER}>`,
      to: 'comercial@softlineinfo.com.br',
      replyTo: email,
      subject: `[Contato Site] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Novo contato através do site</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Telefone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Empresa:</strong> ${company || 'Não informada'}</p>
            <p style="margin: 10px 0;"><strong>Assunto:</strong> ${subject}</p>
          </div>
          <br/>
          <div style="background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin-top: 0; color: #64748b; font-size: 14px;">Mensagem:</p>
            <p style="white-space: pre-wrap; color: #334155;">${message}</p>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 20px; text-align: center;">
            Este email foi enviado automaticamente pelo formulário de contato do site Softline.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}
