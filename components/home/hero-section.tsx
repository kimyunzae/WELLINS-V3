import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Deep Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Industrial engineering facility with piping systems"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Gradient Overlay: Deep Blue to Darker Blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-12 xl:px-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 overflow-hidden"></div>

            <h1 className="text-4xl font-light leading-[1.2] tracking-tight text-white md:text-5xl lg:text-6xl text-balance animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              Precision Engineering for <br />
              <span className="font-bold">Industrial Success</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              From complex piping systems to advanced HVAC installations, we
              deliver world-class industrial engineering solutions that drive
              operational excellence.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/12 bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#001A3D] transition-all hover:bg-white/90"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Element */}
      <div className="absolute right-0 bottom-0 top-0 hidden w-24 border-l border-white/10 lg:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
            WELLINS ENGINEERING CO., LTD.
          </span>
        </div>
      </div>
    </section>
  );
}
