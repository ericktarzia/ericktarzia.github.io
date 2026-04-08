"use client";

import { useLocale } from "../i18n/LocaleProvider";

export default function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>

      <p className="text-gray-400 mb-6">{t("contact.subtitle")}</p>

      <div className="flex flex-col items-center gap-4">
        <a
          href={`mailto:${t("contact.email")}`}
          className="px-6 py-3 bg-white text-black rounded-lg hover:opacity-80"
        >
          {t("contact.cta")}
        </a>
        {t("contact.phone") && (
          <a href={`tel:${t("contact.phone")}`} className="text-gray-300">
            {t("contact.phone")}
          </a>
        )}
      </div>
    </section>
  );
}
