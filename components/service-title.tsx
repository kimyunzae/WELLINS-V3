import { forwardRef } from "react";
import type { CSSProperties } from "react";

export interface ServiceTitleMask {
  solid: string;
  outlineLeft: string;
  outlineRight: string;
}

export const defaultServiceTitleMask: ServiceTitleMask = {
  solid: "polygon(0 0, 42% 0, 36% 100%, 0 100%)",
  outlineLeft: "polygon(42% 0, 65.75% 0, 65.75% 100%, 36% 100%)",
  outlineRight: "polygon(65.25% 0, 100% 0, 100% 100%, 65.25% 100%)",
};

const titleClassName =
  "max-w-5xl pb-[0.14em] text-balance text-[clamp(3.5rem,7vw,6rem)] font-light leading-[1.12] tracking-[-0.0319em]";

interface ServiceTitleSolidProps {
  mask: string;
  title: string;
}

export const ServiceTitleSolid = forwardRef<
  HTMLHeadingElement,
  ServiceTitleSolidProps
>(function ServiceTitleSolid({ mask, title }, ref) {
  return (
    <>
      <style>{`
        @keyframes service-title-solid-in {
          from { opacity: 0; transform: translate3d(-20px, 0, 0); }
          58% { opacity: 1; }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-title-solid { animation: none !important; }
        }
      `}</style>
      <h1
        ref={ref}
        className={`${titleClassName} service-title-solid text-[#102b3a]`}
        style={{
          clipPath: mask,
          animation:
            "service-title-solid-in 0.72s cubic-bezier(0.22, 1, 0.36, 1) 0.92s both",
        }}
      >
        {title}
      </h1>
    </>
  );
});

interface ServiceTitleOutlineProps {
  leftMask: string;
  rightMask: string;
  title: string;
}

const outlineBaseStyle: CSSProperties = {
  color: "transparent",
  WebkitTextFillColor: "transparent",
  WebkitTextStroke: "1.35px rgba(255, 255, 255, 0.96)",
  textShadow: "0 1px 11px rgba(3, 25, 39, 0.52)",
  willChange: "opacity",
};

function outlineStyle(clipPath: string): CSSProperties {
  return {
    ...outlineBaseStyle,
    clipPath,
  };
}

function OutlineCharacters({ title }: { title: string }) {
  let characterIndex = 0;

  return (
    <>
      {title.split(/(\s+)/).map((part, partIndex) => {
        if (/^\s+$/.test(part)) {
          return <span key={`space-${partIndex}`}>{part}</span>;
        }

        return (
          <span key={`word-${partIndex}`} className="whitespace-nowrap">
            {Array.from(part).map((character) => {
              const delay = 1.56 + characterIndex * 0.012;
              characterIndex += 1;

              return (
                <span
                  key={`${partIndex}-${characterIndex}`}
                  className="service-title-outline-character inline-block"
                  style={{ animationDelay: `${delay}s` }}
                >
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}

export function ServiceTitleOutline({
  leftMask,
  rightMask,
  title,
}: ServiceTitleOutlineProps) {
  const layerClassName = `${titleClassName} pointer-events-none absolute inset-x-0 top-8 lg:top-9`;

  return (
    <>
      <style>{`
        .service-title-outline-character {
          -webkit-mask-image: linear-gradient(105deg, #000 0%, #000 38%, rgba(0, 0, 0, 0.92) 47%, transparent 57%, transparent 100%);
          mask-image: linear-gradient(105deg, #000 0%, #000 38%, rgba(0, 0, 0, 0.92) 47%, transparent 57%, transparent 100%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 235% 100%;
          mask-size: 235% 100%;
          opacity: 0;
          animation: service-title-character-write 0.42s cubic-bezier(0.3, 0.04, 0.2, 1) both;
          will-change: opacity, filter, mask-position;
        }

        @keyframes service-title-character-write {
          from {
            opacity: 0;
            -webkit-mask-position: 115% 0;
            mask-position: 115% 0;
            -webkit-text-stroke-width: 0.45px;
            filter: drop-shadow(0 0 5px rgba(126, 211, 244, 0.9));
          }
          34% { opacity: 1; }
          72% {
            -webkit-text-stroke-color: rgba(205, 242, 255, 1);
            filter: drop-shadow(0 0 3px rgba(126, 211, 244, 0.68));
          }
          to {
            opacity: 1;
            -webkit-mask-position: 0% 0;
            mask-position: 0% 0;
            -webkit-text-stroke-width: 1.35px;
            -webkit-text-stroke-color: rgba(255, 255, 255, 0.96);
            filter: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-title-outline-character {
            animation: none !important;
            -webkit-mask-image: none !important;
            mask-image: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <h1
        aria-hidden="true"
        className={`${layerClassName} service-title-outline-layer`}
        style={outlineStyle(leftMask)}
      >
        <OutlineCharacters title={title} />
      </h1>
      <h1
        aria-hidden="true"
        className={`${layerClassName} service-title-outline-layer`}
        style={outlineStyle(rightMask)}
      >
        <OutlineCharacters title={title} />
      </h1>
    </>
  );
}
