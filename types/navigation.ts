// 내비게이션 링크와 섹션 데이터를 정의하는 타입을 포함하는 파일입니다. 이 타입들은 웹사이트의 주요 내비게이션 메뉴와 푸터 링크 섹션에 사용됩니다. 각 타입은 내비게이션 링크, 섹션, 그리고 섹션 키를 구조화하여 표현합니다.

export type NavigationLink = {
  name: string;
  href: string;
};

export type NavigationSection = {
  label: string;
  href?: string;
  items?: NavigationLink[];
};


export type NavigationSectionKey =
  | "company"
  | "services"
  | "projects"
  | "career"
  | "prCenter";

export type NavigationSections = Record<NavigationSectionKey, NavigationSection>;

export type FooterLinkSection = {
  label: string;
  links: NavigationLink[];
};

export type FooterLinkSectionKey =
  | "company"
  | "services"
  | "projects"
  | "resources";

export type FooterLinkSections = Record<
  FooterLinkSectionKey,
  FooterLinkSection
>;
