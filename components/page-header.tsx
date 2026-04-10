import Image from "next/image"

import { cn } from "@/lib/utils"

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

const headerBackgrounds: Record<
  string,
  {
    image: string
    alt: string
  }
> = {
  company: {
    image: "/images/headquarters.jpg",
    alt: "Wellins company facility exterior",
  },
  services: {
    image: "/images/service-equipment.jpg",
    alt: "Wellins industrial service team working on equipment",
  },
  projects: {
    image: "/images/facility-expansion.jpg",
    alt: "Industrial construction project in progress",
  },
  "pr center": {
    image: "/images/headquarters.jpg",
    alt: "Wellins corporate profile background",
  },
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  const background = eyebrow
    ? headerBackgrounds[eyebrow.trim().toLowerCase()]
    : undefined

  // Split title if it contains "Projects in" to create the staggered effect
  const isProjectPage = title.includes("Projects in")
  const stateName = isProjectPage ? title.replace("Projects in ", "") : ""

  return (
    <section
      className={cn(
        "relative overflow-hidden text-primary-foreground",
        background
          ? "bg-primary pt-36 pb-24 lg:pt-48 lg:pb-36"
          : "bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28"
      )}
    >
      {background && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={background.image}
              alt={background.alt}
              fill
              className="object-cover scale-105"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/72 to-[#001A3D]/28" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="absolute right-0 bottom-0 top-0 hidden w-24 border-l border-white/10 lg:block">
            <div className="flex h-full items-center justify-center">
              <span className="rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
                WELLINS INC
              </span>
            </div>
          </div>
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className={cn("max-w-3xl", background && "lg:max-w-4xl")}>
          {isProjectPage ? (
            <div className="flex flex-col">
              <span className="header-reveal text-sm font-semibold uppercase tracking-[0.3em] text-white/70 lg:text-base">
                Projects in
              </span>
              <h1 className="header-reveal reveal-delay-1 mt-1 text-4xl font-light tracking-tight text-balance sm:text-5xl lg:ml-12 lg:text-7xl xl:text-8xl">
                {stateName}
              </h1>
            </div>
          ) : (
            <h1 className="header-reveal mt-4 text-4xl font-light tracking-tight text-balance lg:text-5xl xl:text-6xl">
              {title}
            </h1>
          )}

          {description && (
            <p
              className={cn(
                "header-reveal mt-8 text-lg leading-relaxed lg:text-xl",
                isProjectPage ? "reveal-delay-2" : "reveal-delay-1",
                background
                  ? "max-w-2xl text-primary-foreground/75"
                  : "text-primary-foreground/70"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
