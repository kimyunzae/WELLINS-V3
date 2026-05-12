import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectSummary = {
  name: string;
  year: string;
  type?: string;
  scopes?: string[];
};

type ProjectRegion = {
  state: string;
  projects: ProjectSummary[];
  image: string;
  href: string;
};

export const metadata = {
  title: "Projects | Wellins Inc.",
  description:
    "Explore representative industrial project work across regional manufacturing markets.",
};

const projects: ProjectRegion[] = [
  {
    state: "Buford",
    projects: [
      {
        name: "Birmingham Automotive Plant Expansion",
        type: "Equipment Installation",
        year: "2024",
      },
      {
        name: "Huntsville Aerospace Facility",
        type: "Industrial Piping",
        year: "2023",
      },
    ],
    image: "/images/project-1.jpg",
    href: "/projects/buford",
  },
  {
    state: "Georgia",
    projects: [
      {
        name: "LGES Hyundai Plant",
        scopes: ["Process Pipe Installation"],
        year: "2024~",
      },
      {
        name: "SK Battery America Plant-2",
        scopes: ["Hot Oil Pipe", "HVAC Installation"],
        year: "2024~",
      },
    ],
    image: "/images/projects/project-3.png",
    href: "/projects/georgia",
  },
  {
    state: "Indiana",
    projects: [
      {
        name: "Soulbrain Plant",
        scopes: ["Process Pipe Installation"],
        year: "2023~2024",
      },
    ],
    image: "/images/projects/project-5.png",
    href: "/projects/indiana",
  },
  {
    state: "Michigan",
    projects: [
      {
        name: "LG Chemical Plant",
        scopes: ["NMP System Installation"],
        year: "2019",
      },
    ],
    image: "/images/projects/project-14.png",
    href: "/projects/michigan",
  },
  {
    state: "Ohio",
    projects: [
      {
        name: "LGES Honda JV Battery",
        scopes: ["Process Pipe Installation"],
        year: "2024~",
      },
      {
        name: "LGES Honda JV Battery",
        scopes: ["Hot Oil Pipe Installation"],
        year: "2023",
      },
    ],
    image: "/images/projects/project-1.png",
    href: "/projects/ohio",
  },
  {
    state: "South Carolina",
    projects: [
      {
        name: "Samsung Plant",
        scopes: ["Duct System Installation", "Utility Pipe Installation"],
        year: "2018",
      },
    ],
    image: "/images/projects/project-16.png",
    href: "/projects/south-carolina",
  },
  {
    state: "Tennessee",
    projects: [
      {
        name: "Ultium Cells-2",
        scopes: ["Hot Oil Pipe Installation"],
        year: "2022~2024",
      },
      {
        name: "LG Electronics Plant",
        scopes: ["High Pressure Water Line Installation"],
        year: "2019",
      },
    ],
    image: "/images/projects/project-7.png",
    href: "/projects/tennessee",
  },
  {
    state: "Texas",
    projects: [
      {
        name: "Dongwoo Fine-Chem",
        scopes: ["Process Pipe Installation"],
        year: "2023~2024",
      },
    ],
    image: "/images/projects/project-6.png",
    href: "/projects/texas",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Projects"
        title="Our Work Across America"
        description="Representative industrial project work across eight regional markets, organized by project location and scope."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((region, index) => (
              <Link
                key={index}
                href={region.href}
                className="group w-full border border-border transition-colors hover:border-accent md:mx-auto md:max-w-[560px]"
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
                <div className="p-6">
                  <div className="space-y-3">
                    {region.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="flex items-start justify-between gap-4"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {project.name}
                          </p>
                          <ul className="mt-1 space-y-0.5">
                            {(project.scopes ?? [project.type]).map(
                              (scope) =>
                                scope ? (
                                  <li
                                    key={scope}
                                    className="flex items-start gap-1.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground"
                                  >
                                    <span
                                      className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                                      aria-hidden="true"
                                    />
                                    <span>{scope}</span>
                                  </li>
                                ) : null
                            )}
                          </ul>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {project.year}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent">
                    View More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
