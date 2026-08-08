import z from "zod";

export const createSessionSchema = z.object({
    title: z.string().optional(),
    date: z.string({ message: "Data é obrigatória" }),
    maxPlayers: z.number().int().min(2).max(100).optional().default(15),
    pixKey: z.string().max(140).optional(),
    price: z.number().min(0, "O valor não pode ser negativo").optional()
});

export const updateSessionSchema = z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    maxPlayers: z.number().int().min(2).max(100).optional()
});

export const addGuestSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres")
});

export const drawTeamsSchema = z.object({
    playerIds: z.array(z.string()).optional()
});

export const updatePaymentInfoSchema = z.object({
    pixKey: z.string().max(140, "Chave Pix inválida").nullable().optional(),
    price: z.number().min(0, "O valor não pode ser negativo").nullable().optional()
});
