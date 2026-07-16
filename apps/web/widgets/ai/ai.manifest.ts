import type { WidgetDefinition } from "@commandcore/widget-sdk";
import { AIWidget } from "./ai-widget";

export const aiWidget: WidgetDefinition = {
  id: "ai",

  title: "AI Panel",

  component: AIWidget,

  defaultState: "normal",

  gridClassName: "col-span-3 row-span-2"
};