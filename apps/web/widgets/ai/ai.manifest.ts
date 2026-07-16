import { createWidget } from "@commandcore/widget-sdk";

import { AIWidget } from "./ai-widget";

export const aiWidget = createWidget({
  manifest: {
    id: "ai",
    title: "AI Panel",
    defaultState: "normal",
    expandable: true,
    minimizable: true,
  },
  component: AIWidget,
});