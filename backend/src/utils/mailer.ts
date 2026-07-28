import nodemailer from "nodemailer";

const isSmtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

const transporter = isSmtpConfigured
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })
    : null;

export const sendPasswordResetEmail = async (to: string, resetUrl: string) => {
    // Sem SMTP_HOST/USER/PASS configurados, apenas loga o link no console
    // para permitir testar o fluxo localmente sem um provedor de e-mail real.
    if (!transporter) {
        console.log(`[mailer] SMTP não configurado. Link de redefinição para ${to}: ${resetUrl}`);
        return;
    }

    await transporter.sendMail({
        from: process.env.MAIL_FROM || "Metanol FC <no-reply@metanolfc.com>",
        to,
        subject: "Redefinição de senha - Metanol FC",
        html: `
            <p>Você solicitou a redefinição de senha da sua conta no Metanol FC.</p>
            <p><a href="${resetUrl}">Clique aqui para criar uma nova senha</a></p>
            <p>Se você não solicitou isso, ignore este e-mail.</p>
        `
    });
};
