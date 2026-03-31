import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ServiceCapabilitiesSection } from "@/components/service-capabilities-section";
import { ArrowRight } from "lucide-react";
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

      {/* Overview Section */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div className="relative order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary/30" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary/60">
                  Service Overview
                </span>
              </div>
              <h2 className="text-4xl font-light tracking-tight text-foreground lg:text-5xl">
                Precision <span className="font-semibold text-primary">Engineering</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                {overview}
              </p>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group/quote relative inline-flex items-center overflow-hidden border border-primary/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:border-primary focus-visible:outline-none"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover/quote:scale-x-100" />
                  <span className="relative z-10 inline-flex items-center transition-colors duration-300 group-hover/quote:text-white">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[16/9] overflow-hidden shadow-2xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full border border-primary/10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <ServiceCapabilitiesSection
        capabilities={capabilities}
        applications={applications}
      />

      {/* Benefits Section */}
      <section className="bg-[#001A3D] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
              Our Value Proposition
            </span>
            <h2 className="text-3xl font-light tracking-tight lg:text-5xl">
              Why Choose <span className="font-semibold text-white">Wellins</span>
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="mb-6 h-px w-12 bg-white/20 transition-all duration-300 group-hover:w-full group-hover:bg-white/40" />
                <h3 className="text-xl font-semibold tracking-tight">{benefit.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background py-24 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="relative overflow-hidden bg-muted px-6 py-20 text-center lg:px-16 lg:py-28">
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-5xl">
                Ready to discuss your <span className="font-semibold">project?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Our engineering team is ready to provide tailored solutions for your industrial needs.
              </p>
              <Link
                href="/contact"
                className="group/quote relative mt-12 inline-flex items-center overflow-hidden border border-primary px-10 py-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:-translate-y-px"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover/quote:scale-x-100" />
                <span className="relative z-10 inline-flex items-center transition-colors duration-300 group-hover/quote:text-white">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
