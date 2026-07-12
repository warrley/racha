import z from "zod";

export const createSessionSchema = z.object({
    title: z.string().optional(),
    date: z.string({ message: "Data é obrigatória" }),
    maxPlayers: z.number().int().min(2).max(100).optional().default(15)
});

export const drawTeamsSchema = z.object({
    playerIds: z.array(z.string()).optional()
});
