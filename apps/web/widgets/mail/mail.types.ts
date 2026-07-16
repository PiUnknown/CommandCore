export interface MailSummary {
    id: string;
    sender: string;
    subject: string;
    summary: string;
    category:
    | "important"
    | "recruiter"
    | "newsletter";
}