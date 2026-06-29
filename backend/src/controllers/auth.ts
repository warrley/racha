import { RequestHandler } from "express";
import { signupSchema, signinSchema } from "../schemas/auth";
import { findByEmail, save } from "../services/player";
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
    if(!user) {
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
