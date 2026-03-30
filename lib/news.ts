export type NewsItem = {
  date: string;
  title: string;
  excerpt: string;
  category: string;
  content: string[];
};

const news: NewsItem[] = [
  {
    date: "January 15, 2026",
    title: "Wellins Inc. Completes Major Automotive Plant Expansion",
    excerpt:
      "We are pleased to announce the successful completion of a 250,000 sq ft expansion project for a leading automotive manufacturer in Birmingham, Alabama.",
    category: "Project Completion",
    content: [
      "The project included new process piping, HVAC upgrades, and equipment installation across multiple production lines. Our team coordinated closely with plant leadership to keep critical operations running during the build.",
      "A phased execution plan allowed commissioning to begin while construction continued in adjacent zones. This approach reduced downtime and kept the overall schedule on track.",
      "We thank our client and project partners for their collaboration and look forward to supporting the next phase of manufacturing growth in the region.",
    ],
  },
  {
    date: "December 8, 2025",
    title: "New Houston Office Expansion",
    excerpt:
      "To better serve our growing petrochemical client base, Wellins Inc. has expanded our Houston operations with a new 15,000 sq ft facility.",
    category: "Company News",
    content: [
      "The expanded office includes engineering workspaces, safety training areas, and dedicated project coordination rooms to support complex Gulf Coast projects.",
      "The new facility increases our capacity to mobilize crews, manage logistics, and respond to fast-track schedules across the petrochemical sector.",
      "We are actively hiring in Houston and look forward to serving regional clients with even faster response times.",
    ],
  },
  {
    date: "November 20, 2025",
    title: "Safety Milestone: 2 Million Hours Without Lost Time",
    excerpt:
      "Wellins Inc. celebrates a significant safety achievement with over 2 million man-hours worked without a lost-time incident.",
    category: "Safety",
    content: [
      "This milestone reflects a company-wide commitment to daily safety briefings, continuous training, and proactive hazard identification.",
      "Our safety program emphasizes accountability at every level, from field crews to project management, with a focus on prevention and best practices.",
      "We appreciate the dedication of our teams and partners who make safe execution a shared priority.",
    ],
  },
  {
    date: "October 5, 2025",
    title: "Partnership with Leading Equipment Manufacturer",
    excerpt:
      "Wellins Inc. announces a strategic partnership with a major industrial equipment manufacturer to serve as preferred installation contractor.",
    category: "Partnership",
    content: [
      "The partnership includes joint training programs and standardized installation procedures to improve start-up reliability and equipment uptime.",
      "Wellins teams will receive manufacturer-certified training to ensure installations meet all warranty requirements and technical specifications.",
      "This collaboration strengthens our ability to support large-scale industrial deployments across multiple markets.",
    ],
  },
  {
    date: "September 12, 2025",
    title: "Wellins Inc. Named Top Industrial Contractor",
    excerpt:
      "Industry publication recognizes Wellins Inc. as a top industrial mechanical contractor in the southeastern United States.",
    category: "Recognition",
    content: [
      "The recognition highlights our consistent performance in safety, schedule delivery, and technical quality across diverse industrial sectors.",
      "Our teams have completed complex projects in automotive, chemical processing, and advanced manufacturing with repeat-client engagement.",
      "We are honored by the acknowledgment and remain committed to delivering reliable industrial solutions.",
    ],
  },
  {
    date: "August 1, 2025",
    title: "Expansion into Electric Vehicle Manufacturing Sector",
    excerpt:
      "Wellins Inc. completes first major EV battery facility project, marking expansion into the growing electric vehicle manufacturing sector.",
    category: "Project Completion",
    content: [
      "The project required specialized HVAC and cleanroom systems to support sensitive battery assembly processes and quality control.",
      "Our scope included process piping, utility distribution, and equipment integration within a fast-track construction schedule.",
      "This milestone positions Wellins to support the accelerating transition to electric vehicle production across North America.",
    ],
  },
];

// 문자열 슬러그 생성 함수
// & → and로 치환
// 알파벳/숫자 이외는 -로 바꿈
// 앞뒤 - 제거
const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");

// 뉴스 항목에 슬러그를 추가한 새 배열 생성
export const newsItems = news.map((item) => ({
  ...item,
  slug: `${slugify(item.date)}-${slugify(item.title)}`,
}));

// 뉴스 항목 타입에 슬러그 포함
export type NewsItemWithSlug = (typeof newsItems)[number];

// 슬러그로 뉴스 항목 찾기
export const getNewsBySlug = (slug: string) =>
  newsItems.find((item) => item.slug === slug);
