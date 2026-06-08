import type { ProjectRegion } from "@/types/projects";

export const bufordProjectRegion = {
  slug: "buford",
  state: "Buford",
  description: "Buford anchors our manufacturing and regional fabrication footprint.",
  metadataDescription:
    "Industrial engineering projects and facility expansion efforts in Buford, Georgia.",
  image: "/images/banners/buford-facility.webp",
  href: "/projects/buford",
  projects: [
    {
      name: "Buford Manufacturing Hub",
      type: "Manufacturing Facility",
      location: "Buford, GA",
      year: "2026",
      description:
        "We are excited to announce our new manufacturing facility in Buford, GA. The 4.3-acre site is designed to expand production space for high-pressure piping, vessels, and specialized fabrication. This expansion allows us to customize solutions to complex mechanical needs while keeping project timelines responsive for partners across the Southeast.",
      image: "/images/banners/buford-facility.webp",
    },
  ],
} satisfies ProjectRegion;
