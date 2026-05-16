import type { ProjectRegion } from "@/types/projects";

export const texasProjectRegion = {
  slug: "texas",
  state: "Texas",
  description:
    "Texas project work is represented by process pipe installation for Dongwoo Fine-Chem.",
  image: "/images/projects/project-6.webp",
  href: "/projects/texas",
  summaryProjects: [
    {
      name: "Dongwoo Fine-Chem",
      scopes: ["Process Pipe Installation"],
      year: "2023~2024",
    },
  ],
  projects: [
    {
      name: "Dongwoo Fine-Chem",
      scopes: ["Process Pipe Installation"],
      location: "Houston, TX",
      year: "2023~2024",
      image: "/images/projects/project-6.webp",
    },
  ],
} satisfies ProjectRegion;
