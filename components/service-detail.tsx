import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  overview: string;
  capabilities: string[];
  applications: string[];
}

export function ServiceDetail({
  title,
  description,
  image,
  overview,
  capabilities,
  applications,
}: ServiceDetailProps) {
  return (
    <main className="bg-white">
      <Navigation />
      <PageHeader eyebrow="Services" title={title} description={description} />

      {/* Main Content Container with reduced width for better density */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        
        {/* 1. Overview Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="header-reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Service Overview
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
              Precision <span className="font-light">Engineering Solutions</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {overview}
            </p>
          </div>
          <div className="header-reveal reveal-delay-1 flex justify-center lg:justify-end">
            <div className="relative aspect-[16/9] w-full overflow-hidden shadow-sm border border-primary/5 lg:max-w-none">
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

        {/* 2. Capabilities & Applications Grid */}
        <div className="grid gap-16 sm:grid-cols-2 lg:gap-20">
          {/* Capabilities */}
          <div className="lg:max-w-sm">
            <h3 className="header-reveal reveal-delay-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
              Core Capabilities
            </h3>
            <div className="space-y-5">
              {capabilities.map((item, index) => (
                <div 
                  key={index} 
                  className="header-reveal flex items-start gap-4"
                  style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                >
                  <Check className="h-4 w-4 shrink-0 text-[#0066CC] mt-1" />
                  <span className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications - Pushed to the far right edge of the container */}
          <div className="flex justify-end">
            <div className="w-full lg:w-[320px]">
              <h3 className="header-reveal reveal-delay-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
                Industry Applications
              </h3>
              <div className="space-y-5">
                {applications.map((item, index) => (
                  <div 
                    key={index} 
                    className="header-reveal flex items-start gap-4"
                    style={{ animationDelay: `${0.6 + index * 0.08}s` }}
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#0066CC] mt-1" />
                    <span className="text-base text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-primary/5" />

        {/* 3. Inquiry Section */}
        <div className="text-center py-8">
          <h2 className="header-reveal reveal-delay-1 text-xl font-light tracking-tight text-foreground lg:text-2xl">
            Ready to discuss your <span className="font-semibold text-primary">project?</span>
          </h2>
          <div className="header-reveal reveal-delay-2 mt-10">
            <Link
              href="/contact"
              className="group/quote relative inline-flex items-center overflow-hidden border border-primary/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:border-primary focus-visible:outline-none"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover/quote:scale-x-100" />
              <span className="relative z-10 inline-flex items-center transition-colors duration-300 group-hover/quote:text-white">
                Inquiry Now
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
