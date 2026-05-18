import { ServiceDetail } from "@/components/service-detail";
import { getServiceBySlug } from "@/data/services/service-details";
import { createPageMetadata } from "@/lib/metadata";

const service = getServiceBySlug("hvac-system");

export const metadata = createPageMetadata({
  title: service.title,
  description: service.metadataDescription ?? service.description,
  path: "/services/hvac-system",
});

export default function HVACSystemPage() {
  return (
    <ServiceDetail
      title={service.detailTitle ?? service.title}
      description={service.detailDescription ?? service.description}
      image={service.image}
      overview={service.overview}
      capabilities={service.capabilities}
      applications={service.applications}
      benefits={service.benefits}
    />
  );
}
