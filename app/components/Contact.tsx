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
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${t("contact.phone").replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-green-500 hover:text-green-600 text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.974C0 5.364 5.373 0 12 0c3.181 0 6.167 1.24 8.413 3.488A11.78 11.78 0 0 1 24 11.807c-.003 6.627-5.376 11.992-12.009 11.992m10.17-12.162a10.13 10.13 0 0 0-3.034-4.637A9.965 9.965 0 0 0 12 1.64c-5.689 0-10.306 4.617-10.306 10.307 0 1.819.481 3.594 1.395 5.146l.221.378-.662 2.419 2.482-.652.368.218a10.14 10.14 0 0 0 4.823 1.232h.001c5.688 0 10.306-4.617 10.309-10.304a9.8 9.8 0 0 0-.229-2.219" />
              </svg>
            </a>
            <a href={`tel:${t("contact.phone")}`} className="text-gray-300">
              {t("contact.phone")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
