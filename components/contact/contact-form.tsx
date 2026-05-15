"use client";

import { SubmissionConfirmDialog } from "@/components/ui/submission-confirm-dialog";
import { primaryContact } from "@/data/company";
import { contactServiceOptions } from "@/data/services/summaries";
import { ArrowRight } from "lucide-react";
import Script from "next/script";
import { type FormEvent, useCallback, useEffect, useRef, useState } from "react";

const SUBMIT_FAILURE_MESSAGE = `We couldn't send your request right now. Please call ${primaryContact.phoneDisplay} so we can assist you directly.`;
const REQUEST_HISTORY_STORAGE_KEY = "contact-form-request-history";
const MAX_SUCCESSFUL_SUBMISSIONS = 7;
const REQUEST_WINDOW_MS = 24 * 60 * 60 * 1000;
const TOO_MANY_REQUESTS_MESSAGE = `You've sent several requests recently. Please try again later, or call ${primaryContact.phoneDisplay} for immediate assistance.`;

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";
const IS_FORM_CONFIGURED =
  !!EMAILJS_PUBLIC_KEY && !!EMAILJS_SERVICE_ID && !!EMAILJS_TEMPLATE_ID && !!RECAPTCHA_SITE_KEY;

type GrecaptchaApi = {
  getResponse: () => string;
  reset: () => void;
  render: (
    container: HTMLElement,
    parameters: { sitekey: string },
  ) => number;
  ready: (callback: () => void) => void;
};

type RecaptchaWindow = Window & {
  grecaptcha?: GrecaptchaApi;
  onRecaptchaLoad?: () => void;
};

type SubmissionHistoryEntry = {
  total: number[];
};

type SubmissionHistory = SubmissionHistoryEntry;

type ContactFormValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
};

// --- reCAPTCHA 위젯 제어 ---

function getGrecaptcha(): GrecaptchaApi | null {
  if (typeof window === "undefined") {
    return null;
  }

  return (window as RecaptchaWindow).grecaptcha ?? null;
}

function safeCaptchaGetResponse(): string {
  try {
    return getGrecaptcha()?.getResponse().trim() ?? "";
  } catch {
    return "";
  }
}

function safeCaptchaReset(): void {
  try {
    getGrecaptcha()?.reset();
  } catch {
    // Ignore reset failures from a removed or unavailable widget.
  }
}

// --- 제출 횟수 제한 (localStorage 기반) ---

function getRecentTimestamps(timestamps: number[], now: number): number[] {
  return timestamps.filter((timestamp) => now - timestamp < REQUEST_WINDOW_MS);
}

function createEmptySubmissionHistory(): SubmissionHistory {
  return {
    total: [],
  };
}

function pruneSubmissionHistory(
  history: SubmissionHistory,
  now: number,
): SubmissionHistory {
  const total = getRecentTimestamps(history.total, now);

  return {
    total,
  };
}

function readSubmissionHistory(): SubmissionHistory {
  try {
    const raw = localStorage.getItem(REQUEST_HISTORY_STORAGE_KEY);
    if (!raw) return createEmptySubmissionHistory();
    const parsed = JSON.parse(raw) as SubmissionHistory;
    if (!Array.isArray(parsed.total)) {
      return createEmptySubmissionHistory();
    }

    return {
      total: parsed.total.filter(Number.isFinite),
    };
  } catch {
    return createEmptySubmissionHistory();
  }
}

function writeSubmissionHistory(history: SubmissionHistory): void {
  try {
    localStorage.setItem(
      REQUEST_HISTORY_STORAGE_KEY,
      JSON.stringify(history),
    );
  } catch {
    // Ignore storage failures in private browsing or restricted environments.
  }
}

function getRecentSuccessfulSubmissionCounts(): {
  totalCount: number;
} {
  const history = pruneSubmissionHistory(readSubmissionHistory(), Date.now());

  writeSubmissionHistory(history);

  return {
    totalCount: history.total.length,
  };
}

function recordSuccessfulSubmission(): void {
  const now = Date.now();
  const history = pruneSubmissionHistory(readSubmissionHistory(), now);

  history.total.push(now);
  writeSubmissionHistory(history);
}

// --- 폼 값 추출 ---

function getString(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
}

