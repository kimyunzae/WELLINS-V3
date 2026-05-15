import type { Service, ServiceSlug } from "@/types/services";
import { equipmentInstallationService } from "./equipment-installation";
import { fireProtectionService } from "./fire-protection";
import { highPressureVesselsService } from "./high-pressure-vessels";
import { hvacSystemService } from "./hvac-system";
import { industrialPipingService } from "./industrial-piping";
import { insulationJacketingService } from "./insulation-jacketing";

// 서비스 상세 정보를 정의하는 파일입니다. 각 서비스가 공통된 구조를 가지도록 Service 타입을 사용하여 상세 정보를 포함하는 객체입니다.



export const serviceDetails = [
  equipmentInstallationService,
  industrialPipingService,
  hvacSystemService,
  insulationJacketingService,
  highPressureVesselsService,
  fireProtectionService,
] satisfies Service[];

export const servicesBySlug = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service]),
) as Record<ServiceSlug, Service>;


// getServiceBySlug 함수는 서비스를입력받아 해당 슬러그에 매칭되는 서비스 상세 정보를 반환하는 유틸리티 함수입니다. 이 함수는 servicesBySlug 객체를 참조하여 빠르게 서비스를 조회할 수 있도록 합니다.
export const getServiceBySlug = (slug: ServiceSlug) => servicesBySlug[slug];
