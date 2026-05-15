import type {
  FooterLinkSections,
  NavigationLink,
  NavigationSections,
} from "@/types/navigation";
import { projectNavigationLinks } from "./projects/summaries";
import { serviceNavigationLinks } from "./services/summaries";

// 내비게이션 링크와 섹션 데이터를 정의하는 파일입니다. 이 데이터는 웹사이트의 주요 내비게이션 메뉴와 푸터 링크 섹션에 사용됩니다. 각 링크는 이름과 URL을 포함하며, 섹션은 레이블과 해당 섹션에 속하는 링크들을 포함합니다.

const companyLinks = [
  { name: "About Us", href: "/company/about" },
  { name: "History", href: "/company/history" },
  { name: "Organization", href: "/company/organization" },
  { name: "Location", href: "/company/location" },
] satisfies NavigationLink[];

const serviceLinks = serviceNavigationLinks satisfies NavigationLink[];

const projectLinks = projectNavigationLinks satisfies NavigationLink[];

const resourceLinks = [
  { name: "Brochure", href: "/pr-center/brochure" },
  // { name: "News", href: "/pr-center/news" },
  // { name: "PR Video", href: "/pr-center/video" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
] satisfies NavigationLink[];

export const navigationSections = {
  company: {
    label: "COMPANY",
    items: companyLinks,
  },
  services: {
    label: "SERVICES",
    href: "/services",
    items: serviceLinks,
  },
  projects: {
    label: "PROJECTS",
    href: "/projects",
    items: projectLinks,
  },
  career: {
    label: "CAREER",
    href: "/career",
  },
  prCenter: {
    label: "PR CENTER",
    items: resourceLinks.slice(0, 1),
  },
} satisfies NavigationSections;

export const footerLinkSections = {
  company: {
    label: "Company",
    links: companyLinks,
  },
  services: {
    label: "Services",
    links: serviceLinks,
  },
  projects: {
    label: "Projects",
    links: projectLinks,
  },
  resources: {
    label: "Resources",
    links: resourceLinks,
  },
} satisfies FooterLinkSections;
