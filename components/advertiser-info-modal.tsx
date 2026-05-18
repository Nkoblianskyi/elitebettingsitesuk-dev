"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 animate-fade-in p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden animate-scale-in border border-border">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-accent/20 border border-accent/30 p-2 rounded-lg">
              <Info className="h-4 w-4 text-accent" />
            </div>
            <h2 className="text-lg font-bold text-primary-foreground font-[family-name:var(--font-bebas)] tracking-wide">
              Advertiser Disclosure
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-primary-foreground/60 hover:text-accent transition-all duration-300 hover:rotate-90 transform"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="h-[3px] w-full bg-accent" />

        <div className="p-6">
          <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
            <p className="font-semibold text-foreground">
              EliteBettingSitesUK.com is a free comparison service helping UK punters find the best bookmakers.
            </p>
            <p>
              We receive affiliate commissions when you register with featured operators through our links. These
              partnerships help us provide free content and exclusive bonuses but never influence our rankings or reviews.
            </p>
            <p>
              All featured bookmakers hold valid UK Gambling Commission licences, ensuring player protection and
              responsible gambling standards.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Betting offers change regularly. Always verify current terms and promotions directly with the operator
              before claiming. Gamble responsibly — BeGambleAware.org
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={onClose}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 rounded-lg"
            >
              Understood
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
