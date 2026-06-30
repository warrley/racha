export function StatCard({
    icon,
    value,
    label,
    iconBg = "bg-slate-50",
    className = ""
}: {
    icon: React.ReactNode;
    value: string | number;
    label: string;
    iconBg?: string;
    className?: string;
}) {
    return (
        <div className={`bg-white p-5 rounded-3xl shadow-sm border border-slate-100 ${className}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xl ${iconBg}`}>
                {icon}
            </div>
            <div className="text-3xl font-black text-slate-800">{value}</div>
            <div className="text-xs font-bold text-slate-400 mt-1">{label}</div>
        </div>
    );
}
