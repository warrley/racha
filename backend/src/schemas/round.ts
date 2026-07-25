import z from "zod";

const goalSchema = z.object({
    playerId: z.string({ message: "ID do jogador é obrigatório" }),
    minute: z.number().int().min(0).max(7).optional()
});

const substitutionSchema = z.object({
    teamId: z.string({ message: "ID do time é obrigatório" }),
    outPlayerId: z.string({ message: "ID do jogador substituído é obrigatório" }),
    inPlayerId: z.string({ message: "ID do jogador substituto é obrigatório" })
});

export const registerRoundSchema = z.object({
    homeTeamId: z.string({ message: "ID do time da casa é obrigatório" }),
    awayTeamId: z.string({ message: "ID do time visitante é obrigatório" }),
    homeScore: z.number().int().min(0, "Placar não pode ser negativo"),
    awayScore: z.number().int().min(0, "Placar não pode ser negativo"),
    winnerTeamId: z.string({ message: "ID do time vencedor é obrigatório" }).nullable().optional(),
    isDraw: z.boolean().default(false),
    goals: z.array(goalSchema).default([]),
    substitutions: z.array(substitutionSchema).default([])
});
