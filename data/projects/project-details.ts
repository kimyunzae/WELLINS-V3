import type { ProjectRegion, ProjectSlug } from "@/types/projects";
import { bufordProjectRegion } from "./buford";
import { georgiaProjectRegion } from "./georgia";
import { indianaProjectRegion } from "./indiana";
import { michiganProjectRegion } from "./michigan";
import { ohioProjectRegion } from "./ohio";
import { southCarolinaProjectRegion } from "./south-carolina";
import { tennesseeProjectRegion } from "./tennessee";
import { texasProjectRegion } from "./texas";

/// 프로젝트 상세 페이지에서 사용되는 지역별 프로젝트 데이터를 정의하는 파일입니다. 각 지역은 고유한 슬러그, 이름, 설명, 이미지, 링크 등을 포함하는 객체로 표현됩니다.

// 하단의 slug함수(getProjectRegionBySlug)를 통해서 받고자하는 projects(bufordProjectRegion, georgiaProjectRegion, ...)의 데이터형식을 받을 수 있습니다.

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

// 프로젝트 지역 데이터 반환 함수입니다. 원하는 프로젝트 지역명을 인자로 받아서 해당 프로젝트 데이터 형식을 반환합니다.
export const getProjectRegionBySlug = (slug: string) =>
  projectRegionsBySlug[slug as ProjectSlug];
