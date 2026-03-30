import { CareerAnimationObserver } from "@/app/career/career-animation-observer";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { ArrowUpRight, Gauge, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career | Wellins Inc.",
  description:
    "Explore career opportunities at Wellins Inc. and learn the values we look for in our team.",
};

const cultureHighlights = [
  {
    label: "Grow People",
    title: "We grow the company by growing people.",
    icon: ArrowUpRight,
  },
  {
    label: "Own Results",
    title: "Results matter, and process supports results.",
    icon: Gauge,
  },
  {
    label: "Take Pride",
    title: "Do work you can be proud of.",
    icon: ShieldCheck,
  },
];

const talentHighlights = [
  {
    title: "Creative talent",
    description:
      "People who can improve established workflows and find practical solutions when field conditions change.",
    nodeX: 126,
    nodeY: 388,
    cardPosition: "left-[0%] top-[58%]",
  },
  {
    title: "Global talent",
    description:
      "Team members with adaptability, communication skills, and the ability to work effectively across diverse project environments.",
    nodeX: 362,
    nodeY: 248,
    cardPosition: "left-[21%] top-[14%]",
  },
  {
    title: "Challengers",
    description:
      "People who stay steady under pressure, learn quickly, and move forward when new responsibilities or difficult tasks appear.",
    nodeX: 648,
    nodeY: 226,
    cardPosition: "left-[50%] top-[26%]",
  },
  {
    title: "Specialist talent",
    description:
      "Professionals who bring deep expertise in their discipline and use it to create measurable value for our clients and teams.",
    nodeX: 926,
    nodeY: 138,
    cardPosition: "left-[78%] top-[2%]",
  },
];

const talentTrajectoryCopy = {
  eyebrow: "Grow With Wellins",
  description:
    "Build your craft, take on greater responsibility, and let your career keep rising with the team.",
};

