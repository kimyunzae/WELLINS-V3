import Image from "next/image";

import {
  HistoryTimeline,
  type HistoryTimelineItem,
} from "@/app/company/history/history-timeline";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Company - History",
  description:
    "Key milestones that trace how our footprint, licensing, and capabilities continue to expand.",
  path: "/company/history",
});

const timeline: HistoryTimelineItem[] = [
  {
    year: "2026",
    title: "Business Expansion",
    description:
      "New Buford, GA manufacturing facility comes online, providing dedicated space for large-scale fabrication and rapid deployment.",
  },
  {
    year: "2024",
    title: "Fire Protection Licensed",
    description:
      "Secured fire protection licenses in GA, TN, LA, AL, and TX, broadening our ability to deliver turnkey life-safety systems.",
  },
  {
    year: "2023",
    title: "HQ Relocation",
    description:
      "Relocated headquarters to Duluth, GA to centralize leadership, engineering, and fabrication support teams.",
  },
  {
    year: "2020",
    title: "Obtaining a Welding License",
    description:
      "Obtained welding licenses supporting carbon, stainless, and specialized fabrication work.",
  },
  {
    year: "2019",
    title: "General Contract Licensed",
    description:
      "Earned general contracting licenses across GA, TN, and SC, unlocking multi-state coverage for industrial partners.",
  },
  {
    year: "2016",
    title: "WELLINS INC Established",
    description:
      "Our company is founded in Georgia with a commitment to delivering dependable industrial piping and building equipment materials.",
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

      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        {/* Slanted feature image (desktop only) — sits behind the timeline */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[46%] lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-industrial.webp"
              alt="Wellins industrial construction site"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            {/* Blend the right edge into the page so the years overlap cleanly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/45 via-[#001A3D]/10 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A3D]/40 via-transparent to-[#001A3D]/15" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
          {/* Heading aligned to the top-right, like the reference */}
          <div className="mb-14 flex justify-end">
            <div className="text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0B3C7A]">
                Wellins Inc
              </p>
              <h2 className="mt-1 text-3xl font-light uppercase tracking-[0.08em] text-foreground sm:text-4xl lg:text-5xl">
                Company History
              </h2>
              <div className="mt-3 ml-auto h-px w-40 bg-[#0B3C7A]/40" />
            </div>
          </div>

          {/* Timeline — pushed right so the years overlap the slanted image edge */}
          <div className="lg:pl-[34%]">
            <HistoryTimeline items={timeline} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
