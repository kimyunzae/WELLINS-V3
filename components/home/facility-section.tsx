import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FacilitySection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/facility-expansion.jpg"
              alt="Industrial facility expansion project"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured Project
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl xl:text-5xl text-balance">
              Alabama Automotive{" "}
              <span className="font-semibold">Facility Expansion</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              A comprehensive 250,000 sq ft expansion project featuring complete 
              mechanical systems installation including industrial piping, HVAC, 
              and fire protection systems for a major automotive manufacturer.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-light text-foreground lg:text-3xl">250K</p>
                <p className="mt-1 text-sm text-muted-foreground">Square Feet</p>
              </div>
              <div>
                <p className="text-2xl font-light text-foreground lg:text-3xl">18</p>
                <p className="mt-1 text-sm text-muted-foreground">Months Duration</p>
              </div>
            </div>

            <Link
              href="/projects/alabama"
              className="mt-10 inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
            >
              View Project Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
