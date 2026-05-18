"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle2 } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

const topLabels = ["Top Pick", "Popular", "Trending", "Rising"] as const

function StarRating({ rating }: { rating: number }) {
  const normalized = Math.round(rating * 5) / 5
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <div key={i} className="relative inline-block">
            <Star className="h-3.5 w-3.5 text-border" fill="currentColor" />
            {fill > 0 && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="h-3.5 w-3.5 text-accent" fill="currentColor" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function ScoreFill({ score }: { score: number }) {
  const pct = (score / 10) * 100
  return (
    <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
      <div
        className="h-full bg-accent rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export function BettingSitesList() {
  return (
    <section className="py-8 md:py-14 relative z-10 bg-background">
      <div className="container mx-auto px-3 md:px-4 max-w-[960px]">

        {/* Column headers — desktop */}
        <div className="hidden md:grid grid-cols-12 px-4 mb-2">
          <div className="col-span-1" />
          <div className="col-span-3 text-[10px] text-muted-foreground uppercase tracking-widest pl-2">Bookmaker</div>
          <div className="col-span-2 text-[10px] text-muted-foreground uppercase tracking-widest text-center pl-2">Score</div>
          <div className="col-span-4 text-[10px] text-muted-foreground uppercase tracking-widest text-center">Welcome Offer</div>
          <div className="col-span-2 text-[10px] text-muted-foreground uppercase tracking-widest text-right pr-2" />
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {bettingSites.map((site, index) => (
            <div
              key={site.id}
              className={`
                relative group rounded-lg overflow-visible
                transition-all duration-300
                ${index === 0
                  ? "ring-2 ring-accent/60 bg-card shadow-md"
                  : "border border-border bg-card hover:border-accent/40 hover:shadow-sm"
                }
              `}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Left accent bar — only #1 */}
              {index === 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent rounded-l-lg" />
              )}

              {/* Top badge */}
              {index < 4 && (
                <div className="absolute -top-3 left-4 z-20">
                  <span
                    className={`
                      text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full
                      ${index === 0
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "bg-secondary text-accent border border-accent/30"
                      }
                    `}
                  >
                    {topLabels[index]}
                  </span>
                </div>
              )}

              {/* Grid: rank(1) | logo(3) | score(2) | bonus(4) | CTA(2) */}
              <div className="hidden md:flex flex-col pl-[4px]">
                <div className="grid grid-cols-12 items-center">

                  {/* Rank */}
                  <div className="col-span-1 py-5 flex items-center justify-center">
                    <span
                      className={`
                        text-lg font-bold font-[family-name:var(--font-bebas)] tracking-wide w-9 h-9 flex items-center justify-center rounded-lg
                        ${index === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground bg-secondary"}
                      `}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Logo */}
                  <div className="col-span-3 py-4 pl-2 pr-3">
                    <div className="bg-white border border-border rounded-md p-2.5 flex items-center justify-center h-[68px] w-full max-w-[160px]">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={150}
                        height={56}
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-2 py-5 px-3 text-center">
                    <div className="flex items-baseline justify-center gap-0.5 mb-1">
                      <span className={`text-xl font-bold ${index === 0 ? "text-accent" : "text-foreground"}`}>
                        {site.score.toFixed(1)}
                      </span>
                      <span className="text-[9px] text-muted-foreground">/10</span>
                    </div>
                    <div className="flex justify-center mb-1.5">
                      <StarRating rating={site.score} />
                    </div>
                    <ScoreFill score={site.score} />
                    <p className="text-[9px] text-muted-foreground/60 mt-1">({site.reviews.toLocaleString()})</p>
                  </div>

                  {/* Bonus */}
                  <div className="col-span-4 py-5 border-l border-border px-5 text-center">
                    <p className="text-[9px] text-accent uppercase tracking-[0.2em] font-bold mb-2">
                      Welcome Offer
                    </p>
                    <p
                      className={`font-extrabold leading-tight text-balance ${
                        index === 0 ? "text-accent text-2xl" : "text-foreground text-xl"
                      }`}
                    >
                      {site.bonus}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="col-span-2 py-5 border-l border-border px-4">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`
                        w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg font-bold text-xs tracking-widest uppercase
                        transition-all duration-200 hover:brightness-110
                        ${index === 0
                          ? "bg-accent text-accent-foreground shadow-sm hover:shadow-md"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }
                      `}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                      Claim Now
                    </Link>
                  </div>
                </div>

                {/* Card footer — features + terms */}
                <div className="border-t border-border mx-4 mb-2 pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-3">
                    {site.features.map((f) => (
                      <span key={f} className="text-[9px] text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-accent/50 inline-block" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-[9px] text-muted-foreground flex-shrink-0 ml-4">
                    18+ | T&amp;Cs Apply | BeGambleAware.org
                  </p>
                </div>
              </div>

              {/* MOBILE LAYOUT */}
              <div className="md:hidden p-4 pt-5 space-y-3.5 pl-[10px]">
                {/* Row 1: Rank + Logo + Score */}
                <div className="flex items-center gap-3">
                  <span
                    className={`
                      text-lg font-bold font-[family-name:var(--font-bebas)] w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg
                      ${index === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground bg-secondary"}
                    `}
                  >
                    {index + 1}
                  </span>
                  <div className="bg-white border border-border rounded-md p-2.5 flex items-center justify-center h-16 flex-1">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={150}
                      height={52}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-xl font-bold ${index === 0 ? "text-accent" : "text-foreground"}`}>
                      {site.score.toFixed(1)}
                    </span>
                    <div className="mt-0.5">
                      <StarRating rating={site.score} />
                    </div>
                  </div>
                </div>

                {/* Row 2: Bonus */}
                <div className="bg-secondary border border-border rounded-lg px-3 py-3">
                  <p className="text-[9px] text-accent uppercase tracking-[0.2em] font-bold mb-1">Welcome Offer</p>
                  <p className={`font-extrabold leading-snug ${index === 0 ? "text-accent text-base" : "text-foreground text-sm"}`}>
                    {site.bonus}
                  </p>
                </div>

                {/* Row 3: CTA */}
                <Link
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`
                    w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-xs tracking-widest uppercase
                    ${index === 0 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}
                  `}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                  Claim Bonus
                </Link>

                {/* Footer */}
                <div className="border-t border-border pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {site.features.slice(0, 2).map((f) => (
                      <span key={f} className="text-[9px] text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-accent/50 inline-block" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-[9px] text-muted-foreground flex-shrink-0 ml-2">18+ | T&amp;Cs Apply</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[10px] text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
          Rankings are determined independently by our editorial team. We may receive compensation when you click on
          operator links. Gambling advertising is prohibited for under-18s. BeGambleAware.org.
        </p>
      </div>
    </section>
  )
}
