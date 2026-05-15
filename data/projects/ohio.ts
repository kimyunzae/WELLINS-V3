import type { ProjectRegion } from "@/types/projects";

export const ohioProjectRegion = {
  slug: "ohio",
  state: "Ohio",
  description:
    "Ohio project work includes process pipe and hot oil pipe installation for battery manufacturing.",
  image: "/images/projects/project-1.png",
  href: "/projects/ohio",
  summaryProjects: [
    {
      name: "LGES Honda JV Battery",
      scopes: ["Process Pipe Installation"],
      year: "2024~",
    },
    {
      name: "LGES Honda JV Battery",
      scopes: ["Hot Oil Pipe Installation"],
      year: "2023",
    },
  ],
  projects: [
    {
      name: "LGES Honda JV Battery",
      scopes: ["Process Pipe Installation"],
      location: "Jeffersonville, OH",
      year: "2024~",
      image: "/images/projects/project-1.png",
    },
    {
      name: "LGES Honda JV Battery",
      scopes: ["Hot Oil Pipe Installation in Electrode Area"],
      location: "Jeffersonville, OH",
      year: "2023",
      image: "/images/projects/project-2.png",
    },
  ],
} satisfies ProjectRegion;
