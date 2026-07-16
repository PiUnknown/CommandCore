import type { WidgetDefinition } from "@commandcore/widget-sdk";
import { WidgetShell } from "./widget-shell";

interface WidgetRendererProps {
  widget: WidgetDefinition;
}

export function WidgetRenderer({
  widget,
}: WidgetRendererProps) {
  const Component = widget.component;

  return (
    <WidgetShell
      title={widget.title}
      className={widget.gridClassName}
    >
      <Component />
    </WidgetShell>
  );
}