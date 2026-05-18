"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How does EliteBettingSitesUK select and rank bookmakers?",
      answer:
        "Our editorial team applies a structured, multi-factor evaluation framework to every bookmaker we review. We assess UKGC licensing status, security infrastructure, bonus terms and net value, odds competitiveness across major markets, payment method availability and withdrawal speed, mobile platform quality, customer support responsiveness, and responsible gambling tools. Rankings are determined entirely by platform quality — no operator can pay to improve their position.",
    },
    {
      id: "faq-2",
      question: "Are all listed betting sites legal and safe for UK customers?",
      answer:
        "Yes, without exception. Every operator featured on EliteBettingSitesUK.com holds a current, active UK Gambling Commission licence. We verify licensing status independently before publishing any review. UKGC-licensed operators are required by law to segregate customer funds, implement approved responsible gambling measures, and undergo regular regulatory audits — providing strong legal protection as a UK bettor.",
    },
    {
      id: "faq-3",
      question: "What types of welcome bonuses do UK bookmakers offer?",
      answer:
        "UK bookmakers typically offer matched free bets (e.g. Bet £10, Get £30), risk-free first bets, enhanced odds on specified events, or deposit bonuses with qualifying conditions. Our reviews examine each offer in detail — including wagering requirements, minimum odds restrictions, eligible markets, time limits, and maximum withdrawal caps. We rate offers on realistic net value, not headline figures, so you can make genuinely informed decisions.",
    },
    {
      id: "faq-4",
      question: "What is the step-by-step process to claim a betting bonus?",
      answer:
        "The typical process is: (1) Click the dedicated link from our site to the bookmaker — this ensures you access the correct offer. (2) Complete the registration form with accurate personal details. (3) Make a qualifying deposit using an eligible payment method above the minimum threshold. (4) Place a qualifying bet meeting the minimum odds and stake requirements specified in the T&Cs. Some bonuses credit automatically upon qualifying; others require a promo code entered during sign-up. Always read the full terms before depositing.",
    },
    {
      id: "faq-5",
      question: "Which payment methods are accepted at UK betting sites?",
      answer:
        "Standard payment methods at UK-licensed bookmakers include Visa and Mastercard debit cards, PayPal, Skrill, Neteller, bank transfers, and prepaid options such as Paysafecard. Apple Pay and Google Pay are increasingly accepted. Note that credit card deposits for gambling have been prohibited in the UK since April 2020. Deposits are typically instant; withdrawals process within 1–3 business days for debit cards and often within hours for e-wallets.",
    },
    {
      id: "faq-6",
      question: "Is mobile betting available at all recommended sites?",
      answer:
        "Yes. Every bookmaker we recommend provides a fully functional mobile betting experience, whether through a dedicated iOS or Android application or a responsive mobile website. Our reviews specifically evaluate mobile app performance during live events, in-play odds reliability, bet-builder functionality, and cash-out responsiveness. We only feature bookmakers whose mobile product meets the same standard as their desktop platform.",
    },
    {
      id: "faq-7",
      question: "What authority does the UK Gambling Commission have?",
      answer:
        "The UK Gambling Commission is the statutory body responsible for licensing and regulating commercial gambling in Great Britain. All operators serving UK customers must hold a valid UKGC licence and comply with its Licence Conditions and Codes of Practice (LCCP). The UKGC can impose fines, suspend or revoke licences, and refer cases for criminal prosecution. It is one of the most rigorously enforced regulatory frameworks globally, making a UKGC licence the most important credential to verify before depositing.",
    },
    {
      id: "faq-8",
      question: "What responsible gambling tools and resources are available?",
      answer:
        "All UKGC-licensed bookmakers are legally required to offer: deposit limits, wagering limits, loss limits, session time limits, reality check reminders, temporary cooling-off periods, and self-exclusion options. Self-exclusion can also be applied across all UK-licensed sites simultaneously via GamStop (gamstop.co.uk). For independent support, contact BeGambleAware (begambleaware.org, 0808 8020 133), GamCare (gamcare.org.uk), or Gambling Therapy (gamblingtherapy.org). If gambling is causing you harm, please seek help immediately.",
    },
  ]

  return (
    <section className="py-14 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-accent" />
            <span className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed text-sm">
            Answers to the most common questions about UK online betting, bonus mechanics, payment methods, and regulatory protection.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-border rounded-lg px-6 bg-card hover:border-accent/40 transition-all duration-200 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold py-5 hover:text-accent transition-colors duration-200 text-foreground text-sm leading-snug">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
