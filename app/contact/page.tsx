"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Script from "next/script";

import { useState } from "react";

const PRIMARY_CONTACT_PHONE_DISPLAY = "+1 (770)-557-0019";
const PRIMARY_CONTACT_PHONE_LINK = "+17705570019";
const SUBMIT_FAILURE_MESSAGE = `We couldn't send your request right now. Please call ${PRIMARY_CONTACT_PHONE_DISPLAY} so we can assist you directly.`;
const REQUEST_HISTORY_STORAGE_KEY = "contact-form-request-history";
const MAX_SUCCESSFUL_SUBMISSIONS = 7;
const MAX_SUCCESSFUL_SUBMISSIONS_PER_SERVICE = 1;
const REQUEST_WINDOW_MS = 24 * 60 * 60 * 1000;
const TOO_MANY_REQUESTS_MESSAGE = `You've sent several requests recently. Please try again later, or call ${PRIMARY_CONTACT_PHONE_DISPLAY} for immediate assistance.`;
const DUPLICATE_SERVICE_SUBMISSION_MESSAGE = `You've already submitted an inquiry for this service. For additional assistance, please call ${PRIMARY_CONTACT_PHONE_DISPLAY}.`;

const offices = [
  {
    name: "Headquarters",
    city: "Duluth, GA",
    address: "3483 Satellite Blvd. Suite 100\nDuluth, GA 30096",
    phone: PRIMARY_CONTACT_PHONE_DISPLAY,
    email: "info@wellinsinc.com",
  },
  {
    name: "Texas Office",
    city: "Houston, TX",
    address: "5678 Energy Boulevard\nHouston, TX 77001",
    phone: "+1 (713) 555-5678",
    email: "texas@wellinsinc.com",
  },
  {
    name: "Georgia Office",
    city: "Atlanta, GA",
    address: "9012 Manufacturing Way\nAtlanta, GA 30303",
    phone: "+1 (404) 555-9012",
    email: "georgia@wellinsinc.com",
  },
];

const services = [
  "Equipment Installation",
  "Industrial Piping",
  "HVAC System",
  "Insulation & Jacketing",
  "High-Pressure Vessels",
  "Fire Protection",
  "Other",
];

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  projectDetails: "",
};

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

type GrecaptchaApi = {
  getResponse: () => string;
  reset: () => void;
};

type SubmissionHistoryEntry = {
  total: number[];
  services: Record<string, number[]>;
};

type SubmissionHistory = Record<string, SubmissionHistoryEntry>;

// 함수 
function getGrecaptcha(): GrecaptchaApi | null {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    (
      window as Window & {
        grecaptcha?: GrecaptchaApi;
      }
    ).grecaptcha ?? null
  );
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function normalizeService(value: string): string {
  return value.trim().toLowerCase();
}

function getRecentTimestamps(timestamps: number[], now: number): number[] {
  return timestamps.filter((timestamp) => now - timestamp < REQUEST_WINDOW_MS);
}

// 로컬 스토리지에서 제출 기록을 읽고 유효한 형식으로 정규화하여 반환하는 함수
// 사용자의 제출횟수를 추적하여 제출 빈도 제한을 구현하는 데 사용 
  // 데이터가 없거나 형식이 잘못된 경우 빈 객체 반환
function readSubmissionHistory(): SubmissionHistory {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const rawHistory = window.localStorage.getItem(REQUEST_HISTORY_STORAGE_KEY);

    if (!rawHistory) {
      return {};
    }

    const parsedHistory = JSON.parse(rawHistory) as unknown;

    if (
      !parsedHistory ||
      typeof parsedHistory !== "object" ||
      Array.isArray(parsedHistory)
    ) {
      return {};
    }

    const history: SubmissionHistory = {};

    // 로컬 스토리지에서 읽은 데이터를 검증하고 정규화하여 유효한 형식으로 변환
    for (const [email, entry] of Object.entries(parsedHistory)) {
      if (Array.isArray(entry)) {
        const validTimestamps = entry.filter(
          (timestamp): timestamp is number =>
            typeof timestamp === "number" && Number.isFinite(timestamp),
        );

        if (validTimestamps.length > 0) {
          history[email] = {
            total: validTimestamps,
            services: {},
          };
        }

        continue;
      }

      if (!entry || typeof entry !== "object") {
        continue;
      }

      const total = Array.isArray((entry as { total?: unknown }).total)
        ? (entry as { total: unknown[] }).total.filter(
            (timestamp): timestamp is number =>
              typeof timestamp === "number" && Number.isFinite(timestamp),
          )
        : [];
      const rawServices = (entry as { services?: unknown }).services;
      const services: Record<string, number[]> = {};

      if (
        rawServices &&
        typeof rawServices === "object" &&
        !Array.isArray(rawServices)
      ) {
        for (const [service, timestamps] of Object.entries(rawServices)) {
          if (!Array.isArray(timestamps)) {
            continue;
          }

          const normalizedService = normalizeService(service);

          if (!normalizedService) {
            continue;
          }

          const validTimestamps = timestamps.filter(
            (timestamp): timestamp is number =>
              typeof timestamp === "number" && Number.isFinite(timestamp),
          );

          if (validTimestamps.length > 0) {
            services[normalizedService] = validTimestamps;
          }
        }
      }

      if (total.length > 0 || Object.keys(services).length > 0) {
        history[email] = {
          total,
          services,
        };
      }
    }

    return history;
  } catch {
    return {};
  }
}

