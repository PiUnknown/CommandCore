import type { WidgetDefinition } from "@commandcore/widget-sdk";

import { aiWidget } from "./ai";
import { mailWidget } from "./mail";

export const widgetRegistry: WidgetDefinition[] = [
  aiWidget,
  mailWidget,
];