function getContactFormValues(form: HTMLFormElement): ContactFormValues {
  const formData = new FormData(form);

  return {
    fullName: getString(formData, "name"),
    company: getString(formData, "company"),
    email: getString(formData, "email"),
    phone: getString(formData, "phone"),
    service: getString(formData, "service"),
    projectDetails: getString(formData, "projectDetails"),
  };
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmingSubmit, setIsConfirmingSubmit] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [previewData, setPreviewData] = useState<ContactFormValues | null>(
    null,
  );

  // reCAPTCHA 위젯 렌더링 (스크립트 로드 완료 후 또는 콜백으로 호출)
  const renderCaptcha = useCallback(() => {
    const grecaptcha = getGrecaptcha();
    if (!grecaptcha || !captchaRef.current || !RECAPTCHA_SITE_KEY) {
      return;
    }

    grecaptcha.ready(() => {
      if (!captchaRef.current) {
        return;
      }

      const freshDiv = document.createElement("div");
      captchaRef.current.replaceChildren(freshDiv);
      grecaptcha.render(freshDiv, {
        sitekey: RECAPTCHA_SITE_KEY,
      });
    });
  }, []);

  // 스크립트가 이미 로드됐으면 바로 렌더, 아니면 콜백 등록
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      return;
    }

    if (getGrecaptcha()) {
      renderCaptcha();
      return;
    }

    (window as RecaptchaWindow).onRecaptchaLoad = renderCaptcha;

    return () => {
      (window as RecaptchaWindow).onRecaptchaLoad = undefined;
    };
  }, [renderCaptcha]);

  // 폼 제출: 유효성 검사 → 확인 다이얼로그 표시
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!IS_FORM_CONFIGURED) {
      setIsSubmitError(true);
      setSubmitMessage("Contact form is not configured yet.");
      return;
    }

    const captchaToken = safeCaptchaGetResponse();

    if (!captchaToken) {
      setIsSubmitError(true);
      setSubmitMessage("Please confirm you are not a robot.");
      return;
    }

    const payload = getContactFormValues(event.currentTarget);
    const { totalCount } = getRecentSuccessfulSubmissionCounts();

    if (totalCount >= MAX_SUCCESSFUL_SUBMISSIONS) {
      safeCaptchaReset();
      setIsSubmitError(true);
      setSubmitMessage(TOO_MANY_REQUESTS_MESSAGE);
      return;
    }

    setPreviewData(payload);
    setIsSubmitError(false);
    setSubmitMessage("");
    setIsConfirmingSubmit(true);
  };

  // 확인 다이얼로그에서 최종 전송: captcha 재검증 → EmailJS API 호출
  const handleConfirmSubmit = async () => {
    if (isSubmitting || !formRef.current) {
      return;
    }

    const captchaToken = safeCaptchaGetResponse();

    if (!captchaToken) {
      safeCaptchaReset();
      setIsConfirmingSubmit(false);
      setIsSubmitError(true);
      setSubmitMessage("Please confirm you are not a robot.");
      return;
    }

    const payload = getContactFormValues(formRef.current);

    setIsSubmitting(true);
    setIsSubmitError(false);
    setSubmitMessage("");

    try {
      const response = await fetch(EMAILJS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            full_name: payload.fullName,
            company: payload.company,
            email: payload.email,
            phone: payload.phone,
            service: payload.service,
            project_details: payload.projectDetails,
            reply_to: payload.email,
            "g-recaptcha-response": captchaToken,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(SUBMIT_FAILURE_MESSAGE);
      }

      formRef.current.reset();
      safeCaptchaReset();
      recordSuccessfulSubmission();
      setPreviewData(null);
      setIsConfirmingSubmit(false);
      setSubmitMessage("Your request has been sent. We will contact you.");
    } catch {
      safeCaptchaReset();
      setIsSubmitError(true);
      setIsConfirmingSubmit(false);
      setSubmitMessage(SUBMIT_FAILURE_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {RECAPTCHA_SITE_KEY ? (
        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          strategy="afterInteractive"
        />
      ) : null}

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-foreground"
            >
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="Acme Manufacturing"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="john@acme.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground"
          >
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none"
            defaultValue=""
          >
            <option value="">Select a service</option>
            {contactServiceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="projectDetails"
            className="block text-sm font-medium text-foreground"
          >
            Project Details *
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            required
            maxLength={3000}
            rows={5}
            className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            placeholder="Please describe your project requirements, timeline, and any specific needs..."
          />
        </div>

        {RECAPTCHA_SITE_KEY ? (
          <div ref={captchaRef} className="overflow-x-auto" />
        ) : (
          <p className="text-sm text-destructive">
            reCAPTCHA site key is missing.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>

        {submitMessage ? (
          <p
            aria-live="polite"
            className={`text-sm ${
              isSubmitError ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {submitMessage}
          </p>
        ) : null}
      </form>

      <SubmissionConfirmDialog
        open={isConfirmingSubmit}
        onOpenChange={setIsConfirmingSubmit}
        isSubmitting={isSubmitting}
        title="Confirm Your Request"
        description="Please review the project details before sending."
        fields={[
          { label: "Name", value: previewData?.fullName },
          { label: "Company", value: previewData?.company },
          { label: "Service", value: previewData?.service, fullWidth: true },
          { label: "Email", value: previewData?.email, fullWidth: true },
        ]}
        notice={<p>We will review your requirements and contact you.</p>}
        cancelLabel="Edit Details"
        confirmLabel="Confirm & Send"
        onConfirm={handleConfirmSubmit}
      />
    </>
  );
}
