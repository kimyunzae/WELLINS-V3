import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | Wellins Inc.",
  description:
    "Explore our portfolio of industrial engineering projects across the United States.",
};

const projects = [
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
        name: "Atlanta Food Processing Center",
        type: "HVAC System",
        year: "2024",
      },
      {
        name: "Savannah Distribution Hub",
        type: "Fire Protection",
        year: "2023",
      },
    ],
    image: "/images/project-2.jpg",
    href: "/projects/georgia",
  },
  {
    state: "Indiana",
    projects: [
      {
        name: "Indianapolis Manufacturing Complex",
        type: "Industrial Piping",
        year: "2024",
      },
      {
        name: "Fort Wayne Steel Mill",
        type: "Equipment Installation",
        year: "2022",
      },
    ],
    image: "/images/project-3.jpg",
    href: "/projects/indiana",
  },
  {
    state: "Michigan",
    projects: [
      {
        name: "Detroit Electric Vehicle Plant",
        type: "Equipment Installation",
        year: "2024",
      },
      {
        name: "Grand Rapids Pharmaceutical Facility",
        type: "HVAC System",
        year: "2023",
      },
    ],
    image: "/images/project-1.jpg",
    href: "/projects/michigan",
  },
  {
    state: "Ohio",
    projects: [
      {
        name: "Columbus Distribution Center",
        type: "Fire Protection",
        year: "2024",
      },
      {
        name: "Cincinnati Chemical Plant",
        type: "Industrial Piping",
        year: "2023",
      },
    ],
    image: "/images/project-2.jpg",
    href: "/projects/ohio",
  },
  {
    state: "South Carolina",
    projects: [
      {
        name: "Charleston Port Facility",
        type: "Equipment Installation",
        year: "2024",
      },
      { name: "Greenville Textile Mill", type: "HVAC System", year: "2022" },
    ],
    image: "/images/project-3.jpg",
    href: "/projects/south-carolina",
  },
  {
    state: "Tennessee",
    projects: [
      {
        name: "Nashville Automotive Assembly",
        type: "Industrial Piping",
        year: "2024",
      },
      {
        name: "Memphis Logistics Center",
        type: "Fire Protection",
        year: "2023",
      },
    ],
    image: "/images/project-1.jpg",
    href: "/projects/tennessee",
  },
  {
    state: "Texas",
    projects: [
      {
        name: "Houston Petrochemical Complex",
        type: "High-Pressure Vessels",
        year: "2024",
      },
      { name: "Dallas Semiconductor Fab", type: "HVAC System", year: "2023" },
    ],
    image: "/images/project-2.jpg",
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
        description="Over 500 successful installations across eight states, serving the nation's leading manufacturers."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((region, index) => (
              <Link
                key={index}
                href={region.href}
                className="group border border-border transition-colors hover:border-accent"
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
                          <p className="text-xs text-muted-foreground">
                            {project.type}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {project.year}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent">
                    View All Projects
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
