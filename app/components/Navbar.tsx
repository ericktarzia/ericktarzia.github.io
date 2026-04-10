"use client";

import { useEffect, useState } from "react";
import { useLocale } from "../i18n/LocaleProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let currentSection = "projects";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id") || "projects";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(id) as HTMLElement;
    if (target) {
      window.scrollTo({
        // ignore error since we want to scroll even if the target is not found

        top: target.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-black/80 backdrop-blur border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-white">{t("nav.name")}</span>

        <div className="flex gap-6 items-center text-sm">
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className={`hover:text-white ${
              activeSection === "projects"
                ? "text-white font-bold"
                : "text-gray-400"
            }`}
          >
            {t("nav.projects")}
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className={`hover:text-white ${
              activeSection === "about"
                ? "text-white font-bold"
                : "text-gray-400"
            }`}
          >
            {t("nav.about")}
          </a>
          <a
            href="#tools"
            onClick={(e) => handleSmoothScroll(e, "#tools")}
            className={`hover:text-white ${
              activeSection === "tools"
                ? "text-white font-bold"
                : "text-gray-400"
            }`}
          >
            {t("nav.tools")}
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "#skills")}
            className={`hover:text-white ${
              activeSection === "skills"
                ? "text-white font-bold"
                : "text-gray-400"
            }`}
          >
            {t("nav.skills")}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className={`hover:text-white ${
              activeSection === "contact"
                ? "text-white font-bold"
                : "text-gray-400"
            }`}
          >
            {t("nav.contact")}
          </a>

          <div className="ml-4 flex items-center gap-2">
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 rounded ${
                locale === "en" ? "bg-gray-800 text-white" : "text-gray-400"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("pt")}
              className={`px-2 py-1 rounded ${
                locale === "pt" ? "bg-gray-800 text-white" : "text-gray-400"
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
