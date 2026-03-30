import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";

type LegalDocumentLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalDocumentLayout({
  title,
  description,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <main>
      <Navigation />
      <PageHeader eyebrow="Legal" title={title} description={description} />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[980px] px-6 lg:px-8">
          <article className="space-y-10 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {children}
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
