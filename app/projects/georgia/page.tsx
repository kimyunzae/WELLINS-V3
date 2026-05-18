import { ProjectDetail } from "@/components/project-detail";
import { getProjectRegionBySlug } from "@/data/projects/project-details";
import {
  createPageMetadata,
  createProjectRegionTitle,
} from "@/lib/metadata";

const region = getProjectRegionBySlug("georgia");

export const metadata = createPageMetadata({
  title: createProjectRegionTitle(region),
  description: region.metadataDescription ?? region.description,
  path: region.href,
});

export default function GeorgiaProjectsPage() {
  return (
    <ProjectDetail
      state={region.state}
      description={region.description}
      projects={region.projects}
    />
  );
}
