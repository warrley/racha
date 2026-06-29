import z from "zod";

export const signupSchema = z.object({
    name: z.string({ message: "Nome é obrigatório" }).min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.email({ message: "E-mail inválido" }),
    password: z.string({ message: "Senha é obrigatória" }).min(4, "Senha deve ter pelo menos 4 caracteres"),
    nickname: z.string().optional(),
    position: z.enum(["ZAGUEIRO", "MEIO", "ATACANTE"]).optional()
});

export const signinSchema = z.object({
    email: z.email({ message: "E-mail inválido" }),
    password: z.string({ message: "Senha é obrigatória" })
});
