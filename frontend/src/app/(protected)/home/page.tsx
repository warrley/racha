"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { CalendarDays, Shuffle, Flame, Trophy, TrendingUp, TrendingDown, Minus, Play, Goal as GoalIcon, Medal, LucideIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import { UserAvatar } from '@/components/UserAvatar';
import { Button } from '@/components/Button';
import { SessionCard } from '@/components/SessionCard';
import { useAuth } from '@/contexts/AuthContext';

import { Player, Session } from '@/types';

import { globalCache } from '@/lib/cache';

type Highlight = {
    id: string;
    icon: LucideIcon;
    gradient: string;
    title: string;
    subtitle: string;
};

const buildHighlights = (stats: Player | null, lastSession: Session | null, userId?: string): Highlight[] => {
    if (!stats || !userId) return [];

    const highlights: Highlight[] = [];

    // Gols e nota do último racha, quando já consolidado
    if (lastSession) {
        const goalsInLastSession = (lastSession.rounds || [])
            .flatMap(r => r.goals || [])
            .filter(g => g.playerId === userId).length;

        const myParticipant = lastSession.participants?.find(p => p.userId === userId);
        const sessionGrade = myParticipant?.sessionGrade;

        if (goalsInLastSession >= 3) {
            highlights.push({
                id: 'hattrick',
                icon: GoalIcon,
                gradient: 'from-amber-500 to-orange-600',
                title: `Hat-trick! ${goalsInLastSession} gols no último racha 🎩`,
                subtitle: 'Atuação de artilheiro — poucos fazem isso.'
            });
        } else if (goalsInLastSession > 0) {
            highlights.push({
                id: 'goals-last',
                icon: GoalIcon,
                gradient: 'from-emerald-500 to-teal-600',
                title: `Você balançou as redes ${goalsInLastSession}x no último racha`,
                subtitle: 'Continue com esse faro de gol.'
            });
        }

        if (sessionGrade !== null && sessionGrade !== undefined) {
            if (sessionGrade > 0.15) {
                highlights.push({
                    id: 'grade-up',
                    icon: TrendingUp,
                    gradient: 'from-green-500 to-emerald-600',
                    title: 'Sua nota subiu no último racha! 📈',
                    subtitle: 'O grupo notou sua evolução em campo.'
                });
            } else if (sessionGrade < -0.15) {
                highlights.push({
                    id: 'grade-down',
                    icon: TrendingDown,
                    gradient: 'from-slate-600 to-slate-800',
                    title: 'Sua nota caiu um pouco no último racha',
                    subtitle: 'Toda fase passa — bora virar no próximo jogo. 💪'
                });
            } else {
                highlights.push({
                    id: 'grade-stable',
                    icon: Minus,
                    gradient: 'from-sky-500 to-blue-600',
                    title: 'Nota estável no último racha',
                    subtitle: 'Consistência também é uma virtude. ⚖️'
                });
            }
        }
    }

    // Aproveitamento da temporada
    const totalRounds = stats.totalWins !== undefined && stats.totalLosses !== undefined
        ? (stats.totalWins || 0) + (stats.totalLosses || 0)
        : 0;
    const winRate = typeof stats.winRate === 'string' ? parseFloat(stats.winRate) : (stats.winRate ?? 0);
    if (totalRounds >= 3) {
        if (winRate >= 70) {
            highlights.push({
                id: 'winrate-high',
                icon: Trophy,
                gradient: 'from-gold to-amber-500',
                title: `Aproveitamento de ${winRate.toFixed(0)}%! 🔥`,
                subtitle: 'Poucos jogadores ganham tanto quanto você.'
            });
        } else if (winRate <= 30) {
            highlights.push({
                id: 'winrate-low',
                icon: TrendingUp,
                gradient: 'from-indigo-500 to-purple-600',
                title: `Fase de altos e baixos: ${winRate.toFixed(0)}% de vitórias`,
                subtitle: 'A virada está mais perto do que parece. 😅'
            });
        }
    }

    // Conquistas acumuladas
    const mvpCount = stats.badges?.filter(b => b.type === 'MVP').length || 0;
    const artilheiroCount = stats.badges?.filter(b => b.type === 'ARTILHEIRO').length || 0;
    if (mvpCount > 0) {
        highlights.push({
            id: 'mvp-count',
            icon: Medal,
            gradient: 'from-violet-500 to-purple-600',
            title: `Você já foi MVP ${mvpCount}x`,
            subtitle: 'Uma coleção e tanto de troféus guardados.'
        });
    } else if (artilheiroCount > 0) {
        highlights.push({
            id: 'artilheiro-count',
            icon: Medal,
            gradient: 'from-violet-500 to-purple-600',
            title: `Você já foi Artilheiro ${artilheiroCount}x`,
            subtitle: 'A camisa 9 é sua por direito.'
        });
    }

    // Marco de rachas jogados (a cada 5)
    const totalSessions = stats.totalSessions || 0;
    if (totalSessions > 0 && totalSessions % 5 === 0) {
        highlights.push({
            id: 'sessions-milestone',
            icon: CalendarDays,
            gradient: 'from-rose-500 to-pink-600',
            title: `${totalSessions} rachas jogados! 🎉`,
            subtitle: 'Presença é a base de todo grande jogador.'
        });
    }

    // Total de gols na temporada (fallback sempre disponível se já marcou algum)
    if ((stats.totalGoals || 0) > 0) {
        highlights.push({
            id: 'total-goals',
            icon: GoalIcon,
            gradient: 'from-cyan-500 to-blue-600',
            title: `${stats.totalGoals} gols na temporada`,
            subtitle: 'Bora aumentar esse número no próximo racha?'
        });
    }

    // Veterano: já jogou bastante mas ainda não caiu em nenhuma outra categoria
    if (totalSessions >= 3 && highlights.length === 0) {
        highlights.push({
            id: 'veteran',
            icon: Flame,
            gradient: 'from-orange-500 to-red-600',
            title: `${totalSessions} rachas no currículo`,
            subtitle: 'Presença constante — a rotina te fortalece.'
        });
    }

    // Novato: nenhum dado ainda
    if (highlights.length === 0) {
        highlights.push({
            id: 'newcomer',
            icon: Flame,
            gradient: 'from-primary to-blue-600',
            title: 'Jogue seu primeiro racha!',
            subtitle: 'Seu histórico e estatísticas começam a partir daí.'
        });
    }

    return highlights;
};

