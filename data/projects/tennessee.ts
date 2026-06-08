import type { ProjectRegion } from "@/types/projects";

export const tennesseeProjectRegion = {
  slug: "tennessee",
  state: "Tennessee",
  description:
    "Tennessee project work includes hot oil pipe and high-pressure water line installation.",
  image: "/images/projects/project-7.webp",
  href: "/projects/tennessee",
  summaryProjects: [
    {
      name: "Ultium Cells-2",
      scopes: ["Hot Oil Pipe Installation"],
      year: "2022~2025",
    },
    {
      name: "LG Electronics Plant",
      scopes: ["High Pressure Water Line Installation"],
      year: "2019",
    },
  ],
  projects: [
    {
      name: "Ultium Cells-2",
      scopes: ["Hot Oil Pipe Installation in Electrode Area"],
      location: "Spring Hill, TN",
      year: "2022~2025",
      image: "/images/projects/project-7.webp",
    },
    {
      name: "LG Electronics Plant",
      scopes: ["High Pressure Water Line Installation in QC System"],
      location: "Clarksville, TN",
      year: "2019",
      image: "/images/projects/project-15.webp",
    },
  ],
} satisfies ProjectRegion;
