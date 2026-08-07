import z from "zod";

export const updatePlayerSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    nickname: z.string().optional(),
    email: z.string().email("E-mail inválido").optional(),
    password: z.string().min(4, "Senha deve ter pelo menos 4 caracteres").optional(),
    position: z.enum(["ZAGUEIRO", "MEIO", "ATACANTE"]).optional(),
    avatarIndex: z.number().int().min(0).max(5).optional(),
    pixKey: z.string().max(140, "Chave Pix inválida").nullable().optional()
});
