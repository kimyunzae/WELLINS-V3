import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

export const metadata = {
  title: "About Us | Wellins Inc.",
  description:
    "Learn about Wellins Inc., a leading industrial engineering company with over 25 years of experience in piping, HVAC, and equipment installation.",
};

const values = [
  {
    title: "Safety First",
    description:
      "Every project begins and ends with a commitment to the safety of our workers, clients, and communities.",
  },
  {
    title: "Precision Engineering",
    description:
      "We deliver exacting standards in every installation, ensuring long-term reliability and performance.",
  },
  {
    title: "Client Partnership",
    description:
      "We work as an extension of your team, understanding your goals and delivering solutions that exceed expectations.",
  },
  {
    title: "Continuous Innovation",
    description:
      "We invest in the latest technologies and training to bring cutting-edge solutions to industrial challenges.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Building Industrial Excellence Since 1995"
        description="Wellins Inc. has grown from a regional contractor to a nationally recognized leader in industrial engineering services."
      />

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
                Our <span className="font-semibold">Mission</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                To deliver world-class industrial engineering solutions that
                enable our clients to achieve operational excellence. We combine
                technical expertise with an unwavering commitment to safety and
                quality to build facilities that drive industrial progress.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                From our headquarters in Birmingham, Alabama, we serve major
                manufacturers, EPC firms, and general contractors across eight
                states, bringing decades of expertise to every project we
                undertake.
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

      {/* Stats */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            <div>
              <p className="text-5xl font-light lg:text-6xl">30+</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-5xl font-light lg:text-6xl">500+</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-5xl font-light lg:text-6xl">150+</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                Team Members
              </p>
            </div>
            <div>
              <p className="text-5xl font-light lg:text-6xl">8</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/60">
                States Licensed
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
