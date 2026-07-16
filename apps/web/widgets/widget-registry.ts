import type { WidgetDefinition } from "@commandcore/widget-sdk";

import { aiWidget } from "./ai";

export const widgetRegistry: WidgetDefinition[] = [
    aiWidget
];