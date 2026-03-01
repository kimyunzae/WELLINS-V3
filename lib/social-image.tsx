import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

const LOGO_WIDTH = 520;
const LOGO_HEIGHT = 114;

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

export const renderSocialImage = async () => {
  const logoSrc = await getLogoDataUri();

  // Next.js용 PNG 이미지 동적 생성 api 
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#e9eef4",
          color: "#10283e",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "62%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
            background: "linear-gradient(135deg, #0d2235 0%, #17405d 100%)",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                opacity: 0.72,
              }}
            >
              Industrial Engineering
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "560px",
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              Built for complex industrial projects.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "34px 40px",
                borderRadius: "28px",
                background: "rgba(255, 255, 255, 0.98)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.18)",
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
            <div
              style={{
                display: "flex",
                maxWidth: "560px",
                fontSize: "28px",
                lineHeight: 1.4,
                opacity: 0.9,
              }}
            >
              Piping, HVAC, equipment installation, and fire protection across
              the United States.
            </div>
          </div>
        </div>

        <div
          style={{
            width: "38%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
            background: "#f7f9fc",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4b6b87",
              }}
            >
              Wellins Inc.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "46px",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Industrial engineering for manufacturing and plant infrastructure.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              fontSize: "22px",
              color: "#20415c",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "16px 18px",
                borderRadius: "18px",
                background: "#ffffff",
                border: "1px solid #d7e0ea",
              }}
            >
              Licensed specialty contractor
            </div>
            <div
              style={{
                display: "flex",
                padding: "16px 18px",
                borderRadius: "18px",
                background: "#ffffff",
                border: "1px solid #d7e0ea",
              }}
            >
              Multi-state project delivery
            </div>
            <div
              style={{
                display: "flex",
                padding: "16px 18px",
                borderRadius: "18px",
                background: "#ffffff",
                border: "1px solid #d7e0ea",
              }}
            >
              Safety-first field execution
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize
  );
};
