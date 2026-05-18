import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | EliteBettingSitesUK.com — Independent UK Bookmaker Reviews",
  description:
    "Learn about EliteBettingSitesUK.com's editorial methodology, review criteria, and commitment to independent, rigorous UK bookmaker analysis.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-[59px] bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />
        <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-accent" />
              <span className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">About</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-bebas)] tracking-wide text-balance text-primary-foreground">
              About <span className="text-accent">EliteBettingSitesUK.com</span>
            </h1>
            <p className="text-base text-primary-foreground/70 max-w-2xl leading-relaxed">
              An independent editorial platform dedicated to rigorous UK bookmaker analysis — no paid placements,
              no inflated scores, no commercial bias in our rankings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-foreground leading-relaxed text-sm space-y-10">

            {/* Mission */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                Our Mission
              </h2>
              <p className="mb-3 text-muted-foreground">
                EliteBettingSitesUK.com exists as a reference point for UK punters who want accurate, independently
                assessed information before choosing a bookmaker. We do not accept payment to feature or rank
                operators — every position in our list is earned through performance against our published evaluation
                criteria.
              </p>
              <p className="text-muted-foreground">
                Whether you bet on Premier League football, Cheltenham Festival racing, test match cricket, or
                international rugby, our platform provides the comparative intelligence to identify bookmakers that
                genuinely deliver on odds, payments, customer service, and long-term value.
              </p>
            </div>

            {/* Four pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "UKGC Licensed Only",
                  body: "Every operator we feature holds an active UK Gambling Commission licence. We verify this independently before publication and re-check on a rolling basis.",
                },
                {
                  title: "UK Punter Focused",
                  body: "We evaluate bookmakers specifically for UK customers — GBP accounts, UK payment methods, UK-based support, and compliance with UKGC standards.",
                },
                {
                  title: "Hands-On Testing",
                  body: "Our analysts create accounts, place real bets, test withdrawals, and contact customer support at each operator we review. No armchair assessments.",
                },
                {
                  title: "Verified Bonuses",
                  body: "We read the full terms of every bonus we list. Our summaries reflect realistic value, not marketing copy — including wagering requirements and withdrawal caps.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border p-5 rounded-lg hover:border-accent/40 hover:shadow-sm transition-all duration-200"
                >
                  <h3 className="text-foreground font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                Our Review Methodology
              </h2>
              <p className="mb-4 text-muted-foreground">
                Each bookmaker is assessed against eight core dimensions. Scores are weighted by their impact on the
                typical UK bettor&apos;s experience, with licensing and security carrying the highest weight:
              </p>
              <ul className="space-y-2">
                {[
                  "Licensing & Security — UKGC verification, SSL encryption, and fund segregation policy",
                  "Welcome Bonus — Net realisable value after wagering requirements and typical usage patterns",
                  "Sports Coverage — Market depth for football, horse racing, cricket, rugby, and niche sports",
                  "Odds Quality — Price competitiveness benchmarked across major markets on a rolling basis",
                  "Payment Methods — UK-friendly options, deposit/withdrawal speed, and fee transparency",
                  "Mobile Platform — App performance under live-event load, UX quality, and feature parity",
                  "Customer Support — Response time, knowledge quality, and availability across channels",
                  "Responsible Gambling — Prominence and ease of access to deposit limits, exclusion, and support links",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core values */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                Editorial Standards
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Transparency",
                    body: "Our scoring criteria and ranking methodology are documented and publicly accessible. You should always be able to understand why a bookmaker holds its position.",
                  },
                  {
                    title: "Editorial Independence",
                    body: "Commercial partnerships with bookmakers fund our operations but do not influence rankings. Our analysts are not made aware of affiliate commission rates when writing reviews.",
                  },
                  {
                    title: "Continuous Updates",
                    body: "Rankings are reviewed following major platform changes, regulatory actions, and periodic re-testing cycles. We do not allow stale reviews to accumulate.",
                  },
                  {
                    title: "Responsible Gambling Advocacy",
                    body: "We integrate responsible gambling information throughout the site — not confined to a single footer disclaimer. Links to GamCare, BeGambleAware, and GamStop are surfaced in context.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-border pl-4">
                    <strong className="text-foreground block mb-1">{item.title}</strong>
                    <p className="text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How funded */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                How We Are Funded
              </h2>
              <p className="mb-3 text-muted-foreground">
                EliteBettingSitesUK.com operates free of charge for users. We receive affiliate commissions when
                visitors register at featured bookmakers through our links. This model allows us to provide
                comprehensive betting analysis without subscription fees.
              </p>
              <p className="text-muted-foreground">
                These commercial arrangements do not determine rankings. Our review scores reflect platform quality
                alone. We regularly rank newer or independent operators above major household names where the
                evidence supports doing so.
              </p>
            </div>

            {/* Commitment box */}
            <div className="bg-primary text-primary-foreground border-l-4 border-accent p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-bebas)] tracking-wide text-primary-foreground">
                Our Commitment
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                EliteBettingSitesUK.com is committed to being the most reliable, methodologically rigorous UK
                bookmaker comparison resource available. We hold ourselves to the same standards of transparency and
                accuracy that we expect from the operators we review. If you believe a review is inaccurate or
                outdated, please contact us — we treat every credible challenge to our ratings seriously.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
