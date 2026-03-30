import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialLogoImageSize = {
  width: 1200,
  height: 630,
};

const LOGO_WIDTH = 780;
const LOGO_HEIGHT = 172;

let logoDataUriPromise: Promise<string> | null = null;

const getLogoDataUri = async () => {
  if (!logoDataUriPromise) {
    const logoPath = join(
      process.cwd(),
      "public",
      "images",
      "logos",
      "logo-wellins.png"
    );

    logoDataUriPromise = readFile(logoPath).then(
      (buffer) => `data:image/png;base64,${buffer.toString("base64")}`
    );
  }

  return logoDataUriPromise;
};

export const renderSocialLogoImage = async () => {
  const logoSrc = await getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px",
          background: "#f6f7fa",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: "36px",
            border: "1px solid #e3e8ef",
            boxShadow: "0 24px 60px rgba(16, 40, 62, 0.08)",
          }}
        >
          <img
            src={logoSrc}
            alt="Wellins Inc."
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    socialLogoImageSize
  );
};
