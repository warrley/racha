import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function EmptyState({ icon: Icon, title, description, className = '' }: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <Icon className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-black text-slate-700">{title}</h3>
            <p className="text-slate-400 font-bold max-w-xs mt-1">{description}</p>
        </div>
    );
}
