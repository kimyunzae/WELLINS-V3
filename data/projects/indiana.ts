import type { ProjectRegion } from "@/types/projects";

export const indianaProjectRegion = {
  slug: "indiana",
  state: "Indiana",
  description:
    "Indiana project work is represented by process pipe installation for battery-material manufacturing.",
  image: "/images/projects/project-5.png",
  href: "/projects/indiana",
  summaryProjects: [
    {
      name: "Soulbrain Plant",
      scopes: ["Process Pipe Installation"],
      year: "2023~2024",
    },
  ],
  projects: [
    {
      name: "Soulbrain Plant",
      scopes: ["Process Pipe Installation"],
      location: "Kokomo, IN",
      year: "2023~2024",
      image: "/images/projects/project-5.png",
    },
  ],
} satisfies ProjectRegion;
