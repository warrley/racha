"use client";

import { useState, useEffect } from 'react';
import { User, Flame, Goal } from 'lucide-react';
import { UserAvatar } from '@/components/UserAvatar';
import { api } from '@/lib/api';
import { Header } from '@/components/Header';
import { Tabs } from '@/components/Tabs';
import { EmptyState } from '@/components/EmptyState';

import { Player } from '@/types';

export default function RankingScreen() {
    const [activeTab, setActiveTab] = useState('rating');
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRanking = async () => {
            try {
                setLoading(true);
                if (activeTab === 'rating') {
                    const res = await api.get('/ranking');
                    setPlayers(res.data.ranking || []);
                } else {
                    const res = await api.get('/stats/top-scorers');
                    const scorers = res.data.topScorers || [];
                    const normalized = scorers.map((s: { rank: number; player: Player; totalGoals: number }) => ({
                        rank: s.rank,
                        id: s.player.id,
                        nickname: s.player.nickname,
                        avatarIndex: s.player.avatarIndex,
                        rating: s.totalGoals,
                        position: 'Goleador',
                        isOnFire: false
                    }));
                    setPlayers(normalized);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRanking();
    }, [activeTab]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-primary font-bold">
                Carregando...
            </div>
        );
    }

    const top1 = players.find(p => p.rank === 1);
    const top2 = players.find(p => p.rank === 2);
    const top3 = players.find(p => p.rank === 3);
    const rest = players.filter(p => (p.rank || 0) > 3);

    const renderPodiumSlot = (
        player: Player | undefined,
        rank: number,
        avatarSize: string,
        crown: boolean,
        podiumHeight: string,
        podiumColor: string,
        badgeColor: string,
        borderColor: string
    ) => {
        return (
            <div className={`flex flex-col items-center w-1/3 ${crown ? 'z-10 scale-105' : ''}`}>
                <div className="relative mb-2">
                    <div className={`${avatarSize} rounded-full border-4 ${borderColor} overflow-hidden shadow-lg bg-slate-50 flex items-center justify-center`}>
                        <UserAvatar nickname={player?.nickname || ''} className="w-full h-full text-lg" />
                    </div>
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${badgeColor} text-white text-xs font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm`}>#{rank}</div>
                </div>
                <div className="text-center w-full px-1">
                    <p className="text-xs font-black text-slate-800 leading-tight truncate">{player ? player.nickname : '-'}</p>
                    <p className="text-xs font-bold text-slate-400 mt-1 flex items-center justify-center gap-1">
                        {player && activeTab === 'rating' && <Flame className="w-3 h-3 text-orange-500 fill-orange-500 -mt-0.5" />}
                        {player && activeTab === 'goals' && <Goal className="w-3 h-3 text-slate-500 -mt-0.5" />}
                        {player ? player.rating : '-'} <span className="text-[9px] uppercase">{activeTab === 'rating' ? 'Pts' : 'Gols'}</span>
                    </p>
                </div>
                <div className={`w-full ${podiumColor} ${podiumHeight} mt-3 rounded-t-3xl shadow-sm border-x border-t ${crown ? 'border-amber-400/30' : 'border-slate-100'}`} />
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Header />

            <Tabs 
                activeId={activeTab}
                onChange={setActiveTab}
                tabs={[
                    { id: 'rating', label: 'Ranking Geral (Rating)' },
                    { id: 'goals', label: 'Artilheiros (Gols)' }
                ]}
            />

            <main className="px-6 pb-32 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-end justify-center w-full gap-2 mt-8 mb-12 h-64 sm:h-72">
                    {renderPodiumSlot(
                        top2,
                        2,
                        "w-16 h-16 sm:w-20 sm:h-20",
                        false,
                        "h-20 sm:h-24",
                        "bg-white",
                        "bg-slate-800",
                        "border-slate-300"
                    )}

                    {renderPodiumSlot(
                        top1,
                        1,
                        "w-20 h-20 sm:w-24 sm:h-24",
                        true,
                        "h-28 sm:h-32",
                        "bg-primary/5",
                        "bg-primary",
                        "border-amber-400 ring-4 ring-amber-400/20"
                    )}

                    {renderPodiumSlot(
                        top3,
                        3,
                        "w-14 h-14 sm:w-16 sm:h-16",
                        false,
                        "h-16 sm:h-20",
                        "bg-white",
                        "bg-amber-800",
                        "border-amber-700/30"
                    )}
                </div>

                <div className="w-full space-y-3 mb-10">
                    {rest.length > 0 ? rest.map((player) => (
                        <div key={player.rank} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between group active:scale-95 transition-all">
                            <div className="flex items-center gap-4">
                                <span className="w-6 text-sm font-black text-slate-400">#{player.rank}</span>
                                <div className="w-10 h-10 rounded-full border-2 border-slate-100 overflow-hidden bg-slate-100 shrink-0 relative">
                                    <UserAvatar nickname={player.nickname} className="w-full h-full text-sm" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-black text-slate-800 tracking-tight">{player.nickname}</p>
                                        {player.isOnFire && <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />}
                                    </div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{player.position}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-sm font-black text-slate-700">{player.rating} {activeTab === 'goals' && <span className="text-[10px] text-slate-400 ml-1">GOLS</span>}</span>
                                {player.isOnFire && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />}
                            </div>
                        </div>
                    )) : (
                        <EmptyState 
                            icon={User}
                            title="Nenhum outro jogador"
                            description="Não há outros jogadores no ranking ainda."
                        />
                    )}
                </div>
            </main>
        </div>
    );
}
