import type { Metadata } from "next";
import "./globals.css";
import LocaleProvider from "./i18n/LocaleProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://tarzia.tech"),
  title: {
    default: "Software sob medida | Erick Tarzia — Tarzia Tecnologia",
    template: "%s | Tarzia Tecnologia",
  },
  description:
    "Empresa de desenvolvimento de software sob medida. Criamos sistemas, aplicativos Android e produtos digitais. Conheça cases como Etera e Oráculo.ia. Solicite um orçamento.",
  keywords: [
    "desenvolvimento de software sob medida",
    "empresa de desenvolvimento de software",
    "desenvolvimento de sistemas",
    "desenvolvimento de aplicativos",
    "desenvolvimento de aplicativos Android",
    "inteligência artificial em aplicativos",
    "modernização de sistemas",
    "consultoria em engenharia de software",
    "liderança técnica",
    "Tarzia Tecnologia",
    "Erick Tarzia",
  ],
  applicationName: "Tarzia Tecnologia",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Software sob medida | Erick Tarzia — Tarzia Tecnologia",
    description:
      "Sistemas, aplicativos e produtos digitais sob medida. Fale com a Tarzia Tecnologia sobre seu próximo projeto.",
    type: "website",
    locale: "pt_BR",
    url: "https://tarzia.tech/",
    siteName: "Tarzia Tecnologia",
    images: [
      {
        url: "/projects/etera-home.webp",
        width: 1600,
        height: 675,
        alt: "Produto digital Etera, desenvolvido pela Tarzia Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software sob medida | Erick Tarzia — Tarzia Tecnologia",
    description:
      "Sistemas, aplicativos e produtos digitais sob medida. Solicite um orçamento.",
    images: ["/projects/etera-home.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tarzia Tecnologia",
  url: "https://tarzia.tech/",
  logo: "https://tarzia.tech/icon.svg",
  description:
    "Empresa de desenvolvimento de software sob medida, produtos digitais, aplicativos e modernização de sistemas.",
  telephone: "+551151234988",
  email: "ericktarzia@gmail.com",
  areaServed: { "@type": "Country", name: "Brasil" },
  founder: { "@type": "Person", name: "Erick Tarzia" },
  knowsAbout: [
    "Desenvolvimento de software sob medida",
    "Engenharia de software",
    "Desenvolvimento de aplicativos",
    "Modernização de sistemas",
    "Liderança técnica",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de software",
    itemListElement: [
      "Desenvolvimento de produto digital",
      "Desenvolvimento de plataformas e sistemas",
      "Modernização de software",
      "Liderança técnica e arquitetura",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+551151234988",
    contactType: "sales",
    availableLanguage: ["Portuguese", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
