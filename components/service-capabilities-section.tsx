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
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="service-observed-section bg-muted/50 py-24 lg:py-32"
      data-in-view={isInView}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          {/* Capabilities */}
          <div className="relative">
            <div className="absolute -left-4 top-0 h-12 w-1 bg-primary/20 hidden lg:block" />
            <h2
              className="service-section-reveal text-3xl font-light tracking-tight text-foreground lg:text-4xl"
              style={{ animationDelay: "0.05s" }}
            >
              Core <span className="font-semibold text-primary">Capabilities</span>
            </h2>
            <div className="mt-12 grid gap-y-8">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="service-list-item group flex items-start gap-6 border-b border-primary/5 pb-6 last:border-0"
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  <span className="text-sm font-bold tabular-nums text-primary/20 group-hover:text-primary/60 transition-colors">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {capability}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="relative">
            <div className="absolute -left-4 top-0 h-12 w-1 bg-primary/20 hidden lg:block" />
            <h2
              className="service-section-reveal text-3xl font-light tracking-tight text-foreground lg:text-4xl"
              style={{ animationDelay: "0.15s" }}
            >
              Industry <span className="font-semibold text-primary">Applications</span>
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {applications.map((application, index) => (
                <div
                  key={application}
                  className="service-list-item flex items-center gap-3 bg-white p-4 shadow-sm border border-primary/5 hover:border-primary/20 transition-all duration-300"
                  style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                >
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
