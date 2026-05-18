"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-accent" />

      <div className="bg-card/98 backdrop-blur-md border-t border-border shadow-2xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 max-w-2xl">
              <div className="w-9 h-9 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="h-4 w-4 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1 font-[family-name:var(--font-bebas)] tracking-[0.15em] text-foreground uppercase">
                  Cookie Notice
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, serve relevant content, and analyse site traffic.
                  Non-essential cookies are only activated with your consent. Read our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-accent hover:underline transition-colors duration-200 font-medium"
                  >
                    Cookie Policy
                  </Link>{" "}
                  for full details.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent transition-all duration-200 text-xs"
                onClick={declineAll}
              >
                Decline Non-Essential
              </Button>
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-all duration-200 text-xs"
                onClick={acceptAll}
              >
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
