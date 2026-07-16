import type { BriefItem } from "./ai.types";

const items: BriefItem[] = [
  {
    id: "1",
    title: "Good Evening 👋",
    description: "Welcome to CommandCore."
  },
  {
    id: "2",
    title: "No calendar connected",
    description: "Connect Google Calendar to view today's agenda."
  },
  {
    id: "3",
    title: "No Gmail connected",
    description: "Mail summaries will appear here."
  }
];

export function AIWidget() {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article
          key={item.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
        >
          <h3 className="text-sm font-semibold">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}