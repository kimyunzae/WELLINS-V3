import type { ProjectRegion, ProjectSlug } from "@/types/projects";
import { bufordProjectRegion } from "./buford";
import { georgiaProjectRegion } from "./georgia";
import { indianaProjectRegion } from "./indiana";
import { michiganProjectRegion } from "./michigan";
import { ohioProjectRegion } from "./ohio";
import { southCarolinaProjectRegion } from "./south-carolina";
import { tennesseeProjectRegion } from "./tennessee";
import { texasProjectRegion } from "./texas";

export const projectDetailRegions = [
  bufordProjectRegion,
  georgiaProjectRegion,
  indianaProjectRegion,
  michiganProjectRegion,
  ohioProjectRegion,
  southCarolinaProjectRegion,
  tennesseeProjectRegion,
  texasProjectRegion,
] satisfies ProjectRegion[];

export const dynamicProjectRegions = [
  indianaProjectRegion,
  michiganProjectRegion,
  ohioProjectRegion,
  southCarolinaProjectRegion,
  tennesseeProjectRegion,
  texasProjectRegion,
] satisfies ProjectRegion[];

export const projectRegionsBySlug = Object.fromEntries(
  projectDetailRegions.map((region) => [region.slug, region]),
) as Record<ProjectSlug, ProjectRegion>;

export const getProjectRegionBySlug = (slug: string) =>
  projectRegionsBySlug[slug as ProjectSlug];
