"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  defaultServiceTitleMask,
  ServiceTitleOutline,
  ServiceTitleSolid,
} from "@/components/service-title";
import type { ServiceTitleMask } from "@/components/service-title";

type SceneId = "overview" | "capabilities" | "applications";

interface ServiceImmersiveStoryProps {
  title: string;
  image: string;
  overview: string;
  capabilities: string[];
  applications: string[];
}

const scenes: Array<{
  id: SceneId;
  label: string;
  eyebrow: string;
  position: string;
  scale: number;
}> = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Service overview",
    position: "50% 50%",
    scale: 1.02,
  },
  {
    id: "capabilities",
    label: "Capabilities",
    eyebrow: "How we deliver",
    position: "28% 50%",
    scale: 1.1,
  },
  {
    id: "applications",
    label: "Applications",
    eyebrow: "Where it performs",
    position: "76% 50%",
    scale: 1.16,
  },
];

const servicePipePaths: ReadonlyArray<{
  d: string;
  delay: number;
  weight: number;
  strong?: boolean;
}> = [
  { d: "M-40 650 H286", delay: 0, weight: 1.2, strong: true },
  { d: "M76 760 V590 H330", delay: 70, weight: 0.72 },
  { d: "M-30 548 H248 V486 H365", delay: 120, weight: 0.88 },
  { d: "M-24 404 H132 V468 H298", delay: 165, weight: 0.68 },
  { d: "M148 760 V536 H342", delay: 210, weight: 0.76 },
  { d: "M-32 332 H182 V416 H390", delay: 250, weight: 1.02, strong: true },
  { d: "M48 252 H222 V338 H355", delay: 290, weight: 0.74 },
  { d: "M102 0 V146 H465", delay: 330, weight: 0.64 },
  { d: "M226 0 V216 H410", delay: 370, weight: 0.82 },
  { d: "M-28 168 H348 V286 H438", delay: 410, weight: 0.7 },
  { d: "M-30 706 H164 V590 H265", delay: 450, weight: 0.66 },
  { d: "M-28 610 H112 V438 H330", delay: 490, weight: 0.78 },
  { d: "M42 760 V650 H240", delay: 530, weight: 0.62 },
  { d: "M-20 472 H92 V347 H405", delay: 570, weight: 0.84 },
  { d: "M326 760 V536 H220 V416 H370", delay: 610, weight: 0.68 },
  { d: "M392 0 V112 H492", delay: 650, weight: 0.72 },
];

