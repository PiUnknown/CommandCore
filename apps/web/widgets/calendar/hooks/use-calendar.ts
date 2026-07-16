"use client";

import { useEffect, useState } from "react";

import { calendarRepository } from "../repositories/calendar.repository";
import type { CalendarEvent } from "../types/calendar.types";

export function useCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await calendarRepository.getToday();
        setEvents(data);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return {
    loading,
    events,
  };
}