export default function CareerPage() {
  return (
    <main>
      <Navigation />
      <CareerAnimationObserver />

      <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#081724] py-14 text-white lg:min-h-[42rem] lg:py-24">
              <Image
                src="/images/banners/head-banner2.png"
                alt="Architectural facade with reflective glass"
                fill
                className="object-cover object-center grayscale-[8%] saturate-[0.68]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,23,36,0.84)_0%,rgba(8,23,36,0.7)_42%,rgba(8,23,36,0.62)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(143,216,255,0.14),transparent_22%),radial-gradient(circle_at_82%_78%,rgba(33,166,255,0.06),transparent_28%)]" />
              <div
                className="career-divider-sweep absolute inset-x-0 top-[112px] hidden h-px bg-white/10 lg:block"
                style={{ animationDelay: "0.08s" }}
              />

              <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
                <div className="flex gap-14 lg:min-h-[32rem] lg:flex-col lg:justify-between">
                  <div className="max-w-[26rem]">
                    <h1 className="mt-3 text-[1.95rem] font-light tracking-tight text-white lg:text-[2.55rem] lg:leading-[1.04]">
                      How We Work
                    </h1>
                    <p className="mt-4 max-w-[20rem] text-[13px] leading-6 text-white/74">
                      Three principles shape the way Wellins teams move.
                    </p>
                  </div>

                  <div className="grid gap-10 lg:grid-cols-3 lg:gap-[3.25rem] xl:gap-16">
                    {cultureHighlights.map((highlight, index) => (
                      <article
                        key={highlight.title}
                        className="career-fade-down relative flex flex-col pt-5 lg:min-h-[152px] lg:pt-0"
                        style={{ animationDelay: `${120 + index * 140}ms` }}
                      >
                        <highlight.icon
                          className="mt-4 h-[15px] w-[15px] text-[#8FD8FF]/78"
                          strokeWidth={1.8}
                        />
                        <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8FD8FF]">
                          {highlight.label}
                        </p>
                        <h2 className="mt-3 max-w-[18ch] text-[1.35rem] font-semibold leading-[1.25] text-white lg:text-[1.55rem]">
                          {highlight.title}
                        </h2>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              className="career-observed-section relative pb-14"
              data-career-observe
              data-in-view="false"
            >
              <h2
                className="career-fade-left text-3xl font-light tracking-tight text-[#2B6FD6] lg:text-4xl"
                style={{ animationDelay: "0.12s" }}
              >
                Who We&apos;re Looking For
              </h2>
              <div
                className="career-fade-left mt-4 max-w-[560px]"
                style={{ animationDelay: "0.28s" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B6FD6]">
                  {talentTrajectoryCopy.eyebrow}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#334155] lg:text-base">
                  {talentTrajectoryCopy.description}
                </p>
              </div>

              <div className="mt-10 lg:hidden">
                <div className="grid gap-8">
                  {talentHighlights.map((highlight, index) => (
                    <article
                      key={highlight.title}
                      className="career-fade-up pt-1"
                      style={{ animationDelay: `${180 + index * 140}ms` }}
                    >
                      <h3 className="text-base font-semibold text-[#2B6FD6] lg:text-lg">
                        {highlight.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#334155] lg:text-base">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="relative left-1/2 mt-12 hidden w-screen -translate-x-1/2 lg:block">
                <div className="relative min-h-[600px]">
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(circle at 18% 78%, rgba(166,197,242,0.18), transparent 24%), radial-gradient(circle at 84% 18%, rgba(43,111,214,0.09), transparent 26%)",
                    }}
                  />
                  <svg
                    viewBox="0 0 1280 520"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="career-constellation-line"
                        x1="6%"
                        y1="88%"
                        x2="94%"
                        y2="16%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#A6C5F2"
                          stopOpacity="0.34"
                        />
                        <stop
                          offset="44%"
                          stopColor="#2B6FD6"
                          stopOpacity="0.58"
                        />
                        <stop
                          offset="68%"
                          stopColor="#5B97E8"
                          stopOpacity="0.74"
                        />
                        <stop
                          offset="82%"
                          stopColor="#2B6FD6"
                          stopOpacity="0.92"
                        />
                        <stop
                          offset="100%"
                          stopColor="#D9E8FB"
                          stopOpacity="0.5"
                        />
                      </linearGradient>
                      <linearGradient
                        id="career-pipe-line"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#D6E7F8"
                          stopOpacity="0.42"
                        />
                        <stop
                          offset="48%"
                          stopColor="#9FC3EF"
                          stopOpacity="0.76"
                        />
                        <stop
                          offset="100%"
                          stopColor="#C3DAF5"
                          stopOpacity="0.36"
                        />
                      </linearGradient>
                      <linearGradient
                        id="career-pipe-line-strong"
                        x1="48%"
                        y1="24%"
                        x2="88%"
                        y2="10%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#D6E7F8"
                          stopOpacity="0.54"
                        />
                        <stop
                          offset="48%"
                          stopColor="#7EB1EA"
                          stopOpacity="0.92"
                        />
                        <stop
                          offset="100%"
                          stopColor="#CDE0F8"
                          stopOpacity="0.48"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 76 408 H 190 V 474 H 28"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.16s" }}
                    />
                    <path
                      d="M 150 404 H 258 V 338 H 320"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.22s" }}
                    />
                    <path
                      d="M 332 250 H 270 V 142 H 180"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.26s" }}
                    />
                    <path
                      d="M 378 250 V 176 H 518"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.31s" }}
                    />
                    <path
                      d="M 206 118 H 340 V 208 H 452"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.34s" }}
                    />
                    <path
                      d="M 684 240 H 798 V 164 H 934"
                      fill="none"
                      stroke="url(#career-pipe-line-strong)"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.36s" }}
                    />
                    <path
                      d="M 696 244 V 360 H 852"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.41s" }}
                    />
                    <path
                      d="M 534 308 H 620 V 416 H 858"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.44s" }}
                    />
                    <path
                      d="M 834 214 H 948 V 118 H 1022"
                      fill="none"
                      stroke="url(#career-pipe-line-strong)"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.48s" }}
                    />
                    <path
                      d="M 1042 156 H 1150 V 96 H 1260"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.46s" }}
                    />
                    <path
                      d="M 1042 156 V 252 H 1242"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.52s" }}
                    />
                    <path
                      d="M 1110 300 H 1216 V 372 H 1276"
                      fill="none"
                      stroke="url(#career-pipe-line)"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                      style={{ animationDelay: "0.56s" }}
                    />
                    <path
                      d="M 74 398 C 174 390 266 314 362 248 C 456 220 584 254 698 240 C 810 226 918 190 1042 156"
                      fill="none"
                      stroke="url(#career-constellation-line)"
                      strokeWidth="2.45"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      className="career-line-draw"
                    />
                  </svg>

                  <div className="absolute inset-y-0 left-1/2 w-full max-w-[1180px] -translate-x-1/2 px-8 xl:max-w-[1220px] xl:px-10">
                    <div className="relative min-h-[600px]">
                      {talentHighlights.map((highlight, index) => (
                        <article
                          key={highlight.title}
                          className={`career-fade-up absolute z-10 flex w-[244px] flex-col xl:w-[252px] ${highlight.cardPosition}`}
                          style={{ animationDelay: `${180 + index * 160}ms` }}
                        >
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-x-5 -inset-y-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.76)_52%,rgba(255,255,255,0)_100%)] blur-[2px]"
                          />
                          <div className="relative z-10">
                            <h3 className="text-base font-semibold text-[#2B6FD6] lg:text-lg">
                              {highlight.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#334155] lg:text-[15px]">
                              {highlight.description}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-center pt-2">
              <Link
                href="/career/apply"
                className="inline-flex items-center bg-[#1C2746] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2B6FD6]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
