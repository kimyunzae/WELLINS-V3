
// 회사의 연락처 정보와 위치 정보를 정의하는 타입을 포함하는 파일입니다. 이 타입들은 회사의 연락처 페이지나 위치 페이지에서 사용될 수 있습니다. 각 타입은 회사의 연락처 정보, 사무실 정보, 위치 정보를 구조화하여 표현합니다.


export type CompanyContact = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  addressLines: string[];
};

export type ContactOffice = {
  name: string;
  city: string;
  addressLines: string[];
  phoneDisplay: string;
  phoneHref: string;
  email: string;
};

export type CompanyLocation = {
  label: string;
  city: string;
  state: string;
  description: string;
  addressLines: string[];
  mapTitle: string;
  mapSrc: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  hours: string;
};
