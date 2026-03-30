import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Georgia Manufacturing Plant",
    category: "Industrial Piping",
    location: "Atlanta, GA",
    image: "/images/project-1.jpg",
    href: "/projects/georgia",
  },
  {
    title: "Texas Petrochemical Facility",
    category: "HVAC System",
    location: "Houston, TX",
    image: "/images/project-2.jpg",
    href: "/projects/texas",
  },
  {
    title: "Ohio Distribution Center",
    category: "Fire Protection",
    location: "Columbus, OH",
    image: "/images/project-3.jpg",
    href: "/projects/ohio",
  },
]

export function ProjectsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our Work
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl xl:text-5xl">
              Recent <span className="font-semibold">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