function writeSubmissionHistory(history: SubmissionHistory): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      REQUEST_HISTORY_STORAGE_KEY,
      JSON.stringify(history),
    );
  } catch {
    // ignore
  }
}

function getRecentSuccessfulSubmissionCounts(
  email: string,
  service: string,
): {
  serviceCount: number;
  totalCount: number;
} {
  const normalizedEmail = normalizeEmail(email);
  const normalizedService = normalizeService(service);

  if (!normalizedEmail) {
    return {
      serviceCount: 0,
      totalCount: 0,
    };
  }

  const now = Date.now();
  const history = readSubmissionHistory();
  const existingEntry = history[normalizedEmail] ?? {
    total: [],
    services: {},
  };
  const total = getRecentTimestamps(existingEntry.total, now);
  const services: Record<string, number[]> = {};

  for (const [serviceKey, timestamps] of Object.entries(existingEntry.services)) {
    const recentTimestamps = getRecentTimestamps(timestamps, now);

    if (recentTimestamps.length > 0) {
      services[serviceKey] = recentTimestamps;
    }
  }

  if (total.length > 0 || Object.keys(services).length > 0) {
    history[normalizedEmail] = {
      total,
      services,
    };
  } else {
    delete history[normalizedEmail];
  }

  writeSubmissionHistory(history);

  return {
    serviceCount: normalizedService ? (services[normalizedService] ?? []).length : 0,
    totalCount: total.length,
  };
}

