import { RequestHandler } from "express";
import { signupSchema, signinSchema, forgotPasswordSchema, resetPasswordSchema } from "../schemas/auth";
import { findByEmail, save } from "../services/player";
import { createPasswordResetToken, resetPasswordWithToken } from "../services/auth";
import { sendPasswordResetEmail } from "../utils/mailer";
import bcrypt from "bcryptjs";
import { generatedToken } from "../utils/jwt";

export const signup: RequestHandler = async (req, res) => {
    const safeData = signupSchema.safeParse(req.body);
    if(!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const { email, name, password, nickname, position } = safeData.data;

    if(await findByEmail(email)) {
        res.json({ error: "E-mail já está em uso" });
        return;
    };

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await save({ 
        email, 
        name, 
        password: hashPassword,
        nickname: nickname || null,
        position: position || "MEIO"
    });

    const token = await generatedToken(user.id);

    res.status(201).json({ error: null, token, user: { id: user.id, name: user.name, email: user.email } });
};

export const signin: RequestHandler = async (req, res) => {
    const safeData = signinSchema.safeParse(req.body);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const { email, password } = safeData.data;

    const user = await findByEmail(email);
    if(!user || !user.password) {
        res.json({ error: "Acesso negado" });
        return;
    };

    if(!await bcrypt.compare(password, user.password)) {
        res.json({ error: "Acesso negado" });
        return;
    };

    const token = await generatedToken(user.id);

    res.json({ error: null, token, user: { id: user.id, name: user.name, email: user.email } });
};

export const forgotPassword: RequestHandler = async (req, res) => {
    const safeData = forgotPasswordSchema.safeParse(req.body);
    if(!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const token = await createPasswordResetToken(safeData.data.email);
    if (token) {
        const resetUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/reset-password?token=${token}`;
        await sendPasswordResetEmail(safeData.data.email, resetUrl);
    }

    // Sempre responde sucesso genérico, mesmo se o e-mail não existir, para
    // não permitir enumerar quais e-mails estão cadastrados.
    res.json({ error: null, message: "Se o e-mail existir, enviaremos um link de redefinição." });
};

export const resetPassword: RequestHandler = async (req, res) => {
    const safeData = resetPasswordSchema.safeParse(req.body);
    if(!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const ok = await resetPasswordWithToken(safeData.data.token, safeData.data.password);
    if (!ok) {
        res.status(400).json({ error: "Token inválido ou expirado" });
        return;
    };

    res.json({ error: null, message: "Senha redefinida com sucesso" });
};
