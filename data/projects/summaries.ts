import type { ProjectRegionSummary } from "@/types/projects";

export const projectRegionSummaries = [
  {
    slug: "georgia",
    state: "Georgia",
    description:
      "Georgia project work includes battery, automotive, chemical, and advanced manufacturing facilities.",
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
  },
  {
    slug: "indiana",
    state: "Indiana",
    description:
      "Indiana project work is represented by process pipe installation for battery-material manufacturing.",
    image: "/images/projects/project-5.webp",
    href: "/projects/indiana",
    summaryProjects: [
      {
        name: "Soulbrain Plant",
        scopes: ["Process Pipe Installation"],
        year: "2023~2024",
      },
    ],
  },
  {
    slug: "michigan",
    state: "Michigan",
    description:
      "Michigan project work includes industrial system installation for chemical manufacturing facilities.",
    image: "/images/projects/project-14.webp",
    href: "/projects/michigan",
    summaryProjects: [
      {
        name: "LG Chemical Plant",
        scopes: ["NMP System Installation"],
        year: "2019",
      },
    ],
  },
  {
    slug: "ohio",
    state: "Ohio",
    description:
      "Ohio project work includes process pipe and hot oil pipe installation for battery manufacturing.",
    image: "/images/projects/project-1.webp",
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
  },
  {
    slug: "south-carolina",
    state: "South Carolina",
    description:
      "South Carolina project work includes duct, cooling-water, and utility-pipe installation for Samsung's Newberry plant.",
    image: "/images/projects/project-16.webp",
    href: "/projects/south-carolina",
    summaryProjects: [
      {
        name: "Samsung Plant",
        scopes: ["Duct System Installation", "Utility Pipe Installation"],
        year: "2018",
      },
    ],
  },
  {
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
        year: "2022~2024",
      },
      {
        name: "LG Electronics Plant",
        scopes: ["High Pressure Water Line Installation"],
        year: "2019",
      },
    ],
  },
  {
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
  },
] satisfies ProjectRegionSummary[];

export const projectNavigationLinks = projectRegionSummaries.map(
  ({ state, href }) => ({
    name: state,
    href,
  }),
);
