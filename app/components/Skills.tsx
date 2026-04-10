"use client";

import { motion } from "framer-motion";
import { useLocale } from "../i18n/LocaleProvider";

type Tool = {
  name: string;
  description: string;
};

function Skills() {
  const { t } = useLocale();

  const skillsTitle = t("tools.skillsTitle") || t("skills.title");
  const skills = (t("skills.categories") ?? {}) as Record<string, string[]>;

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">{skillsTitle}</h2>

      <div id="skills" className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-semibold mb-6">{skillsTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-gray-800 rounded-xl p-4"
            >
              <div className="font-semibold mb-2 capitalize">
                {category.replace(/_/g, " ")}
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                {items.map((it: string, idx: number) => (
                  <div key={idx}>• {it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
