import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { ServiceImmersiveStory } from "@/components/service-immersive-story";
import type { ServiceBenefit } from "@/types/services";
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
  benefits?: ServiceBenefit[];
}

export function ServiceDetail({
  title,
  image,
  overview,
  capabilities,
  applications,
  benefits = [],
}: ServiceDetailProps) {
  return (
    <main className="overflow-hidden bg-white">
      <Navigation />

      <ServiceImmersiveStory
        title={title}
        image={image}
        overview={overview}
        capabilities={capabilities}
        applications={applications}
      />

      {benefits.length > 0 ? (
        <section
          id="service-outcomes"
          className="bg-[#f7f7f8] py-20 text-[#171719] lg:py-28"
        >
          <div className="mx-auto max-w-[1100px] px-5 sm:px-6 xl:max-w-[1440px] xl:px-8">
            <div className="pb-14 lg:pb-20">
              <h2 className="max-w-4xl text-balance text-[clamp(2.5rem,5vw,3.5rem)] font-normal leading-[1.286] tracking-[-0.0319em]">
                What better execution changes.
              </h2>
            </div>

            <ul className="border-t border-[#70737c]/20">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="grid gap-3 border-b border-[#70737c]/20 px-4 py-8 transition-colors duration-200 hover:bg-black/[0.025] sm:grid-cols-[0.8fr_1.2fr] sm:items-start lg:gap-10 lg:px-10"
                >
                  <h3 className="text-[22px] font-semibold leading-[30px] tracking-[-0.0194em]">
                    {benefit.title}
                  </h3>
                  <p className="max-w-xl text-base leading-[26px] tracking-[0.0057em] text-[#2e2f33]/70">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#071019] text-white">
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-[#06101a]/82" />
        <div className="mx-auto flex min-h-[560px] max-w-[1100px] flex-col justify-center px-5 py-14 sm:px-6 lg:py-16 xl:max-w-[1440px] xl:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[15px] leading-6 tracking-[0.0096em] text-white/60">
                Bring us the difficult part.
              </p>
              <h2 className="max-w-4xl text-balance text-[clamp(2.5rem,5vw,3.5rem)] font-normal leading-[1.286] tracking-[-0.0319em]">
                Let&apos;s engineer what comes next.
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold leading-5 tracking-[0.0145em] text-white transition-colors hover:text-[#69c7ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69c7ed]"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
