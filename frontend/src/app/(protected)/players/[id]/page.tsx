"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import Link from 'next/link';
import { Trophy, Medal, Goal, ChevronRight, ChevronLeft, CalendarDays, TrendingUp } from 'lucide-react';
import styles from '../../profile/profile.module.css';
import { getHexColor } from '@/lib/colors';
import { useAuth } from '@/contexts/AuthContext';

import { Player, SessionHistoryItem, Badge } from '@/types';

export default function PlayerProfileScreen() {
    const params = useParams();
    const router = useRouter();
    const playerId = params.id as string;
    const { user, loading: authLoading } = useAuth();

    const [profile, setProfile] = useState<Player | null>(null);
    const [history, setHistory] = useState<SessionHistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (authLoading) return;

        if (playerId === user?.id) {
            router.replace('/profile');
            return;
        }

        const fetchProfile = async () => {
            try {
                const [profileRes, historyRes] = await Promise.all([
                    api.get(`/players/${playerId}`),
                    api.get(`/players/${playerId}/history`)
                ]);
                setProfile(profileRes.data.player);
                setHistory(historyRes.data.history);
            } catch (err: any) {
                setError(err.response?.data?.error || 'Erro ao carregar o perfil');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [playerId, user, authLoading, router]);

    if (loading || authLoading) {
        return <div className={styles.loader}>Carregando perfil...</div>;
    }

    if (error || !profile) {
        return (
            <div className={styles.loader}>
                <p className={styles.errorText}>{error || 'Jogador não encontrado'}</p>
                <button onClick={() => router.back()} className={styles.btnDanger}>
                    Voltar
                </button>
            </div>
        );
    }

    const groupedBadges = profile.badges?.reduce((acc: Record<string, number>, badge: Badge) => {
        acc[badge.type] = (acc[badge.type] || 0) + 1;
        return acc;
    }, {}) || {};

    const badgeEntries = Object.entries(groupedBadges).map(([type, count]) => ({ type, count: count as number }));

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.heroGlow} />
                <div className={styles.heroTop} style={{ justifyContent: 'flex-start' }}>
                    <button onClick={() => router.back()} title="Voltar" className={styles.heroIconBtn}>
                        <ChevronLeft size={18} />
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
                                    <p className={styles.emptyStateDesc}>Esse jogador ainda não jogou nenhum racha.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
