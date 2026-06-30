export interface TabItem {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: TabItem[];
    activeId: string;
    onChange: (id: string) => void;
    className?: string;
    variant?: 'pill' | 'underline';
}

export function Tabs({ tabs, activeId, onChange, className = '', variant = 'pill' }: TabsProps) {
    if (variant === 'underline') {
        return (
            <div className={`flex border-b border-slate-100 p-2 bg-slate-50/50 ${className}`}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`flex-1 py-4 text-sm font-bold rounded-2xl transition-all duration-200 ${
                            activeId === tab.id
                                ? 'bg-white text-primary shadow-md'
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className={`px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar ${className}`}>
            {tabs.map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                        activeId === tab.id 
                            ? 'bg-white text-primary shadow-md border-b-2 border-primary' 
                            : 'text-slate-400 hover:bg-slate-100'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
