import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

export const metadata = {
  title: "About Us | Wellins Inc.",
  description:
    "Learn about Wellins Inc., founded in 2016, delivering industrial engineering services in piping, HVAC, and equipment installation.",
};

const values = [
  {
    title: "Safety First",
    description:
      "Every project begins and ends with a commitment to the safety of our workers, clients, and communities.",
  },
  {
    title: "Integrated Project Delivery",
    description:
      "In-house management, fabrication, and field teams aligned for fast decision making.",
  },
  {
    title: "Scalable Capabilities",
    description:
      "Licensed across the Southeast with capacity to mobilize specialty crews quickly.",
  },
  {
    title: "Partnership Mindset",
    description:
      "Long-term relationships that prioritize transparency, safety, and trusted delivery.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Building Industrial Excellence Since 2016"
        description="Wellins Inc. has grown from a regional contractor to a nationally recognized leader in industrial engineering services."
      />

      {/* Stats */}
      <section className="bg-primary pt-0 pb-16 text-primary-foreground lg:pb-10 -mt-10 lg:-mt-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="border-t border-primary-foreground/10">
            <div className="flex items-center py-8 lg:py-10">
              <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12 ">
                <div>
                  <p className="text-5xl font-light lg:text-6xl">2016</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                    Founded
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-light lg:text-6xl">12</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                    States Licensed
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-light lg:text-6xl">4.3</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                    Acres
                    <span className="mt-1 block text-xs uppercase tracking-wider text-primary-foreground/60">
                      Buford Facility
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-light lg:text-6xl">150+</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                    Major Installations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/team-workers.jpg"
                alt="Wellins Inc. team members at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                "Go above and beyond the best."
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                WELLINS INC was founded with the goal of enhancing efficiency in
                the construction and engineering sectors through innovative
                technological solutions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                We were established with a deep understanding of technological
                advancements and industry experience, aiming to provide more
                efficient and reliable project execution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                WELLINS INC has a dedicated Project Management Group along with
                Engineering Support and established distribution accounts with
                leading equipment manufacturers for mechanical, industrial,
                HVAC, and commercial projects.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                We look forward to growing together as a community in the
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Our <span className="font-semibold">Values</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              These core principles guide every decision we make and every
              project we deliver.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
