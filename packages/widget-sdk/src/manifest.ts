import type { WidgetId, WidgetState } from "@commandcore/types";

export interface WidgetManifest {
  id: WidgetId;
  title: string;
  description?: string;
  defaultState: WidgetState;
  expandable: boolean;
  minimizable: boolean;
  refreshInterval?: number;
}