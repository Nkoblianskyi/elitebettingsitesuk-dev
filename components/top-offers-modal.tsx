"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite, setTopSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in p-3">
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden animate-scale-in border border-border">

        {/* Header */}
        <div className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-bold font-[family-name:var(--font-bebas)] tracking-wide">TOP UK BETTING OFFER</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:rotate-90 transform bg-primary-foreground/10 rounded-full p-1.5"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Gold accent line */}
        <div className="h-[3px] w-full bg-accent" />

        <div className="p-6 flex flex-col items-center">

          {/* UKGC badge */}
          <div className="flex items-center gap-1.5 mb-4 bg-secondary border border-border px-3 py-1 rounded-full">
            <Shield className="h-3.5 w-3.5 text-accent" />
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">UKGC Licensed</span>
          </div>

          {/* Logo */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-5 transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-white border border-border p-4 rounded-xl shadow-sm flex items-center justify-center w-56 h-28">
              <Image
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                width={180}
                height={96}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          </Link>

          {/* Rating */}
          <div className="flex items-center justify-center mb-5 gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent" fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-2xl text-foreground">{topSite.score.toFixed(1)}</span>
            <span className="text-muted-foreground text-sm">/10</span>
          </div>

          {/* Bonus */}
          <div className="mb-6 text-center w-full">
            <div className="bg-accent/10 border border-accent/30 text-accent px-6 py-4 rounded-xl mb-2">
              <p className="text-2xl font-extrabold font-[family-name:var(--font-bebas)] tracking-wide">{topSite.bonus}</p>
            </div>
            <p className="text-sm text-muted-foreground">Exclusive UK Welcome Offer</p>
          </div>

          {/* CTA */}
          <Link href={topSite.link} target="_blank" rel="noopener noreferrer" className="w-full mb-4">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:shadow-lg text-lg py-6 font-bold rounded-xl">
              CLAIM BONUS NOW
            </Button>
          </Link>

          {/* Disclaimer */}
          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            18+ | Terms & Conditions Apply | BeGambleAware.org | Please Gamble Responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
