"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaDownload } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdDarkMode, MdLightMode, MdMonitor } from "react-icons/md";

import type { ActiveSection, ThemeMode } from "@/app/page";
import { navLinks } from "@/lib/data";

type NavbarProps = {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
  themeMode: ThemeMode;
  onThemeModeChange: (mode: ThemeMode) => void;
};

const themeOptions: {
  label: string;
  value: ThemeMode;
  icon: typeof MdMonitor;
}[] = [
  {
    label: "System",
    value: "system",
    icon: MdMonitor,
  },
  {
    label: "Dark",
    value: "dark",
    icon: MdDarkMode,
  },
  {
    label: "Light",
    value: "light",
    icon: MdLightMode,
  },
];

export default function Navbar({
  activeSection,
  onSectionChange,
  themeMode,
  onThemeModeChange,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themeMenuRef = useRef<HTMLDivElement | null>(null);

  const activeTheme =
    themeOptions.find((option) => option.value === themeMode) ||
    themeOptions[0];

  const ActiveThemeIcon = activeTheme.icon;

  const handleClick = (section: ActiveSection) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
    setIsThemeMenuOpen(false);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    onThemeModeChange(mode);
    setIsThemeMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!themeMenuRef.current) {
        return;
      }

      if (!themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="theme-navbar fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => handleClick("Home")}
          className="theme-text-primary flex items-center gap-3 border-0 bg-transparent p-0"
          title="Go to Home"
          aria-label="Go to Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl text-cyan-300">
            <FaCode size={30} />
          </span>

          <span className="text-2xl font-bold tracking-tight">
            Lokesh Agarwal
          </span>
        </button>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const section = link as ActiveSection;
            const isActive = activeSection === section;

            return (
              <button
                key={link}
                type="button"
                onClick={() => handleClick(section)}
                className={`relative border-0 bg-transparent px-1 py-3 text-lg font-medium transition ${
                  isActive ? "text-cyan-300" : "theme-nav-link"
                }`}
              >
                {link}

                {isActive ? (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-cyan-300" />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <div ref={themeMenuRef} className="relative">
            <button
              type="button"
              onClick={() =>
                setIsThemeMenuOpen((currentValue) => !currentValue)
              }
              className="theme-icon-button flex h-12 w-12 items-center justify-center rounded-lg border transition"
              title={`${activeTheme.label}`}
              aria-label={`Theme setting: ${activeTheme.label}`}
            >
              <ActiveThemeIcon size={22} />
            </button>

            {isThemeMenuOpen ? (
              <div className="theme-dropdown absolute right-0 top-14 w-44 overflow-hidden rounded-xl border p-2 shadow-2xl">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = themeMode === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleThemeChange(option.value)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
                        isSelected
                          ? "theme-dropdown-active"
                          : "theme-dropdown-item"
                      }`}
                    >
                      <Icon size={20} />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <a
            href="/portfolio/Lokesh_Agarwal_Resume.pdf"
            download
            className="theme-icon-button inline-flex h-11 w-11 items-center justify-center rounded-lg border transition sm:w-auto sm:px-4"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <FaDownload size={15} />
            <span className="ml-2 hidden text-sm font-semibold sm:inline">
              Resume
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="/portfolio/Lokesh_Agarwal_Resume.pdf"
            download
            className="theme-icon-button inline-flex h-11 w-11 items-center justify-center rounded-lg border transition sm:w-auto sm:px-4"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <FaDownload size={15} />
            <span className="ml-2 hidden text-sm font-semibold sm:inline">
              Resume
            </span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
            className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-lg border"
            title={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div className="theme-mobile-menu border-t px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const section = link as ActiveSection;
              const isActive = activeSection === section;

              return (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleClick(section)}
                  className={`rounded-lg border-0 px-4 py-3 text-left text-base font-medium transition ${
                    isActive ? "theme-mobile-active" : "theme-mobile-item"
                  }`}
                >
                  {link}
                </button>
              );
            })}

            <div className="mt-3 grid grid-cols-3 gap-2">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = themeMode === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleThemeChange(option.value)}
                    className={`flex flex-col items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                      isSelected
                        ? "theme-dropdown-active"
                        : "theme-dropdown-item"
                    }`}
                  >
                    <Icon size={20} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
