import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Wellins Inc., founded in 2016, delivering industrial engineering services in piping, HVAC, and equipment installation.",
  path: "/company/about",
});

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
      <section className="relative overflow-hidden pt-36 pb-16 text-primary-foreground lg:pt-44 lg:pb-10">
        <div className="absolute inset-0">
          <Image
            src="/images/headquarters.webp"
            alt="Wellins headquarters background"
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/74 to-[#001A3D]/28" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute right-0 bottom-0 top-0 hidden w-24 border-l border-white/10 lg:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
              WELLINS INC
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Company
            </p>
            <h1 className="mt-4 text-4xl font-light tracking-tight text-balance lg:text-5xl xl:text-6xl">
              Building Industrial Excellence Since 2016
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 lg:text-xl">
              Wellins Inc. has grown from a regional contractor to a nationally
              recognized leader in industrial engineering services.
            </p>
          </div>

          <div className="mt-16 border-t border-primary-foreground/12 pt-8 lg:mt-20 lg:pt-10">
            <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
              <div>
                <p className="text-5xl font-light lg:text-6xl">2016</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/68">
                  Founded
                </p>
              </div>
              <div>
                <p className="text-5xl font-light lg:text-6xl">12</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/68">
                  States Licensed
                </p>
              </div>
              <div>
                <p className="text-5xl font-light lg:text-6xl">150+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/68">
                  Major
                  <span className="mt-1 block text-xs uppercase tracking-wider text-primary-foreground/68">
                    Installations
                  </span>
                </p>
              </div>
              <div>
                <p className="text-5xl font-light lg:text-6xl">500+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/68">
                  Contractors Appointed
                </p>
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
                src="/images/images/image-hq.webp"
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

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[960px] px-6 lg:px-8">
          <div className="border-t border-border pt-12 lg:pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Leadership Message
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              A Message From Our CEO
            </h2>

            <div className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p className="text-foreground">Dear Valued Partners and Stakeholders,</p>

              <p>
                Since our establishment in Georgia, Wellins Inc. has continued
                to grow as an industrial systems partner for manufacturing and
                facility projects. Our work brings together industrial piping,
                HVAC systems, equipment installation, insulation, jacketing, and
                fire protection capabilities.
              </p>

              <p>
                Our success is built on a simple foundation: we treat every
                project as if it were our own facility. This means never
                compromising on safety, always pursuing the highest standards of
                quality, and continuously investing in our people and
                capabilities.
              </p>

              <p>
                As we look to the future, we see tremendous opportunity to
                support the reindustrialization of America. From automotive
                plants to food processing facilities, from petrochemical
                complexes to distribution centers, we are ready to help our
                partners build the infrastructure that drives economic growth.
              </p>

              <p>
                I invite you to explore what Wellins Inc. can do for your next
                project. Our team of expert engineers, project managers, and
                skilled tradespeople are ready to bring your vision to life with
                the precision, planning, and reliability our clients expect from
                a dedicated industrial systems partner.
                the precision and reliability that has defined our company for
                over a decade.
              </p>

              <p className="pt-2 font-medium text-foreground">
                Thank you for considering Wellins Inc. as your industrial
                engineering partner.
              </p>
            </div>

            <div className="mt-10 border-l border-accent pl-6">
              <p className="text-lg font-semibold text-foreground">
                Jeongsu Park
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Chief Executive Officer, Wellins Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
