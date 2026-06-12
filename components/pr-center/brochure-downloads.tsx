"use client";

import { useState } from "react";
import { Clock, Download, FileText, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const downloads = [
  {
    title: "Corporate Brochure",
    description:
      "Comprehensive overview of Wellins Inc. capabilities, services, and project portfolio.",
    size: "19.4 MB",
    format: "PDF",
  },
  {
    title: "Services Overview",
    description:
      "Detailed information about our six core service areas and capabilities.",
    size: "2.5 MB",
    format: "PDF",
  },
  {
    title: "Safety Program",
    description:
      "Our commitment to safety excellence and OSHA compliance programs.",
    size: "1.5 MB",
    format: "PDF",
  },
  {
    title: "Quality Assurance",
    description: "Quality management systems and certification documentation.",
    size: "1.2 MB",
    format: "PDF",
  },
];

export function BrochureDownloads() {
  // 브로셔 파일이 아직 준비되지 않아, 다운로드 클릭 시 Coming Soon 모달을 띄운다.
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="flex gap-6 border border-border p-6 lg:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-muted">
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  {item.format} • {item.size}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent cursor-pointer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md gap-0 rounded-2xl border-border/60 p-0 shadow-2xl">
          <DialogClose className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="flex flex-col items-center px-8 pb-8 pt-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-8 ring-accent/5">
              <Clock className="h-7 w-7 text-accent" />
            </div>
            <DialogHeader className="mt-6 sm:text-center">
              <DialogTitle className="text-xl font-semibold tracking-tight text-foreground">
                Coming Soon
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm leading-relaxed text-muted-foreground">
                This document is currently being prepared.
                <br />
                It will be available shortly.
                <br />
                Thank you for your patience.
              </DialogDescription>
            </DialogHeader>
            <DialogClose className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-primary px-10 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-200 hover:-translate-y-px hover:bg-accent hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 active:scale-[0.98]">
              Close
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
