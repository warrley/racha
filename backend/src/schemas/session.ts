import z from "zod";

export const createSessionSchema = z.object({
    title: z.string().optional(),
    date: z.string({ message: "Data é obrigatória" })
});

export const drawTeamsSchema = z.object({
    playerIds: z.array(z.string()).length(15, "O sorteio exige exatamente 15 jogadores")
});
