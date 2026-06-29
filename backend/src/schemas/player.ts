import z from "zod";

export const updatePlayerSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    nickname: z.string().optional(),
    position: z.enum(["ZAGUEIRO", "MEIO", "ATACANTE"]).optional(),
    avatarIndex: z.number().int().min(0).max(5).optional()
});
