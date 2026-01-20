import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Download, FileText } from "lucide-react"

export const metadata = {
  title: "Brochure | Wellins Inc.",
  description: "Download our corporate brochure and service materials.",
}

const downloads = [
  {
    title: "Corporate Brochure",
    description: "Comprehensive overview of Wellins Inc. capabilities, services, and project portfolio.",
    size: "4.2 MB",
    format: "PDF",
  },
  {
    title: "Services Overview",
    description: "Detailed information about our six core service areas and capabilities.",
    size: "2.8 MB",
    format: "PDF",
  },
  {
    title: "Safety Program",
    description: "Our commitment to safety excellence and OSHA compliance programs.",
    size: "1.5 MB",
    format: "PDF",
  },
  {
    title: "Quality Assurance",
    description: "Quality management systems and certification documentation.",
    size: "1.2 MB",
    format: "PDF",
  },
]

export default function BrochurePage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="PR Center"
        title="Downloads & Resources"
        description="Access our corporate materials and documentation"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {downloads.map((item, index) => (
              <div key={index} className="flex gap-6 border border-border p-6 lg:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-muted">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">
                      {item.format} • {item.size}
                    </span>
                    <button className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request Materials */}
          <div className="mt-16 border border-border p-8 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                Need <span className="font-semibold">Custom Materials?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Contact our team to request project-specific documentation, case studies, 
                or customized presentations for your stakeholders.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
