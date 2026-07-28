import crypto from "crypto";
import bcrypt from "bcryptjs";
import { prisma } from "../utils/prisma";

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hora

export const createPasswordResetToken = async (email: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return null; // caller ainda responde sucesso genérico (evita enumeração de e-mails)

    const token = crypto.randomBytes(32).toString("hex");
    await prisma.user.update({
        where: { id: user.id },
        data: { resetToken: token, resetTokenExpiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS) }
    });

    return token;
};

export const resetPasswordWithToken = async (token: string, newPassword: string) => {
    const user = await prisma.user.findUnique({ where: { resetToken: token } });
    if (!user || !user.resetTokenExpiresAt || user.resetTokenExpiresAt < new Date()) {
        return false;
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
        where: { id: user.id },
        data: { password: hashPassword, resetToken: null, resetTokenExpiresAt: null }
    });

    return true;
};
