"use client";

import { useEffect, useRef, useState } from "react";

export interface OrganizationDivision {
  name: string;
  description: string;
  groups: {
    name: string;
    items: string[];
  }[];
}

interface OrganizationChartProps {
  divisions: OrganizationDivision[];
}

export function OrganizationChart({ divisions }: OrganizationChartProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <div
      ref={sectionRef}
      className="organization-observed-section"
      data-in-view={isInView}
    >
      <div className="mb-8 flex flex-col items-center text-center">
        <div
          className="organization-card-reveal border border-primary bg-primary px-10 py-4 text-primary-foreground"
          style={{ animationDelay: "0.04s" }}
        >
          <p className="text-sm font-medium tracking-[0.3em]">CEO</p>
        </div>
        <div className="relative mt-4 h-8 w-px overflow-hidden bg-border/35">
          <span
            className="organization-line-grow absolute inset-x-0 top-0 h-full w-full bg-border"
            style={{ animationDelay: "0.14s" }}
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {divisions.map((division, index) => (
          <div
            key={division.name}
            className="organization-card-reveal border border-border bg-card p-8"
            style={{ animationDelay: `${0.34 + index * 0.08}s` }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              {division.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {division.description}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {division.groups.map((group) => (
                <div
                  key={group.name}
                  className="rounded-md border border-border/70 bg-muted/30 p-4"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {group.name}
                  </p>
                  {group.items.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
