'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { jwtDecode } from 'jwt-decode';
import { api } from '@/lib/api';
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
            const { "metanol.token": token } = parseCookies();
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            const decoded = jwtDecode(token) as { userId: string };
            const res = await api.get(`/players/${decoded.userId}`);
            
            if (res.data && res.data.player) {
                setUser(res.data.player);
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
    }, []);

    const logout = () => {
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
