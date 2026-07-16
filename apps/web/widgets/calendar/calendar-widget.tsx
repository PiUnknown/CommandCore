"use client";

import { CalendarDays } from "lucide-react";

import { useCalendar } from "./use-calendar";

export function CalendarWidget() {
  const { loading, events } = useCalendar();

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-zinc-500">
          Loading today's schedule...
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <CalendarDays
          size={34}
          className="text-zinc-600"
        />

        <p className="text-sm text-zinc-500">
          No events scheduled today.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {events.map((event) => (
        <article
          key={event.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">
              {event.title}
            </h3>

            <span className="text-xs text-zinc-500">
              {event.start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {event.location && (
            <p className="mt-2 text-sm text-zinc-400">
              📍 {event.location}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}