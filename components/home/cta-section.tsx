"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-100 bg-white py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-8 flex items-center justify-center gap-4"></div>

          <h2
            className={cn(
              "mb-12 text-4xl font-bold tracking-tighter text-slate-900 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-6xl",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            Ready to Build Together?
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center justify-center bg-slate-900 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-slate-800",
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0",
              )}
            >
              Start a Conversation
              <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
            <Link
              href="/pr-center/brochure"
              className={cn(
                "inline-flex items-center justify-center border border-slate-200 bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-slate-300 hover:bg-slate-50",
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0",
              )}
              style={{ transitionDelay: isVisible ? "140ms" : "0ms" }}
            >
              <Download className="mr-3 h-4 w-4" />
              Corporate Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
