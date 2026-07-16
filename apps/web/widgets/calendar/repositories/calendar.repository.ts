import type { CalendarEvent } from "../types/calendar.types";

async function getToday(): Promise<CalendarEvent[]> {
  return [
    {
      id: "1",
      title: "CommandCore Development",
      start: new Date(),
      end: new Date(Date.now() + 1000 * 60 * 90),
      location: "VS Code",
    },
    {
      id: "2",
      title: "Gym",
      start: new Date(Date.now() + 1000 * 60 * 180),
      end: new Date(Date.now() + 1000 * 60 * 240),
      location: "Fitness Center",
    },
  ];
}

export const calendarRepository = {
  getToday,
};