"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type FormEvent, useEffect, useRef, useState } from "react";

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
  "mt-2 w-full border border-[#D8DEE6] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#9AA4B2] focus:border-[#2B6FD6] focus:outline-none rounded-md transition-all";
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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmingSubmit, setIsConfirmingSubmit] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [previewData, setPreviewData] = useState<{
    name: string;
    email: string;
    phone: string;
    positionSource: string;
  } | null>(null);

  const getSubmissionFormData = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const uploadedFiles = ["resume"]
      .map((fieldName) => formData.get(fieldName))
      .filter((file): file is File => file instanceof File && file.size > 0);
    const totalAttachmentBytes = uploadedFiles.reduce(
      (total, file) => total + file.size,
      0,
    );

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_APPLY_TEMPLATE_ID) {
      return {
        errorMessage: "Career form is not configured yet.",
      };
    }

    if (totalAttachmentBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return {
        errorMessage: `Attached files must total ${MAX_TOTAL_ATTACHMENT_LABEL} or less.`,
      };
    }

    const coverLetterValue = formData.get("coverLetter");
    if (typeof coverLetterValue === "string") {
      const normalizedCoverLetter = coverLetterValue.trim();
      formData.set(
        "coverLetter",
        normalizedCoverLetter.length > 0 ? normalizedCoverLetter : "Not provided",
      );
    }

    formData.set("service_id", EMAILJS_SERVICE_ID);
    formData.set("template_id", EMAILJS_APPLY_TEMPLATE_ID);
    formData.set("user_id", EMAILJS_PUBLIC_KEY);

    return { formData };
  };

  const submitApplication = async (form: HTMLFormElement) => {
    const { formData, errorMessage } = getSubmissionFormData(form);

    if (!formData) {
      setIsSubmitError(true);
      setSubmitMessage(errorMessage ?? SUBMIT_FAILURE_MESSAGE);
      setIsConfirmingSubmit(false);
      return;
    }

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
      setIsConfirmingSubmit(false);
      setSubmitMessage(SUBMIT_SUCCESS_MESSAGE);
    } catch {
      setIsSubmitError(true);
      setIsConfirmingSubmit(false);
      setSubmitMessage(SUBMIT_FAILURE_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    setIsSubmitError(false);
    setSubmitMessage("");

    const { errorMessage } = getSubmissionFormData(form);
    if (errorMessage) {
      setIsSubmitError(true);
      setSubmitMessage(errorMessage);
      setIsConfirmingSubmit(false);
      return;
    }

    // Capture preview data
    const formData = new FormData(form);
    setPreviewData({
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      positionSource: String(formData.get("discoverySource")),
    });

    setIsConfirmingSubmit(true);
  };

  const handleConfirmSubmit = async () => {
    if (isSubmitting || !formRef.current) {
      return;
    }

    await submitApplication(formRef.current);
  };

  return (
    <>
      <form
        ref={formRef}
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
              <label key={source} className="inline-flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="discoverySource"
                  value={source}
                  required
                  className="h-4 w-4 border-[#B8C2CF] text-[#2B6FD6] accent-[#2B6FD6]"
                />
                <span className="group-hover:text-[#2B6FD6] transition-colors">{source}</span>
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
              <label key={status} className="inline-flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="employmentStatus"
                  value={status}
                  required
                  className="h-4 w-4 border-[#B8C2CF] text-[#2B6FD6] accent-[#2B6FD6]"
                />
                <span className="group-hover:text-[#2B6FD6] transition-colors">{status}</span>
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
              <label key={level} className="inline-flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="educationLevel"
                  value={level}
                  required
                  className="h-4 w-4 border-[#B8C2CF] text-[#2B6FD6] accent-[#2B6FD6]"
                />
                <span className="group-hover:text-[#2B6FD6] transition-colors">{level}</span>
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
              className={`${inputClassName} cursor-pointer file:mr-4 file:border-0 file:bg-[#1C2746] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white file:rounded-md transition-all`}
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
            className="inline-flex justify-center bg-[#1C2746] px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2B6FD6] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 rounded-md"
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

      <Dialog open={isConfirmingSubmit} onOpenChange={(open) => !isSubmitting && setIsConfirmingSubmit(open)}>
        <DialogContent className="p-4 border-none bg-transparent shadow-none max-w-[34rem] flex items-center justify-center">
          <Card className="border-[#D8DEE6] bg-white shadow-2xl rounded-2xl overflow-hidden w-full p-0 gap-0 py-0">
            <div className="max-h-[90vh] overflow-y-auto pr-0.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent">
              <CardHeader className="gap-2 border-b border-[#F3F4F6] bg-[#F9FAFB] py-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-[#1C2746]">
                    Confirm Application Submission
                  </DialogTitle>
                  <DialogDescription className="text-sm text-[#6B7280]">
                    Please review your details before submitting your application.
                  </DialogDescription>
                </DialogHeader>
              </CardHeader>
              <CardContent className="py-6 space-y-6">
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9AA4B2]">Name</span>
                    <p className="font-medium text-[#1F2937]">{previewData?.name}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9AA4B2]">Phone</span>
                    <p className="font-medium text-[#1F2937]">{previewData?.phone}</p>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9AA4B2]">Email</span>
                    <p className="font-medium text-[#1F2937]">{previewData?.email}</p>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9AA4B2]">How you found us</span>
                    <p className="font-medium text-[#1F2937]">{previewData?.positionSource}</p>
                  </div>
                </div>
                
                <div className="rounded-lg bg-[#EFF6FF] p-4 text-xs leading-relaxed text-[#1E40AF]">
                  <p>By clicking "Submit", your application and attached resume will be sent to Wellins Recruiting team. You cannot edit your response after submission.</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col-reverse gap-3 border-t border-[#F3F4F6] bg-[#F9FAFB] py-4 px-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsConfirmingSubmit(false)}
                  className="inline-flex w-full justify-center border border-[#D8DEE6] bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1C2746] transition-all hover:bg-[#F1F5F9] rounded-md sm:w-auto"
                >
                  Back to Edit
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSubmit}
                  disabled={isSubmitting}
                  className="inline-flex w-full justify-center bg-[#1C2746] px-8 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#2B6FD6] hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 rounded-md sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Confirm & Submit"}
                </button>
              </CardFooter>
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}
