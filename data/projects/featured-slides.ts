import type { FeaturedProjectSlide } from "@/types/projects";

export const featuredProjectSlides = [
  {
    key: "buford",
    region: "Buford, GA",
    title: "Buford Manufacturing Hub Expansion",
    description:
      "A new 4.3-acre manufacturing facility designed to expand production capacity for high-pressure piping.",
    image: "/images/banners/buford-facility.png",
  },
  {
    key: "georgia",
    region: "Savannah, GA",
    title: "LGES Hyundai Plant",
    description:
      "Process pipe installation in the utility area for battery manufacturing work.",
    image: "/images/projects/project-3.png",
    href: "/projects/georgia",
  },
  {
    key: "texas",
    region: "Houston, TX",
    title: "Dongwoo Fine-Chem",
    description: "Process pipe installation for Texas project work.",
    image: "/images/projects/project-6.png",
    href: "/projects/texas",
  },
  {
    key: "ohio",
    region: "Jeffersonville, OH",
    title: "LGES Honda JV Battery",
    description:
      "Process pipe and hot oil pipe installation for battery manufacturing systems.",
    image: "/images/projects/project-1.png",
    href: "/projects/ohio",
  },
] satisfies FeaturedProjectSlide[];
