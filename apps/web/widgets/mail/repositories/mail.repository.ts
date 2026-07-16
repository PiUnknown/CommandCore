import type { MailSummary } from "../types/mail.types";

async function getInboxSummary(): Promise<MailSummary[]> {
  return [
    {
      id: "1",
      sender: "OpenAI",
      subject: "Welcome to CommandCore",
      summary: "This area will display AI-generated summaries of important emails.",
      category: "important",
      receivedAt: new Date(),
    },
    {
      id: "2",
      sender: "GitHub",
      subject: "Review Requested",
      summary: "A pull request is waiting for your review.",
      category: "important",
      receivedAt: new Date(),
    },
    {
      id: "3",
      sender: "Cursor",
      subject: "India Roadshow",
      summary: "Registration opens tomorrow.",
      category: "newsletter",
      receivedAt: new Date(),
    },
  ];
}

export const mailRepository = {
  getInboxSummary,
};