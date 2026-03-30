"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  key: string;
  region: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const slides: Slide[] = [
  {
    key: "buford",
    region: "Buford, GA",
    title: "Buford Manufacturing Hub Expansion",
    description:
      "A new 4.3-acre manufacturing facility designed to expand production capacity for high-pressure piping.",
    image: "/images/facility-expansion.jpg",
    href: "/projects/buford",
  },
  {
    key: "georgia",
    region: "Atlanta, GA",
    title: "Regional Industrial Portfolio",
    description:
      "Supporting Georgia's industrial base with food processing and advanced manufacturing installations.",
    image: "/images/project-1.jpg",
    href: "/projects/georgia",
  },
  {
    key: "texas",
    region: "Houston, TX",
    title: "Gulf Coast Energy Projects",
    description:
      "Specialized engineering services for petrochemical facilities throughout the Gulf Coast region.",
    image: "/images/project-2.jpg",
    href: "/projects/texas",
  },
  {
    key: "ohio",
    region: "Ohio",
    title: "Midwest Distribution Expertise",
    description:
      "Serving Ohio's industrial landscape with fire protection and piping solutions for large-scale facilities.",
    image: "/images/project-3.jpg",
    href: "/projects/ohio",
  },
];

const AUTO_PLAY_INTERVAL = 6000;

export function ProjectsShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide, isVisible]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-24">
        {/* Main Grid with Bottom Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          {/* Left: Content Area */}
          <div className="lg:col-span-5 order-2 lg:order-1 h-full flex flex-col justify-between">
            <div
              className={cn(
                "transition-all duration-1000 delay-300",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#001A3D]">
                  FEATURED PROJECTS
                </span>
                <div className="h-[1px] w-12 bg-[#001A3D]/20" />
              </div>

              <div className="relative min-h-[220px] md:min-h-[260px]">
                {slides.map((slide, index) => (
                  <div
                    key={`text-${slide.key}`}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out",
                      index === activeIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8 pointer-events-none",
                    )}
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                      {slide.region}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#001A3D] mb-6 leading-[1.1]">
                      {slide.title}
                    </h3>
                    <p className="text-lg text-slate-500 line-clamp-2 max-w-md leading-relaxed font-medium">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link - Fixed at the bottom to align with right index */}
            <div
              className={cn(
                "mt-12 flex min-h-[40px] items-end lg:mt-0 transition-all duration-1000 delay-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              {slides.map((slide, index) => (
                <Link
                  key={`link-${slide.key}`}
                  href={slide.href}
                  className={cn(
                    "group inline-flex items-center gap-4 py-2 text-[#001A3D] text-sm font-bold uppercase tracking-widest transition-all duration-500",
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4 pointer-events-none absolute",
                  )}
                >
                  <span className="relative">
                    View Project Details
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#001A3D] origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Image & Index Area */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex flex-col gap-8">
              {/* Shorter Image Area */}
              <div
                className={cn(
                  "relative aspect-[16/9] w-full overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)]",
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-24 opacity-0",
                )}
              >
                {slides.map((slide, index) => (
                  <div
                    key={`img-${slide.key}`}
                    className={cn(
                      "absolute inset-0 transition-all duration-1000 ease-in-out",
                      index === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105 pointer-events-none",
                    )}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A3D]/10 to-transparent" />
                  </div>
                ))}

                {/* Entrance Mask */}
                <div
                  className={cn(
                    "absolute inset-0 bg-white z-10 transition-transform duration-1000 delay-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                    isVisible ? "translate-x-full" : "translate-x-0",
                  )}
                />
              </div>

              {/* Numeric Navigation (Now under the photo, left-aligned) */}
            <div
              className={cn(
                "flex min-h-[40px] items-end gap-6 transition-all duration-1000 delay-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
                )}
              >
                {slides.map((_, index) => (
                  <button
                    key={`nav-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className="group relative py-2"
                  >
                    <span
                      className={cn(
                        "text-sm font-bold tracking-widest transition-colors duration-300",
                        index === activeIndex
                          ? "text-[#001A3D]"
                          : "text-slate-300 group-hover:text-slate-500",
                      )}
                    >
                      0{index + 1}
                    </span>
                    {index === activeIndex && (
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#001A3D] animate-in fade-in zoom-in-95 duration-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
