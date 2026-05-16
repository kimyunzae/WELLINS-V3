"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

const NAVY = "#001A3D";

export function OrganizationChart({ divisions }: OrganizationChartProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hLine, setHLine] = useState({ left: 0, width: 0 });

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
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const measureLine = useCallback(() => {
    const grid = gridRef.current;
    const line = lineRef.current;
    if (!grid || !line) return;
    const cols = grid.children;
    if (cols.length < 2) return;
    const first = cols[0] as HTMLElement;
    const last = cols[cols.length - 1] as HTMLElement;
    const lineRect = line.getBoundingClientRect();
    const firstRect = first.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    const firstCenter = firstRect.left + firstRect.width / 2 - lineRect.left;
    const lastCenter = lastRect.left + lastRect.width / 2 - lineRect.left;
    const left = Math.max(0, Math.min(firstCenter, lineRect.width));
    const right = Math.max(0, Math.min(lastCenter, lineRect.width));

    setHLine({
      left,
      width: Math.max(0, right - left),
    });
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(measureLine);
    window.addEventListener("resize", measureLine);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", measureLine);
    };
  }, [measureLine]);

  return (
    <div
      ref={sectionRef}
      className="organization-observed-section"
      data-in-view={isInView}
    >
      {/* ── 데스크톱 ── */}
      <div className="hidden xl:block">
        {/* CEO 박스 */}
        <div className="flex justify-center">
          <div
            className="organization-card-reveal rounded-xl px-14 py-5 text-white shadow-sm"
            style={{ animationDelay: "0s", backgroundColor: NAVY }}
          >
            <p className="text-base font-semibold tracking-[0.3em]">CEO</p>
          </div>
        </div>

        {/* CEO → 수직선 */}
        <div className="relative mx-auto h-12 w-px" style={{ backgroundColor: "transparent" }}>
          <span
            className="organization-line-grow absolute inset-0"
            style={{ animationDelay: "0.2s", backgroundColor: `${NAVY}40` }}
          />
        </div>

        {/* 수평 분기선 — 동적 측정 */}
        <div
          ref={lineRef}
          className="relative mx-auto h-px"
          style={{ width: "88%" }}
        >
          <span
            className="organization-line-grow-x absolute top-0 h-px"
            style={{
              animationDelay: "0.35s",
              backgroundColor: `${NAVY}40`,
              left: `${hLine.left}px`,
              width: `${hLine.width}px`,
            }}
          />
        </div>

        {/* 4+5) 드롭선 + Division + Groups */}
        <div
          ref={gridRef}
          className="mx-auto grid grid-cols-4 gap-6"
          style={{ width: "88%" }}
        >
          {divisions.map((division, index) => (
            <div
              key={division.name}
              className="flex flex-col items-center"
            >
              {/* 드롭선 */}
              <div className="relative h-14 w-px" style={{ backgroundColor: "transparent" }}>
                <span
                  className="organization-line-grow absolute inset-0"
                  style={{ animationDelay: `${0.48 + index * 0.04}s`, backgroundColor: `${NAVY}40` }}
                />
              </div>

              {/* Division 박스 */}
              <div
                className="organization-card-reveal w-full rounded-xl px-5 py-5 text-center text-white"
                style={{ animationDelay: `${0.62 + index * 0.06}s`, backgroundColor: `${NAVY}e0` }}
              >
                <h3 className="text-sm font-semibold leading-snug">
                  {division.name}
                </h3>
              </div>

              {/* Division → Groups 커넥터 */}
              <div className="relative h-8 w-px" style={{ backgroundColor: "transparent" }}>
                <span
                  className="organization-line-grow absolute inset-0"
                  style={{ animationDelay: `${0.82 + index * 0.06}s`, backgroundColor: `${NAVY}30` }}
                />
              </div>

              {/* Group 카드 */}
              <div className="flex w-full flex-col gap-3">
                {division.groups.map((group, gi) => (
                  <div
                    key={group.name}
                    className="organization-card-reveal rounded-xl border bg-card px-5 py-4"
                    style={{
                      animationDelay: `${0.92 + index * 0.06 + gi * 0.05}s`,
                      borderColor: `${NAVY}20`,
                    }}
                  >
                    <p className="text-sm font-semibold" style={{ color: NAVY }}>
                      {group.name}
                    </p>
                    {group.items.length > 0 && (
                      <ul className="mt-2.5 space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">
                            · {item}
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

      {/* ── 태블릿 2열 ── */}
      <div className="hidden md:block xl:hidden">
        <div className="flex justify-center">
          <div
            className="organization-card-reveal rounded-xl px-12 py-5 text-white shadow-sm"
            style={{ animationDelay: "0s", backgroundColor: NAVY }}
          >
            <p className="text-base font-semibold tracking-[0.3em]">CEO</p>
          </div>
        </div>

        <div className="relative mx-auto h-10 w-px" style={{ backgroundColor: "transparent" }}>
          <span
            className="organization-line-grow absolute inset-0"
            style={{ animationDelay: "0.2s", backgroundColor: `${NAVY}40` }}
          />
        </div>

        <div className="relative mx-auto" style={{ width: "85%" }}>
          <div className="absolute h-px" style={{ top: 0, left: "25%", right: "25%", backgroundColor: "transparent" }}>
            <span
              className="organization-line-grow-x absolute inset-0"
              style={{ animationDelay: "0.35s", backgroundColor: `${NAVY}40` }}
            />
          </div>
          <div className="absolute top-0 w-px" style={{ height: "40px", left: "25%", transform: "translateX(-50%)", backgroundColor: "transparent" }}>
            <span className="organization-line-grow absolute inset-0" style={{ animationDelay: "0.48s", backgroundColor: `${NAVY}40` }} />
          </div>
          <div className="absolute top-0 w-px" style={{ height: "40px", left: "75%", transform: "translateX(-50%)", backgroundColor: "transparent" }}>
            <span className="organization-line-grow absolute inset-0" style={{ animationDelay: "0.52s", backgroundColor: `${NAVY}40` }} />
          </div>
          <div style={{ height: "40px" }} />
        </div>

        <div className="mx-auto grid grid-cols-2 gap-6" style={{ width: "85%" }}>
          {divisions.map((division, index) => (
            <div key={division.name} className="flex flex-col items-center">
              <div
                className="organization-card-reveal w-full rounded-xl px-5 py-5 text-center text-white"
                style={{ animationDelay: `${0.6 + index * 0.06}s`, backgroundColor: `${NAVY}e0` }}
              >
                <h3 className="text-sm font-semibold">{division.name}</h3>
              </div>

              <div className="relative h-6 w-px" style={{ backgroundColor: "transparent" }}>
                <span className="organization-line-grow absolute inset-0" style={{ animationDelay: `${0.78 + index * 0.06}s`, backgroundColor: `${NAVY}30` }} />
              </div>

              <div className="flex w-full flex-col gap-3">
                {division.groups.map((group, gi) => (
                  <div
                    key={group.name}
                    className="organization-card-reveal rounded-xl border bg-card px-5 py-4"
                    style={{ animationDelay: `${0.88 + index * 0.06 + gi * 0.05}s`, borderColor: `${NAVY}20` }}
                  >
                    <p className="text-sm font-semibold" style={{ color: NAVY }}>{group.name}</p>
                    {group.items.length > 0 && (
                      <ul className="mt-2.5 space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">· {item}</li>
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

      {/* ── 모바일 ── */}
      <div className="md:hidden">
        <div className="flex justify-center">
          <div
            className="organization-card-reveal rounded-xl px-10 py-5 text-white shadow-sm"
            style={{ animationDelay: "0s", backgroundColor: NAVY }}
          >
            <p className="text-base font-semibold tracking-[0.3em]">CEO</p>
          </div>
        </div>

        {divisions.map((division, index) => {
          const base = 0.2 + index * 0.25;
          return (
            <div key={division.name} className="flex flex-col items-center">
              <div className="relative h-8 w-px" style={{ backgroundColor: "transparent" }}>
                {index === 0 && (
                  <span className="organization-line-grow absolute inset-0" style={{ animationDelay: `${base}s`, backgroundColor: `${NAVY}40` }} />
                )}
              </div>

              <div className="w-full">
                <div
                  className="organization-card-reveal rounded-xl px-5 py-5 text-center text-white"
                  style={{ animationDelay: `${base + 0.08}s`, backgroundColor: `${NAVY}e0` }}
                >
                  <h3 className="text-sm font-semibold">{division.name}</h3>
                </div>

                <div className="relative mx-auto mt-3 h-5 w-px" style={{ backgroundColor: "transparent" }}>
                  <span className="organization-line-grow absolute inset-0" style={{ animationDelay: `${base + 0.14}s`, backgroundColor: `${NAVY}30` }} />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  {division.groups.map((group, gi) => (
                    <div
                      key={group.name}
                      className="organization-card-reveal rounded-xl border bg-card px-4 py-4"
                      style={{ animationDelay: `${base + 0.18 + gi * 0.05}s`, borderColor: `${NAVY}20` }}
                    >
                      <p className="text-sm font-semibold" style={{ color: NAVY }}>{group.name}</p>
                      {group.items.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {group.items.map((item) => (
                            <li key={item} className="text-xs text-muted-foreground">· {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
