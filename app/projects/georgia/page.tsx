import { ProjectDetail } from "@/components/project-detail";
import { getProjectRegionBySlug } from "@/data/projects/project-details";

const region = getProjectRegionBySlug("georgia");

export const metadata = {
  title: `${region.state} Projects | Wellins Inc.`,
  description: region.metadataDescription ?? region.description,
};

export default function GeorgiaProjectsPage() {
  return (
    <ProjectDetail
      state={region.state}
      description={region.description}
      projects={region.projects}
    />
  );
}
