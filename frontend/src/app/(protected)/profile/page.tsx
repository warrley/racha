"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';
import { Trophy, Medal, Goal, ChevronRight, LogOut, CalendarDays, Wallet, Check, Pencil, User, Mail, Lock, Eye, EyeOff, X, TrendingUp } from 'lucide-react';
import styles from './profile.module.css';
import { getHexColor } from '@/lib/colors';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import { Player, SessionHistoryItem, Badge } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

export default function ProfileScreen() {
    const { user, loading: authLoading, logout } = useAuth();
    const [profile, setProfile] = useState<Player | null>(null);
    const [history, setHistory] = useState<SessionHistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [pixKeyInput, setPixKeyInput] = useState('');
    const [savingPixKey, setSavingPixKey] = useState(false);
    const [pixKeySaved, setPixKeySaved] = useState(false);

    const [showEditProfile, setShowEditProfile] = useState(false);
    const [editName, setEditName] = useState('');
    const [editNickname, setEditNickname] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPosition, setEditPosition] = useState('MEIO');
    const [editPassword, setEditPassword] = useState('');
    const [editCurrentPassword, setEditCurrentPassword] = useState('');
    const [showEditPassword, setShowEditPassword] = useState(false);
    const [savingProfile, setSavingProfile] = useState(false);
    const [profileError, setProfileError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (!user) return;
                const userId = user.id;

                const [profileRes, historyRes] = await Promise.all([
                    api.get(`/players/${userId}`),
                    api.get(`/players/${userId}/history`)
                ]);

                setProfile(profileRes.data.player);
                setHistory(historyRes.data.history);
                setPixKeyInput(profileRes.data.player.pixKey || '');
                setEditName(profileRes.data.player.name || '');
                setEditNickname(profileRes.data.player.nickname || '');
                setEditEmail(profileRes.data.player.email || '');
                setEditPosition(profileRes.data.player.position || 'MEIO');
            } catch (err: any) {
                setError(err.message || 'Erro ao carregar o perfil');
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchProfile();
        }
    }, [user, authLoading]);

    const handleLogout = () => {
        logout();
    };

    const handleSavePixKey = async () => {
        try {
            setSavingPixKey(true);
            await api.put('/players', { pixKey: pixKeyInput.trim() || null });
            setProfile(prev => prev ? { ...prev, pixKey: pixKeyInput.trim() || null } : prev);
            setPixKeySaved(true);
            setTimeout(() => setPixKeySaved(false), 2000);
        } catch (e: any) {
            alert(e.response?.data?.error || 'Erro ao salvar chave Pix.');
        } finally {
            setSavingPixKey(false);
        }
    };

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setProfileError(null);
        try {
            setSavingProfile(true);
            const payload: Record<string, any> = {
                name: editName.trim(),
                nickname: editNickname.trim() || undefined,
                email: editEmail.trim(),
                position: editPosition
            };
            if (editPassword) {
                payload.password = editPassword;
                payload.currentPassword = editCurrentPassword;
            }

            const res = await api.put('/players', payload);
            if (res.data.error) {
                const err = res.data.error;
                setProfileError(typeof err === 'string' ? err : (Object.values(err)[0] as string[])?.[0] || 'Erro ao salvar perfil.');
                return;
            }
            setProfile(prev => prev ? { ...prev, name: editName.trim(), nickname: editNickname.trim(), email: editEmail.trim(), position: editPosition as any } : prev);
            setEditPassword('');
            setEditCurrentPassword('');
            setShowEditProfile(false);
        } catch (e: any) {
            setProfileError(e.response?.data?.error || 'Erro ao salvar perfil.');
        } finally {
            setSavingProfile(false);
        }
    };

    if (error) {
        return (
            <div className={styles.loader}>
                <p className={styles.errorText}>Erro: {error}</p>
                <button onClick={handleLogout} className={styles.btnDanger}>
                    Fazer Login Novamente
                </button>
            </div>
        );
    }

    if (loading || authLoading || !profile) {
        return <div className={styles.loader}>Carregando perfil...</div>;
    }

    const groupedBadges = profile?.badges?.reduce((acc: Record<string, number>, badge: Badge) => {
        acc[badge.type] = (acc[badge.type] || 0) + 1;
        return acc;
    }, {}) || {};

    const badgeEntries = Object.entries(groupedBadges).map(([type, count]) => ({ type, count: count as number }));

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroGlow} />
                <div className={styles.heroTop}>
                    <button
                        onClick={() => { setProfileError(null); setShowEditProfile(true); }}
                        title="Editar Perfil"
                        className={styles.heroIconBtn}
                    >
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={handleLogout}
                        title="Sair"
                        className={styles.heroIconBtn}
                    >
                        <LogOut size={18} />
                    </button>
                </div>
                <div className={styles.heroAvatar}>
                    {profile.nickname ? profile.nickname.charAt(0).toUpperCase() : '?'}
                </div>
                <h1 className={styles.heroName}>{profile.nickname}</h1>
                <p className={styles.heroSub}>{profile.position} • Nota Média {profile.averageGrade?.toFixed(1) ?? '-'}</p>
            </div>

            <main className={styles.mainContent}>
                <div className={styles.statsGrid}>
                    {[
                        { label: 'Rachas', value: profile.totalSessions || 0, icon: CalendarDays, bg: '#eff6ff', color: '#2563eb' },
                        { label: 'Gols', value: profile.totalGoals || 0, icon: Goal, bg: '#ecfdf5', color: '#059669' },
                        { label: 'Vitórias', value: profile.totalWins || 0, icon: Trophy, bg: '#fffbeb', color: '#d97706' },
                        { label: 'Aproveitamento', value: `${profile.winRate}%`, icon: TrendingUp, bg: '#f5f3ff', color: '#7c3aed' },
                    ].map(stat => (
                        <div key={stat.label} className={styles.statCard}>
                            <div className={styles.statIcon} style={{ backgroundColor: stat.bg }}>
                                <stat.icon size={16} color={stat.color} />
                            </div>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {profile.isAdmin && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <Wallet size={16} color="#16a34a" /> Chave Pix para Recebimento
                        </h2>
                        <div className="flex gap-2 items-center">
                            <input
                                type="text"
                                value={pixKeyInput}
                                onChange={(e) => setPixKeyInput(e.target.value)}
                                placeholder="E-mail, CPF, telefone ou chave aleatória"
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold text-slate-800 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <button
                                onClick={handleSavePixKey}
                                disabled={savingPixKey}
                                className={`h-[46px] px-4 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 ${pixKeySaved ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary-hover'}`}
                            >
                                {pixKeySaved ? <Check className="w-4 h-4" /> : null}
                                {pixKeySaved ? 'Salvo' : 'Salvar'}
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold mt-2 px-1">
                            Usada como padrão nos rachas que você criar. Cada racha pode sobrescrever com uma chave própria.
                        </p>
                    </section>
                )}

                {badgeEntries.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            <Medal size={16} color="#d97706" /> Conquistas
                        </h2>
                        <div className={styles.badgesList}>
                            {badgeEntries.map((badge) => (
                                <div key={badge.type} className={styles.badge}>
                                    <Trophy size={14} />
                                    {badge.type} {badge.count > 1 ? `x${badge.count}` : ''}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <Goal size={16} color="#3b82f6" /> Últimos Rachas
                    </h2>
                    <div className={styles.historyList}>
                        {history.length > 0 ? (
                            history.map((h, idx) => (
                                <Link key={idx} href={`/sessions/${h.sessionId}`} className={styles.historyCard}>
                                    <div>
                                        <div className={styles.historyDate}>
                                            {new Date(h.sessionDate).toLocaleDateString('pt-BR')}
                                        </div>
                                        <div className={styles.historyTitle}>
                                            {h.sessionTitle}
                                        </div>
                                    </div>
                                    <div className={styles.historyTeamContainer}>
                                        <div 
                                            className={styles.historyTeam} 
                                            style={{ 
                                                backgroundColor: `${getHexColor(h.teamColor)}15`, 
                                                color: getHexColor(h.teamColor),
                                                border: `1px solid ${getHexColor(h.teamColor)}30`
                                            }}
                                        >
                                            {h.teamName}
                                        </div>
                                        <ChevronRight size={16} className={styles.historyChevron} />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className={styles.emptyState}>
                                <CalendarDays className={styles.emptyStateIcon} />
                                <div>
                                    <h3 className={styles.emptyStateTitle}>Nenhum racha ainda</h3>
                                    <p className={styles.emptyStateDesc}>Você ainda não jogou nenhum racha.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {showEditProfile && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowEditProfile(false)}>
                    <div
                        className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 text-slate-900 max-h-[85vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Editar Perfil</h2>
                            <button onClick={() => setShowEditProfile(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSaveProfile} className="space-y-4">
                            <Input
                                label="Nome"
                                required
                                value={editName}
                                onChange={e => setEditName(e.target.value)}
                                icon={User}
                            />
                            <Input
                                label="Apelido"
                                value={editNickname}
                                onChange={e => setEditNickname(e.target.value)}
                                icon={User}
                            />
                            <Input
                                label="E-mail"
                                type="email"
                                required
                                value={editEmail}
                                onChange={e => setEditEmail(e.target.value)}
                                icon={Mail}
                            />
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">
                                    Posição
                                </label>
                                <select
                                    value={editPosition}
                                    onChange={e => setEditPosition(e.target.value)}
                                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none text-slate-700 font-bold"
                                >
                                    <option value="ZAGUEIRO">Zagueiro</option>
                                    <option value="MEIO">Meio Campo</option>
                                    <option value="ATACANTE">Atacante</option>
                                </select>
                            </div>
                            <Input
                                label="Nova Senha (deixe em branco para manter)"
                                type={showEditPassword ? 'text' : 'password'}
                                value={editPassword}
                                onChange={e => setEditPassword(e.target.value)}
                                placeholder="••••••••"
                                icon={Lock}
                                endElement={
                                    <button
                                        type="button"
                                        onClick={() => setShowEditPassword(!showEditPassword)}
                                        className="text-slate-300 hover:text-slate-500 transition-colors focus:outline-none"
                                    >
                                        {showEditPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                }
                            />
                            {editPassword && (
                                <Input
                                    label="Senha Atual (confirme para trocar)"
                                    type="password"
                                    required
                                    value={editCurrentPassword}
                                    onChange={e => setEditCurrentPassword(e.target.value)}
                                    placeholder="••••••••"
                                    icon={Lock}
                                />
                            )}
                            {profileError && <p className="text-xs font-bold text-red-500">{profileError}</p>}
                            <Button type="submit" fullWidth size="lg" isLoading={savingProfile}>
                                Salvar Alterações
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
