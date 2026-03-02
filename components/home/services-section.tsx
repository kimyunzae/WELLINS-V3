"use client"

import Link from "next/link"
import { type CSSProperties, useEffect, useRef, useState } from "react"
import { ArrowRight, Wrench, Wind, Flame, Box, Gauge, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Wrench,
    title: "Equipment Installation",
    description: "Heavy equipment installation executed with strict safety and shutdown control.",
    href: "/services/equipment-installation",
  },
  {
    icon: Gauge,
    title: "Industrial Piping",
    description: "Process and utility piping delivered from layout to turnover.",
    href: "/services/industrial-piping",
  },
  {
    icon: Wind,
    title: "HVAC System",
    description: "Industrial HVAC systems built for stable operation and efficiency.",
    href: "/services/hvac-system",
  },
  {
    icon: Box,
    title: "Insulation & Jacketing",
    description: "Thermal insulation and protective jacketing for critical assets.",
    href: "/services/insulation-jacketing",
  },
  {
    icon: Flame,
    title: "High-Pressure Vessels",
    description: "High-pressure vessel delivery aligned with ASME requirements.",
    href: "/services/high-pressure-vessels",
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Integrated suppression systems tailored to facility risk conditions.",
    href: "/services/fire-protection",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasEnteredView, setHasEnteredView] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="border-y border-border/70 bg-muted/45 py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="max-w-[1040px]">
          <p className="text-2xl font-semibold tracking-tight text-primary lg:text-[28px]">
            Services
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-[56px] lg:leading-[1.24]">
            Comprehensive Industrial Services
          </h2>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-muted-foreground lg:text-[22px] lg:leading-[1.5]">
            From initial design to final installation, we provide end-to-end industrial engineering
            solutions that meet the highest standards of quality and safety.
          </p>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className={cn(
                "group flex min-h-[320px] flex-col transition-all duration-700 ease-out lg:min-h-[340px]",
                hasEnteredView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${index < 3 ? index * 110 : 360 + (index - 3) * 110}ms` } as CSSProperties}
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <service.icon
                  className="h-12 w-12 text-foreground/85 transition-transform duration-300 group-hover:scale-105"
                  strokeWidth={1.6}
                />
              </div>
              <h3 className="mt-6 min-h-[3.3rem] text-2xl font-semibold leading-[1.3] tracking-tight text-foreground lg:min-h-[3.9rem] lg:text-[30px]">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-muted-foreground lg:text-[21px] lg:leading-[1.55]">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
              >
                View Service
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
