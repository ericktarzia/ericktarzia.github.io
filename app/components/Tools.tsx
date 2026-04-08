"use client";

import { motion } from "framer-motion";
import { useLocale } from "../i18n/LocaleProvider";

type Tool = {
  name: string;
  description: string;
};

function Tools() {
  const { t } = useLocale();
  const tools = (t("tools.items") ?? []) as Tool[];
  const libs = (t("libs.flutter") ?? []) as {
    name: string;
    link?: string;
    desc?: string;
    category?: string;
  }[];

  const flutterLibs = libs.filter(
    (lib) =>
      lib.name === "realtime_image_labeler" || lib.name === "drift_devtools",
  );
  const vscodeExtensions = libs.filter(
    (lib) => lib.name === "drift-studio" || lib.name === "DevAlive",
  );

  const libsTitle = t("tools.libsTitle") || "Flutter libs & tools";
  const skillsTitle = t("tools.skillsTitle") || t("skills.title");
  const skills = (t("skills.categories") ?? {}) as Record<string, string[]>;

  return (
    <section id="tools" className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        {t("tools.title") || "Ferramentas e Habilidades"}
      </h2>

      {flutterLibs.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-500">
            {libsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {flutterLibs.map((l, i) => (
              <a
                key={i}
                href={l.link}
                target="_blank"
                className="border border-gray-800 rounded-xl p-4 hover:shadow-lg transition hover:bg-gray-800"
              >
                <div className="font-semibold text-blue-400">{l.name}</div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  {l.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {vscodeExtensions.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-500">
            VSCode Extensions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {vscodeExtensions.map((l, i) => (
              <a
                key={i}
                href={l.link}
                target="_blank"
                className="border border-gray-800 rounded-xl p-4 hover:shadow-lg transition hover:bg-gray-800"
              >
                <div className="font-semibold text-blue-400">{l.name}</div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  {l.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto mt-12">
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

export default Tools;
