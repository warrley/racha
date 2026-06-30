"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, CalendarDays, User } from "lucide-react";

export function BottomNav() {
    const pathname = usePathname();

    const tabs = [
        { name: "Home", href: "/home", icon: Home },
        { name: "Ranking", href: "/ranking", icon: Trophy },
        { name: "Rachas", href: "/sessions", icon: CalendarDays },
        { name: "Perfil", href: "/profile", icon: User },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
            {tabs.map((tab) => {
                const isActive = pathname.startsWith(tab.href);
                const Icon = tab.icon;

                return (
                    <Link key={tab.name} href={tab.href} className="flex flex-col items-center gap-1 group relative">
                        {isActive && (
                            <div className="w-12 h-1 rounded-full bg-primary absolute -top-3 opacity-100" />
                        )}
                        <Icon className={`w-6 h-6 transition-colors ${isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600"}`} />
                        <span className={`text-xs font-black transition-colors ${isActive ? "text-primary" : "text-slate-400"}`}>
                            {tab.name}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
