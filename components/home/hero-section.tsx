'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: 'Future on the <br /><span className="font-bold text-white">Industrial Sea</span>',
    subtitle: 'Leading the global industrial engineering with precision and innovation since 2016.',
    image: '/images/hero-industrial.jpg',
    link: '/projects',
    linkLabel: 'View Projects',
  },
  {
    id: 2,
    title: 'Precision <br /><span className="font-bold text-white">Engineering Solutions</span>',
    subtitle: 'From complex piping systems to advanced HVAC installations, we deliver excellence.',
    image: '/images/service-equipment.jpg',
    link: '/services',
    linkLabel: 'Our Services',
  },
  {
    id: 3,
    title: 'Global Standard <br /><span className="font-bold text-white">Quality Assurance</span>',
    subtitle: 'Committed to safety, reliability, and world-class engineering standards in every project.',
    image: '/images/facility-expansion.jpg',
    link: '/company/about',
    linkLabel: 'Learn More',
  },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 30,
    startIndex: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const selectedIndexRef = useRef(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const nextIndex = emblaApi.selectedScrollSnap();
    selectedIndexRef.current = nextIndex;
    setSelectedIndex(nextIndex);
    setProgress(0);
  }, [emblaApi]);

  const goToSlide = useCallback(
    (index: number, immediate = false) => {
      if (!emblaApi) return;
      setProgress(0);
      emblaApi.scrollTo(index, immediate);
      // selectedIndex는 onSelect 콜백에서만 업데이트
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);

    const initialize = requestAnimationFrame(() => {
      goToSlide(0, true);
    });

    return () => {
      cancelAnimationFrame(initialize);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, goToSlide, onSelect]);

  useEffect(() => {
    setAnimatedIndex(-1);

    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        setAnimatedIndex(selectedIndex);
      });
    });

    return () => {
      if (firstFrame) cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
    };
  }, [selectedIndex]);

  // 자동 재생 및 진행 표시 로직
  useEffect(() => {
    if (!isPlaying || !emblaApi) return;

    const interval = 50; // Update
    const duration = 6000; // 6 seconds per slide
    const step = (interval / duration) * 100;
    const progressRef = { current: progress };

    const timer = setInterval(() => {
      progressRef.current += step;

      if (progressRef.current >= 100) {
        progressRef.current = 0;
        const nextIndex =
          selectedIndexRef.current >= slides.length - 1
            ? 0
            : selectedIndexRef.current + 1;

        goToSlide(nextIndex, nextIndex === 0);
      }

      setProgress(progressRef.current);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, emblaApi, goToSlide]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      {/* Embla Slider Container */}
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => {
            const isActive = selectedIndex === index;
            const isAnimatedActive = animatedIndex === index;

            return (
              <div key={slide.id} className="relative min-w-full flex-[0_0_100%] h-full">
                {/* Background Image with Ken Burns Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title.replace(/<br \/>/g, ' ')}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-[10000ms] ease-linear",
                      isAnimatedActive ? "scale-110" : "scale-100"
                    )}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/95 via-[#001A3D]/60 to-transparent" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content Overlay - Re-mounts on index change to restart animations */}
                <div
                  key={isActive ? `active-${index}` : `inactive-${index}`}
                  className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-12 xl:px-24"
                >
                  <div className="mx-auto w-full max-w-[1400px]">
                    <div className="max-w-4xl">
                      {/* Animated Text */}
                      <h1
                        className={cn(
                          "text-5xl font-light leading-[1.15] tracking-tight text-white md:text-6xl lg:text-8xl transition-all duration-1000",
                          isAnimatedActive ? "translate-y-0 opacity-100 delay-300" : "translate-y-12 opacity-0"
                        )}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />

                      <p
                        className={cn(
                          "mt-8 max-w-2xl text-lg leading-relaxed text-white/80 lg:text-2xl transition-all duration-1000",
                          isAnimatedActive ? "translate-y-0 opacity-100 delay-500" : "translate-y-12 opacity-0"
                        )}
                      >
                        {slide.subtitle}
                      </p>

                      <div
                        className={cn(
                          "mt-12 flex flex-wrap gap-6 transition-all duration-1000",
                          isAnimatedActive ? "translate-y-0 opacity-100 delay-700" : "translate-y-12 opacity-0"
                        )}
                      >
                        <Link
                          href={slide.link}
                          className="group/btn relative flex items-center gap-3 overflow-hidden border border-white/20 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-white"
                        >
                          <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover/btn:scale-x-100" />
                          <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#001A3D]">
                            {slide.linkLabel}
                          </span>
                          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-[#001A3D]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sophisticated Dot Navigation (Centered) */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-[3px] transition-all duration-500",
                selectedIndex === index
                  ? "w-12 bg-white"
                  : "w-6 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Decorative Branding */}
      <div className="absolute right-0 bottom-0 top-0 hidden w-24 border-l border-white/10 lg:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
            WELLINS INC.
          </span>
        </div>
      </div>
    </section>
  );
}
