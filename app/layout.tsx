import type { Metadata } from "next";
import "./globals.css";

const DOMAIN = "https://www.administracionfincasazuqueca.es";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: "Administración de Fincas en Azuqueca de Henares | Gestión Profesional",
    template: "%s | Administración de Fincas Azuqueca",
  },

  description:
    "Administración de fincas en Azuqueca de Henares y Guadalajara. Gestión profesional de comunidades de propietarios con respaldo legal. Consulta gratuita.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: DOMAIN,
    siteName: "Administración de Fincas Azuqueca",
    title: "Administración de Fincas en Azuqueca de Henares",
    description:
      "Gestión integral de comunidades de propietarios en Azuqueca de Henares y Guadalajara. Más de 15 años de experiencia.",
    images: [
      {
        url: "/og-image.jpg", // pon una imagen aquí (1200x630)
        width: 1200,
        height: 630,
        alt: "Administración de Fincas en Azuqueca de Henares",
      },
    ],
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Administración de Fincas en Azuqueca de Henares",
    description:
      "Gestión profesional de comunidades de propietarios en Azuqueca y Guadalajara.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
