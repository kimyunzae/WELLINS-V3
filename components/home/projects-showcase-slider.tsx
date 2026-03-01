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
  href: string;
  featured?: boolean;
};

const slides: Slide[] = [
  {
    key: "buford",
    region: "Buford",
    title: "Buford Manufacturing Hub Opening In 2026",
    description:
      "Our new 4.3-acre manufacturing hub in Buford is designed to expand production capacity for high-pressure piping, vessels, and specialized fabrication across the Southeast.",
    image: "/images/facility-expansion.jpg",
    href: "/projects/buford",
    featured: true,
  },
  {
    key: "georgia",
    region: "Georgia",
    title: "Atlanta Regional Project Portfolio",
    description:
      "Our Atlanta regional office supports Georgia's industrial base with food processing, distribution, and advanced manufacturing installations.",
    image: "/images/project-1.jpg",
    href: "/projects/georgia",
  },
  {
    key: "texas",
    region: "Texas",
    title: "Gulf Coast Industrial Delivery",
    description:
      "Our Houston office delivers specialized engineering services for petrochemical and energy facilities throughout the Gulf Coast region.",
    image: "/images/project-2.jpg",
    href: "/projects/texas",
  },
  {
    key: "ohio",
    region: "Ohio",
    title: "Midwest Distribution & Process Expertise",
    description:
      "Serving Ohio's industrial landscape with fire protection and piping solutions for large-scale distribution and advanced process facilities.",
    image: "/images/project-3.jpg",
    href: "/projects/ohio",
  },
];

const FADE_DURATION_MS = 180;

export function ProjectsShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const sectionRef = useRef<HTMLElement | null>(null);

  const activeSlide = slides[activeIndex];
  const slideType = activeSlide.featured
    ? "Flagship Project"
    : "Regional Project";

  const transitionTo = (nextIndex: number) => {
    if (nextIndex === activeIndex) {
      return;
    }

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    setIsTransitioning(true);

    transitionTimeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIndex);
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
      transitionTimeoutRef.current = null;
    }, FADE_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const slideControls = (
    <div className="w-full max-w-full overflow-x-auto lg:overflow-visible">
      <div className="flex w-max gap-2 lg:w-full lg:min-w-0 lg:flex-col lg:gap-2">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.key}
              type="button"
              onClick={() => transitionTo(index)}
              onMouseEnter={() => transitionTo(index)}
              onFocus={() => transitionTo(index)}
              className={cn(
                "flex shrink-0 flex-col border px-3 py-3 text-left transition-all duration-200 lg:w-full lg:px-4 lg:py-4",
                isActive
                  ? "border-foreground/15 bg-background text-foreground shadow-[0_18px_40px_-32px_rgba(0,0,0,0.45)]"
                  : "border-border/80 bg-background/35 text-foreground/65 hover:border-foreground/15 hover:bg-background/70 hover:text-foreground",
              )}
              aria-label={`Show ${slide.region} project slide`}
            >
              <span className="text-sm font-semibold tracking-tight sm:text-[15px] lg:text-lg">
                {slide.region}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="mb-10 max-w-[1040px]">
          <p className="text-2xl font-semibold tracking-tight text-primary lg:text-[28px]">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div
            className={cn(
              "min-w-0 transition-all duration-700 ease-out",
              hasEnteredView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Project Regions
            </p>
            <div className="mt-5">{slideControls}</div>
          </div>

          <div
            className={cn(
              "min-w-0 overflow-hidden border border-black/10 bg-background shadow-[0_32px_80px_-52px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out",
              isTransitioning
                ? "translate-y-1 opacity-0"
                : "translate-y-0 opacity-100",
            )}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-black/5 md:aspect-[16/8] lg:aspect-[16/7] xl:aspect-[16/6]">
              <Image
                key={activeSlide.key}
                src={activeSlide.image}
                alt={`${activeSlide.region} project`}
                fill
                className={cn(
                  "object-cover transition-all duration-200 ease-out",
                  isTransitioning ? "opacity-0" : "opacity-100",
                )}
                priority={activeIndex === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  {slideType}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {activeSlide.region}
                </p>
              </div>
            </div>

            <div
              className={cn(
                "grid min-h-[230px] gap-5 p-5 sm:min-h-[250px] sm:p-6 lg:min-h-[240px] lg:grid-cols-[minmax(0,1fr)_220px] lg:items-stretch xl:min-h-[280px]",
                hasEnteredView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-6 opacity-0",
              )}
            >
              <div className="flex h-full flex-col">
                <div className="min-h-[96px] sm:min-h-[112px]">
                  <h3 className="max-w-2xl overflow-hidden pb-1 text-3xl font-semibold leading-tight tracking-tight text-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] lg:text-4xl xl:text-5xl">
                    {activeSlide.title}
                  </h3>
                </div>
                <div className="mt-5 h-[72px] overflow-hidden sm:h-[84px]">
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] lg:text-base">
                    {activeSlide.description}
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-col border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                    Current Focus
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                    {activeSlide.region}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 pt-6">
                  <Link
                    href={activeSlide.href}
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-foreground/60 transition-colors hover:text-foreground"
                  >
                    All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
