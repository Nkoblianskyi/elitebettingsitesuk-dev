"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-border"
      }`}
    >
      {/* Top gold accent line */}
      <div className="h-[3px] w-full bg-accent" />
      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <Link href="/" className="flex items-center gap-3 group" aria-label="EliteBettingSitesUK home">
          {/* Custom SVG Logo Mark */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Hexagon shield background */}
              <path
                d="M20 2L36 10V22C36 30.5 29 37.5 20 40C11 37.5 4 30.5 4 22V10L20 2Z"
                fill="hsl(var(--primary))"
              />
              {/* Inner lighter shield */}
              <path
                d="M20 6L32 12.5V22C32 28.5 26.5 34.2 20 36.5C13.5 34.2 8 28.5 8 22V12.5L20 6Z"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--accent))"
                strokeWidth="0.8"
                opacity="0.6"
              />
              {/* Gold star/crown accent */}
              <path
                d="M20 10L21.5 15H27L22.5 18L24 23L20 20L16 23L17.5 18L13 15H18.5L20 10Z"
                fill="hsl(var(--accent))"
              />
              {/* Bottom "E" letterform hint */}
              <rect x="15" y="25" width="10" height="1.5" rx="0.75" fill="hsl(var(--accent))" opacity="0.9"/>
              <rect x="15" y="28" width="7" height="1.5" rx="0.75" fill="hsl(var(--accent))" opacity="0.7"/>
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-[5px]">
              <span className="text-[21px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-primary transition-colors duration-300 group-hover:text-accent leading-none">
                ELITE
              </span>
              <span className="text-[21px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-accent leading-none">
                BETTING
              </span>
              <span className="text-[21px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-primary leading-none">
                SITES
              </span>
              <span className="text-[21px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-primary/70 leading-none">
                UK
              </span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
