import { renderSocialImage, socialImageSize } from "@/lib/social-image";

export const alt = "Wellins Inc. social preview";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function TwitterImage() {
  return renderSocialImage();
}
