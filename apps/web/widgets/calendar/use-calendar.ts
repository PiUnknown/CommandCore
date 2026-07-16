"use client";

import { useEffect, useState } from "react";

import { calendarRepository } from "./calendar.repository";
import type { CalendarEvent } from "./calendar.types";

export function useCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data =
        await calendarRepository.getToday();

      setEvents(data);
      setLoading(false);
    }

    load();
  }, []);

  return {
    loading,
    events,
  };
}