export function ServiceImmersiveStory({
  title,
  image,
  overview,
  capabilities,
  applications,
}: ServiceImmersiveStoryProps) {
  const [activeSceneId, setActiveSceneId] = useState<SceneId>("overview");
  const [introComplete, setIntroComplete] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabImageLayerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const imageWipeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleMask, setTitleMask] = useState<ServiceTitleMask>(
    defaultServiceTitleMask
  );
  const activeScene =
    scenes.find((scene) => scene.id === activeSceneId) ?? scenes[0];

  const activeItems =
    activeSceneId === "capabilities"
      ? capabilities
      : activeSceneId === "applications"
        ? applications
        : [];
  const mobilePanelSizerItems =
    capabilities.length >= applications.length ? capabilities : applications;

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroComplete(true), 2140);

    return () => window.clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const titleElement = titleRef.current;
    const imageElement = imageWipeRef.current;

    if (!titleElement || !imageElement) {
      return;
    }

    const syncDiagonalMasks = () => {
      const titleParentRect = titleElement.offsetParent?.getBoundingClientRect();
      const imageRect = imageElement.getBoundingClientRect();

      if (!titleParentRect) {
        return;
      }

      // offset* values ignore the title's entrance transform, so the mask is
      // calculated for its final resting position before animation begins.
      const titleRect = {
        left: titleParentRect.left + titleElement.offsetLeft,
        top: titleParentRect.top + titleElement.offsetTop,
        width: titleElement.offsetWidth,
        height: titleElement.offsetHeight,
        get bottom() {
          return this.top + this.height;
        },
      };
      const imageStart =
        window.innerWidth >= 1024
          ? 0.25
          : window.innerWidth >= 640
            ? 0.3
            : 0.36;
      const clamp = (value: number) => Math.min(100, Math.max(0, value));
      const imageEdgeAt = (verticalPosition: number) =>
        imageRect.left +
        imageRect.width *
          imageStart *
          (1 -
            (verticalPosition - imageRect.top) /
              Math.max(imageRect.height, 1));
      const getDiagonalEdges = (
        targetRect: Pick<
          DOMRect,
          "left" | "top" | "width" | "height" | "bottom"
        >,
        clipBottom = 100
      ) => {
        const bottomPosition =
          targetRect.bottom +
          targetRect.height * ((clipBottom - 100) / 100);

        return {
          topEdge: clamp(
            ((imageEdgeAt(targetRect.top) - targetRect.left) /
              Math.max(targetRect.width, 1)) *
              100
          ),
          bottomEdge: clamp(
            ((imageEdgeAt(bottomPosition) - targetRect.left) /
              Math.max(targetRect.width, 1)) *
              100
          ),
        };
      };

      // Keep the clip region below the font box so descenders and text strokes
      // remain visible for any service title, including g, j, p, q, and y.
      const clipBottom = 130;
      const { topEdge, bottomEdge } = getDiagonalEdges(
        titleRect,
        clipBottom
      );
      const join = Math.min(100, Math.max(topEdge, bottomEdge) + 28);
      const nextMask: ServiceTitleMask = {
        solid: `polygon(0 0, ${topEdge}% 0, ${bottomEdge}% ${clipBottom}%, 0 ${clipBottom}%)`,
        outlineLeft: `polygon(${topEdge}% 0, ${join + 0.35}% 0, ${join + 0.35}% ${clipBottom}%, ${bottomEdge}% ${clipBottom}%)`,
        outlineRight: `polygon(${join - 0.35}% 0, 100% 0, 100% ${clipBottom}%, ${join - 0.35}% ${clipBottom}%)`,
      };

      setTitleMask((currentMask) =>
        currentMask.solid === nextMask.solid ? currentMask : nextMask
      );

      tabImageLayerRefs.current.forEach((imageLayer) => {
        if (!imageLayer) {
          return;
        }

        const { topEdge, bottomEdge } = getDiagonalEdges(
          imageLayer.getBoundingClientRect()
        );
        imageLayer.style.clipPath = `polygon(${topEdge}% 0, 100% 0, 100% 100%, ${bottomEdge}% 100%)`;
      });
    };

    const frame = window.requestAnimationFrame(syncDiagonalMasks);
    const observer = new ResizeObserver(syncDiagonalMasks);
    observer.observe(titleElement);
    observer.observe(imageElement);
    tabImageLayerRefs.current.forEach((imageLayer) => {
      if (imageLayer) {
        observer.observe(imageLayer);
      }
    });
    window.addEventListener("resize", syncDiagonalMasks);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", syncDiagonalMasks);
    };
  }, [title]);

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % scenes.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + scenes.length) % scenes.length;
    } else if (event.key === "Home" || event.key === "PageUp") {
      nextIndex = 0;
    } else if (event.key === "End" || event.key === "PageDown") {
      nextIndex = scenes.length - 1;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    const nextScene = scenes[nextIndex];
    setActiveSceneId(nextScene.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="service-story"
      aria-label={`${title} service story`}
      className="relative isolate min-h-[100svh] overflow-hidden bg-white pt-[82px] text-white [overflow-anchor:none] lg:min-h-[88svh]"
    >
      <div className="absolute inset-0 -z-20 bg-white" />

      <div className="pointer-events-none absolute bottom-0 right-0 top-[82px] -z-10 w-[92%] sm:w-[86%] lg:w-[78%]">
        <div
          ref={imageWipeRef}
          className="service-image-wipe absolute inset-0 overflow-hidden"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} industrial service`}
            fill
            sizes="(min-width: 1024px) 78vw, 92vw"
            priority
            className="object-cover opacity-72 transition-[transform,object-position,filter] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-sm:!object-center max-sm:!scale-[1.02] motion-reduce:transition-none"
            style={{
              objectPosition: activeScene.position,
              transform: `scale(${activeScene.scale})`,
              filter:
                activeSceneId === "overview"
                  ? "saturate(0.58) contrast(1.04)"
                  : "saturate(0.46) contrast(1.08)",
            }}
          />
          <div className="absolute inset-0 bg-[#2174a5]/28 mix-blend-color" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,24,37,0.96)_0%,rgba(8,42,62,0.76)_24%,rgba(5,25,39,0.32)_62%),linear-gradient(180deg,rgba(3,19,31,0.26)_0%,rgba(3,19,31,0.14)_56%,rgba(2,16,27,0.84)_100%)]" />
        </div>
      </div>

      <div
        className="service-pipe-stage pointer-events-none absolute inset-x-0 bottom-0 top-[82px] z-0 hidden lg:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 760"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id={`service-pipe-gradient-${activeScene.id}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#2174a5" stopOpacity="0.08" />
              <stop offset="68%" stopColor="#2174a5" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#14577d" stopOpacity="0.48" />
            </linearGradient>
          </defs>
          {servicePipePaths.map((pipe) => (
            <path
              key={pipe.d}
              d={pipe.d}
              pathLength="1"
              fill="none"
              stroke={`url(#service-pipe-gradient-${activeScene.id})`}
              strokeWidth={pipe.weight}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              className={cn(
                "service-pipe-draw",
                pipe.strong ? "service-pipe-draw-primary" : ""
              )}
              style={{ animationDelay: `${pipe.delay}ms` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-82px)] max-w-[1100px] flex-col px-5 pb-8 pt-10 sm:px-6 lg:min-h-[calc(88svh-82px)] lg:pb-10 lg:pt-12 xl:max-w-[1440px] xl:px-8">
        <div>
          <p className="text-xs font-medium leading-4 tracking-[0.0252em] text-[#173646]/65">
            Wellins / Services
          </p>
        </div>

        <div className="relative pb-7 pt-8 lg:pb-8 lg:pt-9">
          <ServiceTitleSolid
            ref={titleRef}
            mask={titleMask.solid}
            title={title}
          />
          <ServiceTitleOutline
            leftMask={titleMask.outlineLeft}
            rightMask={titleMask.outlineRight}
            title={title}
          />
        </div>

        <div className="grid flex-1 content-end gap-10 pt-2 lg:grid-cols-[0.68fr_1.32fr] lg:items-end lg:gap-20 lg:pt-3">
          <div className="min-w-0 min-[1600px]:-translate-x-16">
            <div
              role="tablist"
              aria-label="Service sections"
              aria-orientation="vertical"
              className="flex flex-col items-start"
            >
              {scenes.map((scene, index) => {
                const isActive = scene.id === activeSceneId;

                return (
                  <button
                    key={scene.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`service-tab-${scene.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="service-tab-panel"
                    tabIndex={isActive ? 0 : -1}
                    onMouseEnter={() => setActiveSceneId(scene.id)}
                    onFocus={() => setActiveSceneId(scene.id)}
                    onClick={() => setActiveSceneId(scene.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className="group flex w-full cursor-pointer items-center py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2174a5] focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:py-4"
                  >
                    <span
                      className={cn(
                        "relative block w-full font-light leading-none tracking-[-0.0282em] transition-[font-size] duration-300 motion-reduce:transition-none",
                        isActive
                          ? "text-[clamp(1.7rem,2.8vw,3.2rem)]"
                          : "text-[clamp(1.25rem,1.8vw,1.75rem)]"
                      )}
                    >
                      <span
                        className={cn(
                          "block transition-colors duration-300",
                          isActive
                            ? "text-[#102b3a]"
                            : "text-[#102b3a]/38 group-hover:text-[#102b3a]/68"
                        )}
                      >
                        {scene.label}
                      </span>
                      <span
                        ref={(element) => {
                          tabImageLayerRefs.current[index] = element;
                        }}
                        aria-hidden="true"
                        className={cn(
                          "pointer-events-none absolute inset-0 block [clip-path:inset(0_0_0_100%)] transition-[color,opacity] duration-300 [text-shadow:0_1px_10px_rgba(3,25,39,0.44)] motion-reduce:opacity-100 motion-reduce:transition-none",
                          isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white/70",
                          introComplete ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {scene.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="service-tab-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeSceneId}`}
            tabIndex={0}
            className="ml-auto grid min-h-[250px] w-[72%] self-end pb-4 pt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69c7ed] sm:min-h-[270px] sm:w-[72%] lg:ml-0 lg:block lg:w-auto lg:min-h-0 lg:pt-0"
          >
            <div
              aria-hidden="true"
              className="invisible col-start-1 row-start-1 lg:hidden"
            >
              <p className="mb-4 text-xs font-semibold leading-4">Panel sizer</p>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {mobilePanelSizerItems.map((item) => (
                  <li key={`panel-sizer-${item}`} className="flex gap-3">
                    <span className="mt-[9px] h-1 w-1 shrink-0" />
                    <span className="text-[15px] leading-6 tracking-[0.0096em]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              key={activeScene.id}
              className={cn(
                "service-scene-reveal col-start-1 row-start-1 lg:block",
                !introComplete && "service-scene-reveal-intro"
              )}
            >
              <p
                className={cn(
                  "mb-4 text-xs font-semibold leading-4 tracking-[0.0252em] text-[#69c7ed]",
                  !introComplete && "service-scene-accent-intro"
                )}
              >
                {activeScene.eyebrow}
              </p>

              {activeSceneId === "overview" ? (
                <p className="max-w-3xl text-balance text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.3] tracking-[-0.0282em] text-white">
                  {overview}
                </p>
              ) : (
                <ul className="grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
                  {activeItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className={cn(
                          "mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#69c7ed]",
                          !introComplete && "service-scene-accent-intro"
                        )}
                      />
                      <span className="text-[15px] leading-6 tracking-[0.0096em] text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
