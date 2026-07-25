import jwt from "jsonwebtoken";

const SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET;

export type SupabaseTokenPayload = {
    sub: string;
    email?: string;
    user_metadata?: {
        name?: string;
        nickname?: string;
        position?: string;
        full_name?: string;
    };
};

/**
 * Verifica um JWT emitido pelo Supabase Auth usando o JWT secret do projeto
 * (Settings > API > JWT Settings no painel do Supabase), sem chamada de rede.
 */
export const verifySupabaseToken = (token: string): SupabaseTokenPayload | null => {
    if (!SUPABASE_JWT_SECRET) return null;

    try {
        return jwt.verify(token, SUPABASE_JWT_SECRET) as SupabaseTokenPayload;
    } catch {
        return null;
    }
};
