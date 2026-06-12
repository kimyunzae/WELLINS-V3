import { BrochureDownloads } from "@/components/pr-center/brochure-downloads";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "PR Center - Brochures and Downloads",
  description: "Download our corporate brochure and service materials.",
  path: "/pr-center/brochure",
});

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
          <BrochureDownloads />
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
