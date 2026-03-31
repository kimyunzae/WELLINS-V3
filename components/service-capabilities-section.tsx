"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

interface ServiceCapabilitiesSectionProps {
  capabilities: string[];
  applications: string[];
}

export function ServiceCapabilitiesSection({
  capabilities,
  applications,
}: ServiceCapabilitiesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setIsInView(true);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="service-observed-section bg-muted py-20 lg:py-28"
      data-in-view={isInView}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              className="service-section-reveal text-3xl font-light tracking-tight text-foreground lg:text-4xl"
              style={{ animationDelay: "0.04s" }}
            >
              Our <span className="font-semibold">Capabilities</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="service-list-item flex items-start gap-3"
                  style={{ animationDelay: `${0.1 + index * 0.055}s` }}
                >
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="service-section-reveal text-3xl font-light tracking-tight text-foreground lg:text-4xl"
              style={{ animationDelay: "0.14s" }}
            >
              <span className="font-semibold">Applications</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {applications.map((application, index) => (
                <li
                  key={application}
                  className="service-list-item flex items-start gap-3"
                  style={{ animationDelay: `${0.2 + index * 0.055}s` }}
                >
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{application}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
