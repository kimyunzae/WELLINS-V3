import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export function ProjectDetail({
  state,
  description,
  stats,
  projects,
}: ProjectDetailProps) {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Projects"
        title={`Projects in ${state}`}
        description={description}
      />

      {/* Stats */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-light text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {project.type} • {project.year}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground lg:text-3xl">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.location}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              className="mt-8 inline-flex items-center bg-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary-foreground/90"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
