import { ProjectDetail } from "@/components/project-detail";
import {
  dynamicProjectRegions,
  getProjectRegionBySlug,
} from "@/data/projects/project-details";
import {
  createPageMetadata,
  createProjectRegionTitle,
} from "@/lib/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return dynamicProjectRegions.map((region) => ({
    state: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = getProjectRegionBySlug(state);
  if (!data) return {};

  return createPageMetadata({
    title: createProjectRegionTitle(data),
    description: data.metadataDescription ?? data.description,
    path: data.href,
  });
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = getProjectRegionBySlug(state);

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
