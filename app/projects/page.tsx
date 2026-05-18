import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { PartnerLogoCarousel } from "@/components/partner-logo-carousel";
import { projectRegionSummaries } from "@/data/projects/summaries";
import { createPageMetadata } from "@/lib/metadata";
import type { ProjectSummary } from "@/types/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Industrial Projects",
  description:
    "Explore representative industrial project work across regional manufacturing markets.",
  path: "/projects",
});


export default function ProjectsPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Projects"
        title="Our Work Across America"
        description="Representative industrial project work across eight regional markets, organized by project location and scope."
      />

      <PartnerLogoCarousel />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {projectRegionSummaries.map((region, index) => {
              const summaryProjects: ProjectSummary[] = region.summaryProjects;

              return (
                <Link
                  key={index}
                  href={region.href}
                  className="group flex h-full w-full flex-col border border-border transition-colors hover:border-accent"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={region.image || "/placeholder.svg"}
                      alt={`Projects in ${region.state}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl font-semibold text-primary-foreground lg:text-4xl">
                        {region.state}
                      </h2>
                    </div>
                  </div>
                  <div className="flex h-[190px] flex-col overflow-hidden p-6">
                    <div className="min-h-0 flex-1 space-y-2 overflow-hidden">
                      {summaryProjects
                        .slice(0, 2)
                        .map((project, projectIndex) => (
                          <div
                            key={projectIndex}
                            className="flex min-w-0 items-start justify-between gap-4"
                          >
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-foreground">
                                {project.name}
                              </p>
                              <ul className="mt-1 space-y-0.5 overflow-hidden">
                                {(project.scopes ?? [project.type])
                                  .slice(0, 2)
                                  .map((scope) =>
                                    scope ? (
                                      <li
                                        key={scope}
                                        className="flex min-w-0 items-start gap-1.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground"
                                      >
                                        <span
                                          className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                                          aria-hidden="true"
                                        />
                                        <span className="truncate">{scope}</span>
                                      </li>
                                    ) : null,
                                  )}
                              </ul>
                            </div>
                            <p className="shrink-0 text-xs text-muted-foreground">
                              {project.year}
                            </p>
                          </div>
                        ))}
                    </div>
                    <div className="mt-auto flex items-center pt-4 text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent">
                      View More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
