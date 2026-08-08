"use client";

import { useState, useEffect, useRef } from 'react';
import { api } from '@/lib/api';
import { useRouter, useParams } from 'next/navigation';
import { Plus, Minus, Goal, Save, Play, Pause, RotateCcw, Repeat, X } from 'lucide-react';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { Session, Team, TeamPlayer, Player } from '@/types';
import { Header } from '@/components/Header';
import { getHexColor } from '@/lib/colors';

export default function MatchScreen() {
    const router = useRouter();
    const params = useParams();
    const sessionId = params.id as string;

    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    const [homeTeamId, setHomeTeamId] = useState('');
    const [awayTeamId, setAwayTeamId] = useState('');

    const [homeGoals, setHomeGoals] = useState<string[]>([]);
    const [awayGoals, setAwayGoals] = useState<string[]>([]);

    type Substitution = { teamId: string; outPlayerId: string; inPlayerId: string };
    const [substitutions, setSubstitutions] = useState<Substitution[]>([]);
    const [substitutingOut, setSubstitutingOut] = useState<{ teamId: string; player: Player } | null>(null);

    const [timeLeft, setTimeLeft] = useState(7 * 60 * 1000);
    const [timerActive, setTimerActive] = useState(false);
    const [endTime, setEndTime] = useState<number | null>(null);

    // Cronômetro flutuante (req 2.7): aparece quando o cronômetro principal sai da viewport
    const mainTimerRef = useRef<HTMLDivElement>(null);
    const [showFloatingTimer, setShowFloatingTimer] = useState(false);

    useEffect(() => {
        const target = mainTimerRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => setShowFloatingTimer(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(target);
        return () => observer.disconnect();
    }, [session]);

    // Carregar do localStorage ao iniciar
    useEffect(() => {
        if (!sessionId) return;
        const saved = localStorage.getItem(`timer_${sessionId}`);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.timerActive && parsed.endTime) {
                    const now = Date.now();
                    if (now >= parsed.endTime) {
                        setTimeLeft(0);
                        setTimerActive(false);
                        setEndTime(null);
                    } else {
                        setTimeLeft(parsed.endTime - now);
                        setEndTime(parsed.endTime);
                        setTimerActive(true);
                    }
                } else {
                    setTimeLeft(parsed.timeLeft);
                    setTimerActive(false);
                    setEndTime(null);
                }
            } catch (e) {
                console.error("Erro ao ler timer do localStorage", e);
            }
        }
    }, [sessionId]);

    // Salvar no localStorage sempre que mudar
    useEffect(() => {
        if (!sessionId) return;
        if (timeLeft !== 7 * 60 * 1000 || timerActive) {
            localStorage.setItem(`timer_${sessionId}`, JSON.stringify({
                timeLeft,
                endTime,
                timerActive
            }));
        }
    }, [timeLeft, endTime, timerActive, sessionId]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timerActive && endTime) {
            interval = setInterval(() => {
                const now = Date.now();
                const remaining = endTime - now;

                if (remaining <= 0) {
                    setTimeLeft(0);
                    setTimerActive(false);
                    setEndTime(null);
                    clearInterval(interval);

                    // Vibra o celular (se suportado pelo navegador/OS)
                    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
                        navigator.vibrate([500, 200, 500, 200, 1000]);
                    }
                } else {
                    setTimeLeft(remaining);
                }
            }, 100); // 100ms para atualizar rápido quando voltar pro app
        }
        return () => clearInterval(interval);
    }, [timerActive, endTime]);

    const toggleTimer = () => {
        if (timerActive) {
            // Pausar
            setTimerActive(false);
            setEndTime(null);
        } else {
            // Iniciar/Retomar
            setTimerActive(true);
            setEndTime(Date.now() + timeLeft);
        }
    };

    const resetTimer = () => {
        setTimerActive(false);
        setEndTime(null);
        setTimeLeft(7 * 60 * 1000);
        if (sessionId) {
            localStorage.removeItem(`timer_${sessionId}`);
        }
    };

    const formatTime = (ms: number) => {
        const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
        const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const res = await api.get(`/sessions/${sessionId}`);
                setSession(res.data.session);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (sessionId) fetchSession();
    }, [sessionId]);

    if (loading || !session) {
        return (
            <div className="flex items-center justify-center min-h-screen text-primary font-bold">
                Carregando Partida...
            </div>
        );
    }

    const teams = session.teams || [];

    const homeTeam = teams.find((t: Team) => t.id === homeTeamId);
    const awayTeam = teams.find((t: Team) => t.id === awayTeamId);

    // Times que folgam nesta rodada emprestam jogadores para substituições temporárias (req 2.6)
    const restingPlayers: Player[] = teams
        .filter((t: Team) => t.id !== homeTeamId && t.id !== awayTeamId)
        .flatMap((t: Team) => (t.players || []).map((tp: TeamPlayer) => tp.player))
        .filter((p: Player) => !substitutions.some(s => s.inPlayerId === p.id));

    type EffectiveEntry = { originalPlayerId: string; displayPlayer: Player; isSub: boolean; originalName?: string };

    const getEffectiveEntries = (team: Team | undefined): EffectiveEntry[] => {
        if (!team) return [];
        const subsForTeam = substitutions.filter(s => s.teamId === team.id);
        return (team.players || []).map((tp: TeamPlayer) => {
            const sub = subsForTeam.find(s => s.outPlayerId === tp.playerId);
            if (!sub) return { originalPlayerId: tp.playerId, displayPlayer: tp.player, isSub: false };

            const allTeamPlayers = teams.flatMap((t: Team) => (t.players || []).map((p: TeamPlayer) => p.player));
            const inPlayer = allTeamPlayers.find((p: Player) => p.id === sub.inPlayerId);
            return {
                originalPlayerId: tp.playerId,
                displayPlayer: inPlayer || tp.player,
                isSub: !!inPlayer,
                originalName: tp.player.nickname || tp.player.name
            };
        });
    };

    const addSubstitution = (teamId: string, outPlayerId: string, inPlayerId: string) => {
        setSubstitutions(prev => [...prev.filter(s => s.outPlayerId !== outPlayerId), { teamId, outPlayerId, inPlayerId }]);
        setHomeGoals(prev => prev.filter(id => id !== outPlayerId));
        setAwayGoals(prev => prev.filter(id => id !== outPlayerId));
        setSubstitutingOut(null);
    };

    const undoSubstitution = (outPlayerId: string) => {
        const sub = substitutions.find(s => s.outPlayerId === outPlayerId);
        if (sub) {
            setHomeGoals(prev => prev.filter(id => id !== sub.inPlayerId));
            setAwayGoals(prev => prev.filter(id => id !== sub.inPlayerId));
        }
        setSubstitutions(prev => prev.filter(s => s.outPlayerId !== outPlayerId));
    };

    const addHomeGoal = (playerId: string) => setHomeGoals([...homeGoals, playerId]);
    const removeHomeGoal = (playerId: string) => {
        const index = homeGoals.indexOf(playerId);
        if (index > -1) {
            const newGoals = [...homeGoals];
            newGoals.splice(index, 1);
            setHomeGoals(newGoals);
        }
    };

    const addAwayGoal = (playerId: string) => setAwayGoals([...awayGoals, playerId]);
    const removeAwayGoal = (playerId: string) => {
        const index = awayGoals.indexOf(playerId);
        if (index > -1) {
            const newGoals = [...awayGoals];
            newGoals.splice(index, 1);
            setAwayGoals(newGoals);
        }
    };

    const handleSave = async () => {
        if (!homeTeamId || !awayTeamId) {
            alert("Selecione os dois times.");
            return;
        }
        if (homeTeamId === awayTeamId) {
            alert("Selecione times diferentes.");
            return;
        }

        const homeScore = homeGoals.length;
        const awayScore = awayGoals.length;
        const isDraw = homeScore === awayScore;
        const winnerTeamId = isDraw ? null : (homeScore > awayScore ? homeTeamId : awayTeamId);

        const goals = [...homeGoals, ...awayGoals].map(pId => ({ playerId: pId }));

        try {
            await api.post(`/sessions/${sessionId}/rounds`, {
                homeTeamId,
                awayTeamId,
                homeScore,
                awayScore,
                winnerTeamId,
                isDraw,
                goals,
                substitutions
            });
            alert("Partida salva com sucesso!");
            router.push(`/sessions/${sessionId}`);
        } catch (e) {
            console.error(e);
            alert("Erro ao salvar a partida.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-40">
            <Header showBack onBack={() => router.push(`/sessions/${sessionId}`)} />

            <div
                className={`fixed top-0 inset-x-0 z-50 px-4 pt-3 transition-all duration-300 ease-out ${showFloatingTimer ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <div className="max-w-md mx-auto bg-slate-900/95 backdrop-blur-md rounded-3xl shadow-xl border border-slate-800 flex items-center justify-between gap-3 px-5 py-3.5">
                    <span className="text-4xl font-black text-white tabular-nums tracking-tighter">{formatTime(timeLeft)}</span>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTimer}
                            className={`w-14 h-14 flex items-center justify-center rounded-full transition-all active:scale-95 shadow-lg ${timerActive ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-primary text-white shadow-primary/30'}`}
                        >
                            {timerActive ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:text-white transition-all active:scale-95"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <main className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section ref={mainTimerRef} className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tempo de Partida</span>
                    <div className="text-7xl font-black tracking-tighter tabular-nums drop-shadow-md">
                        {formatTime(timeLeft)}
                    </div>
                    <div className="flex items-center gap-4 mt-2 relative z-10">
                        <button
                            onClick={toggleTimer}
                            className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-all active:scale-95 ${timerActive ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-500/20' : 'bg-primary text-white hover:bg-primary-hover shadow-primary/20'}`}
                        >
                            {timerActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all active:scale-95"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Time Casa</label>
                            <select
                                value={homeTeamId}
                                onChange={(e) => {
                                    setHomeTeamId(e.target.value);
                                    setHomeGoals([]);
                                    setSubstitutions([]);
                                }}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option value="">Selecione...</option>
                                {teams.map((t: Team) => (
                                    <option key={t.id} value={t.id} disabled={t.id === awayTeamId}>{t.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-center -my-2 relative z-10">
                            <span className="bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">VS</span>
                        </div>

                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Time Fora</label>
                            <select
                                value={awayTeamId}
                                onChange={(e) => {
                                    setAwayTeamId(e.target.value);
                                    setAwayGoals([]);
                                    setSubstitutions([]);
                                }}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option value="">Selecione...</option>
                                {teams.map((t: Team) => (
                                    <option key={t.id} value={t.id} disabled={t.id === homeTeamId}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                {homeTeam && awayTeam && (
                    <section className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                <Goal className="w-4 h-4" /> Quem marcou os gols?
                            </h2>
                        </div>

                        <div className="flex justify-center items-center gap-6 py-4">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs font-black uppercase text-slate-500 truncate w-24 text-center">{homeTeam.name}</span>
                                <div className="text-5xl font-black text-slate-800">{homeGoals.length}</div>
                            </div>
                            <div className="text-2xl font-black text-slate-300">X</div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs font-black uppercase text-slate-500 truncate w-24 text-center">{awayTeam.name}</span>
                                <div className="text-5xl font-black text-slate-800">{awayGoals.length}</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border-l-8 overflow-hidden p-4" style={{ borderLeftColor: getHexColor(homeTeam.color) }}>
                            <h3 className="font-black text-slate-800 mb-4 text-sm flex justify-between">
                                Jogadores ({homeTeam.name})
                                <span className="text-primary">{homeGoals.length} GOLS</span>
                            </h3>
                            <div className="space-y-3">
                                {getEffectiveEntries(homeTeam).map((entry) => {
                                    const p = entry.displayPlayer;
                                    const goalsScored = homeGoals.filter(id => id === p.id).length;
                                    return (
                                        <div key={entry.originalPlayerId} className="flex items-center justify-between bg-slate-50 p-2 pl-3 rounded-2xl border border-slate-100">
                                            <div className="flex flex-col min-w-0">
                                                <span className="font-bold text-slate-700 text-sm truncate max-w-30">{p.nickname || p.name}</span>
                                                {entry.isSub && (
                                                    <span className="text-[9px] font-black uppercase text-amber-600 flex items-center gap-1">
                                                        <Repeat className="w-2.5 h-2.5" /> Entrou por {entry.originalName}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {entry.isSub ? (
                                                    <button onClick={() => undoSubstitution(entry.originalPlayerId)} title="Desfazer substituição" className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-all">
                                                        <X className="w-3.5 h-3.5" />
                                                    </button>
                                                ) : (
                                                    restingPlayers.length > 0 && (
                                                        <button onClick={() => setSubstitutingOut({ teamId: homeTeam.id, player: p })} title="Substituir jogador" className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-slate-200 hover:text-slate-600 transition-all">
                                                            <Repeat className="w-3.5 h-3.5" />
                                                        </button>
                                                    )
                                                )}
                                                <button onClick={() => removeHomeGoal(p.id)} disabled={goalsScored === 0} className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${goalsScored > 0 ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-slate-100 text-slate-300'}`}>
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="font-black text-slate-800 w-4 text-center">{goalsScored}</span>
                                                <button onClick={() => addHomeGoal(p.id)} className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-all">
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border-l-8 overflow-hidden p-4" style={{ borderLeftColor: getHexColor(awayTeam.color) }}>
                            <h3 className="font-black text-slate-800 mb-4 text-sm flex justify-between">
                                Jogadores ({awayTeam.name})
                                <span className="text-primary">{awayGoals.length} GOLS</span>
                            </h3>
                            <div className="space-y-3">
                                {getEffectiveEntries(awayTeam).map((entry) => {
                                    const p = entry.displayPlayer;
                                    const goalsScored = awayGoals.filter(id => id === p.id).length;
                                    return (
                                        <div key={entry.originalPlayerId} className="flex items-center justify-between bg-slate-50 p-2 pl-3 rounded-2xl border border-slate-100">
                                            <div className="flex flex-col min-w-0">
                                                <span className="font-bold text-slate-700 text-sm truncate max-w-30">{p.nickname || p.name}</span>
                                                {entry.isSub && (
                                                    <span className="text-[9px] font-black uppercase text-amber-600 flex items-center gap-1">
                                                        <Repeat className="w-2.5 h-2.5" /> Entrou por {entry.originalName}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {entry.isSub ? (
                                                    <button onClick={() => undoSubstitution(entry.originalPlayerId)} title="Desfazer substituição" className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-all">
                                                        <X className="w-3.5 h-3.5" />
                                                    </button>
                                                ) : (
                                                    restingPlayers.length > 0 && (
                                                        <button onClick={() => setSubstitutingOut({ teamId: awayTeam.id, player: p })} title="Substituir jogador" className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-slate-200 hover:text-slate-600 transition-all">
                                                            <Repeat className="w-3.5 h-3.5" />
                                                        </button>
                                                    )
                                                )}
                                                <button onClick={() => removeAwayGoal(p.id)} disabled={goalsScored === 0} className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${goalsScored > 0 ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-slate-100 text-slate-300'}`}>
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="font-black text-slate-800 w-4 text-center">{goalsScored}</span>
                                                <button onClick={() => addAwayGoal(p.id)} className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-all">
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Modal isOpen={!!substitutingOut} onClose={() => setSubstitutingOut(null)} title="Substituir Jogador">
                <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
                    <p className="text-xs font-bold text-slate-400 px-1">
                        Escolha quem entra no lugar de <span className="text-slate-700">{substitutingOut?.player.nickname || substitutingOut?.player.name}</span> nesta rodada. A troca vale apenas para esta rodada.
                    </p>
                    {restingPlayers.length === 0 ? (
                        <div className="text-center py-6 text-xs text-slate-400 font-bold">Nenhum jogador disponível no banco.</div>
                    ) : (
                        restingPlayers.map((p: Player) => (
                            <button
                                key={p.id}
                                onClick={() => substitutingOut && addSubstitution(substitutingOut.teamId, substitutingOut.player.id, p.id)}
                                className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all text-left"
                            >
                                <span className="font-bold text-slate-700 text-sm">{p.nickname || p.name}</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase">{p.position}</span>
                            </button>
                        ))
                    )}
                </div>
            </Modal>

            <div className="fixed bottom-16 left-0 right-0 p-6 bg-linear-to-t from-slate-50 via-slate-50 to-transparent z-40 pointer-events-none">
                <div className="pointer-events-auto">
                    <Button
                        onClick={handleSave}
                        disabled={!homeTeamId || !awayTeamId || homeTeamId === awayTeamId}
                        fullWidth
                        size="md"
                        icon={Save}
                    >
                        Salvar Partida
                    </Button>
                </div>
            </div>
        </div>
    );
}
