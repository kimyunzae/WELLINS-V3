import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "News | Wellins Inc.",
  description: "Latest news and announcements from Wellins Inc.",
}

const news = [
  {
    date: "January 15, 2026",
    title: "Wellins Inc. Completes Major Automotive Plant Expansion",
    excerpt: "We are pleased to announce the successful completion of a 250,000 sq ft expansion project for a leading automotive manufacturer in Birmingham, Alabama.",
    category: "Project Completion",
  },
  {
    date: "December 8, 2025",
    title: "New Houston Office Expansion",
    excerpt: "To better serve our growing petrochemical client base, Wellins Inc. has expanded our Houston operations with a new 15,000 sq ft facility.",
    category: "Company News",
  },
  {
    date: "November 20, 2025",
    title: "Safety Milestone: 2 Million Hours Without Lost Time",
    excerpt: "Wellins Inc. celebrates a significant safety achievement with over 2 million man-hours worked without a lost-time incident.",
    category: "Safety",
  },
  {
    date: "October 5, 2025",
    title: "Partnership with Leading Equipment Manufacturer",
    excerpt: "Wellins Inc. announces a strategic partnership with a major industrial equipment manufacturer to serve as preferred installation contractor.",
    category: "Partnership",
  },
  {
    date: "September 12, 2025",
    title: "Wellins Inc. Named Top Industrial Contractor",
    excerpt: "Industry publication recognizes Wellins Inc. as a top industrial mechanical contractor in the southeastern United States.",
    category: "Recognition",
  },
  {
    date: "August 1, 2025",
    title: "Expansion into Electric Vehicle Manufacturing Sector",
    excerpt: "Wellins Inc. completes first major EV battery facility project, marking expansion into the growing electric vehicle manufacturing sector.",
    category: "Project Completion",
  },
]

export default function NewsPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="PR Center"
        title="News & Updates"
        description="Stay informed about our latest projects, achievements, and company developments"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {news.map((item, index) => (
              <article key={index} className="group border-b border-border pb-8 last:border-0 lg:pb-12">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-12">
                  <div className="lg:w-48 lg:shrink-0">
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    <span className="mt-2 inline-block border border-border px-2 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent lg:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {item.excerpt}
                    </p>
                    <button className="mt-4 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-muted p-8 lg:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Stay Updated</h2>
                <p className="mt-2 text-muted-foreground">
                  Subscribe to receive news about our latest projects and company updates.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
