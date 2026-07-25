'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { destroyCookie, parseCookies } from 'nookies';
import { api } from '@/lib/api';
import { supabase } from '@/lib/supabase';
import { Player } from '@/types';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: Player | null;
    loading: boolean;
    isAdmin: boolean;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    isAdmin: false,
    logout: () => {},
    refreshUser: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Player | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchUser = async () => {
        try {
            // Sessão do Supabase Auth (login social/e-mail) ou cookie legado
            // (fluxo de auth antigo): o backend resolve qual token é válido em
            // /players/me e sincroniza o registro local automaticamente (RF02).
            const { data } = await supabase.auth.getSession();
            const hasLegacyToken = !!parseCookies()['metanol.token'];

            if (!data.session && !hasLegacyToken) {
                setUser(null);
                setLoading(false);
                return;
            }

            const res = await api.get('/players/me');
            if (res.data && res.data.player) {
                setUser(res.data.player);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error(error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();

        const { data: subscription } = supabase.auth.onAuthStateChange(() => {
            fetchUser();
        });

        return () => subscription.subscription.unsubscribe();
    }, []);

    const logout = () => {
        supabase.auth.signOut();
        destroyCookie(undefined, 'metanol.token', { path: '/' });
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            isAdmin: user?.isAdmin || false,
            logout,
            refreshUser: fetchUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
