import { renderSocialImage, socialImageSize } from "@/lib/social-image";

export const alt = "Wellins Inc. social preview";
export const size = socialImageSize;
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  return renderSocialImage();
}
