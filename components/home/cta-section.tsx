import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light tracking-tight text-foreground lg:text-4xl xl:text-5xl text-balance">
            Ready to start your next{" "}
            <span className="font-semibold">industrial project?</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Contact our team of experts to discuss your requirements and receive 
            a comprehensive proposal tailored to your needs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/pr-center/brochure"
              className="inline-flex items-center justify-center border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
