import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3 as Source_Sans_Pro, Playfair_Display } from "next/font/google"
import "./globals.css"

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans-pro",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Administración de Fincas Azuqueca - Gestión Profesional con Respaldo Legal",
  description:
    "Administración profesional de fincas en Azuqueca de Henares, Guadalajara. Servicios integrales de gestión inmobiliaria con respaldo legal especializado.",
  keywords:
    "administración fincas, Azuqueca de Henares, Guadalajara, gestión inmobiliaria, abogados, administrador fincas",
  authors: [{ name: "Administración de Fincas Azuqueca" }],
  creator: "Administración de Fincas Azuqueca",
  publisher: "Administración de Fincas Azuqueca",
  robots: "index, follow",
  openGraph: {
    title: "Administración de Fincas Azuqueca - Gestión Profesional",
    description: "Servicios profesionales de administración de fincas en Azuqueca de Henares con respaldo legal.",
    type: "website",
    locale: "es_ES",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${sourceSansPro.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
