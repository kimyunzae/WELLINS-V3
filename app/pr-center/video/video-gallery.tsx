"use client";

import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useState } from "react";

export type VideoItem = {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  src: string;
};

type Props = {
  videos: VideoItem[];
};

export default function VideoGallery({ videos }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videos[activeIndex] ?? videos[0];

  if (!activeVideo) return null;

  return (
    <>
      {/* 상단 비디오 플레이어 및 설명 */}
      <div className="mb-16">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <video
            playsInline
            key={activeVideo.src}
            controls
            preload="metadata"
            poster={activeVideo.thumbnail}
            className="h-full w-full object-cover"
          >
            <source src={activeVideo.src} type="video/mp4" />
          </video>
        </div>
        <div className="mt-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground lg:text-3xl">
            {activeVideo.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {activeVideo.duration}
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            {activeVideo.description}
          </p>
        </div>
      </div>

      {/* 하단 비디오 썸네일 갤러리 */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={video.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={cn(
                "group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                isActive && "ring-2 ring-accent/60",
              )}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/50 transition-colors group-hover:border-primary-foreground group-hover:bg-primary-foreground/10">
                    <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-primary/80 px-2 py-1 text-xs text-primary-foreground">
                  {video.duration}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
