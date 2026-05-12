"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 2016, label: "Founded", prefix: "", suffix: "", decimals: 0, useGrouping: false },
  { value: 12, label: "States Licensed", prefix: "", suffix: "", decimals: 0, useGrouping: true },
  { value: 150, label: "Major Installations", prefix: "", suffix: "+", decimals: 0, useGrouping: true },
  { value: 500, label: "Contractors Appointed", prefix: "", suffix: "", decimals: 0, useGrouping: true },
];

function CountUpNumber({ value, decimals, suffix, prefix, useGrouping, isInView }: {
  value: number;
  decimals: number;
  suffix: string;
  prefix: string;
  useGrouping: boolean;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds
  const frameDuration = 1000 / 60; // 60fps

  useEffect(() => {
    if (!isInView) return;

    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = value * easeOut;

      if (frame === totalFrames) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div className="flex items-baseline text-5xl font-bold tracking-tighter text-[#001A3D] lg:text-6xl">
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: useGrouping,
      })}
      <span>{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f9fa] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-2 gap-y-16 gap-x-8 md:grid-cols-4 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative group transition-all duration-1000 delay-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Vertical Accent Line */}
              <div className={cn(
                "absolute -left-6 top-0 bottom-0 w-[2px] transition-all duration-1000 delay-500",
                isInView ? "bg-blue-400 opacity-100" : "bg-blue-400/0 opacity-0"
              )} />

              <div className="flex flex-col">
                <CountUpNumber
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  useGrouping={stat.useGrouping}
                  isInView={isInView}
                />
                <div className="mt-4 flex flex-col gap-1">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#001A3D]/80">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
