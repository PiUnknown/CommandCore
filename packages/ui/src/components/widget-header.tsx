import type { ReactNode } from "react";

interface WidgetHeaderProps {
  title: string;
  actions?: ReactNode;
}

export function WidgetHeader({
  title,
  actions,
}: WidgetHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
      <h2 className="text-sm font-semibold tracking-wide">
        {title}
      </h2>

      <div className="flex items-center gap-2">
        {actions}
      </div>
    </header>
  );
}