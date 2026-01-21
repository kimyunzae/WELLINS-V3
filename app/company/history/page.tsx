import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "History | Wellins Inc.",
  description:
    "The history of Wellins Inc., from our founding in 1995 to becoming a leader in industrial engineering.",
};

const timeline = [
  {
    year: "1995",
    title: "Company Founded",
    description:
      "Wellins Inc. was established in Birmingham, Alabama, with a focus on industrial piping installations for regional manufacturers.",
  },
  {
    year: "2000",
    title: "HVAC Division Launched",
    description:
      "Expanded services to include complete HVAC system design and installation, responding to client demand for integrated solutions.",
  },
  {
    year: "2005",
    title: "Multi-State Expansion",
    description:
      "Obtained licensing in five southeastern states, enabling service to major automotive manufacturers establishing facilities in the region.",
  },
  {
    year: "2010",
    title: "Fire Protection Services",
    description:
      "Added comprehensive fire protection capabilities, becoming a full-service mechanical contractor for industrial facilities.",
  },
  {
    year: "2015",
    title: "Texas Operations",
    description:
      "Opened Houston office to serve the petrochemical and energy sectors, marking significant expansion into Gulf Coast markets.",
  },
  {
    year: "2020",
    title: "500th Project Milestone",
    description:
      "Completed our 500th major installation, a testament to the trust placed in us by manufacturers across the United States.",
  },
  {
    year: "2024",
    title: "Looking Forward",
    description:
      "Continued investment in technology, safety, and workforce development positions Wellins Inc. for the next chapter of growth.",
  },
];

export default function HistoryPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Our History"
        description="Nearly three decades of industrial engineering excellence"
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
