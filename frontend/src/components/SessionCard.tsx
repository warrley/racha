import { CalendarDays, MapPin, Play, Medal, Goal } from 'lucide-react';

import { Session } from '@/types';

interface SessionCardProps {
    session: Session;
    onClick: () => void;
    isFinished?: boolean;
}

export function SessionCard({ session, onClick, isFinished = false }: SessionCardProps) {
    return (
        <div 
            onClick={onClick}
            className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 active:scale-95 transition-all cursor-pointer relative overflow-hidden group hover:shadow-md"
        >
            <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest text-white z-20 ${session.status === 'OPEN' ? 'bg-amber-400' : session.status === 'IN_PROGRESS' ? 'bg-primary' : 'bg-slate-300 text-slate-600'}`}>
                {session.status === 'OPEN' ? 'Aberto' : session.status === 'IN_PROGRESS' ? 'Rolando' : 'Finalizado'}
            </div>
            
            <div className="relative z-10">
                <h3 className="text-xl font-black text-slate-800 tracking-tight leading-tight pr-16">
                    {session.title || 'Racha'}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-slate-500 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Quadra Principal</span>
                </div>
            </div>

            <div className="relative z-10 flex justify-between items-center pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500">
                    <CalendarDays className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">
                        {new Date(session.date).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>

            {isFinished ? (
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex justify-between items-center mt-2 relative z-10">
                    <div className="flex flex-col items-center gap-1 w-1/2 border-r border-slate-200">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MVP</span>
                        <div className="flex items-center gap-1">
                            <Medal className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-bold text-slate-800">{session.mvpPlayer?.nickname || '-'}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-1/2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Artilheiro</span>
                        <div className="flex items-center gap-1">
                            <Goal className="w-4 h-4 text-slate-500" />
                            <span className="text-xs font-bold text-slate-800">{session.topScorerPlayer?.nickname || '-'}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-t border-slate-100 pt-3 relative z-10">
                    <span>{session._count?.rounds || 0} partidas registradas</span>
                    <Play className="w-4 h-4 text-primary" />
                </div>
            )}
        </div>
    );
}
