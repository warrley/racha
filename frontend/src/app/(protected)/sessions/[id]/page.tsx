"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { useRouter, useParams } from 'next/navigation';
import { ChevronDown, CheckCircle2, Circle, Trophy, Goal, Play, Shuffle, CalendarDays, History, MapPin, Trash2, StopCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { UserAvatar } from '@/components/UserAvatar';
import { Header } from '@/components/Header';

import { Session, Team, Round, TeamPlayer, Player, Goal as GoalType } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

export default function SessionDetailsScreen() {
    const router = useRouter();
    const params = useParams();
    const sessionId = params.id as string;
    const { isAdmin, loading: authLoading } = useAuth();

    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [expandedTeams, setExpandedTeams] = useState<Record<string, boolean>>({});

    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await api.get(`/sessions/${sessionId}`);
                const sess = res.data.session;
                setSession(sess);

                if (sess.status === 'OPEN') {
                    const pRes = await api.get('/players');
                    setAllPlayers(pRes.data.players || []);
                } else if (sess.teams) {
                    const exp: Record<string, boolean> = {};
                    sess.teams.forEach((t: Team) => exp[t.id] = true);
                    setExpandedTeams(exp);
                }

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (sessionId && !authLoading) {
            fetchData();
        }
    }, [sessionId, authLoading]);

    const toggleTeam = (teamId: string) => {
        setExpandedTeams(prev => ({ ...prev, [teamId]: !prev[teamId] }));
    };

    const handleTogglePlayer = (id: string) => {
        setSelectedPlayerIds(prev =>
            prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
        );
    };

    const handleDrawTeams = async () => {
        const count = selectedPlayerIds.length;
        if (count !== 15 && count !== 20) {
            alert("Selecione exatamente 15 (3 times) ou 20 (4 times) jogadores para o sorteio!");
            return;
        }
        try {
            setIsDrawing(true);
            await api.post(`/sessions/${sessionId}/draw`, { playerIds: selectedPlayerIds });
            const res = await api.get(`/sessions/${sessionId}`);
            const sess = res.data.session;
            setSession(sess);
            const exp: Record<string, boolean> = {};
            sess.teams.forEach((t: Team) => exp[t.id] = true);
            setExpandedTeams(exp);
        } catch (e) {
            console.error(e);
            alert("Erro ao sortear times.");
        } finally {
            setIsDrawing(false);
        }
    };

    const handleCloseSession = async () => {
        if (confirm("Tem certeza que deseja finalizar o racha? Isso irá calcular os pontos e encerrar as partidas.")) {
            try {
                await api.post(`/sessions/${sessionId}/close`);
                const res = await api.get(`/sessions/${sessionId}`);
                setSession(res.data.session);
            } catch (e) {
                console.error(e);
                alert("Erro ao fechar racha.");
            }
        }
    };

    const handleDeleteRound = async (roundId: string) => {
        if (confirm("Deseja realmente excluir esta partida do histórico? (Você poderá registrar novamente os gols)")) {
            try {
                await api.delete(`/sessions/${sessionId}/rounds/${roundId}`);
                const res = await api.get(`/sessions/${sessionId}`);
                setSession(res.data.session);
            } catch (e) {
                console.error(e);
                alert("Erro ao excluir a partida.");
            }
        }
    };

    if (loading || authLoading || !session) {
        return (
            <div className="flex items-center justify-center min-h-screen text-primary font-bold">
                Carregando Detalhes...
            </div>
        );
    }

    const isFinished = session.status === 'FINISHED';
    const isInProgress = session.status === 'IN_PROGRESS';
    const isOpen = session.status === 'OPEN';

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-40">
            <Header showBack onBack={() => router.push('/sessions')} />

            <main className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section className="space-y-4">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <CalendarDays className="w-4 h-4" />
                                {new Date(session.date).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">{session.title || 'Detalhes do Racha'}</h2>
                            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                                <MapPin className="w-4 h-4 text-primary" />
                                Quadra Principal
                            </div>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border flex items-center gap-2
                            ${isOpen ? 'bg-amber-50 text-amber-600 border-amber-200' :
                                isInProgress ? 'bg-primary/10 text-primary border-primary/20' :
                                    'bg-slate-200 text-slate-600 border-slate-300'}`}>
                            {isInProgress && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                            {isOpen ? 'Aberto' : isInProgress ? 'Rodando' : 'Finalizado'}
                        </div>
                    </div>

                    {isFinished && (
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex justify-around">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MVP do Dia</p>
                                <div className="flex items-center gap-2 mt-1 justify-center">
                                    <Trophy className="w-5 h-5 text-amber-500" />
                                    <span className="font-bold text-slate-800">{session.mvpPlayer?.nickname || '-'}</span>
                                </div>
                            </div>
                            <div className="w-px bg-amber-200" />
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Artilheiro</p>
                                <div className="flex items-center gap-2 mt-1 justify-center">
                                    <Goal className="w-5 h-5 text-amber-600" />
                                    <span className="font-bold text-slate-800">{session.topScorerPlayer?.nickname || '-'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {isOpen ? (
                    <section className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-black text-slate-800">Selecione 15 ou 20 Jogadores</h3>
                            <span className={`text-sm font-bold ${
                                selectedPlayerIds.length === 15 || selectedPlayerIds.length === 20 ? 'text-green-600' : 'text-slate-500'
                            }`}>
                                {selectedPlayerIds.length} / {selectedPlayerIds.length >= 16 ? 20 : 15}
                            </span>
                        </div>

                        <div className="space-y-2">
                            {allPlayers.map((player: Player) => {
                                const isSelected = selectedPlayerIds.includes(player.id);
                                return (
                                    <div
                                        key={player.id}
                                        onClick={() => handleTogglePlayer(player.id)}
                                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${isSelected ? 'bg-primary/5 border-primary shadow-sm' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {isSelected ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Circle className="w-5 h-5 text-slate-300" />}
                                            <div className="w-10 h-10 rounded-full border-2 border-slate-100 shrink-0 relative overflow-hidden bg-slate-100">
                                                <UserAvatar nickname={player.nickname} className="w-full h-full text-base" />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-800 text-sm">{player.nickname}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">{player.position}</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-black text-slate-500 text-[10px]">
                                            {player.rating} Pts
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ) : (
                    <section className="space-y-4">
                        {session.teams?.map((team: Team) => {
                            const getHexColor = (colorStr: string) => {
                                if (!colorStr) return '#1E293B';
                                if (colorStr.startsWith('#')) return colorStr;
                                if (colorStr.includes('red')) return '#DC2626';
                                if (colorStr.includes('amber') || colorStr.includes('yellow')) return '#EAB308';
                                if (colorStr.includes('blue')) return '#2563EB';
                                if (colorStr.includes('green')) return '#16A34A';
                                return '#1E293B';
                            };
                            return (
                                <div key={team.id} className="bg-white rounded-3xl shadow-sm border-l-8 overflow-hidden transition-all duration-300" style={{ borderLeftColor: getHexColor(team.color) }}>
                                    <button
                                        onClick={() => toggleTeam(team.id)}
                                        className="w-full px-6 py-5 flex justify-between items-center bg-white active:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-800 border border-slate-200">
                                                {team.name.charAt(0) || 'T'}
                                            </div>
                                            <div className="text-left">
                                                <h4 className="text-xl font-black text-slate-900">{team.name}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating Total: <span className="text-primary">{team.totalRating}</span></p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-6 h-6 text-slate-300 transition-transform duration-300 ${expandedTeams[team.id] ? 'rotate-180' : ''}`} />
                                    </button>

                                    <div className={`px-6 pb-6 space-y-4 ${expandedTeams[team.id] ? 'block' : 'hidden'}`}>
                                        <div className="h-px bg-slate-100 w-full mb-4" />
                                        {team.players?.map((tp: TeamPlayer, idx: number) => {
                                            const p = tp.player;
                                            return (
                                                <div key={idx} className="flex justify-between items-center group">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full border-2 border-slate-100 overflow-hidden bg-slate-100 relative shadow-sm">
                                                            <UserAvatar nickname={p.nickname} className="w-full h-full text-xs" />
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-slate-800 text-sm tracking-tight">{p.nickname}</p>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{p.position}</p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-black text-slate-500 text-[10px]">
                                                        {p.rating}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                )}

                {(isInProgress || isFinished) && session.rounds && session.rounds.length > 0 && (
                    <section className="space-y-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                            <History className="w-5 h-5 text-slate-400" />
                            <h3 className="font-black text-slate-800 tracking-tight">Histórico de Partidas</h3>
                        </div>
                        <div className="space-y-3">
                            {session.rounds.map((round: Round, idx: number) => {
                                const homeName = round.homeTeam?.name || 'Casa';
                                const awayName = round.awayTeam?.name || 'Fora';
                                const isDraw = round.winnerTeam === null;
                                const winnerName = round.winnerTeam?.name;

                                const playerTeamMap: Record<string, string> = {};
                                session.teams?.forEach((t: Team) => {
                                    t.players?.forEach((tp: TeamPlayer) => {
                                        playerTeamMap[tp.player.id] = t.id;
                                    });
                                });

                                const homeGoals = round.goals?.filter((g: GoalType) => playerTeamMap[g.player?.id || ''] === round.homeTeam?.id) || [];
                                const awayGoals = round.goals?.filter((g: GoalType) => playerTeamMap[g.player?.id || ''] === round.awayTeam?.id) || [];

                                const homeScore = homeGoals.length;
                                const awayScore = awayGoals.length;

                                return (
                                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex flex-col gap-3 relative group overflow-hidden">
                                        {isAdmin && isInProgress && (
                                            <button
                                                onClick={() => handleDeleteRound(round.id)}
                                                className="absolute -top-2 -right-2 bg-red-50 text-red-500 p-3 rounded-full border border-red-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100 active:scale-95"
                                                title="Excluir partida"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        )}
                                        <div className="flex items-center justify-between mt-1">
                                            <div className="flex flex-col gap-1 w-[40%] text-center">
                                                <span className={`text-xs font-black truncate ${winnerName === homeName ? 'text-green-600' : 'text-slate-600'}`}>{homeName}</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-1 w-[20%]">
                                                <div className="flex items-center gap-2 font-black text-slate-800 text-lg">
                                                    <span>{homeScore}</span>
                                                    <span className="text-[10px] text-slate-300">X</span>
                                                    <span>{awayScore}</span>
                                                </div>
                                                {isDraw && <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full mt-1">EMPATE</span>}
                                            </div>
                                            <div className="flex flex-col gap-1 w-[40%] text-center">
                                                <span className={`text-xs font-black truncate ${winnerName === awayName ? 'text-green-600' : 'text-slate-600'}`}>{awayName}</span>
                                            </div>
                                        </div>

                                        {(homeGoals.length > 0 || awayGoals.length > 0) && (
                                            <div className="flex justify-between text-[10px] text-slate-400 font-bold px-2 pt-2 border-t border-slate-50 mt-1">
                                                <div className="w-[45%] flex flex-col items-start gap-0.5">
                                                    {homeGoals.map((g: GoalType, i: number) => (
                                                        <span key={i} className="flex items-center gap-1">
                                                            <Goal className="w-3 h-3 text-primary" /> {g.player?.nickname}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="w-[45%] flex flex-col items-end gap-0.5">
                                                    {awayGoals.map((g: GoalType, i: number) => (
                                                        <span key={i} className="flex items-center gap-1">
                                                            {g.player?.nickname} <Goal className="w-3 h-3 text-primary" />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}
            </main>

            <div className="fixed bottom-16 left-0 right-0 p-6 bg-linear-to-t from-slate-50 via-slate-50 to-transparent z-40 pointer-events-none">
                <div className="pointer-events-auto">
                    {isOpen && isAdmin && (
                        <Button
                            onClick={handleDrawTeams}
                            disabled={(selectedPlayerIds.length !== 15 && selectedPlayerIds.length !== 20) || isDrawing}
                            isLoading={isDrawing}
                            fullWidth
                            size="lg"
                            icon={Shuffle}
                        >
                            Sortear Times
                        </Button>
                    )}
                    {isInProgress && (
                        <div className="flex flex-col gap-2">
                            <Button
                                onClick={() => router.push(`/sessions/${sessionId}/match`)}
                                fullWidth
                                size="lg"
                                icon={Play}
                            >
                                Anotar Resultados
                            </Button>
                            {isAdmin ? (
                                <Button
                                    onClick={handleCloseSession}
                                    variant="danger-outline"
                                    fullWidth
                                    size="md"
                                    icon={StopCircle}
                                >
                                    Encerrar Racha
                                </Button>
                            ) : (
                                <p className="text-center text-xs font-bold text-slate-400 mt-2 px-4 leading-tight">
                                    Apenas administradores podem encerrar.
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}