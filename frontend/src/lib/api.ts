import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:9876",
});

api.interceptors.request.use((config) => {
    const { "metanol.token": token } = parseCookies();

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
