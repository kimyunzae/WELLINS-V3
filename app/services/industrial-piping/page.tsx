import { ServiceDetail } from "@/components/service-detail";
import { getServiceBySlug } from "@/data/services/service-details";
import { createPageMetadata } from "@/lib/metadata";

const service = getServiceBySlug("industrial-piping");

export const metadata = createPageMetadata({
  title: `Services - ${service.title}`,
  description: service.metadataDescription ?? service.description,
  path: "/services/industrial-piping",
});

export default function IndustrialPipingPage() {
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
