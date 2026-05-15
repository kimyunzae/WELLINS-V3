import type { ProjectRegion } from "@/types/projects";

export const southCarolinaProjectRegion = {
  slug: "south-carolina",
  state: "South Carolina",
  description:
    "South Carolina project work includes duct, cooling-water, and utility-pipe installation for Samsung's Newberry plant.",
  image: "/images/projects/project-16.png",
  href: "/projects/south-carolina",
  summaryProjects: [
    {
      name: "Samsung Plant",
      scopes: ["Duct System Installation", "Utility Pipe Installation"],
      year: "2018",
    },
  ],
  projects: [
    {
      name: "Samsung Plant",
      scopes: ["Duct System Installation"],
      location: "Newberry, SC",
      year: "2018",
      image: "/images/projects/project-16.png",
    },
    {
      name: "Samsung Plant",
      scopes: ["Cooling Water Pipe Installation"],
      location: "Newberry, SC",
      year: "2018",
      image: "/images/projects/project-17.png",
    },
    {
      name: "Samsung Plant",
      scopes: ["Utility Pipe Installation"],
      location: "Newberry, SC",
      year: "2018",
      image: "/images/projects/project-18.png",
    },
  ],
} satisfies ProjectRegion;
