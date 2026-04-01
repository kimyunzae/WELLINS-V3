import {
  HistoryTimeline,
  type HistoryTimelineItem,
} from "@/app/company/history/history-timeline";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "History | Wellins Inc.",
  description:
    "Key milestones that trace how our footprint, licensing, and capabilities continue to expand.",
};

const timeline: HistoryTimelineItem[] = [
  {
    year: "2016",
    title: "WELLINS INC Established",
    description:
      "Our company is founded in Georgia with a commitment to delivering dependable industrial and mechanical systems.",
  },
  {
    year: "2019",
    title: "General Contract Licensed",
    description:
      "Earned general contracting licenses across GA, TN, and SC, unlocking multi-state coverage for industrial partners.",
  },
  {
    year: "2023",
    title: "HQ Relocation",
    description:
      "Relocated headquarters to Duluth, GA to centralize leadership, engineering, and fabrication support teams.",
  },
  {
    year: "2024",
    title: "Fire Protection Licensed",
    description:
      "Secured fire protection licenses in LA, AL, and TX, broadening our ability to deliver turnkey life-safety systems.",
  },
  {
    year: "2025",
    title: "Business Expansion",
    description:
      "New Buford, GA manufacturing facility comes online, providing dedicated space for large-scale fabrication and rapid deployment.",
  },
];

export default function HistoryPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Our History"
        description="Key milestones that trace how our footprint, licensing, and capabilities continue to expand."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="max-w-4xl">
            <HistoryTimeline items={timeline} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
