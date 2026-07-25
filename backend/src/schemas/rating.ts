import z from "zod";

export const submitRatingsSchema = z.object({
    ratings: z.array(z.object({
        evaluatedId: z.string({ message: "ID do jogador avaliado é obrigatório" }),
        score: z.number().int().min(1, "Nota mínima é 1").max(10, "Nota máxima é 10")
    })).min(1, "Envie ao menos uma avaliação")
});
