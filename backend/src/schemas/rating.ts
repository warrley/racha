import z from "zod";

export const submitRatingsSchema = z.object({
    ratings: z.array(z.object({
        evaluatedId: z.string({ message: "ID do jogador avaliado é obrigatório" }),
        score: z.number().int().min(-1, "Voto inválido").max(1, "Voto inválido")
    })).min(1, "Envie ao menos uma avaliação")
});
