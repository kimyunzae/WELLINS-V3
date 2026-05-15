import type { ProjectRegion } from "@/types/projects";

export const michiganProjectRegion = {
  slug: "michigan",
  state: "Michigan",
  description:
    "Michigan project work includes industrial system installation for chemical manufacturing facilities.",
  image: "/images/projects/project-14.png",
  href: "/projects/michigan",
  summaryProjects: [
    {
      name: "LG Chemical Plant",
      scopes: ["NMP System Installation"],
      year: "2019",
    },
  ],
  projects: [
    {
      name: "LG Chemical Plant",
      scopes: ["NMP System Installation"],
      location: "Holland, MI",
      year: "2019",
      image: "/images/projects/project-14.png",
    },
  ],
} satisfies ProjectRegion;
