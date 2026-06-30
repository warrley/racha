import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    showBack?: boolean;
    onBack?: () => void;
    rightElement?: React.ReactNode;
    leftElement?: React.ReactNode;
}

export function Header({ title, subtitle, showBack = false, onBack, rightElement, leftElement }: HeaderProps) {
    const router = useRouter();

    const handleBack = () => {
        if (onBack) onBack();
        else router.back();
    };

    return (
        <header className="bg-white px-5 py-4 flex justify-between items-center sticky top-0 z-40 shadow-sm border-b border-slate-100 min-h-10">
            <div className="flex items-center gap-3">
                {showBack && (
                    <button 
                        onClick={handleBack}
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-200 hover:bg-slate-100 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}
                {leftElement}
                <div>
                    {title ? (
                        typeof title === 'string' ? (
                            <h1 className="text-xl font-black text-slate-900 tracking-tight">{title}</h1>
                        ) : title
                    ) : (
                        <h1 className="text-xl font-black italic tracking-tighter text-primary leading-none mt-0.5">
                            Super<span className="text-slate-800">Campeões</span>
                        </h1>
                    )}
                    {subtitle && (
                        <div className="text-xs font-bold text-slate-400 mt-1">{subtitle}</div>
                    )}
                </div>
            </div>
            {rightElement && (
                <div>{rightElement}</div>
            )}
        </header>
    );
}
