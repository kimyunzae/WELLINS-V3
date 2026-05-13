import { ProjectDetail } from "@/components/project-detail";
import { notFound } from "next/navigation";

type StateProjectData = {
  state: string;
  description: string;
  projects: {
    name: string;
    scopes: string[];
    location: string;
    year: string;
    image: string;
  }[];
};

const stateData: Record<string, StateProjectData> = {
  indiana: {
    state: "Indiana",
    description:
      "Indiana project work is represented by process pipe installation for battery-material manufacturing.",
    projects: [
      {
        name: "Soulbrain Plant",
        scopes: ["Process Pipe Installation"],
        location: "Kokomo, IN",
        year: "2023~2024",
        image: "/images/projects/project-5.png",
      },
    ],
  },
  michigan: {
    state: "Michigan",
    description:
      "Michigan project work includes industrial system installation for chemical manufacturing facilities.",
    projects: [
      {
        name: "LG Chemical Plant",
        scopes: ["NMP System Installation"],
        location: "Holland, MI",
        year: "2019",
        image: "/images/projects/project-14.png",
      },
    ],
  },
  ohio: {
    state: "Ohio",
    description:
      "Ohio project work includes process pipe and hot oil pipe installation for battery manufacturing.",
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
  },
  "south-carolina": {
    state: "South Carolina",
    description:
      "South Carolina project work includes duct, cooling-water, and utility-pipe installation for Samsung's Newberry plant.",
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
  },
  tennessee: {
    state: "Tennessee",
    description:
      "Tennessee project work includes hot oil pipe and high-pressure water line installation.",
    projects: [
      {
        name: "Ultium Cells-2",
        scopes: ["Hot Oil Pipe Installation in Electrode Area"],
        location: "Spring Hill, TN",
        year: "2022~2024",
        image: "/images/projects/project-7.png",
      },
      {
        name: "LG Electronics Plant",
        scopes: ["High Pressure Water Line Installation in QC System"],
        location: "Clarksville, TN",
        year: "2019",
        image: "/images/projects/project-15.png",
      },
    ],
  },
  texas: {
    state: "Texas",
    description:
      "Texas project work is represented by process pipe installation for Dongwoo Fine-Chem.",
    projects: [
      {
        name: "Dongwoo Fine-Chem",
        scopes: ["Process Pipe Installation"],
        location: "Houston, TX",
        year: "2023~2024",
        image: "/images/projects/project-6.png",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({
    state,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = stateData[state];
  if (!data) return {};

  return {
    title: `${data.state} Projects | Wellins Inc.`,
    description: data.description,
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = stateData[state];

  if (!data) {
    notFound();
  }

  return (
    <ProjectDetail
      state={data.state}
      description={data.description}
      projects={data.projects}
    />
  );
}
