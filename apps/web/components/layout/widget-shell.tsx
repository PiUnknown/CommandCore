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
                "rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden",
                className
            )}
        >
            <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                <h2 className="text-sm font-semibold tracking-wide text-zinc-100">
                    {title}
                </h2>

                <div className="flex gap-2">
                    <button className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <button className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <button className="h-2.5 w-2.5 rounded-full bg-red-400" />
                </div>
            </header>

            <div className="h-[calc(100%-49px)] p-4">
                {children}
            </div>
        </section>
    );
}