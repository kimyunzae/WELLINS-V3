import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Industrial engineering facility with piping systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Industrial Engineering Excellence
            </p>
            <h1 className="mt-6 text-4xl font-light leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Precision Engineering for{" "}
              <span className="font-semibold">Industrial Success</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/70 lg:text-xl">
              From complex piping systems to advanced HVAC installations, we deliver 
              world-class industrial engineering solutions that drive operational excellence.
            </p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-primary-foreground/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/50">Scroll</span>
          <div className="h-12 w-px bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  )
}
