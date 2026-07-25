import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { verifySupabaseToken } from "../utils/supabase";
import { syncSupabaseUser } from "../services/player";

export interface AuthRequest extends Request {
    userId?: string;
};

type payloadType = {
    iat: number;
    exp: number;
    userId: string;
}

export const privateRoute = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token =  req.headers.authorization?.split("Bearer ")[1];
    if(!token) {
        res.status(401).json({ error: "Token not provided" });
        return;
    };

    // Tokens emitidos pelo Supabase Auth (login social/e-mail) são sincronizados
    // automaticamente com a tabela local `users` (req 2.1/RF02) a cada requisição.
    const supabasePayload = verifySupabaseToken(token);
    if(supabasePayload) {
        if(!supabasePayload.email) {
            res.status(401).json({ error: "Access denied" });
            return;
        }

        const localUser = await syncSupabaseUser({
            supabaseId: supabasePayload.sub,
            email: supabasePayload.email,
            name: supabasePayload.user_metadata?.name || supabasePayload.user_metadata?.full_name,
            nickname: supabasePayload.user_metadata?.nickname,
            position: supabasePayload.user_metadata?.position
        });

        req.userId = localUser.id;
        next();
        return;
    }

    // Fallback: tokens emitidos pelo fluxo de autenticação local (legado, JWT próprio)
    const result = await verifyToken(token);
    if(!result.valid) {
        res.status(401).json({ error: "Access denied" });
        return;
    }

    req.userId = (result.payload as payloadType).userId;
    next();
};
