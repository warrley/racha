import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: LucideIcon;
    error?: string;
    endElement?: React.ReactNode;
}

export function Input({ label, icon: Icon, error, endElement, className = '', ...props }: InputProps) {
    return (
        <div className="space-y-2 w-full">
            {label && (
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-primary transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input 
                    className={`w-full bg-slate-50 border ${error ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary focus:ring-primary/10'} rounded-2xl py-4 text-slate-800 focus:outline-none focus:ring-4 focus:bg-white transition-all placeholder:text-slate-300 ${Icon ? 'pl-12' : 'pl-4'} ${endElement ? 'pr-12' : 'pr-4'} ${className}`}
                    {...props}
                />
                {endElement && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        {endElement}
                    </div>
                )}
            </div>
            {error && <p className="text-xs font-bold text-red-500 ml-1">{error}</p>}
        </div>
    );
}
