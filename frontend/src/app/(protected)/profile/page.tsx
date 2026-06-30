"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import Link from 'next/link';
import { Trophy, Medal, Goal, ChevronRight, LogOut, CalendarDays } from 'lucide-react';
import styles from './profile.module.css';
import { getHexColor } from '@/lib/colors';

import { Player, SessionHistoryItem, Badge } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

export default function ProfileScreen() {
    const { user, loading: authLoading, logout } = useAuth();
    const [profile, setProfile] = useState<Player | null>(null);
    const [history, setHistory] = useState<SessionHistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.avatar}>
                        {profile.nickname ? profile.nickname.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div className={styles.userInfo}>
                        <h1>{profile.nickname}</h1>
                        <p>{profile.position} • Rating {profile.rating}</p>
                    </div>
                </div>
                <button 
                    onClick={handleLogout}
                    title="Sair"
                    className={styles.logoutButton}
                >
                    <LogOut size={24} />
                </button>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.statsGrid}>
                    {[
                        { label: 'Rachas', value: profile.totalSessions || 0 },
                        { label: 'Gols', value: profile.totalGoals || 0 },
                        { label: 'Vitórias', value: profile.totalWins || 0 },
                        { label: 'Aproveitamento', value: `${profile.winRate}%` },
                    ].map(stat => (
                        <div key={stat.label} className={styles.statCard}>
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
                                    <p className={styles.emptyStateDesc}>Você ainda não jogou nenhum racha.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
