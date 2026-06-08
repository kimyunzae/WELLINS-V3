"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface HistoryTimelineItem {
  year: string;
  title: string;
  description: string;
}

interface HistoryTimelineProps {
  items: HistoryTimelineItem[];
}

const STEP_DELAY_SECONDS = 0.42;
const LINE_DRAW_DELAY_SECONDS = 0.12;
const LINE_DRAW_DURATION_SECONDS = 0.3;

const ACCENT = "#0B3C7A";

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
        threshold: 0.15,
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
      className="history-observed-section"
      data-in-view={isInView}
    >
      {items.map((item, index) => {
        const baseDelay = 0.06 + index * STEP_DELAY_SECONDS;
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.year}-${item.title}`}
            className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-5 pb-10 last:pb-0 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-x-7"
          >
            {/* Marker + connecting line */}
            <div className="relative flex flex-col items-center">
              <div
                className="history-item-reveal relative z-10 flex h-7 w-7 shrink-0 items-center justify-center sm:h-8 sm:w-8"
                style={{ animationDelay: `${baseDelay}s`, color: ACCENT }}
              >
                <ChevronRight
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  strokeWidth={2.75}
                />
              </div>

              {!isLast && (
                <div className="mt-1 flex flex-1 justify-center overflow-hidden">
                  <span
                    className="history-line-grow block h-full w-px"
                    style={{
                      backgroundColor: `${ACCENT}33`,
                      animationDelay: `${baseDelay + LINE_DRAW_DELAY_SECONDS}s`,
                      animationDuration: `${LINE_DRAW_DURATION_SECONDS}s`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="min-w-0 pt-px">
              <div className="flex items-baseline gap-4 sm:gap-5">
                <span
                  className="history-item-reveal text-3xl font-bold leading-none tracking-tight sm:text-4xl lg:text-[2.75rem]"
                  style={{ animationDelay: `${baseDelay + 0.02}s`, color: ACCENT }}
                >
                  {item.year}
                </span>
                <h3
                  className="history-item-reveal text-sm font-bold uppercase tracking-[0.12em] sm:text-base"
                  style={{ animationDelay: `${baseDelay + 0.06}s`, color: ACCENT }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className="history-item-reveal mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base"
                style={{ animationDelay: `${baseDelay + 0.1}s` }}
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
