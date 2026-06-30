import React from 'react';

const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-rose-500'
];

const getAvatarColor = (name: string) => {
    if (!name) return colors[0];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
};

interface UserAvatarProps {
    nickname?: string | null;
    className?: string;
}

export function UserAvatar({ nickname, className = "w-10 h-10 text-sm" }: UserAvatarProps) {
    const bgColor = getAvatarColor(nickname || '');
    const getInitial = () => {
        if (!nickname) return '?';
        return nickname.charAt(0).toUpperCase();
    };

    return (
        <div className={`flex items-center justify-center rounded-full text-white font-black shadow-inner overflow-hidden ${bgColor} ${className}`}>
            {getInitial()}
        </div>
    );
}
