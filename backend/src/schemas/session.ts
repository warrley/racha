import z from "zod";

export const createSessionSchema = z.object({
    title: z.string().optional(),
    date: z.string({ message: "Data é obrigatória" })
});

export const drawTeamsSchema = z.object({
    playerIds: z.array(z.string()).min(15).max(20)
        .refine(ids => ids.length === 15 || ids.length === 20, { message: "O sorteio exige 15 (3 times) ou 20 (4 times) jogadores" })
});
