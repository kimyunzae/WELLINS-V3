import { ServiceDetail } from "@/components/service-detail";
import { getServiceBySlug } from "@/data/services/service-details";

const service = getServiceBySlug("industrial-piping");

export const metadata = {
  title: `${service.title} | Wellins Inc.`,
  description: service.metadataDescription ?? service.description,
};

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
