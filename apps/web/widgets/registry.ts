import type { WidgetModule } from "@commandcore/widget-sdk";

import { aiWidget } from "./ai";
import { calendarWidget } from "./calendar";

export const widgetRegistry: WidgetModule[] = [
  aiWidget,
  calendarWidget,
];