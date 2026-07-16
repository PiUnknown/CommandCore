import { WidgetShell } from "@commandcore/ui";
import type { WidgetDefinition } from "@commandcore/widget-sdk";

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
      <Component expanded={false} />
    </WidgetShell>
  );
}