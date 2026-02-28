import {
  renderSocialLogoImage,
  socialLogoImageSize,
} from "@/lib/social-logo-image";

export const alt = "Wellins Inc.";
export const size = socialLogoImageSize;
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function TwitterImage() {
  return renderSocialLogoImage();
}
