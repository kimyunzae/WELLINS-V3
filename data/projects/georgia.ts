import type { ProjectRegion } from "@/types/projects";

export const georgiaProjectRegion = {
  slug: "georgia",
  state: "Georgia",
  description:
    "Georgia project work includes battery, automotive, chemical, and advanced manufacturing facilities.",
  metadataDescription:
    "Representative Georgia project work including Hyundai, SK Battery, Enchem, and related industrial scopes.",
  image: "/images/projects/project-3.webp",
  href: "/projects/georgia",
  summaryProjects: [
    {
      name: "LGES Hyundai Plant",
      scopes: ["Process Pipe Installation"],
      year: "2024~",
    },
    {
      name: "SK Battery America Plant-2",
      scopes: ["Hot Oil Pipe", "HVAC Installation"],
      year: "2024~",
    },
  ],
  projects: [
    {
      name: "LGES Hyundai Plant",
      scopes: ["Process Pipe Installation in Utility Area"],
      location: "Savannah, GA",
      year: "2024~",
      image: "/images/projects/project-3.webp",
    },
    {
      name: "SK Battery America Plant-2",
      scopes: ["Hot Oil Pipe", "HVAC Installation in Electrode Area"],
      location: "Kingston, GA",
      year: "2024~",
      image: "/images/projects/project-4.webp",
    },
    {
      name: "Enchem America Plant",
      scopes: ["Process Pipe Installation"],
      location: "Commerce, GA",
      year: "2021~2022",
      image: "/images/projects/project-8.webp",
    },
    {
      name: "SK Battery America Plant-2",
      scopes: [
        "Plumbing & HVAC Installation in Electrode & Assembly Area",
        "Hot Oil Pipe Installation in Hot Oil Boiler Area",
      ],
      location: "Commerce, GA",
      year: "2021~2022",
      image: "/images/projects/project-9.webp",
    },
    {
      name: "SK Battery America Plant-1",
      scopes: [
        "Process Pipe Line Installation in CR/DR Area",
        "Hot Oil Pipe Installation in Hot Oil Boiler Area",
        "Cooling Tower Installation",
      ],
      location: "Commerce, GA",
      year: "2019~2020",
      image: "/images/projects/project-11.webp",
    },
    {
      name: "Hyundai Powertech Plant",
      scopes: ["Clean Room Duct System Installation"],
      location: "West Point, GA",
      year: "2017",
      image: "/images/projects/project-20.webp",
    },
  ],
} satisfies ProjectRegion;
