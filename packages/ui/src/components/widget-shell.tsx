import type { ReactNode } from "react";
import { Card } from "./card";
import { WidgetHeader } from "./widget-header";

interface WidgetShellProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function WidgetShell({
  title,
  className,
  children,
}: WidgetShellProps) {
  return (
    <Card
      className={`flex flex-col overflow-hidden ${className ?? ""}`}
    >
      <WidgetHeader
        title={title}
        actions={
          <>
            <button
              className="h-3 w-3 rounded-full bg-yellow-400"
              aria-label="Minimize"
            />

            <button
              className="h-3 w-3 rounded-full bg-green-400"
              aria-label="Expand"
            />

            <button
              className="h-3 w-3 rounded-full bg-red-500"
              aria-label="Hide"
            />
          </>
        }
      />

      <div className="flex-1 p-4">
        {children}
      </div>
    </Card>
  );
}