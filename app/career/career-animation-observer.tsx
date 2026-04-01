"use client";

import { useEffect } from "react";

export function CareerAnimationObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-career-observe]");

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.setAttribute("data-in-view", "true");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