export default function HomeScreen() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    
    const [stats, setStats] = useState<Player | null>(globalCache.homeData?.stats || null);
    const [rank, setRank] = useState<number | null>(globalCache.homeData?.rank || null);
    const [targetPlayer, setTargetPlayer] = useState<Player | null>(globalCache.homeData?.targetPlayer || null);
    const [nextSession, setNextSession] = useState<Session | null>(globalCache.homeData?.nextSession || null);
    const [lastSession, setLastSession] = useState<Session | null>(globalCache.homeData?.lastSession || null);
    const [lastSessionDetail, setLastSessionDetail] = useState<Session | null>(globalCache.homeData?.lastSessionDetail || null);
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

                let lastSessionDetailData = null;
                if (lastSessionData) {
                    try {
                        const detailRes = await api.get(`/sessions/${lastSessionData.id}`);
                        lastSessionDetailData = detailRes.data.session;
                    } catch { /* segue sem os destaques do último racha */ }
                }

                const homeData = {
                    stats: statsData,
                    rank: rankData,
                    targetPlayer: targetPlayerData,
                    nextSession: nextSessionData,
                    lastSession: lastSessionData,
                    lastSessionDetail: lastSessionDetailData
                };

                setStats(homeData.stats);
                setRank(homeData.rank);
                setTargetPlayer(homeData.targetPlayer);
                setNextSession(homeData.nextSession);
                setLastSession(homeData.lastSession);
                setLastSessionDetail(homeData.lastSessionDetail);
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
    const highlights = buildHighlights(stats, lastSessionDetail, user?.id).slice(0, 4);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-32">
            <Header 
                leftElement={<UserAvatar nickname={user?.nickname} />}
                rightElement={
                    <div className="bg-slate-100 px-4 py-2 rounded-full flex items-center gap-2 shadow-inner">
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Nota</span>
                            <span className="text-sm font-black text-slate-700">{user?.averageGrade?.toFixed(1) ?? '-'}</span>
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
                                {targetPlayer.averageGrade && user?.averageGrade
                                    ? `Falta ${(targetPlayer.averageGrade - user.averageGrade).toFixed(1)} de nota para ultrapassar o ${targetPlayer.nickname || targetPlayer.name}!`
                                    : `Supere o ${targetPlayer.nickname || targetPlayer.name} no ranking!`
                                }
                            </h3>
                            <p className="text-sm font-medium opacity-80">
                                Você está em {rank}º lugar. Continue jogando bem para subir!
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

                {highlights.length > 0 && (
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Destaques</h3>
                            {highlights.length > 1 && (
                                <span className="text-[10px] font-bold text-slate-300">Arraste para ver mais →</span>
                            )}
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory">
                            {highlights.map(h => {
                                const Icon = h.icon;
                                return (
                                    <div
                                        key={h.id}
                                        className={`bg-linear-to-br ${h.gradient} rounded-3xl p-5 text-white shadow-lg relative overflow-hidden flex items-center gap-4 w-[80%] max-w-xs shrink-0 snap-start`}
                                    >
                                        <div className="absolute -right-8 -top-8 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
                                        <div className="relative z-10 bg-white/15 rounded-2xl p-3 shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="font-black text-base leading-tight">{h.title}</h4>
                                            <p className="text-xs font-medium opacity-80 mt-1">{h.subtitle}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

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
