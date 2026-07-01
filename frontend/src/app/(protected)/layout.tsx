import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("metanol.token")?.value;

    if (!token) {
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-24">
            <div className="hidden border-red-600 text-red-600 bg-green-100 "></div>
            {children}
            <BottomNav />
        </div>
    );
}
