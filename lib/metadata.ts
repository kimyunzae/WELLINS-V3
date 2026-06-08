import type { Metadata } from "next";

export const siteName = "Wellins Inc.";
export const siteUrl = new URL("https://wellins.com");
export const siteTitle = "Wellins Inc. | Industrial Engineering Excellence";
export const siteDescription =
  "Leading industrial engineering company specializing in industrial piping, insulation, jacketing, fire protection, and pressure vessel solutions. Serving major manufacturers across the United States.";

const socialImage = {
  url: "/social-card-wellins.png",
  width: 1200,
  height: 630,
  alt: siteName,
  type: "image/png",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function formatTitle(title: string) {
  if (title === siteTitle || title.endsWith(`| ${siteName}`)) {
    return title;
  }

  return `${title} | ${siteName}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
}: PageMetadataInput): Metadata {
  const formattedTitle = formatTitle(title);

  return {
    title: formattedTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: formattedTitle,
      description,
      url: path,
      type: "website",
      siteName,
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [
        {
          url: socialImage.url,
          alt: socialImage.alt,
        },
      ],
    },
  };
}

export function createProjectRegionTitle(region: {
  state: string;
  projects: { name: string }[];
}) {
  const projectNames = Array.from(
    new Set(region.projects.map((project) => project.name)),
  ).slice(0, 2);

  return projectNames.length
    ? `Projects - ${region.state}: ${projectNames.join(", ")}`
    : `Projects - ${region.state}`;
}
