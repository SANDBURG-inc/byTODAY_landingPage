import Link from "next/link";
import { User } from "lucide-react";

export function DashboardHeader() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <img src="/logo_light.svg" alt="오늘까지" className="h-8" />
                </Link>
                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600">
                    <User size={20} />
                </button>
            </div>
        </header>
    );
}
