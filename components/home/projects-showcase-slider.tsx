"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  key: string;
  region: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

const slides: Slide[] = [
  {
    key: "buford",
    region: "Buford, GA",
    title: "Buford Manufacturing Hub Expansion",
    description:
      "A new 4.3-acre manufacturing facility designed to expand production capacity for high-pressure piping.",
    image: "/images/banners/buford-facility.png",
  },
  {
    key: "georgia",
    region: "Savannah, GA",
    title: "LGES Hyundai Plant",
    description:
      "Process pipe installation in the utility area for battery manufacturing work.",
    image: "/images/projects/project-3.png",
    href: "/projects/georgia",
  },
  {
    key: "texas",
    region: "Houston, TX",
    title: "Dongwoo Fine-Chem",
    description: "Process pipe installation for Texas project work.",
    image: "/images/projects/project-6.png",
    href: "/projects/texas",
  },
  {
    key: "ohio",
    region: "Jeffersonville, OH",
    title: "LGES Honda JV Battery",
    description:
      "Process pipe and hot oil pipe installation for battery manufacturing systems.",
    image: "/images/projects/project-1.png",
    href: "/projects/ohio",
  },
];

// 홈 슬라이더는최대 4개까지만 노출 하도록 설정 (퍼포먼스 및 디자인 고려)
// 슬라이더를 4개이상 추가 시 변경 필요
const visibleSlides = slides.slice(0, 4);

export function ProjectsShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const totalScrollHeightVh = 100 + (visibleSlides.length - 1) * 28;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      const section = sectionRef.current;
      if (!section) return;

      const viewportHeight = window.innerHeight || 1;
      const maxScroll = Math.max(section.offsetHeight - viewportHeight, 1);
      const rect = section.getBoundingClientRect();
      const passed = Math.min(Math.max(-rect.top, 0), maxScroll);
      const stepHeight = maxScroll / Math.max(visibleSlides.length - 1, 1);
      const nextIndex = Math.min(
        visibleSlides.length - 1,
        Math.max(0, Math.floor(passed / Math.max(stepHeight, 1))),
      );

      setActiveIndex(nextIndex);
    };

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScrollState();
      });
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#031a2c]"
      style={{ height: `${totalScrollHeightVh}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          {visibleSlides.map((slide, index) => (
            <div
              key={slide.key}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                index === activeIndex
                  ? "opacity-100 scale-100"
                  : "pointer-events-none opacity-0 scale-105",
              )}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,29,0.92)_0%,rgba(2,17,29,0.7)_42%,rgba(2,17,29,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.45)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-between px-6 py-10 lg:px-12 lg:py-14 xl:px-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
            <div className="max-w-[30rem]">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-white/70">
                  Featured Projects
                </span>
                <span className="h-px w-12 bg-white/20" />
              </div>

              <div className="mt-10 flex gap-5 lg:mt-14">
                <div className="relative h-32 w-px bg-white/15 lg:h-40">
                  <span
                    className="absolute inset-x-0 top-0 origin-top bg-white transition-transform duration-500"
                    style={{
                      height: "100%",
                      transform: `scaleY(${Math.max(
                        activeIndex / (visibleSlides.length - 1 || 1),
                        0.08,
                      )})`,
                    }}
                  />
                </div>

                <div className="min-w-0 space-y-4 overflow-hidden">
                  {visibleSlides.map((slide, index) => (
                    <div
                      key={slide.key}
                      className="flex min-w-0 items-start gap-4"
                    >
                      <span
                        className={cn(
                          "mt-0.5 shrink-0 text-[11px] font-bold tracking-[0.3em] transition-colors duration-300",
                          index === activeIndex
                            ? "text-white"
                            : "text-white/30",
                        )}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={cn(
                          "block min-w-0 max-w-[18rem] truncate text-sm uppercase tracking-[0.18em] transition-all duration-300 lg:text-base",
                          index === activeIndex
                            ? "text-white/86"
                            : "text-white/34",
                        )}
                      >
                        {slide.region}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)] lg:gap-16">
            <div className="relative h-[300px] overflow-hidden lg:h-[360px]">
              {visibleSlides.map((slide, index) => (
                <div
                  key={`content-${slide.key}`}
                  className={cn(
                    "absolute inset-x-0 bottom-0 max-w-[54rem] transition-all duration-700 ease-out",
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-8 opacity-0",
                  )}
                >
                  <p className="max-w-[28rem] truncate text-xs font-bold uppercase tracking-[0.34em] text-white/66">
                    {slide.region}
                  </p>
                  <h3 className="mt-4 line-clamp-2 text-4xl font-light leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4.5rem]">
                    {slide.title}
                  </h3>
                  <p className="mt-6 line-clamp-2 max-w-[38rem] text-base leading-relaxed text-white/76 lg:text-lg">
                    {slide.description}
                  </p>
                  {slide.href && (
                    <Link
                      href={slide.href}
                      className="group mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-bold uppercase tracking-[0.24em] text-white transition-colors hover:border-white"
                    >
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
