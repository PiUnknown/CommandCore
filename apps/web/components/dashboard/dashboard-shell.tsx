import { AppHeader } from "@/components/layout/app-header";
import { DashboardGrid } from "@/components/layout/dashboard-grid";

export function DashboardShell() {
    return (
        <div className="flex h-screen flex-col bg-zinc-950">

            <AppHeader />

            <div className="flex-1 overflow-hidden">
                <DashboardGrid />
            </div>

        </div>
    );
}