import { Bell, Settings } from "lucide-react";

export function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-8">

            <div>
                <h1 className="text-2xl font-bold">
                    CommandCore
                </h1>

                <p className="text-sm text-zinc-500">
                    Your Personal Command Center
                </p>
            </div>

            <div className="flex items-center gap-6">

                <Bell
                    size={20}
                    className="cursor-pointer text-zinc-400 transition hover:text-white"
                />

                <Settings
                    size={20}
                    className="cursor-pointer text-zinc-400 transition hover:text-white"
                />

                <div className="flex items-center gap-3">

                    <div className="h-10 w-10 rounded-full bg-zinc-700" />

                    <div>
                        <p className="font-medium">
                            Om
                        </p>

                        <p className="text-xs text-zinc-500">
                            Engineering Student
                        </p>
                    </div>

                </div>

            </div>

        </header>
    );
}