"use client";

import { useCalendar } from "./use-calendar";

export function CalendarWidget() {
  const { loading, events } = useCalendar();

  if (loading) {
    return (
      <p className="text-zinc-500">
        Loading calendar...
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {events.map((event) => (
        <div
          key={event.id}
          className="rounded-xl border border-zinc-800 p-3"
        >
          <p className="font-medium">
            {event.title}
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            {event.start.toLocaleTimeString()}
          </p>
        </div>
      ))}
    </div>
  );
}