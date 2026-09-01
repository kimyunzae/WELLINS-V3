import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ServicesOverview } from "@/components/services-overview";
import { serviceSummaries } from "@/data/services/summaries";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Comprehensive industrial engineering services including industrial piping, insulation, pressure vessels, and fire protection.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Services"
        title="Industrial Engineering Services"
        description="From initial design to final installation, we deliver end-to-end solutions that meet the highest standards of quality and safety."
        compact
      />
      <ServicesOverview services={serviceSummaries} />

      <Footer />
    </main>
  );
}
