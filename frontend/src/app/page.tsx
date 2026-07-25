"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';
import { Mail, Lock, User, Eye, EyeOff, Star } from 'lucide-react';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Tabs } from '@/components/Tabs';
import { useAuth } from '@/contexts/AuthContext';

const LoginScreen = () => {
    const router = useRouter();
    const { refreshUser } = useAuth();
    const [activeTab, setActiveTab] = useState<'entrar' | 'criar'>('entrar');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [position, setPosition] = useState('MEIO');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (activeTab === 'entrar') {
                const { error } = await supabase.auth.signInWithPassword({ email, password });

                if (error) {
                    toast.error(error.message === 'Invalid login credentials' ? 'E-mail ou senha inválidos' : error.message);
                } else {
                    toast.success('Login realizado com sucesso!');
                    await refreshUser();
                    router.push('/home');
                }
            } else {
                // name/nickname/position vão no user_metadata: o backend lê isso
                // para criar o registro local em /players/me no primeiro acesso (RF02)
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: { data: { name, nickname, position } }
                });

                if (error) {
                    toast.error(error.message);
                } else {
                    toast.success('Conta criada com sucesso!');
                    await refreshUser();
                    router.push('/home');
                }
            }
        } catch (error: any) {
            toast.error(error.message || 'Erro na conexão com o servidor');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: { redirectTo: `${window.location.origin}/home` }
            });
            if (error) {
                toast.error(error.message);
                setGoogleLoading(false);
            }
            // em caso de sucesso, o navegador é redirecionado ao Google
        } catch (error: any) {
            toast.error(error.message || 'Erro ao conectar com o Google');
            setGoogleLoading(false);
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
                <p className="text-white/80 text-sm font-medium">Gestão profissional dos rachas do Metanol FC.</p>
            </div>

            <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden text-slate-900">

                <Tabs 
                    variant="underline"
                    activeId={activeTab}
                    onChange={(id) => setActiveTab(id as any)}
                    tabs={[
                        { id: 'entrar', label: 'Entrar' },
                        { id: 'criar', label: 'Criar Conta' }
                    ]}
                />

                <form onSubmit={handleSubmit} className="p-8 pb-10">
                    <div className="space-y-6">

                        {activeTab === 'criar' && (
                            <>
                                <Input
                                    label="Nome"
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Seu nome completo"
                                    icon={User}
                                />
                                <Input
                                    label="Apelido"
                                    value={nickname}
                                    onChange={e => setNickname(e.target.value)}
                                    placeholder="Como te chamam no racha?"
                                    icon={User}
                                />
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                                        Posição
                                    </label>
                                    <select
                                        value={position}
                                        onChange={e => setPosition(e.target.value)}
                                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none text-slate-700 font-bold"
                                    >
                                        <option value="ZAGUEIRO">Zagueiro</option>
                                        <option value="MEIO">Meio Campo</option>
                                        <option value="ATACANTE">Atacante</option>
                                    </select>
                                </div>
                            </>
                        )}

                        <Input
                            label="E-mail"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            icon={Mail}
                        />

                        <Input
                            label="Senha"
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

                        <Button
                            type="submit"
                            fullWidth
                            size="lg"
                            isLoading={loading}
                        >
                            {activeTab === 'entrar' ? 'Entrar' : 'Criar Conta'}
                        </Button>

                        <div className="flex items-center gap-3">
                            <div className="h-px bg-slate-200 flex-1" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ou</span>
                            <div className="h-px bg-slate-200 flex-1" />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            disabled={googleLoading}
                            className="w-full flex items-center justify-center gap-3 py-4 px-4 bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-50"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continuar com Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
