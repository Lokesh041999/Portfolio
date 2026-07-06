"use client";

import { useEffect } from "react";

export default function ScrollBarHandler() {
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      document.documentElement.classList.add("show-scrollbar");

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        document.documentElement.classList.remove("show-scrollbar");
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  return null;
}
