import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WidgetShellProps {
    title: string;
    children?: ReactNode;
    className?: string;
}

export function WidgetShell({
    title,
    children,
    className,
}: WidgetShellProps) {
    return (
        <section
            className={cn(
                "flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-lg backdrop-blur",
                className
            )}
        >
            <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">

                <h2 className="text-sm font-semibold tracking-wide text-zinc-100">
                    {title}
                </h2>

                <div className="flex items-center gap-2">

                    <button
                        className="h-3 w-3 rounded-full bg-yellow-400 transition hover:scale-110"
                        aria-label="Minimize Widget"
                    />

                    <button
                        className="h-3 w-3 rounded-full bg-green-400 transition hover:scale-110"
                        aria-label="Expand Widget"
                    />

                    <button
                        className="h-3 w-3 rounded-full bg-red-500 transition hover:scale-110"
                        aria-label="Hide Widget"
                    />

                </div>

            </header>

            <div className="flex flex-1 items-center justify-center p-6">

                {children ?? (
                    <p className="text-sm text-zinc-500">
                        Coming Soon
                    </p>
                )}

            </div>
        </section>
    );
}