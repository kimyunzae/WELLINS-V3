// 프로젝트와 관련된 타입을 정의하는 파일입니다. 이 타입들은 프로젝트의 세부 정보, 요약 정보, 지역 정보, 그리고 주요 프로젝트 슬라이드에 대한 구조를 표현합니다. 각 타입은 프로젝트 데이터를 구조화하여 웹사이트의 프로젝트 페이지나 관련 컴포넌트에서 사용될 수 있도록 합니다.

export type ProjectSlug =
  | "buford"
  | "georgia"
  | "indiana"
  | "michigan"
  | "ohio"
  | "south-carolina"
  | "tennessee"
  | "texas";

export type Project = {
  name: string;
  type?: string;
  scopes?: string[];
  location: string;
  year: string;
  description?: string;
  image: string;
};

export type ProjectSummary = {
  name: string;
  year: string;
  type?: string;
  scopes?: string[];
};

export type ProjectRegion = {
  slug: ProjectSlug;
  state: string;
  description: string;
  metadataDescription?: string;
  image: string;
  href: string;
  summaryProjects?: ProjectSummary[];
  projects: Project[];
};

export type ProjectRegionSummary = {
  slug: ProjectSlug;
  state: string;
  description: string;
  image: string;
  href: string;
  summaryProjects: ProjectSummary[];
};

export type FeaturedProjectSlide = {
  key: string;
  region: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};
