"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  type: string;
  location: string;
  year: string;
  description: string;
  image: string;
}

interface ProjectDetailProps {
  state: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  projects: Project[];
}

function CountUpNumber({ valueStr, isInView }: { valueStr: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  // Extract number and suffix (e.g., "35+" -> 35 and "+")
  const numberPart = parseFloat(valueStr.replace(/[^0-9.]/g, ""));
  const suffix = valueStr.replace(/[0-9.]/g, "");
  const decimals = valueStr.includes(".") ? valueStr.split(".")[1].length : 0;
  
  const duration = 2000;
  const frameDuration = 1000 / 60;

  useEffect(() => {
    if (!isInView) return;

    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = numberPart * easeOut;
      
      if (frame === totalFrames) {
        setCount(numberPart);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, numberPart]);

  return (
    <p className="text-3xl font-light text-foreground lg:text-4xl">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </p>
  );
}

export function ProjectDetail({
  state,
  description,
  stats,
  projects,
}: ProjectDetailProps) {
  const statsRef = useRef<HTMLElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navigation />
      <PageHeader eyebrow="Projects" title={`Projects in ${state}`} />

      <section ref={statsRef} className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-1000 delay-300",
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CountUpNumber valueStr={stat.value} isInView={statsInView} />
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-x-3 xl:gap-x-4">
            <div className="mx-auto w-full max-w-[36rem] px-3 sm:px-4 lg:px-4 xl:px-5">
              <h2 className="mt-5 max-w-[18ch] text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                <Separator className="max-w-18 my-5 bg-[#0c4464] py-0.25" />
                Regional <span className="font-semibold">Overview</span>
              </h2>
              <p className="mt-6 w-full max-w-none text-base leading-relaxed text-muted-foreground lg:text-lg">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-y-12 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-14 xl:gap-x-4">
            {projects.map((project, index) => (
              <article key={index} className="group">
                <div className="mx-auto w-full max-w-[36rem] px-3 sm:px-4 lg:px-4 xl:px-5">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {project.year} / {project.location}
                  </p>
                </div>
                <div className="mx-auto mt-3 w-full max-w-[36rem] px-3 sm:px-4 lg:px-4 xl:px-5">
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mx-auto mt-5 w-full max-w-[36rem] px-3 sm:px-4 lg:px-4 xl:px-5">
                  <h3 className="text-2xl font-semibold text-foreground lg:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-light tracking-tight lg:text-4xl">
              Have a project in <span className="font-semibold">{state}?</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
              Our team is ready to discuss your industrial engineering needs in
              this region.
            </p>
            <Link
              href="/contact"
              className="group/quote relative mt-8 inline-flex items-center overflow-hidden border border-primary-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-200 hover:-translate-y-px hover:border-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/30"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-primary-foreground transition-transform duration-200 group-hover/quote:scale-x-100 group-focus-visible/quote:scale-x-100" />
              <span className="relative z-10 inline-flex items-center transition-colors duration-200 group-hover/quote:text-primary group-focus-visible/quote:text-primary">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
