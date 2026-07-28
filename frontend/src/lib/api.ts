import axios from "axios";
import { parseCookies } from "nookies";
import { supabase, isSupabaseConfigured } from "./supabase";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:9876",
});

api.interceptors.request.use(async (config) => {
    // Prioriza a sessão do Supabase Auth (login social/e-mail); mantém o
    // cookie legado como fallback para contas ainda no fluxo de auth antigo.
    // Só consulta o Supabase se ele estiver configurado, senão getSession()
    // tenta resolver o domínio placeholder e atrasa toda requisição.
    const supabaseToken = isSupabaseConfigured ? (await supabase.auth.getSession()).data.session?.access_token : undefined;
    const token = supabaseToken || parseCookies()["metanol.token"];

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            import("nookies").then(({ destroyCookie }) => {
                destroyCookie(undefined, "metanol.token", { path: '/' });
            });
            if (typeof window !== "undefined" && window.location.pathname !== "/") {
                window.location.href = "/";
            }
        }
        return Promise.reject(error);
    }
);
