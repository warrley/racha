"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { CalendarDays, Shuffle, Flame, Trophy, TrendingUp, Play } from 'lucide-react';
import { Header } from '@/components/Header';
import { UserAvatar } from '@/components/UserAvatar';
import { Button } from '@/components/Button';
import { SessionCard } from '@/components/SessionCard';
import { useAuth } from '@/contexts/AuthContext';

import { Player, Session } from '@/types';

import { globalCache } from '@/lib/cache';

export default function HomeScreen() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    
    const [stats, setStats] = useState<Player | null>(globalCache.homeData?.stats || null);
    const [rank, setRank] = useState<number | null>(globalCache.homeData?.rank || null);
    const [targetPlayer, setTargetPlayer] = useState<Player | null>(globalCache.homeData?.targetPlayer || null);
    const [nextSession, setNextSession] = useState<Session | null>(globalCache.homeData?.nextSession || null);
    const [lastSession, setLastSession] = useState<Session | null>(globalCache.homeData?.lastSession || null);
    const [loading, setLoading] = useState(!globalCache.homeData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user) return;
                const userId = user.id;

                if (!globalCache.homeData) {
                    setLoading(true);
                }

                const playerRes = await api.get(`/players/${userId}`);
                const statsData = playerRes.data.player;

                const rankingRes = await api.get(`/ranking?limit=100`);
                const rankingList = rankingRes.data.ranking;
                const positionIndex = rankingList.findIndex((p: Player) => p.id === userId);
                const rankData = positionIndex >= 0 ? positionIndex + 1 : null;

                let targetPlayerData = null;
                if (positionIndex > 0) {
                    targetPlayerData = rankingList[positionIndex - 1];
                }

                const sessionRes = await api.get(`/sessions`);
                const allSessions = sessionRes.data.sessions;

                let nextSessionData = null;
                const activeSessions = allSessions.filter((s: Session) => s.status !== 'FINISHED');
                if (activeSessions.length > 0) {
                    nextSessionData = activeSessions[0];
                }

                let lastSessionData = null;
                const finishedSessions = allSessions.filter((s: Session) => s.status === 'FINISHED');
                if (finishedSessions.length > 0) {
                    lastSessionData = finishedSessions[0];
                }

                const homeData = {
                    stats: statsData,
                    rank: rankData,
                    targetPlayer: targetPlayerData,
                    nextSession: nextSessionData,
                    lastSession: lastSessionData
                };

                setStats(homeData.stats);
                setRank(homeData.rank);
                setTargetPlayer(homeData.targetPlayer);
                setNextSession(homeData.nextSession);
                setLastSession(homeData.lastSession);
                globalCache.homeData = homeData;

            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchData();
        }
    }, [user, authLoading]);

    if (loading || authLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-primary font-bold">
                Carregando...
            </div>
        );
    }

    const isOnFire = stats?.badges?.some(b => b.type === 'ON_FIRE');

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-32">
            <Header 
                leftElement={<UserAvatar nickname={user?.nickname} />}
                rightElement={
                    <div className="bg-slate-100 px-4 py-2 rounded-full flex items-center gap-2 shadow-inner">
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Pontos</span>
                            <span className="text-sm font-black text-slate-700">{user?.rating || 0}</span>
                        </div>
                        {isOnFire && <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />}
                    </div>
                }
            />

            <main className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Olá, {user?.nickname}!</h2>
                    <p className="text-slate-500 font-medium mt-1">Pronto para mais uma vitória?</p>
                </section>

                {rank && targetPlayer ? (
                    <section className="bg-linear-to-br from-primary to-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-primary/30 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3 opacity-80">
                                <TrendingUp size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">Radar do Ranking</span>
                            </div>
                            <h3 className="text-xl font-black leading-tight mb-3">
                                Faltam {targetPlayer.rating - (user?.rating || 0)} pontos para você ultrapassar o {targetPlayer.nickname || targetPlayer.name}!
                            </h3>
                            <p className="text-sm font-medium opacity-80">
                                Você está em {rank}º lugar. Continue vencendo para subir!
                            </p>
                        </div>
                    </section>
                ) : rank === 1 ? (
                    <section className="bg-linear-to-br from-gold to-amber-500 rounded-3xl p-6 text-white shadow-lg shadow-gold/30 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3 opacity-80">
                                <Trophy size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">O Topo é Seu</span>
                            </div>
                            <h3 className="text-xl font-black leading-tight mb-3">
                                Você é o atual Campeão do Ranking!
                            </h3>
                            <p className="text-sm font-medium opacity-80">
                                Defenda o seu 1º lugar com unhas e dentes.
                            </p>
                        </div>
                    </section>
                ) : null}

                <section className="space-y-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Agenda</h3>
                    <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-slate-50 rounded-full group-hover:scale-110 transition-transform duration-500" />

                        <div className="relative z-10">
                            {nextSession ? (
                                <>
                                    <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest text-white z-20 -mr-6 -mt-6 ${nextSession.status === 'OPEN' ? 'bg-amber-400' : 'bg-primary'}`}>
                                        {nextSession.status === 'OPEN' ? 'Aberto' : 'Rodando'}
                                    </div>
                                    <div className="flex justify-between items-start mb-6 pt-2">
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-800 tracking-tight mb-4">
                                                {nextSession.title || 'Próximo Racha'}
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3 text-slate-500">
                                                    <CalendarDays className="w-5 h-5 opacity-60" />
                                                    <span className="text-sm font-bold">
                                                        {new Date(nextSession.date).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {user?.isAdmin && nextSession.status === 'OPEN' && (
                                        <Button
                                            onClick={() => router.push(`/sessions/${nextSession.id}`)}
                                            fullWidth
                                            icon={Shuffle}
                                        >
                                            Sortear
                                        </Button>
                                    )}
                                    {nextSession.status === 'IN_PROGRESS' && (
                                        <Button
                                            onClick={() => router.push(`/sessions/${nextSession.id}`)}
                                            fullWidth
                                            icon={Play}
                                            className="bg-gold hover:bg-amber-500 shadow-gold/30"
                                        >
                                            Ver Racha
                                        </Button>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-6">
                                    <h4 className="text-xl font-black text-slate-800 tracking-tight mb-2">Nenhum racha marcado</h4>
                                    <p className="text-slate-500 text-sm mb-6">Fique de olho na agenda ou crie um agora.</p>
                                    {user?.isAdmin && (
                                        <Button
                                            onClick={() => router.push(`/sessions`)}
                                            icon={CalendarDays}
                                        >
                                            Novo Racha
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {lastSession && (
                    <section className="space-y-4">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Último Racha</h3>
                        <SessionCard 
                            session={lastSession} 
                            onClick={() => router.push(`/sessions/${lastSession.id}`)} 
                            isFinished 
                        />
                    </section>
                )}
            </main>
        </div>
    );
}
