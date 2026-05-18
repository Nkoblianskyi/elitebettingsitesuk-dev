"use client"

import { useState, useEffect } from "react"
import { X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
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
              <span className="text-accent font-bold text-base font-[family-name:var(--font-bebas)]">18+</span>
            </div>
            <h2 className="text-lg font-bold text-primary-foreground font-[family-name:var(--font-bebas)] tracking-wide">
              Age Verification Required
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
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs text-accent font-semibold uppercase tracking-widest">UKGC Compliance</span>
          </div>
          <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
            <p className="font-semibold text-foreground">
              This website is strictly for individuals aged 18 or over. By using our site, you confirm you meet this
              legal requirement.
            </p>
            <p>
              All featured bookmakers are licensed by the UK Gambling Commission, ensuring player protection and
              responsible gambling standards.
            </p>
            <p>Gambling should be for entertainment only. Never bet with money you cannot afford to lose.</p>
            <p className="text-xs text-muted-foreground/70">
              If you are struggling with gambling issues, please seek help from BeGambleAware.org, GamCare.org.uk, or call
              the National Gambling Helpline: 0808 8020 133.
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={onClose}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 rounded-lg"
            >
              I Am 18 or Over
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
