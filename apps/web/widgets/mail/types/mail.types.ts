export type MailCategory =
  | "important"
  | "recruiter"
  | "newsletter";

export interface MailSummary {
  id: string;
  sender: string;
  subject: string;
  summary: string;
  category: MailCategory;
  receivedAt: Date;
}