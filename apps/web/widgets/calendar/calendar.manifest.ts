import { createWidget } from "@commandcore/widget-sdk";

import { CalendarWidget } from "./calendar-widget";

export const calendarWidget = createWidget({
  manifest: {
    id: "calendar",
    title: "Calendar",
    description: "Today's schedule",
    defaultState: "normal",
    expandable: true,
    minimizable: true,
    refreshInterval: 60_000,
  },
  component: CalendarWidget,
});