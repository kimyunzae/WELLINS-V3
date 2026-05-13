import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Brochure | Wellins Inc.",
  description: "Download our corporate brochure and service materials.",
};

const downloads = [
  {
    title: "Corporate Brochure",
    description:
      "Comprehensive overview of Wellins Inc. capabilities, services, and project portfolio.",
    size: "4.2 MB",
    format: "PDF",
    href: "/downloads/corporate-brochure.pdf",
  },
  {
    title: "Services Overview",
    description:
      "Detailed information about our six core service areas and capabilities.",
    size: "2.8 MB",
    format: "PDF",
    href: "/downloads/services-overview.pdf",
  },
  {
    title: "Safety Program",
    description:
      "Our commitment to safety excellence and OSHA compliance programs.",
    size: "1.5 MB",
    format: "PDF",
    href: "/downloads/safety-program.pdf",
  },
  {
    title: "Quality Assurance",
    description: "Quality management systems and certification documentation.",
    size: "1.2 MB",
    format: "PDF",
    href: "/downloads/quality-assurance.pdf",
  },
];

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
              <div
                key={index}
                className="flex gap-6 border border-border p-6 lg:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-muted">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">
                      {item.format} • {item.size}
                    </span>
                    <a
                      href={item.href}
                      className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent cursor-pointer"
                      download
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Need <span className="font-semibold">Custom Materials?</span>
            </h2>
            <Link
              href="/contact"
              className="group/quote relative mt-8 inline-flex items-center overflow-hidden border border-foreground/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-all duration-200 hover:-translate-y-px hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-200 group-hover/quote:scale-x-100 group-focus-visible/quote:scale-x-100" />
              <span className="relative z-10 inline-flex items-center transition-colors duration-200 group-hover/quote:text-background group-focus-visible/quote:text-background">
                Request Materials
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
