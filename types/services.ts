// 서비스와 관련된 타입을 정의하는 파일입니다. 이 타입들은 서비스의 세부 정보, 요약 정보, 그리고 서비스 슬러그에 대한 구조를 표현합니다. 각 타입은 서비스 데이터를 구조화하여 웹사이트의 서비스 페이지나 관련 컴포넌트에서 사용될 수 있도록 합니다.

export type ServiceSlug =
  | "equipment-installation"
  | "industrial-piping"
  | "hvac-system"
  | "insulation-jacketing"
  | "high-pressure-vessels"
  | "fire-protection";

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceSummary = {
  slug: ServiceSlug;
  title: string;
  description: string;
  homeDescription: string;
  image: string;
  href: string;
};

export type Service = {
  slug: ServiceSlug;
  title: string;
  detailTitle?: string;
  description: string;
  detailDescription?: string;
  metadataDescription?: string;
  homeDescription: string;
  image: string;
  href: string;
  overview: string;
  capabilities: string[];
  applications: string[];
  benefits: ServiceBenefit[];
};