function recordSuccessfulSubmission(email: string, service: string): void {
  const normalizedEmail = normalizeEmail(email);
  const normalizedService = normalizeService(service);

  if (!normalizedEmail) {
    return;
  }

  const now = Date.now();
  const history = readSubmissionHistory();
  const existingEntry = history[normalizedEmail] ?? {
    total: [],
    services: {},
  };
  const total = getRecentTimestamps(existingEntry.total, now);
  const services: Record<string, number[]> = {};

  for (const [serviceKey, timestamps] of Object.entries(existingEntry.services)) {
    const recentTimestamps = getRecentTimestamps(timestamps, now);

    if (recentTimestamps.length > 0) {
      services[serviceKey] = recentTimestamps;
    }
  }

  total.push(now);

  if (normalizedService) {
    const serviceSubmissions = services[normalizedService] ?? [];

    serviceSubmissions.push(now);
    services[normalizedService] = serviceSubmissions;
  }

  history[normalizedEmail] = {
    total,
    services,
  };
  writeSubmissionHistory(history);
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitError, setIsSubmitError] = useState(false);

  // 폼 제출 핸들러: 허니팟, reCAPTCHA, 제출 빈도 제한을 포함한 다단계 검증 및 EmailJS API 호출
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const hp = String(new FormData(form).get("hp") ?? "").trim();
    

    // 허니팟 필드가 채워진 경우 스팸으로 간주하고 즉시 종료
    if (hp) {
      setIsSubmitError(false);
      setFormData(initialFormData);
      form.reset();
      setSubmitMessage("Your request has been sent. We will contact you soon.");
      return;
    }

    // 필수 EmailJS 설정이 누락된 경우 사용자에게 알리고 제출 중단  
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setIsSubmitError(true);
      setSubmitMessage("Contact form is not configured yet.");
      return;
    }

    // reCAPTCHA 사이트 키가 누락된 경우 사용자에게 알리고 제출(테스트 용 추후 변경)
    if (!RECAPTCHA_SITE_KEY) {
      setIsSubmitError(true);
      setSubmitMessage("reCAPTCHA is not configured yet.");
      return;
    }


    const grecaptcha = getGrecaptcha();
    const captchaToken = grecaptcha?.getResponse().trim() ?? "";

    // reCAPTCHA 응답이 없는 경우 사용자에게 알리고 제출 중단
    if (!captchaToken) {
      setIsSubmitError(true);
      setSubmitMessage("Please confirm you are not a robot.");
      return;
    }

    // 동일한 이메일로 최근에 여러 번 성공적으로 제출한 경우 제출을 차단하여 남용 방지
    const { serviceCount, totalCount } = getRecentSuccessfulSubmissionCounts(
      formData.email,
      formData.service,
    );

    if (totalCount >= MAX_SUCCESSFUL_SUBMISSIONS) {
      grecaptcha?.reset();
      setIsSubmitError(true);
      setSubmitMessage(TOO_MANY_REQUESTS_MESSAGE);
      return;
    }

    if (serviceCount >= MAX_SUCCESSFUL_SUBMISSIONS_PER_SERVICE) {
      grecaptcha?.reset();
      setIsSubmitError(true);
      setSubmitMessage(DUPLICATE_SERVICE_SUBMISSION_MESSAGE);
      return;
    }

    const payload = {
      fullName: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      project_details: formData.projectDetails,
      captchaToken,
    };

    setIsSubmitting(true);
    setIsSubmitError(false);
    setSubmitMessage("");

    try {
      const response = await fetch(EMAILJS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // EmailJS API에 필요한 형식으로 페이로드 구성
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
            project_details: payload.project_details,
            reply_to: payload.email,
            "g-recaptcha-response": payload.captchaToken,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(SUBMIT_FAILURE_MESSAGE);
      }

      setFormData(initialFormData);
      form.reset();
      grecaptcha?.reset();
      recordSuccessfulSubmission(payload.email, payload.service);
      setSubmitMessage("Your request has been sent. We will contact you soon.");
    } catch {
      grecaptcha?.reset();
      setIsSubmitError(true);
      setSubmitMessage(SUBMIT_FAILURE_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {RECAPTCHA_SITE_KEY ? (
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      ) : null}
      <main>
        <Navigation />
        <PageHeader
          eyebrow="Contact Us"
          title="Let's Build Together"
          description="Ready to discuss your project? Our team of experts is here to help."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                  Request a <span className="font-semibold">Quote</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form below and one of our team members will be in
                  touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                        required
                        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
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
                        required
                        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                        placeholder="Acme Manufacturing"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
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
                        required
                        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                        placeholder="john@acme.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
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
                        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
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
                      required
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
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
                      required
                      maxLength={3000}
                      rows={5}
                      className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDetails: e.target.value,
                        })
                      }
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      {formData.projectDetails.length}/3000 characters
                    </p>
                  </div>
                  <input
                    name="hp"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  {RECAPTCHA_SITE_KEY ? (
                    <div
                      className="g-recaptcha overflow-x-auto"
                      data-sitekey={RECAPTCHA_SITE_KEY}
                    />
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
                      className={`text-sm ${isSubmitError ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {submitMessage}
                    </p>
                  ) : null}
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                  Get in <span className="font-semibold">Touch</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Reach out directly or visit one of our offices.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Main Line</p>
                      <a
                        href={`tel:${PRIMARY_CONTACT_PHONE_LINK}`}
                        className="text-foreground hover:text-accent"
                      >
                        {PRIMARY_CONTACT_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:info@wellinsinc.com"
                        className="text-foreground hover:text-accent"
                      >
                        info@wellinsinc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Business Hours
                      </p>
                      <p className="text-foreground">
                        Monday - Friday: 7:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-foreground">
                    Our Offices
                  </h3>
                  <div className="mt-6 space-y-6">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-border pl-6"
                      >
                        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                          {office.name}
                        </p>
                        <p className="mt-2 font-semibold text-foreground">
                          {office.city}
                        </p>
                        <div className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                          <p className="whitespace-pre-line">
                            {office.address}
                          </p>
                        </div>
                        <div className="mt-2 space-y-1 text-sm">
                          <p>
                            <a
                              href={`tel:${office.phone}`}
                              className="text-foreground hover:text-accent"
                            >
                              {office.phone}
                            </a>
                          </p>
                          <p>
                            <a
                              href={`mailto:${office.email}`}
                              className="text-foreground hover:text-accent"
                            >
                              {office.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h2 className="text-2xl font-semibold">
                  24/7 Emergency Support
                </h2>
                <p className="mt-2 text-primary-foreground/70">
                  For urgent plant shutdowns or emergency repairs
                </p>
              </div>
              <a
                href="tel:+12055559999"
                className="inline-flex items-center border border-primary-foreground/30 bg-transparent px-8 py-4 text-lg font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="mr-3 h-5 w-5" />
                +1 (205) 555-9999
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
