import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Elite Betting Sites UK | Top Bookmakers 2025 | elitebettingsitesuk.com",
  description:
    "The definitive ranked list of the best UK betting sites for 2025. Independent expert reviews, UKGC-licensed bookmakers, exclusive bonuses, and rigorous analysis for serious UK punters.",
  keywords:
    "elite betting sites UK, UK bookmakers list, top betting sites 2025, UKGC licensed bookmakers, online betting UK, football betting sites UK",
  metadataBase: new URL("https://elitebettingsitesuk.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${bebasNeue.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
