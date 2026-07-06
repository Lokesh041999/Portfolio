"use client";

import { useEffect, useRef, useState } from "react";

import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";

export type ActiveSection =
  | "Home"
  | "About"
  | "Experience"
  | "Projects"
  | "Skills"
  | "Contact";

export type ThemeMode = "system" | "dark" | "light";

const SECTION_IDS: ActiveSection[] = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

const getSectionId = (section: ActiveSection) =>
  `portfolio-${section.toLowerCase()}`;

const isThemeMode = (value: string | null): value is ThemeMode => {
  return value === "system" || value === "dark" || value === "light";
};

const getSavedThemeMode = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "system";
  }

  const savedThemeMode = localStorage.getItem("portfolio-theme-mode");

  return isThemeMode(savedThemeMode) ? savedThemeMode : "system";
};

const applyTheme = (mode: ThemeMode) => {
  if (typeof window === "undefined") {
    return;
  }

  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const resolvedTheme =
    mode === "system" ? (isSystemDark ? "dark" : "light") : mode;

  document.documentElement.setAttribute("data-theme", resolvedTheme);
  document.documentElement.setAttribute("data-theme-mode", mode);
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("Home");
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");

  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleThemeModeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem("portfolio-theme-mode", mode);
    applyTheme(mode);
  };

  const handleSectionChange = (section: ActiveSection) => {
    const element = document.getElementById(getSectionId(section));

    if (!element) {
      return;
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    isProgrammaticScrollRef.current = true;
    setActiveSection(section);

    const navbarOffset = 105;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - navbarOffset,
      behavior: "smooth",
    });

    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      setActiveSection(section);
    }, 900);
  };

  useEffect(() => {
    const savedThemeMode = getSavedThemeMode();

    applyTheme(savedThemeMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      const currentMode = getSavedThemeMode();

      if (currentMode === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) {
        return;
      }

      const scrollPosition = window.scrollY + 160;
      let currentSection: ActiveSection = "Home";

      SECTION_IDS.forEach((section) => {
        const element = document.getElementById(getSectionId(section));

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="theme-page min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <Navbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        themeMode={themeMode}
        onThemeModeChange={handleThemeModeChange}
      />

      <div className="pt-24">
        <section
          id={getSectionId("Home")}
          className="mx-auto min-h-[calc(100vh-96px)] max-w-7xl px-6 pb-20 pt-14"
        >
          <Hero />

          <div className="mt-8">
            <Stats />
          </div>
        </section>

        <section
          id={getSectionId("About")}
          className="mx-auto min-h-screen max-w-7xl px-6 py-10"
        >
          <About />
        </section>

        <section
          id={getSectionId("Experience")}
          className="mx-auto min-h-screen max-w-7xl px-6 py-10"
        >
          <Experience />
        </section>

        <section
          id={getSectionId("Projects")}
          className="mx-auto min-h-screen max-w-7xl px-6 py-10"
        >
          <Projects />
        </section>

        <section
          id={getSectionId("Skills")}
          className="mx-auto min-h-screen max-w-7xl px-6 py-10"
        >
          <TechStack />
        </section>

        <section
          id={getSectionId("Contact")}
          className="mx-auto min-h-screen max-w-7xl px-6 py-10"
        >
          <ContactCTA />
        </section>
      </div>
    </main>
  );
}
