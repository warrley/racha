"use client";

import React, { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '@/lib/api';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import toast from 'react-hot-toast';
import { Lock, Eye, EyeOff, Star } from 'lucide-react';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isSupabaseConfigured) {
                // Após clicar no link do e-mail, o Supabase já autentica uma
                // sessão de recuperação no navegador; basta atualizar a senha.
                const { error } = await supabase.auth.updateUser({ password });
                if (error) {
                    toast.error(error.message);
                    return;
                }
            } else {
                if (!token) {
                    toast.error('Token de redefinição não encontrado');
                    return;
                }
                const res = await api.post('/auth/reset-password', { token, password });
                if (res.data.error) {
                    toast.error(typeof res.data.error === 'string' ? res.data.error : 'Erro ao redefinir senha');
                    return;
                }
            }

            toast.success('Senha redefinida com sucesso! Faça login.');
            router.push('/');
        } catch (error: any) {
            toast.error(error.response?.data?.error || 'Erro ao redefinir senha');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4 font-sans text-white">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4 shadow-lg border-2 border-white/20">
                    <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">
                    Metanol<span className="text-gold"> FC</span>
                </h1>
            </div>

            <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden text-slate-900 p-8">
                <h2 className="text-xl font-bold mb-6">Criar nova senha</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Nova senha"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        icon={Lock}
                        endElement={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-slate-300 hover:text-slate-500 transition-colors focus:outline-none"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        }
                    />
                    <Button type="submit" fullWidth size="lg" isLoading={loading}>
                        Redefinir senha
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={null}>
            <ResetPasswordForm />
        </Suspense>
    );
}
