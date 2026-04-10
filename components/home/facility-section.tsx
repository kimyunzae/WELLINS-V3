import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FacilitySection() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-24">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-blue-400" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Featured Expansion</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#001A3D] lg:text-5xl mb-8">
              Buford <br />
              <span className="text-blue-500">Manufacturing Hub</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              <p>
                Our new 4.3-acre manufacturing facility in Buford, GA, represents a significant milestone in our commitment to industrial excellence.
              </p>
              <p>
                This expansion is designed to provide unprecedented production capacity for high-pressure piping, specialized vessels, and advanced fabrication systems across the Southeast.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-y border-slate-100 py-10">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-blue-400/20" />
                <p className="text-4xl font-bold text-[#001A3D]">250K</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-400">Square Feet</p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-blue-400/20" />
                <p className="text-4xl font-bold text-[#001A3D]">2026</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-400">Launch Year</p>
              </div>
            </div>

            <Link
              href="/projects/buford"
              className="mt-12 group inline-flex items-center justify-center bg-[#001A3D] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#002855] transition-all"
            >
              View Project Details
              <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Image with Decorative Elements */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden z-10 shadow-2xl">
              <Image
                src="/images/facility-expansion.jpg"
                alt="Industrial facility expansion project"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>

            {/* Decorative Background Box */}
            <div className="absolute -right-8 -bottom-8 w-full h-full border-2 border-blue-400/10 -z-0" />

            {/* Year Badge */}
            <div className="absolute -left-8 top-12 bg-blue-500 text-white p-6 z-20 shadow-xl hidden md:block">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1">Coming Soon</p>
              <p className="text-3xl font-bold tracking-tighter">Q3 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
