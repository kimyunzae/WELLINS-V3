import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "History | Wellins Inc.",
  description:
    "Key milestones that trace how our footprint, licensing, and capabilities continue to expand.",
};

const timeline = [
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
      "Earned general contracting licenses across GA, TN, and SC—unlocking multi-state coverage for industrial partners.",
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
      "Secured fire protection licenses in LA, AL, and TX—broadening our ability to deliver turnkey life-safety systems.",
  },
  {
    year: "2025",
    title: "Business Expansion",
    description:
      "New Buford, GA manufacturing facility comes online—providing dedicated space for large-scale fabrication and rapid deployment.",
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
            {/* Timeline */}
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-8 pb-12 last:pb-0"
                >
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background text-sm font-semibold text-foreground">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
