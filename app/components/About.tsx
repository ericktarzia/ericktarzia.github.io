"use client";

import { motion } from "framer-motion";
import { useLocale } from "../i18n/LocaleProvider";
import Image from "next/image";

export default function About() {
  const { t } = useLocale();

  const sky = t("external.skynews") as { text?: string; url?: string };

  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-gray-700 pb-2">
            {t("about.title")}
          </h2>

          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            {t("about.p1")}
          </p>

          <p className="text-gray-400 mb-3 leading-relaxed">{t("about.p2")}</p>

          <p className="text-gray-400 mb-3 leading-relaxed">{t("about.p3")}</p>

          <p className="text-gray-500 mb-2 leading-relaxed">{t("about.p4")}</p>
          <p className="text-gray-400 mb-2 leading-relaxed">{t("about.p5")}</p>
          <p className="text-gray-400 mb-4 leading-relaxed">{t("about.p6")}</p>

          <div className="flex flex-wrap gap-3 items-center">
            <span className="px-3 py-1 bg-gray-800 rounded text-sm">
              20+ years
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded text-sm">
              Staff / Lead Engineer
            </span>
            <a
              href={sky?.url ?? "#"}
              target="_blank"
              className="px-3 py-1 bg-blue-600 rounded text-sm hover:opacity-90"
            >
              {sky?.text ?? "SkyNews"}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-56 h-56 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
            <Image
              src="/me.png"
              alt="Erick Tarzia"
              width={224} // 56 * 4 (w-56 em Tailwind equivale a 224px)
              height={224} // 56 * 4
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
