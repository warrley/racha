"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ChevronDown, CheckCircle2, Circle, Trophy, Goal, Play, Shuffle, CalendarDays, History, MapPin, Trash2, StopCircle, UserPlus, Users, Clock, Plus, X, Star, Send, Lock, Repeat, Wallet, Copy, Check, Settings2, Pencil, CheckSquare, Square, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import toast from 'react-hot-toast';
import { Button } from '@/components/Button';
import { UserAvatar } from '@/components/UserAvatar';
import { Header } from '@/components/Header';
import { getHexColor } from '@/lib/colors';

import { Session, Team, Round, TeamPlayer, Player, Goal as GoalType, RatingPlayer, RatingsStatus } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

const toDatetimeLocalValue = (isoDate: string) => {
    const d = new Date(isoDate);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

type RatingChoice = 'WORSE' | 'SAME' | 'BETTER';
const RATING_CHOICE_VALUE: Record<RatingChoice, number> = { WORSE: -1, SAME: 0, BETTER: 1 };

const inferRatingChoice = (currentGrade: number): RatingChoice => {
    if (currentGrade > 0) return 'BETTER';
    if (currentGrade < 0) return 'WORSE';
    return 'SAME';
};

export default function SessionDetailsScreen() {
    const router = useRouter();
    const params = useParams();
    const sessionId = params.id as string;
    const { user, isAdmin, loading: authLoading } = useAuth();

    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);
    const [expandedTeams, setExpandedTeams] = useState<Record<string, boolean>>({});

    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [selectedBulkAddIds, setSelectedBulkAddIds] = useState<string[]>([]);
    const [bulkAdding, setBulkAdding] = useState(false);
    const [guestName, setGuestName] = useState('');
    const [addingGuest, setAddingGuest] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);

    // Edição da sessão (título/data/limite de jogadores)
    const [showEditSession, setShowEditSession] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editDate, setEditDate] = useState('');
    const [editMaxPlayers, setEditMaxPlayers] = useState('');
    const [savingSession, setSavingSession] = useState(false);

    // Post-game rating state
    const [ratingsStatus, setRatingsStatus] = useState<RatingsStatus | null>(null);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [ratingScores, setRatingScores] = useState<Record<string, number>>({});
    const [ratingChoices, setRatingChoices] = useState<Record<string, RatingChoice>>({});
    const [submittingRatings, setSubmittingRatings] = useState(false);
    const [ratingsSubmitted, setRatingsSubmitted] = useState(false);

    // Pagamento via Pix (req 2.3)
    const [pixCopied, setPixCopied] = useState(false);
    const [showPaymentSettings, setShowPaymentSettings] = useState(false);
    const [pixKeyInput, setPixKeyInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [savingPaymentInfo, setSavingPaymentInfo] = useState(false);
    const [payingUserId, setPayingUserId] = useState<string | null>(null);

    const fetchSessionData = async () => {
        try {
            const res = await api.get(`/sessions/${sessionId}`);
            const sess = res.data.session;
            setSession(sess);
            setPixKeyInput(sess.pixKey || '');
            setPriceInput(sess.price != null ? String(sess.price) : '');
            setEditTitle(sess.title || '');
            setEditDate(toDatetimeLocalValue(sess.date));
            setEditMaxPlayers(String(sess.maxPlayers ?? 15));

            if (sess.status === 'OPEN') {
                const pRes = await api.get('/players');
                setAllPlayers(pRes.data.players || []);
            } else if (sess.teams) {
                const exp: Record<string, boolean> = {};
                sess.teams.forEach((t: Team) => exp[t.id] = true);
                setExpandedTeams(exp);
            }

            // Buscar status de votação se sessão finalizada
            if (sess.status === 'FINISHED') {
                try {
                    const ratingsRes = await api.get(`/sessions/${sessionId}/ratings`);
                    setRatingsStatus(ratingsRes.data);
                    if (ratingsRes.data.hasVoted) {
                        setRatingsSubmitted(true);
                    }
                    // Preencher scores/escolhas existentes
                    if (ratingsRes.data.players) {
                        const existingScores: Record<string, number> = {};
                        const existingChoices: Record<string, RatingChoice> = {};
                        ratingsRes.data.players.forEach((p: RatingPlayer) => {
                            if (p.currentGrade !== null) {
                                existingScores[p.id] = p.currentGrade;
                                existingChoices[p.id] = inferRatingChoice(p.currentGrade);
                            }
                        });
                        setRatingScores(existingScores);
                        setRatingChoices(existingChoices);
                    }
                } catch { /* Jogador não participou */ }
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const initData = async () => {
            if (sessionId && !authLoading) {
                setLoading(true);
                await fetchSessionData();
                setLoading(false);
            }
        };
        initData();
    }, [sessionId, authLoading]);

    const toggleTeam = (teamId: string) => {
        setExpandedTeams(prev => ({ ...prev, [teamId]: !prev[teamId] }));
    };

    const handleJoinSession = async () => {
        if (!user) return;
        try {
            setActionLoading(true);
            await api.post(`/sessions/${sessionId}/join`);
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao confirmar presença.");
        } finally {
            setActionLoading(false);
        }
    };

    const handleLeaveSession = async () => {
        if (!user) return;
        try {
            setActionLoading(true);
            await api.post(`/sessions/${sessionId}/leave`);
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao cancelar presença.");
        } finally {
            setActionLoading(false);
        }
    };

    const handleAddGuest = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!guestName.trim()) return;
        try {
            setAddingGuest(true);
            await api.post(`/sessions/${sessionId}/participants/guest`, { name: guestName.trim() });
            setGuestName('');
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao adicionar convidado.");
        } finally {
            setAddingGuest(false);
        }
    };

    const toggleBulkAddSelection = (userId: string) => {
        setSelectedBulkAddIds(prev =>
            prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
        );
    };

    const handleBulkAddPlayers = async () => {
        if (selectedBulkAddIds.length === 0) return;
        try {
            setBulkAdding(true);
            const results = await Promise.allSettled(
                selectedBulkAddIds.map(userId =>
                    api.post(`/sessions/${sessionId}/participants/manual`, { userId })
                )
            );
            const failures = results.filter(r => r.status === 'rejected').length;
            setSelectedBulkAddIds([]);
            await fetchSessionData();
            if (failures > 0) {
                alert(`${failures} jogador(es) não puderam ser adicionados.`);
            }
        } finally {
            setBulkAdding(false);
        }
    };

    const handleSaveSession = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSavingSession(true);
            await api.patch(`/sessions/${sessionId}`, {
                title: editTitle.trim() || undefined,
                date: editDate ? new Date(editDate).toISOString() : undefined,
                maxPlayers: editMaxPlayers ? Number(editMaxPlayers) : undefined
            });
            setShowEditSession(false);
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao salvar sessão.");
        } finally {
            setSavingSession(false);
        }
    };

    const handleRemovePlayerManual = async (pUserId: string) => {
        if (confirm("Remover este jogador do racha?")) {
            try {
                setActionLoading(true);
                await api.delete(`/sessions/${sessionId}/participants/manual/${pUserId}`);
                await fetchSessionData();
            } catch (e: any) {
                console.error(e);
                alert(e.response?.data?.error || "Erro ao remover jogador.");
            } finally {
                setActionLoading(false);
            }
        }
    };

    const handleCopyPix = () => {
        if (!session?.pix) return;
        navigator.clipboard.writeText(session.pix.payload);
        setPixCopied(true);
        setTimeout(() => setPixCopied(false), 2000);
    };

    const handleSavePaymentInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSavingPaymentInfo(true);
            await api.patch(`/sessions/${sessionId}/payment-info`, {
                pixKey: pixKeyInput.trim() || null,
                price: priceInput ? Number(priceInput) : null
            });
            setShowPaymentSettings(false);
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao salvar configuração de pagamento.");
        } finally {
            setSavingPaymentInfo(false);
        }
    };

    const handleTogglePaid = async (pUserId: string, isPaid: boolean) => {
        try {
            setPayingUserId(pUserId);
            await api.patch(`/sessions/${sessionId}/participants/${pUserId}/payment`, { isPaid: !isPaid });
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao atualizar pagamento.");
        } finally {
            setPayingUserId(null);
        }
    };

    const handleDrawTeams = async () => {
        const confirmedCount = session?.participants?.filter(p => p.status === 'CONFIRMED').length || 0;
        if (confirmedCount !== 15 && confirmedCount !== 20) {
            alert(`O sorteio exige exatamente 15 ou 20 confirmados. Atualmente existem ${confirmedCount} confirmados.`);
            return;
        }
        try {
            setIsDrawing(true);
            await api.post(`/sessions/${sessionId}/draw`);
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao sortear times.");
        } finally {
            setIsDrawing(false);
        }
    };

    const handleCloseSession = async () => {
        if (confirm("Tem certeza que deseja finalizar o racha? Isso irá calcular os pontos e encerrar as partidas.")) {
            try {
                await api.post(`/sessions/${sessionId}/close`);
                await fetchSessionData();
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
                await fetchSessionData();
            } catch (e) {
                console.error(e);
                alert("Erro ao excluir a partida.");
            }
        }
    };

    const handleRatingChoice = (p: RatingPlayer, choice: RatingChoice) => {
        setRatingChoices(prev => ({ ...prev, [p.id]: choice }));
        setRatingScores(prev => ({ ...prev, [p.id]: RATING_CHOICE_VALUE[choice] }));
    };

    const handleSubmitRatings = async () => {
        if (!ratingsStatus) return;
        const ratings = Object.entries(ratingChoices)
            .map(([evaluatedId]) => ({ evaluatedId, score: ratingScores[evaluatedId] }));

        if (ratings.length < ratingsStatus.totalPlayers) {
            alert(`Avalie todos os jogadores antes de enviar (${ratings.length}/${ratingsStatus.totalPlayers}).`);
            return;
        }

        try {
            setSubmittingRatings(true);
            await api.post(`/sessions/${sessionId}/ratings`, { ratings });
            setRatingsSubmitted(true);
            setShowRatingModal(false);
            toast.success('Avaliações enviadas com sucesso!');
            await fetchSessionData();
        } catch (e: any) {
            console.error(e);
            alert(e.response?.data?.error || "Erro ao enviar avaliações.");
        } finally {
            setSubmittingRatings(false);
        }
    };

    const handleConsolidateRatings = async () => {
        if (confirm("Tem certeza que deseja encerrar a votação? As notas serão calculadas e não poderão ser alteradas.")) {
            try {
                await api.post(`/sessions/${sessionId}/ratings/consolidate`);
                await fetchSessionData();
            } catch (e: any) {
                console.error(e);
                alert(e.response?.data?.error || "Erro ao consolidar notas.");
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
    const confirmedCount = session.participants?.filter(p => p.status === 'CONFIRMED').length || 0;
    const paymentWindowOpen = !session.finishedAt || (Date.now() - new Date(session.finishedAt).getTime()) < 24 * 60 * 60 * 1000;

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
                        <div className="flex flex-col items-end gap-2">
                            <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border flex items-center gap-2
                                ${isOpen ? 'bg-amber-50 text-amber-600 border-amber-200' :
                                    isInProgress ? 'bg-primary/10 text-primary border-primary/20' :
                                        'bg-slate-200 text-slate-600 border-slate-300'}`}>
                                {isInProgress && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                                {isOpen ? 'Aberto' : isInProgress ? 'Rodando' : 'Finalizado'}
                            </div>
                            {isAdmin && !isFinished && (
                                <button
                                    onClick={() => setShowEditSession(true)}
                                    className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all active:scale-95"
                                    title="Editar Racha"
                                >
                                    <Pencil className="w-4 h-4" />
                                </button>
                            )}
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

                {/* Pagamento via Pix (req 2.3) — só antes do racha começar; durante a partida, ninguém está pagando */}
                {isOpen && (
                    <section className="space-y-3">
                        {session.pix ? (
                            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-black text-slate-800 text-sm flex items-center gap-2">
                                        <Wallet className="w-4 h-4 text-green-600" /> Pagamento da Cota
                                    </h3>
                                    <span className="text-lg font-black text-green-600">R$ {session.pix.price.toFixed(2)}</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 py-2">
                                    <div className="bg-white p-3 rounded-2xl border border-slate-100">
                                        <QRCodeSVG value={session.pix.payload} size={160} />
                                    </div>
                                    <button
                                        onClick={handleCopyPix}
                                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${pixCopied ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                                    >
                                        {pixCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {pixCopied ? 'Código Copiado!' : 'Copiar Código Pix (Copia e Cola)'}
                                    </button>
                                </div>
                            </div>
                        ) : isAdmin ? (
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-xs font-bold text-amber-700">
                                Configure a chave Pix e o valor da cota para os jogadores poderem pagar.
                            </div>
                        ) : null}

                        {isAdmin && (
                            <button
                                onClick={() => setShowPaymentSettings(v => !v)}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 text-slate-500 rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-wider hover:bg-slate-200 transition-all active:scale-95"
                            >
                                <Settings2 className="w-4 h-4" /> Configurar Pagamento
                            </button>
                        )}

                        {isAdmin && showPaymentSettings && (
                            <form onSubmit={handleSavePaymentInfo} className="bg-slate-900 p-5 rounded-3xl shadow-xl text-white flex flex-col gap-3">
                                <div>
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Chave Pix (deixe em branco para usar a do seu perfil)</label>
                                    <input
                                        type="text"
                                        value={pixKeyInput}
                                        onChange={e => setPixKeyInput(e.target.value)}
                                        placeholder="E-mail, CPF, telefone ou chave aleatória"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 font-bold text-white text-sm outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Valor da Cota (R$)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={priceInput}
                                        onChange={e => setPriceInput(e.target.value)}
                                        placeholder="Ex: 25.00"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 font-bold text-white text-sm outline-none focus:border-primary"
                                    />
                                </div>
                                <Button type="submit" isLoading={savingPaymentInfo} fullWidth>
                                    Salvar
                                </Button>
                            </form>
                        )}
                    </section>
                )}

                {/* Pagamentos após o encerramento do racha (visível por até 24h) */}
                {isFinished && session.price != null && paymentWindowOpen && (
                    <section className="space-y-3">
                        <h3 className="font-black text-slate-800 text-sm flex items-center gap-2 px-1">
                            <Wallet className="w-4 h-4 text-green-600" /> Pagamentos
                        </h3>
                        <div className="space-y-2">
                            {session.participants?.filter(p => p.status === 'CONFIRMED').map(p => {
                                const player = p.user;
                                if (!player) return null;
                                return (
                                    <div
                                        key={p.id}
                                        className={`flex items-center justify-between p-4 border rounded-2xl transition-all ${p.isPaid ? 'bg-green-50/60 border-green-200' : 'bg-white border-slate-100'}`}
                                    >
                                        <Link href={`/players/${player.id}`} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full border-2 border-slate-100 shrink-0 relative overflow-hidden bg-slate-100">
                                                <UserAvatar nickname={player.nickname || player.name} className="w-full h-full text-base" />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-800 text-sm">{player.nickname || player.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">{player.position}</p>
                                            </div>
                                        </Link>
                                        {(isAdmin || player.id === user?.id) ? (
                                            <button
                                                onClick={() => handleTogglePaid(player.id, p.isPaid)}
                                                disabled={payingUserId === player.id}
                                                className={`flex items-center justify-center gap-1.5 w-[118px] py-2 rounded-xl border font-black text-[11px] uppercase tracking-wider transition-all active:scale-95 disabled:opacity-60 ${p.isPaid ? 'bg-green-500 text-white border-green-500 shadow-sm shadow-green-500/30' : 'bg-amber-50 text-amber-600 border-amber-200'}`}
                                            >
                                                {payingUserId === player.id ? (
                                                    <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                ) : p.isPaid ? (
                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                ) : (
                                                    <Circle className="w-3.5 h-3.5" />
                                                )}
                                                {p.isPaid ? 'Pago' : 'Marcar Pago'}
                                            </button>
                                        ) : (
                                            <span className={`flex items-center justify-center gap-1.5 w-[118px] py-2 rounded-xl border font-black text-[11px] uppercase tracking-wider ${p.isPaid ? 'bg-green-500 text-white border-green-500' : 'bg-amber-50 text-amber-600 border-amber-200'}`}>
                                                {p.isPaid ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
                                                {p.isPaid ? 'Pago' : 'Pendente'}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Seção de Avaliação Pós-Jogo */}
                {isFinished && ratingsStatus && (
                    <section className="space-y-4">
                        {ratingsStatus.isVotingOpen && !ratingsStatus.isConsolidated ? (
                            <>
                                {!showRatingModal ? (
                                    <div
                                        onClick={() => setShowRatingModal(true)}
                                        className={`bg-gradient-to-br ${ratingsSubmitted ? 'from-green-500 to-emerald-600' : 'from-violet-500 to-purple-600'} rounded-3xl p-6 text-white shadow-lg relative overflow-hidden cursor-pointer active:scale-[0.98] transition-all`}
                                    >
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-3 opacity-80">
                                                {ratingsSubmitted ? <CheckCircle2 size={16} /> : <Star size={16} />}
                                                <span className="text-xs font-black uppercase tracking-widest">
                                                    {ratingsSubmitted ? 'Avaliação Enviada' : 'Avaliação Pós-Jogo'}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-black leading-tight mb-2">
                                                {ratingsSubmitted
                                                    ? 'Suas notas foram registradas!'
                                                    : 'Avalie os jogadores deste racha!'
                                                }
                                            </h3>
                                            <p className="text-sm font-medium opacity-80">
                                                {ratingsSubmitted
                                                    ? `Você avaliou ${ratingsStatus.totalVotes} de ${ratingsStatus.totalPlayers} jogadores. Toque para editar.`
                                                    : `Diga como cada um dos ${ratingsStatus.totalPlayers} jogadores jogou hoje.`
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                                        <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-5 text-white">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-black text-lg">Avaliação Pós-Jogo</h3>
                                                    <p className="text-xs opacity-80 font-bold mt-1">Como cada jogador se saiu hoje?</p>
                                                </div>
                                                <button
                                                    onClick={() => setShowRatingModal(false)}
                                                    className="bg-white/20 p-2 rounded-xl hover:bg-white/30 transition-colors"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
                                            {ratingsStatus.players.map((p) => {
                                                const choice = ratingChoices[p.id];
                                                const options: { key: RatingChoice; label: string; icon: typeof TrendingDown; activeClass: string }[] = [
                                                    { key: 'WORSE', label: 'Pior', icon: TrendingDown, activeClass: 'bg-red-500 border-red-500 text-white shadow-sm shadow-red-500/30' },
                                                    { key: 'SAME', label: 'Igual', icon: Minus, activeClass: 'bg-slate-600 border-slate-600 text-white shadow-sm' },
                                                    { key: 'BETTER', label: 'Melhor', icon: TrendingUp, activeClass: 'bg-green-500 border-green-500 text-white shadow-sm shadow-green-500/30' },
                                                ];
                                                return (
                                                    <div key={p.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-9 h-9 rounded-full border-2 border-slate-100 overflow-hidden bg-slate-100 shrink-0">
                                                                <UserAvatar nickname={p.nickname || p.name} className="w-full h-full text-xs" />
                                                            </div>
                                                            <div>
                                                                <p className="font-black text-slate-800 text-sm">{p.nickname || p.name}</p>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase">{p.position}</p>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            {options.map(opt => {
                                                                const Icon = opt.icon;
                                                                const active = choice === opt.key;
                                                                return (
                                                                    <button
                                                                        key={opt.key}
                                                                        onClick={() => handleRatingChoice(p, opt.key)}
                                                                        className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl border font-black text-[11px] uppercase tracking-wide transition-all active:scale-95 ${
                                                                            active ? opt.activeClass : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-100'
                                                                        }`}
                                                                    >
                                                                        <Icon className="w-5 h-5" />
                                                                        {opt.label}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="p-4 border-t border-slate-100 space-y-2">
                                            {(() => {
                                                const votedCount = ratingsStatus.players.filter(p => ratingChoices[p.id] !== undefined).length;
                                                const allVoted = votedCount === ratingsStatus.totalPlayers;
                                                return (
                                                    <>
                                                        {!allVoted && (
                                                            <p className="text-center text-[11px] font-bold text-amber-600">
                                                                Avalie todos os jogadores para poder enviar.
                                                            </p>
                                                        )}
                                                        <Button
                                                            onClick={handleSubmitRatings}
                                                            isLoading={submittingRatings}
                                                            disabled={!allVoted}
                                                            fullWidth
                                                            icon={Send}
                                                        >
                                                            Enviar Avaliações ({votedCount}/{ratingsStatus.totalPlayers})
                                                        </Button>
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                )}

                                {isAdmin && (
                                    <button
                                        onClick={handleConsolidateRatings}
                                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 text-slate-500 rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-wider hover:bg-slate-200 transition-all active:scale-95"
                                    >
                                        <Lock className="w-4 h-4" /> Encerrar Votação e Calcular Notas
                                    </button>
                                )}
                            </>
                        ) : ratingsStatus.isConsolidated ? (
                            <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 text-center">
                                <div className="flex items-center justify-center gap-2 text-slate-500">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="font-black text-sm">Votação encerrada — notas consolidadas</span>
                                </div>
                            </div>
                        ) : null}
                    </section>
                )}

                {isOpen ? (
                    <section className="space-y-6">
                        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm">Seu Status de Presença</h4>
                                    <p className="text-xs text-slate-400 font-bold">Confirme presença para entrar na lista de jogadores.</p>
                                </div>
                                {session.participants?.find(p => p.userId === user?.id) ? (
                                    session.participants?.find(p => p.userId === user?.id)?.status === 'CONFIRMED' ? (
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-50 text-green-600 border border-green-200">Confirmado</span>
                                    ) : (
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-200">Fila de Espera</span>
                                    )
                                ) : (
                                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-400 border border-slate-200">Ausente</span>
                                )}
                            </div>

                            {session.participants?.find(p => p.userId === user?.id) ? (
                                <Button
                                    onClick={handleLeaveSession}
                                    variant="danger-outline"
                                    isLoading={actionLoading}
                                    fullWidth
                                    icon={X}
                                >
                                    Cancelar Minha Presença
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleJoinSession}
                                    isLoading={actionLoading}
                                    fullWidth
                                    icon={Plus}
                                >
                                    Confirmar Minha Presença
                                </Button>
                            )}
                        </div>

                        {isAdmin && (() => {
                            const addablePlayers = allPlayers.filter(p => !session.participants?.some(part => part.userId === p.id));
                            const allSelected = addablePlayers.length > 0 && selectedBulkAddIds.length === addablePlayers.length;
                            return (
                                <div className="bg-slate-900 p-5 rounded-3xl shadow-xl text-white flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-black text-sm flex items-center gap-2"><UserPlus className="w-4 h-4 text-primary" /> Adicionar Jogadores (Admin)</h4>
                                            <p className="text-[10px] text-slate-400 font-bold">Selecione vários de uma vez e adicione todos juntos.</p>
                                        </div>
                                        {addablePlayers.length > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedBulkAddIds(allSelected ? [] : addablePlayers.map(p => p.id))}
                                                className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-wider shrink-0"
                                            >
                                                {allSelected ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                                                Todos
                                            </button>
                                        )}
                                    </div>

                                    {addablePlayers.length === 0 ? (
                                        <p className="text-xs text-slate-400 font-bold text-center py-3">Todos os jogadores já estão neste racha.</p>
                                    ) : (
                                        <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                                            {addablePlayers.map(p => {
                                                const checked = selectedBulkAddIds.includes(p.id);
                                                return (
                                                    <button
                                                        key={p.id}
                                                        type="button"
                                                        onClick={() => toggleBulkAddSelection(p.id)}
                                                        className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all active:scale-[0.98] ${checked ? 'bg-primary/20 border-primary' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`}
                                                    >
                                                        {checked ? <CheckSquare className="w-4 h-4 text-primary shrink-0" /> : <Square className="w-4 h-4 text-slate-500 shrink-0" />}
                                                        <span className="font-bold text-sm truncate">{p.nickname || p.name}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <button
                                        type="button"
                                        onClick={handleBulkAddPlayers}
                                        disabled={selectedBulkAddIds.length === 0 || bulkAdding}
                                        className="bg-primary text-white font-black text-xs px-4 rounded-xl hover:bg-primary-hover active:scale-95 transition-all disabled:opacity-50 h-[46px] flex items-center justify-center gap-2"
                                    >
                                        {bulkAdding ? (
                                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <UserPlus className="w-4 h-4" />
                                        )}
                                        Adicionar {selectedBulkAddIds.length > 0 ? `(${selectedBulkAddIds.length})` : ''}
                                    </button>
                                </div>
                            );
                        })()}

                        {isAdmin && (
                            <form onSubmit={handleAddGuest} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-3">
                                <div>
                                    <h4 className="font-black text-sm flex items-center gap-2 text-slate-800"><UserPlus className="w-4 h-4 text-primary" /> Adicionar Convidado</h4>
                                    <p className="text-[10px] text-slate-400 font-bold">Para quem vai completar o racha uma vez só, sem precisar criar conta.</p>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={guestName}
                                        onChange={e => setGuestName(e.target.value)}
                                        placeholder="Nome do convidado"
                                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-800 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!guestName.trim() || addingGuest}
                                        className="bg-primary text-white font-black text-xs px-4 rounded-xl hover:bg-primary-hover active:scale-95 transition-all disabled:opacity-50 h-[46px]"
                                    >
                                        {addingGuest ? (
                                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            'Adicionar'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <h3 className="font-black text-slate-800 text-sm flex items-center gap-2">
                                        <Users className="w-4 h-4 text-slate-400" /> Jogadores Confirmados
                                    </h3>
                                    <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-2.5 py-1 rounded-full border border-slate-300">
                                        {confirmedCount} / {session.maxPlayers}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    {session.participants?.filter(p => p.status === 'CONFIRMED').length === 0 ? (
                                        <div className="text-center py-6 text-xs text-slate-400 font-bold bg-white rounded-2xl border border-slate-100">
                                            Nenhum jogador confirmado ainda.
                                        </div>
                                    ) : (
                                        session.participants?.filter(p => p.status === 'CONFIRMED').map(p => {
                                            const player = p.user;
                                            if (!player) return null;
                                            const isPaidTracked = (isAdmin || player.id === user?.id) && !!session.price;
                                            return (
                                                <div
                                                    key={p.id}
                                                    className={`flex items-center justify-between p-4 border rounded-2xl transition-all ${isPaidTracked && p.isPaid ? 'bg-green-50/60 border-green-200' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
                                                >
                                                    <Link href={`/players/${player.id}`} className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full border-2 border-slate-100 shrink-0 relative overflow-hidden bg-slate-100">
                                                            <UserAvatar nickname={player.nickname || player.name} className="w-full h-full text-base" />
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-slate-800 text-sm">{player.nickname || player.name}</p>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase">{player.position}</p>
                                                        </div>
                                                    </Link>
                                                    <div className="flex items-center gap-2">
                                                        {isPaidTracked ? (
                                                            <button
                                                                onClick={() => handleTogglePaid(player.id, p.isPaid)}
                                                                disabled={payingUserId === player.id}
                                                                className={`flex items-center justify-center gap-1.5 w-[118px] py-2 rounded-xl border font-black text-[11px] uppercase tracking-wider transition-all active:scale-95 disabled:opacity-60 ${p.isPaid ? 'bg-green-500 text-white border-green-500 shadow-sm shadow-green-500/30' : 'bg-amber-50 text-amber-600 border-amber-200'}`}
                                                            >
                                                                {payingUserId === player.id ? (
                                                                    <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                                ) : p.isPaid ? (
                                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                                ) : (
                                                                    <Circle className="w-3.5 h-3.5" />
                                                                )}
                                                                {p.isPaid ? 'Pago' : 'Marcar Pago'}
                                                            </button>
                                                        ) : (
                                                            <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-black text-slate-500 text-[10px]">
                                                                {player.averageGrade?.toFixed(1) ?? '-'} Nota
                                                            </div>
                                                        )}
                                                        {isAdmin && (
                                                            <button
                                                                onClick={() => handleRemovePlayerManual(player.id)}
                                                                disabled={actionLoading}
                                                                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <h3 className="font-black text-slate-800 text-sm flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" /> Fila de Espera (Suplentes)
                                    </h3>
                                    <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-2.5 py-1 rounded-full border border-slate-300">
                                        {session.participants?.filter(p => p.status === 'WAITING_LIST').length || 0}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    {session.participants?.filter(p => p.status === 'WAITING_LIST').length === 0 ? (
                                        <div className="text-center py-6 text-xs text-slate-400 font-bold bg-white rounded-2xl border border-slate-100">
                                            Nenhum jogador na fila de espera.
                                        </div>
                                    ) : (
                                        session.participants?.filter(p => p.status === 'WAITING_LIST').map((p, index) => {
                                            const player = p.user;
                                            if (!player) return null;
                                            return (
                                                <div
                                                    key={p.id}
                                                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all border-l-4 border-l-amber-400"
                                                >
                                                    <Link href={`/players/${player.id}`} className="flex items-center gap-3">
                                                        <span className="text-xs font-black text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">#{index + 1}</span>
                                                        <div className="w-10 h-10 rounded-full border-2 border-slate-100 shrink-0 relative overflow-hidden bg-slate-100">
                                                            <UserAvatar nickname={player.nickname || player.name} className="w-full h-full text-base" />
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-slate-800 text-sm">{player.nickname || player.name}</p>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase">{player.position}</p>
                                                        </div>
                                                    </Link>
                                                    <div className="flex items-center gap-2">
                                                        <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-black text-slate-500 text-[10px]">
                                                            {player.averageGrade?.toFixed(1) ?? '-'} Nota
                                                        </div>
                                                        {isAdmin && (
                                                            <button
                                                                onClick={() => handleRemovePlayerManual(player.id)}
                                                                disabled={actionLoading}
                                                                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="space-y-4">
                        {session.teams?.map((team: Team) => {
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
                                                    <Link href={`/players/${p.id}`} className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full border-2 border-slate-100 overflow-hidden bg-slate-100 relative shadow-sm">
                                                            <UserAvatar nickname={p.nickname} className="w-full h-full text-xs" />
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-slate-800 text-sm tracking-tight">{p.nickname}</p>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{p.position}</p>
                                                        </div>
                                                    </Link>
                                                    <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-black text-slate-500 text-[10px]">
                                                        {p.averageGrade?.toFixed(1) ?? '-'}
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
                                // Substituições temporárias valem só para esta rodada (req 2.6)
                                round.substitutions?.forEach((sub) => {
                                    playerTeamMap[sub.inPlayerId] = sub.teamId;
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
                                                className="absolute -top-2 -right-2 bg-red-50 text-red-500 p-3 rounded-full border border-red-100 shadow-sm hover:bg-red-100 active:scale-95 transition-all"
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

                                        {round.substitutions && round.substitutions.length > 0 && (
                                            <div className="flex flex-col gap-0.5 text-[10px] text-amber-600 font-bold px-2 pt-2 border-t border-slate-50 mt-1">
                                                {round.substitutions.map((sub, i) => (
                                                    <span key={i} className="flex items-center gap-1">
                                                        <Repeat className="w-3 h-3" /> {sub.inPlayer?.nickname || sub.inPlayer?.name} entrou no lugar de {sub.outPlayer?.nickname || sub.outPlayer?.name}
                                                    </span>
                                                ))}
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
                            disabled={(confirmedCount !== 15 && confirmedCount !== 20) || isDrawing}
                            isLoading={isDrawing}
                            fullWidth
                            size="lg"
                            icon={Shuffle}
                        >
                            Sortear Times ({confirmedCount} confirmados)
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

            {showEditSession && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowEditSession(false)}>
                    <div
                        className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 text-slate-900"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Editar Racha</h2>
                            <button onClick={() => setShowEditSession(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSaveSession} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Título</label>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={e => setEditTitle(e.target.value)}
                                    placeholder="Ex: Racha de Sexta"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 font-bold text-slate-800 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Data e Horário</label>
                                <input
                                    type="datetime-local"
                                    required
                                    value={editDate}
                                    onChange={e => setEditDate(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 font-bold text-slate-800 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Limite de Jogadores</label>
                                <input
                                    type="number"
                                    min={2}
                                    max={100}
                                    required
                                    value={editMaxPlayers}
                                    onChange={e => setEditMaxPlayers(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 font-bold text-slate-800 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>
                            <Button type="submit" fullWidth size="lg" isLoading={savingSession}>
                                Salvar Alterações
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}