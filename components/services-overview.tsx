import Image from "next/image";
import Link from "next/link";
import type { ServiceSummary } from "@/types/services";

interface ServicesOverviewProps {
  services: ServiceSummary[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section aria-label="Service areas" className="bg-white text-[#102b3a]">
      <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-36 lg:pt-28">
        <header className="mb-14 max-w-2xl lg:mb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2174a5]">
            Our services
          </p>
          <h2 className="mt-4 text-[clamp(2.35rem,4vw,3.6rem)] font-light leading-[1.04] tracking-[-0.04em]">
            Our service areas.
          </h2>
        </header>

        <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24 md:pb-14 lg:gap-x-20 lg:gap-y-28">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group/service block focus-visible:outline-none md:even:translate-y-14"
            >
              <div className="relative isolate aspect-[4/3] overflow-hidden bg-[#102b3a] text-white ring-[#2174a5] transition-shadow duration-300 group-focus-visible/service:ring-2 group-focus-visible/service:ring-offset-4">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 1280px) 560px, (min-width: 768px) 46vw, calc(100vw - 40px)"
                  className="-z-30 transform-gpu object-cover saturate-[0.52] transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/service:scale-[1.02] group-focus-visible/service:scale-[1.02] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 -z-20 bg-[#2174a5]/28 mix-blend-color transition-opacity duration-700 group-hover/service:opacity-65 group-focus-visible/service:opacity-65" />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,19,31,0.08)_0%,rgba(3,19,31,0.12)_45%,rgba(2,16,27,0.82)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <h3 className="max-w-[26rem] text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.04] tracking-[-0.038em]">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="pt-5">
                <p className="max-w-[31rem] text-sm leading-6 text-[#102b3a]/62 sm:text-[15px]">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2174a5]">
                  View service
                  <span className="h-px w-7 bg-[#2174a5]/55 transition-[width] duration-300 group-hover/service:w-10 group-focus-visible/service:w-10 motion-reduce:transition-none" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
