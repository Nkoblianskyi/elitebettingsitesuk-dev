"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Award, Star, Clock, Shield, CheckCircle } from "lucide-react"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[59px]">

        {/* Hero Section — sports background */}
        <section className="relative overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">
          {/* Sports background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-sports-bg.jpg')" }}
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-primary/80" />
          {/* Subtle vignette edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
          {/* Gold bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />

          {/* Decorative sport icon elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Large faded football */}
            <svg className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.04] text-white" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none"/>
              <polygon points="50,15 62,36 86,36 68,52 75,76 50,62 25,76 32,52 14,36 38,36" fill="currentColor"/>
            </svg>
            {/* Small diamond top-left */}
            <svg className="absolute left-10 top-10 w-16 h-16 opacity-[0.07] text-accent" viewBox="0 0 40 40" fill="currentColor">
              <polygon points="20,2 38,20 20,38 2,20"/>
            </svg>
            {/* Horse silhouette right side */}
            <svg className="absolute right-8 bottom-10 w-32 h-32 opacity-[0.05] text-white" viewBox="0 0 100 100" fill="currentColor">
              <path d="M80,10 C75,8 68,12 65,18 L60,22 C55,18 48,16 42,20 L30,28 C25,32 20,40 22,50 L18,65 C16,72 20,80 28,82 L32,82 L34,65 C36,58 40,54 46,52 L52,52 L54,70 L54,82 L62,82 L62,68 C64,60 68,54 74,52 L80,50 C88,46 94,38 92,28 C90,20 86,12 80,10 Z"/>
            </svg>
            {/* Tennis ball top-right */}
            <svg className="absolute right-1/4 top-8 w-14 h-14 opacity-[0.06] text-white" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="30" cy="30" r="28"/>
              <path d="M8,20 Q20,30 8,40" strokeWidth="2.5"/>
              <path d="M52,20 Q40,30 52,40" strokeWidth="2.5"/>
            </svg>
            {/* Small circle accent left */}
            <svg className="absolute left-1/4 bottom-12 w-10 h-10 opacity-[0.08] text-accent" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="20" cy="20" r="17"/>
            </svg>
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">

              {/* Overline badge */}
              <div
                className="mb-6 animate-fade-in-up inline-flex items-center gap-2 border border-accent/40 bg-accent/15 px-4 py-1.5 rounded-full"
                style={{ animationDelay: "100ms" }}
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-[11px] text-accent font-semibold tracking-[0.2em] uppercase">
                  Independent UK Bookmaker Analysis
                </span>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight font-[family-name:var(--font-bebas)] tracking-wide text-balance text-primary-foreground">
                  ELITE LIST OF{" "}
                  <span className="text-accent">BEST UK BETTING SITES</span>
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
                  Each bookmaker on this list is independently evaluated, UKGC-verified, and ranked by our specialist
                  team on odds quality, bonus value, payment reliability, and customer service standards.
                </p>
              </div>

              {/* Trust badges */}
              <div
                className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-10 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                {[
                  { icon: Shield, label: "UKGC Licensed Only" },
                  { icon: Award, label: "Exclusive Bonuses" },
                  { icon: Star, label: "Expert-Ranked" },
                  { icon: CheckCircle, label: "Verified & Updated" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-primary-foreground/75 tracking-wide">{label}</span>
                  </div>
                ))}
              </div>

              {/* Last updated */}
              <div
                className="flex items-center justify-center gap-2 mt-6 animate-fade-in-up"
                style={{ animationDelay: "380ms" }}
              >
                <Clock className="h-3.5 w-3.5 text-primary-foreground/35" />
                <span className="text-xs text-primary-foreground/45">
                  Last Updated:{" "}
                  <span className="font-semibold text-primary-foreground/65">{currentDate}</span>
                </span>
              </div>

              {/* Disclaimer links */}
              <div className="mt-4 animate-fade-in-up" style={{ animationDelay: "440ms" }}>
                <p className="text-[11px] text-primary-foreground/35">
                  18+ only. Gamble responsibly. BeGambleAware.org. T&Cs apply.{" "}
                  <button
                    onClick={() => setIsAdvertiserModalOpen(true)}
                    className="text-accent/70 hover:text-accent transition-colors duration-200 underline"
                  >
                    Advertiser Disclosure
                  </button>
                  {" "}&nbsp;|&nbsp;{" "}
                  <button
                    onClick={() => setIsAgeModalOpen(true)}
                    className="text-accent/70 hover:text-accent transition-colors duration-200 underline"
                  >
                    Age Verification
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Betting Sites List — light background */}
        <div id="betting-sites" className="relative bg-background">
          <BettingSitesList />
        </div>

        {/* Info / Article Section */}
        <section className="py-14 md:py-20 bg-secondary border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Article Header */}
              <div className="mb-12 md:mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[2px] bg-accent" />
                  <span className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">Buyer&apos;s Guide</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-bebas)] tracking-wide text-balance">
                  How to Select the Right UK Betting Site
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  A clear-eyed, practical guide to evaluating UK bookmakers — written for punters who take their betting seriously and expect more than marketing copy.
                </p>
              </div>

              {/* Article Content */}
              <article className="space-y-10 text-foreground leading-relaxed">

                {/* Section 1 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    1. Licensing and Regulatory Compliance
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    The non-negotiable starting point for any UK bettor is confirming active UKGC licensing. The UK
                    Gambling Commission enforces some of the toughest standards in the world — operators must hold
                    customer funds in segregated accounts, implement rigorous age-verification, and submit to rolling
                    compliance audits. A valid UKGC licence is not an optional credential; it is your primary legal
                    protection as a bettor.
                  </p>
                  <p className="text-muted-foreground">
                    Never deposit with an operator unable to confirm a current UKGC licence. You can verify any
                    bookmaker&apos;s status directly at the Gambling Commission&apos;s public register. All operators
                    listed on EliteBettingSitesUK.com have been independently verified before publication.
                  </p>
                </div>

                {/* Section 2 — highlighted */}
                <div className="border-l-4 border-accent pl-6 bg-accent/5 py-5 pr-5 rounded-r-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    2. Welcome Bonuses — True Value vs. Headline Figures
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    A headline bonus figure is largely meaningless without scrutinising the conditions attached to it.
                    Our editorial team deconstructs each offer in full: wagering multipliers, minimum qualifying odds,
                    eligible markets, time windows, and maximum withdrawal limits. We score offers on net realisable
                    value — not the number printed in the advertisement.
                  </p>
                  <p className="mb-3 text-muted-foreground">
                    The ASA requires bookmakers to present key terms clearly, and reputable operators welcome this
                    standard. Be cautious of any bonus requiring an unusually large deposit to activate, or that applies
                    arbitrary exclusions to mainstream sports such as horse racing or football accumulators.
                  </p>
                  <p className="text-muted-foreground">
                    Beyond the welcome offer, we examine ongoing promotions: frequency of price boosts, reload bonuses,
                    loyalty programmes, and accumulator insurance. A site&apos;s long-term value regularly outweighs
                    its initial sign-up incentive for regular punters.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    3. Odds Quality and Market Depth
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    Consistently competitive odds represent the single biggest long-term differentiator between
                    bookmakers. Even a 1–2% improvement in average prices compounds substantially across a full season
                    of betting. Our team monitors price competitiveness across Premier League, Championship, horse
                    racing, and major international events on an ongoing basis.
                  </p>
                  <p className="text-muted-foreground">
                    Market breadth is equally important. Leading operators provide extensive in-play markets, player
                    prop bets, match specials, and deep coverage of niche sports including darts and eSports. For
                    horse racing, we specifically assess Best Odds Guaranteed availability, ante-post coverage, and
                    each-way terms — all of which vary considerably between bookmakers.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    4. Banking — Deposits, Withdrawals and Speed
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    Since the UK&apos;s credit card gambling ban in 2020, debit cards (Visa, Mastercard) alongside
                    e-wallets (PayPal, Skrill, Neteller) and bank transfers are the standard deposit methods. Apple
                    Pay and Google Pay offer faster mobile checkout at an increasing number of operators.
                  </p>
                  <p className="text-muted-foreground">
                    We place significant weight on withdrawal speed and transparency. Elite bookmakers process e-wallet
                    withdrawals within hours; debit card payouts typically arrive within 1–3 business days. We flag any
                    operator applying unreasonable delays, excessive verification bottlenecks beyond standard KYC
                    requirements, or opaque fee structures. Your winnings should reach you promptly and without friction.
                  </p>
                </div>

                {/* Section 5 — highlighted */}
                <div className="border-l-4 border-accent pl-6 bg-accent/5 py-5 pr-5 rounded-r-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    5. Mobile Platform and In-Play Experience
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    The majority of UK bettors now place wagers via mobile. A bookmaker&apos;s app is the primary
                    product, not a supplementary one. We benchmark native iOS and Android applications on performance:
                    load times, bet-placement latency, live streaming quality, and cash-out responsiveness under
                    pressure during Premier League fixtures and Cheltenham Festival.
                  </p>
                  <p className="text-muted-foreground">
                    Apps that crash during live markets, lag on in-play odds updates, or bury essential functions
                    behind poor navigation are penalised in our rankings regardless of their desktop offering. The
                    best mobile platforms offer biometric login, push notifications for price movements, and bet
                    builder tools that function intuitively under time pressure.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    6. Customer Support and Responsible Gambling
                  </h3>
                  <p className="mb-3 text-muted-foreground">
                    Tier-one operators provide 24/7 live chat staffed by knowledgeable agents able to resolve account,
                    payment, and technical issues without excessive escalation. Email support should carry documented
                    SLA response times. Telephone support is a positive differentiator, especially for higher-volume
                    customers managing complex accounts.
                  </p>
                  <p className="text-muted-foreground">
                    Responsible gambling infrastructure is both a legal requirement and an ethical indicator. All UKGC
                    licensees must provide deposit limits, reality checks, cooling-off periods, and self-exclusion
                    integrated with GamStop. We specifically assess how prominently these tools are surfaced — buried
                    settings pages are treated as a negative signal. Our standard is that a customer seeking to limit
                    their gambling should reach the relevant controls within two clicks.
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="mt-4 p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-4 h-[2px] bg-accent" />
                    <span className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">Our Verdict</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
                    Ready to Find Your Elite Bookmaker?
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed max-w-2xl">
                    Browse our independently ranked list above. Every bookmaker featured on EliteBettingSitesUK.com
                    has passed our full editorial evaluation — no paid placements, no inflated ratings, no commercial
                    bias in our scores.
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Gambling should remain recreational. Only ever bet amounts you are fully comfortable losing.
                    BeGambleAware.org | GamCare.org.uk | GamStop.co.uk
                  </p>
                </div>

              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="faq-section">
          <FaqSection />
        </div>

      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
