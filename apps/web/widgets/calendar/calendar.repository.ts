import type { CalendarEvent } from "./calendar.types";

export interface CalendarRepository {
  getToday(): Promise<CalendarEvent[]>;
}

export class MockCalendarRepository
  implements CalendarRepository
{
  async getToday(): Promise<CalendarEvent[]> {
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
      },
    ];
  }
}

export const calendarRepository =
  new MockCalendarRepository();