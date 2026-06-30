"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { useRouter, useParams } from 'next/navigation';
import { Plus, Minus, Goal, Save, Play, Pause, RotateCcw } from 'lucide-react';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { Session, Team, Round, TeamPlayer } from '@/types';
import { Header } from '@/components/Header';

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

    const [seconds, setSeconds] = useState(7 * 60);
    const [timerActive, setTimerActive] = useState(false);


    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timerActive) {
            interval = setInterval(() => {
                setSeconds(s => {
                    if (s <= 1) {
                        setTimerActive(false);
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerActive]);

    const formatTime = (totalSeconds: number) => {
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

    const getHexColor = (colorStr: string) => {
        if (!colorStr) return '#1E293B';
        if (colorStr.startsWith('#')) return colorStr;
        if (colorStr.includes('red')) return '#DC2626';
        if (colorStr.includes('amber') || colorStr.includes('yellow')) return '#EAB308';
        if (colorStr.includes('blue')) return '#2563EB';
        if (colorStr.includes('green')) return '#16A34A';
        return '#1E293B';
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
                goals
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

            <main className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tempo de Partida</span>
                    <div className="text-7xl font-black tracking-tighter tabular-nums drop-shadow-md">
                        {formatTime(seconds)}
                    </div>
                    <div className="flex items-center gap-4 mt-2 relative z-10">
                        <button
                            onClick={() => setTimerActive(!timerActive)}
                            className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-all active:scale-95 ${timerActive ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-500/20' : 'bg-primary text-white hover:bg-primary-hover shadow-primary/20'}`}
                        >
                            {timerActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                        </button>
                        <button
                            onClick={() => { setTimerActive(false); setSeconds(7 * 60); }}
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
                                {homeTeam.players?.map((tp: TeamPlayer) => {
                                    const p = tp.player;
                                    const goalsScored = homeGoals.filter(id => id === p.id).length;
                                    return (
                                        <div key={p.id} className="flex items-center justify-between bg-slate-50 p-2 pl-3 rounded-2xl border border-slate-100">
                                            <span className="font-bold text-slate-700 text-sm truncate max-w-30">{p.nickname}</span>
                                            <div className="flex items-center gap-3">
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
                                {awayTeam.players?.map((tp: TeamPlayer) => {
                                    const p = tp.player;
                                    const goalsScored = awayGoals.filter(id => id === p.id).length;
                                    return (
                                        <div key={p.id} className="flex items-center justify-between bg-slate-50 p-2 pl-3 rounded-2xl border border-slate-100">
                                            <span className="font-bold text-slate-700 text-sm truncate max-w-30">{p.nickname}</span>
                                            <div className="flex items-center gap-3">
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
