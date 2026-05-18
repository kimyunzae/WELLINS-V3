import { CareerApplicationForm } from "@/components/career/application-form";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = createPageMetadata({
  title: "Career Application",
  description: "Submit your career application to Wellins Inc.",
  path: "/career/apply",
});

export default function CareerApplyPage() {
  return (
    <main>
      <Navigation />

      <section className="pt-24">
        <div className="relative h-[240px] overflow-hidden sm:h-[300px] lg:h-[340px]">
          <Image
            src="/images/headquarters.webp"
            alt="Wellins career application banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#101828]/45" />
          <div className="absolute inset-x-0 bottom-10">
            <div className="mx-auto max-w-[1180px] px-6 lg:px-8">

              <h1 className="mt-3 text-3xl font-light tracking-tight text-white lg:text-5xl">
                Join Wellins
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-36">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="-mt-10 border border-[#DDE3EA] bg-[#F3F5F7] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-8 lg:-mt-16 lg:p-10">
            <CareerApplicationForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
