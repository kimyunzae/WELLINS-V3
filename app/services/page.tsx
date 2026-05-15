import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { serviceSummaries } from "@/data/services/summaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | Wellins Inc.",
  description:
    "Comprehensive industrial engineering services including equipment installation, piping, HVAC, insulation, pressure vessels, and fire protection.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Services"
        title="Industrial Engineering Services"
        description="From initial design to final installation, we deliver end-to-end solutions that meet the highest standards of quality and safety."
        compact
      />

      <section className="bg-[#F6F8FB] py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {serviceSummaries.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-md border border-[#E2E8F0] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(15,23,42,0.13)]"
              >
                <div className="relative aspect-[16/7] overflow-hidden bg-slate-200">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001A3D]/15 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold tracking-tight text-[#071B3A]">
                    {service.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-[#42526B]">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[0.16em] text-[#071B3A]">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
