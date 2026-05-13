import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServiceBenefit = {
  title: string;
  description: string;
};

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  overview: string;
  capabilities: string[];
  applications: string[];
  benefits?: ServiceBenefit[];
}

export function ServiceDetail({
  title,
  description,
  image,
  overview,
  capabilities,
  applications,
  benefits = [],
}: ServiceDetailProps) {
  return (
    <main className="bg-white">
      <Navigation />
      <PageHeader eyebrow="Services" title={title} description={description} />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="header-reveal min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Service Overview
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
              Precision <span className="font-light">Engineering Solutions</span>
            </h2>
            <p className="mt-8 break-words text-base leading-relaxed text-muted-foreground [overflow-wrap:anywhere] lg:text-lg">
              {overview}
            </p>
          </div>
          <div className="header-reveal reveal-delay-1 flex min-w-0 justify-center lg:justify-end">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-primary/5 shadow-sm lg:max-w-none">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-primary/5" />

        <div className="grid gap-16 sm:grid-cols-2 lg:gap-20">
          <div className="lg:max-w-sm">
            <h3 className="header-reveal reveal-delay-1 mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Core Capabilities
            </h3>
            <div className="space-y-5">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="header-reveal flex items-start gap-4"
                  style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#0066CC]" />
                  <span className="text-base leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full lg:w-[320px]">
              <h3 className="header-reveal reveal-delay-2 mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Industry Applications
              </h3>
              <div className="space-y-5">
                {applications.map((item, index) => (
                  <div
                    key={item}
                    className="header-reveal flex items-start gap-4"
                    style={{ animationDelay: `${0.6 + index * 0.08}s` }}
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#0066CC]" />
                    <span className="text-base leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {benefits.length > 0 ? (
          <>
            <Separator className="my-16 bg-primary/5" />

            <div>
              <h3 className="header-reveal reveal-delay-1 mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Project Benefits
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="header-reveal border-l-2 border-[#0066CC]/30 pl-5"
                    style={{ animationDelay: `${0.35 + index * 0.08}s` }}
                  >
                    <h4 className="text-base font-semibold text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}

      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Ready to discuss your{" "}
              <span className="font-semibold">project?</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our team is ready to discuss your industrial engineering needs.
            </p>
            <Link
              href="/contact"
              className="group/quote relative mt-8 inline-flex items-center overflow-hidden border border-foreground/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-all duration-200 hover:-translate-y-px hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-200 group-hover/quote:scale-x-100 group-focus-visible/quote:scale-x-100" />
              <span className="relative z-10 inline-flex items-center transition-colors duration-200 group-hover/quote:text-background group-focus-visible/quote:text-background">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
