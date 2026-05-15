"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { PartnerLogoCarousel } from "@/components/partner-logo-carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import type { Project } from "@/types/projects";

interface ProjectDetailProps {
  state: string;
  description: string;
  projects: Project[];
}

export function ProjectDetail({
  state,
  description,
  projects,
}: ProjectDetailProps) {
  return (
    <main>
      <Navigation />
      <PageHeader eyebrow="Projects" title={`Projects in ${state}`} />

      <PartnerLogoCarousel />

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
                  {project.scopes?.length ? (
                    <ul className="mt-5 space-y-2 text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      {project.scopes.map((scope) => (
                        <li key={scope} className="flex items-start gap-2">
                          <span
                            className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                            aria-hidden="true"
                          />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {project.description ? (
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Have a project in <span className="font-semibold">{state}?</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our team is ready to discuss your industrial engineering needs in
              this region.
            </p>
            <Link
              href="/contact"
              className="group/quote relative mt-8 inline-flex items-center overflow-hidden border border-foreground/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-all duration-200 hover:-translate-y-px hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-200 group-hover/quote:scale-x-100 group-focus-visible/quote:scale-x-100" />
              <span className="relative z-10 inline-flex items-center transition-colors duration-200 group-hover/quote:text-background group-focus-visible/quote:text-background">
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
