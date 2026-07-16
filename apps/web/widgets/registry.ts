import type { WidgetModule } from "@commandcore/widget-sdk";

import { aiWidget } from "./ai";

export const widgetRegistry: WidgetModule[] = [
  aiWidget,
];