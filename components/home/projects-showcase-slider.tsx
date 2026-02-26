"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

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
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  const activeSlide = slides[activeIndex];
  const slideType = activeSlide.featured ? "Featured Project" : "Recent Project";

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
    const imageFrame = imageFrameRef.current;
    if (!imageFrame || typeof ResizeObserver === "undefined") {
      return;
    }

    const syncImageHeight = () => {
      setImageHeight(imageFrame.getBoundingClientRect().height);
    };

    syncImageHeight();

    const observer = new ResizeObserver(() => {
      syncImageHeight();
    });

    observer.observe(imageFrame);

    return () => {
      observer.disconnect();
    };
  }, []);

  const leftPanelStyle: CSSProperties | undefined = imageHeight
    ? ({ ["--project-image-height" as string]: `${imageHeight}px` } as CSSProperties)
    : undefined;

  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <div
            className={cn(
              "transition-all duration-200 ease-out lg:flex lg:h-[var(--project-image-height)] lg:flex-col",
              isTransitioning
                ? "translate-y-1 opacity-0"
                : "translate-y-0 opacity-100"
            )}
            style={leftPanelStyle}
          >
            <p className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {slideType}
            </p>
            <div className="mt-24 lg:flex lg:flex-1 lg:flex-col">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl xl:text-5xl">
                {activeSlide.region}
              </h2>
              <h3 className="mt-4 text-base font-medium text-foreground/85 lg:text-lg">
                {activeSlide.title}
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                {activeSlide.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-8 lg:mt-auto">
                <Link
                  href={activeSlide.href}
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                >
                  More Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground/75 transition-colors hover:text-foreground"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div
              ref={imageFrameRef}
              className="relative aspect-[16/10] overflow-hidden bg-black/5"
            >
              <Image
                key={activeSlide.key}
                src={activeSlide.image}
                alt={`${activeSlide.region} project`}
                fill
                className={cn(
                  "object-cover transition-opacity duration-200 ease-out",
                  isTransitioning ? "opacity-0" : "opacity-100"
                )}
                priority={activeIndex === 0}
              />
            </div>

            <div className="mt-5 flex items-center justify-start gap-5">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.key}
                    type="button"
                    onClick={() => transitionTo(index)}
                    onMouseEnter={() => transitionTo(index)}
                    className={cn(
                      "relative pb-2 text-xs font-semibold tracking-[0.22em] text-foreground/55 transition-colors duration-200 hover:text-foreground",
                      "after:pointer-events-none after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-200 after:content-['']",
                      "hover:after:scale-x-100",
                      isActive && "text-foreground after:scale-x-100"
                    )}
                    aria-label={`Show ${slide.region} project slide`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
