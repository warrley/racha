import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'danger-outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    icon?: LucideIcon;
    isLoading?: boolean;
}

export function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false, 
    icon: Icon,
    isLoading,
    className = '',
    disabled,
    ...props 
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-3 font-black transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:scale-100";
    
    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02]",
        secondary: "bg-white text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50",
        danger: "bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-700",
        "danger-outline": "bg-red-50 text-red-600 border border-red-100 shadow-sm hover:bg-red-100",
        ghost: "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800"
    };

    const sizes = {
        sm: "py-2 px-4 text-xs rounded-xl",
        md: "py-4 px-6 text-sm rounded-2xl",
        lg: "py-5 px-8 text-base rounded-2xl"
    };

    const classes = [
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
    ].filter(Boolean).join(" ");

    return (
        <button 
            className={classes} 
            disabled={disabled || isLoading} 
            {...props}
        >
            {isLoading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : Icon ? (
                <Icon className="w-5 h-5" />
            ) : null}
            {children}
        </button>
    );
}
