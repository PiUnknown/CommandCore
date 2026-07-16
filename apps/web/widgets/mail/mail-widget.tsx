import type { MailSummary } from "./mail.types";

const mails: MailSummary[] = [
    {
        id: "1",
        sender: "OpenAI",
        subject: "Welcome to CommandCore",
        summary: "This area will show AI generated summaries.",
        category: "important",
    },
    {
        id: "2",
        sender: "GitHub",
        subject: "Pull Request Review",
        summary: "Your latest pull request is waiting for review.",
        category: "important",
    },
];

export function MailWidget() {
    return (
        <div className="space-y-3">
            {mails.map((mail) => (
                <article
                    key={mail.id}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="font-medium">{mail.sender}</h3>

                        <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">
                            {mail.category}
                        </span>
                    </div>

                    <p className="mt-2 text-sm font-medium">
                        {mail.subject}
                    </p>

                    <p className="mt-2 text-sm text-zinc-400">
                        {mail.summary}
                    </p>
                </article>
            ))}
        </div>
    );
}