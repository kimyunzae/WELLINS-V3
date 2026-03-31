"use client";

import { useEffect, useRef, useState } from "react";

export interface HistoryTimelineItem {
  year: string;
  title: string;
  description: string;
}

interface HistoryTimelineProps {
  items: HistoryTimelineItem[];
}

const STEP_DELAY_SECONDS = 0.48;
const LINE_DRAW_DELAY_SECONDS = 0.14;
const LINE_DRAW_DURATION_SECONDS = 0.28;

export function HistoryTimeline({ items }: HistoryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

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
      ref={containerRef}
      className="history-observed-section space-y-0"
      data-in-view={isInView}
    >
      {items.map((item, index) => {
        const baseDelay = 0.06 + index * STEP_DELAY_SECONDS;

        return (
          <div
            key={`${item.year}-${item.title}`}
            className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-6 pb-12 last:pb-0 lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:gap-10"
          >
            <div className="flex flex-col items-center">
              <div
                className="history-item-reveal flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-background text-sm font-semibold text-foreground shadow-[0_16px_32px_rgba(15,23,42,0.06)] lg:h-[4.5rem] lg:w-[4.5rem] lg:text-base"
                style={{ animationDelay: `${baseDelay}s` }}
              >
                {item.year.slice(-2)}
              </div>

              {index < items.length - 1 && (
                <div className="relative mt-4 w-px flex-1 overflow-hidden bg-border/85">
                  <span
                    className="history-line-grow absolute inset-x-0 top-0 h-full w-full bg-foreground"
                    style={{
                      animationDelay: `${baseDelay + LINE_DRAW_DELAY_SECONDS}s`,
                      animationDuration: `${LINE_DRAW_DURATION_SECONDS}s`,
                    }}
                  />
                </div>
              )}
            </div>

            <div className="min-w-0 pb-6 lg:pb-8">
              <p
                className="history-item-reveal text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground lg:text-sm"
                style={{ animationDelay: `${baseDelay + 0.03}s` }}
              >
                {item.year}
              </p>
              <h3
                className="history-item-reveal mt-3 text-xl font-semibold text-foreground lg:text-2xl"
                style={{ animationDelay: `${baseDelay + 0.07}s` }}
              >
                {item.title}
              </h3>
              <p
                className="history-item-reveal mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg"
                style={{ animationDelay: `${baseDelay + 0.11}s` }}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
