import type {
  CompanyContact,
  CompanyLocation,
  ContactOffice,
} from "@/types/company";

// 컨택트 정보와 위치 데이터를 정의하는 파일입니다. 이 데이터는 회사의 연락처 정보, 영업 시간, 사무실 위치 등을 포함합니다. 각 위치에는 주소, 전화번호, 이메일, 영업 시간 등의 세부 정보가 포함되어 있습니다.
export const primaryContact = {
  phoneDisplay: "+1 (770) 557-0019",
  phoneHref: "+17705570019",
  email: "info@wellinsinc.com",
  addressLines: ["3483 Satellite Blvd, Ste 100", "Duluth, GA 30096"],
} satisfies CompanyContact;

// 영업 시간과 사무실 위치 정보를 포함하는 데이터입니다. 각 위치에는 주소, 전화번호, 이메일, 영업 시간 등의 세부 정보가 포함되어 있습니다. 이 데이터는 회사의 연락처 페이지나 위치 페이지에서 사용될 수 있습니다.
export const contactBusinessHours =
  "Monday - Friday: 8:30 AM - 5:30 PM";


// 회사의 연락처 사무실 정보를 정의하는 데이터입니다. 각 사무실에는 이름, 도시, 주소, 전화번호, 이메일 등의 세부 정보가 포함되어 있습니다. 이 데이터는 회사의 연락처 페이지에서 사용될 수 있습니다.
export const contactOffices = [
  {
    name: "Headquarters",
    city: "Duluth, GA",
    addressLines: primaryContact.addressLines,
    phoneDisplay: primaryContact.phoneDisplay,
    phoneHref: primaryContact.phoneHref,
    email: primaryContact.email,
  },
] satisfies ContactOffice[];


// // 회사의 연락처 사무실 정보를 정의하는 데이터입니다. 각 사무실에는 이름, 도시, 주소, 전화번호, 이메일 등의 세부 정보가 포함되어 있습니다. 이 데이터는 회사의 연락처 페이지에서 사용될 수 있습니다.
export const featuredLocations = [
  {
    label: "Corporate Headquarters",
    city: "Duluth",
    state: "Georgia",
    description:
      "Our headquarters in Duluth serves as the central hub for all operations, housing leadership, engineering support, and project coordination teams.",
    addressLines: primaryContact.addressLines,
    mapTitle: "Wellins Inc. Headquarters in Duluth, GA",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.149682792209!2d-84.11853602396974!3d33.96063317317882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5aefb7a58cb15%3A0x6af73d1d65eee5d4!2s3483%20Satellite%20Blvd%20%23100%2C%20Duluth%2C%20GA%2030096!5e0!3m2!1sen!2sus!4v1700000000000",
    phoneDisplay: primaryContact.phoneDisplay,
    phoneHref: primaryContact.phoneHref,
    email: primaryContact.email,
    hours: "Mon-Fri: 8:30 AM - 5:30 PM ET",
  },
  {
    label: "Manufacturing Facility",
    city: "Buford",
    state: "Georgia",
    description:
      "Our new manufacturing facility in Buford expands fabrication capacity for high-pressure piping, vessels, and specialized production support across the Southeast.",
    addressLines: ["974 Gainesville Hwy", "Buford, GA 30518"],
    mapTitle: "Wellins Inc. Manufacturing Facility in Buford, GA",
    mapSrc:
      "https://www.google.com/maps?q=974+Gainesville+Hwy,+Buford,+GA+30518&output=embed",
    phoneDisplay: primaryContact.phoneDisplay,
    phoneHref: primaryContact.phoneHref,
    email: primaryContact.email,
    hours: "Mon-Fri: 8:30 AM - 5:30 PM ET",
  },
] satisfies CompanyLocation[];

// // 회사의 연락처 사무실 정보를 정의하는 데이터입니다. 각 사무실에는 이름, 도시, 주소, 전화번호, 이메일 등의 세부 정보가 포함되어 있습니다. 이 데이터는 회사의 연락처 페이지에서 사용될 수 있습니다.
export const serviceStates = [
  "ARIZONA",
  "ALABAMA",
  "GEORGIA",
  "LOUISIANA",
  "OHIO",
  "SOUTH CAROLINA",
  "TENNESSEE",
  "TEXAS",
];
