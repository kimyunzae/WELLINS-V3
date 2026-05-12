import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Buford Manufacturing Hub Expansion",
    category: "Industrial Engineering",
    location: "Buford, GA",
    description: "A new 4.3-acre manufacturing facility designed to expand production capacity for high-pressure systems.",
    image: "/images/banners/buford-facility.png",
    href: "/projects/buford",
    stats: {
      site: "4.3 Acres",
      capacity: "High-Pressure",
      year: "2024"
    }
  },
  {
    title: "LGES Hyundai Plant",
    category: "Process Pipe Installation",
    location: "Savannah, GA",
    description:
      "Process pipe installation in the utility area for battery manufacturing work.",
    image: "/images/projects/project-3.png",
    href: "/projects/georgia",
    stats: {
      site: "Savannah, GA",
      capacity: "Process Pipe",
      year: "2024~"
    }
  }
];

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section Header: HHI Style */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-primary/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl font-light tracking-tight text-foreground lg:text-6xl">
              Precision in <span className="font-semibold text-primary">Execution</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-primary transition-all hover:gap-6"
          >
            Explore All Projects
            <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects List: Wide Layout (HHI Style) */}
        <div className="space-y-32 lg:space-y-48">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "group flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Side: Full Aspect 16:9 */}
              <div className="relative flex-1">
                <div className="relative aspect-[16/9] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle Numbering on Image */}
                  <div className="absolute left-0 top-0 bg-primary px-6 py-4">
                    <span className="text-xl font-bold text-white tabular-nums">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full border border-primary/5 hidden lg:block" />
              </div>

              {/* Content Side: Technical Data Style */}
              <div className="flex-1 max-w-xl">
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40">
                      {project.location}
                    </span>
                    <h3 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {project.description}
                  </p>

                  {/* Technical Specs: HHI Styled Table-like grid */}
                  <div className="grid grid-cols-3 gap-6 border-t border-primary/10 pt-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-2">Site</p>
                      <p className="text-sm font-semibold text-foreground">{project.stats.site}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-2">Capacity</p>
                      <p className="text-sm font-semibold text-foreground">{project.stats.capacity}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-2">Year</p>
                      <p className="text-sm font-semibold text-foreground">{project.stats.year}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/70 transition-colors"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
