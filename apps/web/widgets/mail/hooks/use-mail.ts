"use client";

import { useEffect, useState } from "react";

import { mailRepository } from "../repositories/mail.repository";
import type { MailSummary } from "../types/mail.types";

export function useMail() {
  const [mails, setMails] = useState<MailSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInbox() {
      try {
        const data = await mailRepository.getInboxSummary();
        setMails(data);
      } finally {
        setLoading(false);
      }
    }

    loadInbox();
  }, []);

  return {
    mails,
    loading,
  };
}