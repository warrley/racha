"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { api } from '@/lib/api';
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
                const res = await api.post('/auth/signin', { email, password });

                if (res.data.error) {
                    toast.error(res.data.error);
                } else {
                    toast.success('Login realizado com sucesso!');
                    setCookie(undefined, 'metanol.token', res.data.token, { maxAge: 60 * 60 * 24 * 7, path: '/' });
                    await refreshUser();
                    router.push('/home');
                }
            } else {
                const res = await api.post('/auth/signup', {
                    name, email, password, nickname, position
                });

                if (res.data.error) {
                    if (typeof res.data.error === 'string') {
                        toast.error(res.data.error);
                    } else {
                        const firstError = Object.values(res.data.error)[0] as string[];
                        toast.error(firstError[0] || 'Erro ao criar conta');
                    }
                } else {
                    toast.success('Conta criada com sucesso!');
                    setCookie(undefined, 'metanol.token', res.data.token, { maxAge: 60 * 60 * 24 * 7, path: '/' });
                    await refreshUser();
                    router.push('/home');
                }
            }
        } catch (error: any) {
            toast.error(error.response?.data?.error || 'Erro na conexão com o servidor');
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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
