"use client";

import { cn } from "@/lib/utils";
import { serviceSummaries } from "@/data/services/summaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animConfig = [
    { delay: "0ms", translate: "-translate-x-full" },
    { delay: "400ms", translate: "-translate-y-full" },
    { delay: "800ms", translate: "translate-x-full" },
    { delay: "800ms", translate: "-translate-x-full" },
    { delay: "400ms", translate: "translate-y-full" },
    { delay: "0ms", translate: "translate-x-full" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2174a5]"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-industrial.webp"
            alt="Background"
            fill
            className="object-cover opacity-[0.14] grayscale contrast-[1.1] brightness-[0.95]"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24 xl:px-16">
          <div
            className={cn(
              "mb-14 flex items-center justify-between gap-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-100/90">
                  Our Services
                </span>
                <span className="h-[1px] w-8 bg-white/30" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-white lg:text-4xl uppercase">
                Industrial Solutions
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/78 transition-all hover:text-sky-100"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceSummaries.map((service, index) => {
              const config = animConfig[index % animConfig.length];

              return (
                <div key={service.title} className="relative overflow-hidden">
                  <Link
                    href={service.href}
                    className={cn(
                      "group relative z-10 block h-[232px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] lg:h-[248px]",
                      isVisible
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : cn("opacity-0", config.translate),
                    )}
                    style={{ transitionDelay: isVisible ? config.delay : "0ms" }}
                  >
                    <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-sky-900/20 transition-colors duration-500 group-hover:bg-sky-900/40" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-9">
                      <h3 className="mb-3 line-clamp-2 text-xl font-bold uppercase tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1">
                        {service.title}
                      </h3>
                      <p className="mb-6 line-clamp-2 translate-y-2 text-xs leading-relaxed text-white/84 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {service.homeDescription}
                      </p>
                      <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/92 transition-all group-hover:text-sky-100">
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
