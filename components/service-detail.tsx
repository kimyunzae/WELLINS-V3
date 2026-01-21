import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  overview: string;
  capabilities: string[];
  applications: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

export function ServiceDetail({
  title,
  description,
  image,
  overview,
  capabilities,
  applications,
  benefits,
}: ServiceDetailProps) {
  return (
    <main>
      <Navigation />
      <PageHeader eyebrow="Services" title={title} description={description} />

      {/* Overview */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                Service <span className="font-semibold">Overview</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {overview}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                Our <span className="font-semibold">Capabilities</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                <span className="font-semibold">Applications</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight lg:text-4xl">
            Why Choose <span className="font-semibold">Wellins</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Ready to discuss your{" "}
              <span className="font-semibold">project?</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Contact our team to learn how we can support your industrial
              engineering needs.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
