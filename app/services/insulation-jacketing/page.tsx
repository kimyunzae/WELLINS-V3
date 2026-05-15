import { ServiceDetail } from "@/components/service-detail";
import { getServiceBySlug } from "@/data/services/service-details";

const service = getServiceBySlug("insulation-jacketing");

export const metadata = {
  title: `${service.title} | Wellins Inc.`,
  description: service.metadataDescription ?? service.description,
};

export default function InsulationJacketingPage() {
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
