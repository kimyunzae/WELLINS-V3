"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const discoverySources = [
  "Current Employee",
  "Search Engine",
  "LinkedIn",
  "Other",
];

const employmentStatuses = [
  "Unemployed",
  "Employed",
  "Self-employed",
  "Student",
];

const educationLevels = [
  "High school diploma or equivalent",
  "Some college (no degree)",
  "Associate degree",
  "Bachelor's degree",
  "Master's degree",
  "Doctoral or professional degree",
];

const inputClassName =
  "mt-2 w-full border border-[#D8DEE6] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#9AA4B2] focus:border-[#2B6FD6] focus:outline-none";
const EMAILJS_FORM_API_URL = "https://api.emailjs.com/api/v1.0/email/send-form";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
const EMAILJS_APPLY_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID?.trim() ?? "";
const DEFAULT_MAX_TOTAL_ATTACHMENT_BYTES = 500 * 1024; // 기본값 500kb, 환경변수로 설정된 값이 유효한 경우 해당 값 사용

const CONFIGURED_MAX_TOTAL_ATTACHMENT_BYTES = Number(
  process.env.NEXT_PUBLIC_EMAILJS_MAX_ATTACHMENT_BYTES?.trim(),
); // 환경변수로 최대 첨부 파일 크기 설정 없을 경우 기본값 사용

const MAX_TOTAL_ATTACHMENT_BYTES =
  Number.isFinite(CONFIGURED_MAX_TOTAL_ATTACHMENT_BYTES) &&
  CONFIGURED_MAX_TOTAL_ATTACHMENT_BYTES > 0
    ? CONFIGURED_MAX_TOTAL_ATTACHMENT_BYTES
    : DEFAULT_MAX_TOTAL_ATTACHMENT_BYTES;
    
const MAX_TOTAL_ATTACHMENT_LABEL = `${Math.round(MAX_TOTAL_ATTACHMENT_BYTES / 1024)} KB`;
const SUBMIT_SUCCESS_MESSAGE =
  "Your application has been sent. We will review it and follow up if there is a fit.";
const SUBMIT_FAILURE_MESSAGE =
  "We couldn't send your application right now. Please try again or contact us directly.";

export function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitError, setIsSubmitError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const uploadedFiles = ["resume"]
      .map((fieldName) => formData.get(fieldName))
      .filter((file): file is File => file instanceof File && file.size > 0);
    const totalAttachmentBytes = uploadedFiles.reduce(
      (total, file) => total + file.size,
      0,
    );

    setIsSubmitError(false);
    setSubmitMessage("");

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_APPLY_TEMPLATE_ID) {
      setIsSubmitError(true);
      setSubmitMessage("Career form is not configured yet.");
      return;
    }

    if (totalAttachmentBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      setIsSubmitError(true);
      setSubmitMessage(
        `Attached files must total ${MAX_TOTAL_ATTACHMENT_LABEL} or less.`,
      );
      return;
    }

    formData.set("service_id", EMAILJS_SERVICE_ID);
    formData.set("template_id", EMAILJS_APPLY_TEMPLATE_ID);
    formData.set("user_id", EMAILJS_PUBLIC_KEY);

    setIsSubmitting(true);
    setIsSubmitError(false);
    setSubmitMessage("");

    try {
      const response = await fetch(EMAILJS_FORM_API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(SUBMIT_FAILURE_MESSAGE);
      }

      form.reset();
      setSubmitMessage(SUBMIT_SUCCESS_MESSAGE);
    } catch {
      setIsSubmitError(true);
      setSubmitMessage(SUBMIT_FAILURE_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      encType="multipart/form-data"
    >
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B6FD6]">
          Fill out the job application below, upload your resume, and add a cover letter if you'd like.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="firstName"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
          >
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First name"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="middleName"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
          >
            Middle Name
          </label>
          <input
            id="middleName"
            name="middleName"
            type="text"
            placeholder="Middle name"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last name"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
        >
          Phone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="123-456-7890"
          className={inputClassName}
        />
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="addressLine1"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
          >
            Address *
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            required
            placeholder="Address line 1"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="addressLine2" className="sr-only">
            Address Line 2
          </label>
          <input
            id="addressLine2"
            name="addressLine2"
            type="text"
            placeholder="Address line 2"
            className={inputClassName}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              placeholder="City"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="state" className="sr-only">
              State
            </label>
            <select
              id="state"
              name="state"
              defaultValue="Alabama"
              className={inputClassName}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="zipcode" className="sr-only">
            Zipcode
          </label>
          <input
            id="zipcode"
            name="zipcode"
            type="text"
            required
            placeholder="Zipcode"
            className={inputClassName}
          />
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]">
          How did you find out about this position? *
        </legend>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#4B5563]">
          {discoverySources.map((source) => (
            <label key={source} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="discoverySource"
                value={source}
                required
                className="h-4 w-4 border-[#B8C2CF] text-[#2B6FD6] accent-[#2B6FD6]"
              />
              <span>{source}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]">
          Current Employment Status *
        </legend>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#4B5563]">
          {employmentStatuses.map((status) => (
            <label key={status} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="employmentStatus"
                value={status}
                required
                className="h-4 w-4 border-[#B8C2CF] text-[#2B6FD6] accent-[#2B6FD6]"
              />
              <span>{status}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]">
          Highest Education Level *
        </legend>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#4B5563]">
          {educationLevels.map((level) => (
            <label key={level} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="educationLevel"
                value={level}
                required
                className="h-4 w-4 border-[#B8C2CF] text-[#2B6FD6] accent-[#2B6FD6]"
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="coverLetter"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
          >
            Cover Letter (Optional)
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={6}
            placeholder="Write your cover letter here."
            className={`${inputClassName} resize-y`}
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
          >
            Upload Your Resume *
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx"
            className={`${inputClassName} cursor-pointer file:mr-4 file:border-0 file:bg-[#1C2746] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="additionalInformation"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2B6FD6]"
        >
          Additional Information
        </label>
        <textarea
          id="additionalInformation"
          name="additionalInformation"
          rows={5}
          placeholder="Share anything else you'd like us to know."
          className={`${inputClassName} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center bg-[#1C2746] px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2B6FD6] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
        <p className="text-sm text-[#6B7280]">
          Accepted resume files: PDF, DOC, DOCX. Total upload size up to{" "}
          {MAX_TOTAL_ATTACHMENT_LABEL}.
        </p>
      </div>

      {submitMessage ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${isSubmitError ? "text-[#B42318]" : "text-[#1F2937]"}`}
        >
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
