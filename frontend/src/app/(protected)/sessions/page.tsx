"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { CalendarDays, Plus } from 'lucide-react';
import { Header } from '@/components/Header';
import { Tabs } from '@/components/Tabs';
import { EmptyState } from '@/components/EmptyState';
import { SessionCard } from '@/components/SessionCard';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Session } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

import { globalCache } from '@/lib/cache';

export default function SessionsListScreen() {
    const router = useRouter();
    const { isAdmin, loading: authLoading } = useAuth();
    const [activeTab, setActiveTab] = useState('active');
    const [sessions, setSessions] = useState<Session[]>(globalCache.sessions || []);
    const [loading, setLoading] = useState(!globalCache.sessions);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSessionTitle, setNewSessionTitle] = useState('');
    const [newSessionDate, setNewSessionDate] = useState('');
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                if (!globalCache.sessions) {
                    setLoading(true);
                }
                const res = await api.get('/sessions?limit=50');
                const fetched = res.data.sessions || [];
                setSessions(fetched);
                globalCache.sessions = fetched;
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchSessions();
        }
    }, [authLoading]);

    const activeSessions = sessions.filter(s => s.status === 'OPEN' || s.status === 'IN_PROGRESS');
    const historySessions = sessions.filter(s => s.status === 'FINISHED');
    const displaySessions = activeTab === 'active' ? activeSessions : historySessions;

    const openCreateModal = () => {
        const nextFriday = new Date();
        nextFriday.setDate(nextFriday.getDate() + (5 - 1 - nextFriday.getDay() + 7) % 7 + 1);
        nextFriday.setHours(20, 0, 0, 0);


        const offset = nextFriday.getTimezoneOffset();
        const localDate = new Date(nextFriday.getTime() - (offset * 60 * 1000));

        setNewSessionTitle(`Racha - ${nextFriday.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}`);
        setNewSessionDate(localDate.toISOString().slice(0, 16));
        setIsModalOpen(true);
    };

    const handleCreateSession = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsCreating(true);
            const res = await api.post('/sessions', {
                title: newSessionTitle,
                date: new Date(newSessionDate).toISOString()
            });
            setIsModalOpen(false);
            router.push(`/sessions/${res.data.session.id}`);
        } catch (e) {
            console.error("Erro ao criar racha", e);
            alert("Erro ao criar racha. Tente novamente.");
        } finally {
            setIsCreating(false);
        }
    };

    if (loading || authLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-primary font-bold">
                Carregando Rachas...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Header />

            <Tabs
                activeId={activeTab}
                onChange={setActiveTab}
                tabs={[
                    { id: 'active', label: 'Em Andamento / Próximos' },
                    { id: 'history', label: 'Histórico' }
                ]}
            />

            <main className="p-6 pb-32 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {displaySessions.length > 0 ? (
                    displaySessions.map((session) => (
                        <SessionCard 
                            key={session.id}
                            session={session}
                            isFinished={session.status === 'FINISHED'}
                            onClick={() => router.push(`/sessions/${session.id}`)}
                        />
                    ))
                ) : (
                    <EmptyState 
                        icon={CalendarDays}
                        title="Nenhum racha por aqui"
                        description="Não há rachas encontrados nesta aba no momento."
                    />
                )}
            </main>

            {isAdmin && (
                <div className="fixed bottom-24 left-0 right-0 px-6 z-40 pointer-events-none flex justify-end">
                    <button
                        onClick={openCreateModal}
                        className="pointer-events-auto bg-primary text-white w-14 h-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                </div>
            )}

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Criar Novo Racha"
            >
                <form onSubmit={handleCreateSession} className="p-6 space-y-5">
                    <Input
                        label="Título do Racha"
                        type="text"
                        value={newSessionTitle}
                        onChange={e => setNewSessionTitle(e.target.value)}
                        placeholder="Ex: Racha dos Campeões"
                        required
                    />
                    <Input
                        label="Data e Hora"
                        type="datetime-local"
                        value={newSessionDate}
                        onChange={e => setNewSessionDate(e.target.value)}
                        required
                    />

                    <div className="pt-2">
                        <Button
                            type="submit"
                            isLoading={isCreating}
                            fullWidth
                        >
                            Criar Racha
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
