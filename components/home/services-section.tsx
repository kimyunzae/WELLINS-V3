"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Equipment Installation",
    description:
      "Heavy equipment installation executed with strict safety and shutdown control.",
    href: "/services/equipment-installation",
    image: "/images/service-equipment.jpg",
  },
  {
    title: "Industrial Piping",
    description:
      "Process and utility piping delivered from layout to turnover.",
    href: "/services/industrial-piping",
    image: "/images/service-piping.jpg",
  },
  {
    title: "HVAC System",
    description:
      "Industrial HVAC systems built for stable operation and efficiency.",
    href: "/services/hvac-system",
    image: "/images/service-hvac.jpg",
  },
  {
    title: "Insulation & Jacketing",
    description:
      "Thermal insulation and protective jacketing for critical assets.",
    href: "/services/insulation-jacketing",
    image: "/images/service-insulation.jpg",
  },
  {
    title: "High-Pressure Vessels",
    description:
      "High-pressure vessel delivery aligned with ASME requirements.",
    href: "/services/high-pressure-vessels",
    image: "/images/service-vessels.jpg",
  },
  {
    title: "Fire Protection",
    description:
      "Integrated suppression systems tailored to facility risk conditions.",
    href: "/services/fire-protection",
    image: "/images/service-fire.jpg",
  },
];

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
    { delay: "0ms", translate: "-translate-x-full" }, // 01: L->R
    { delay: "400ms", translate: "-translate-y-full" }, // 02: T->B
    { delay: "800ms", translate: "translate-x-full" }, // 03: R->L
    { delay: "800ms", translate: "-translate-x-full" }, // 04: L->R
    { delay: "400ms", translate: "translate-y-full" }, // 05: B->T
    { delay: "0ms", translate: "translate-x-full" }, // 06: R->L
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0c4464] py-20 lg:py-24"
    >
      {/* Subtle Background Image Wash */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Background"
          fill
          className="object-cover opacity-[0.25] grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 xl:px-16">
        {/* Header - Transparent Sky Blue Theme */}
        <div
          className={cn(
            "mb-14 flex items-center justify-between gap-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
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

        {/* Grid - Clean Assembly Animation */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const config = animConfig[index];
            return (
              <div key={index} className="overflow-hidden relative">
                <Link
                  href={service.href}
                  className={cn(
                    "group relative z-10 block h-[272px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] lg:h-[288px]",
                    isVisible
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : cn("opacity-0", config.translate),
                  )}
                  style={{ transitionDelay: isVisible ? config.delay : "0ms" }}
                >
                  {/* Card Image with Softer Blue Overlay */}
                  <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-sky-900/20 transition-colors duration-500 group-hover:bg-sky-900/40" />
                  </div>

                  {/* Content - Bottom Aligned */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-9">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-500 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/84 text-xs leading-relaxed mb-6 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
                      {service.description}
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
    </section>
  );
}
