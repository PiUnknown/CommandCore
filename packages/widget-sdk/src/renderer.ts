import type { WidgetModule } from "./widget";

export function createWidget(
  widget: WidgetModule,
): WidgetModule {
  return widget;
}

// Later this will handle:
// - lazy loading
// - permissions
// - lifecycle
// - telemetry
// - error boundaries

// For now it simply returns the widget.