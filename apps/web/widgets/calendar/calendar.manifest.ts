import { createWidget } from "@commandcore/widget-sdk";

import { CalendarWidget } from "./calendar-widget";

export const calendarWidget = createWidget({
  manifest: {
    id: "calendar",
    title: "Calendar",
    defaultState: "normal",
    expandable: true,
    minimizable: true,
  },
  component: CalendarWidget,
});