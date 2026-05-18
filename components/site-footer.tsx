import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      {/* Top section */}
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-primary-foreground/10 pb-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              {/* Shield logo mark — matches header exactly */}
              <div className="w-9 h-9 flex-shrink-0">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2L36 10V22C36 30.5 29 37.5 20 40C11 37.5 4 30.5 4 22V10L20 2Z" fill="hsl(var(--primary))"/>
                  <path d="M20 6L32 12.5V22C32 28.5 26.5 34.2 20 36.5C13.5 34.2 8 28.5 8 22V12.5L20 6Z" fill="hsl(var(--primary))" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.6"/>
                  <path d="M20 10L21.5 15H27L22.5 18L24 23L20 20L16 23L17.5 18L13 15H18.5L20 10Z" fill="hsl(var(--accent))"/>
                  <rect x="15" y="25" width="10" height="1.5" rx="0.75" fill="hsl(var(--accent))" opacity="0.9"/>
                  <rect x="15" y="28" width="7" height="1.5" rx="0.75" fill="hsl(var(--accent))" opacity="0.7"/>
                </svg>
              </div>
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[17px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-primary-foreground group-hover:text-accent transition-colors duration-300 leading-none">ELITE</span>
                <span className="text-[17px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-accent leading-none">BETTING</span>
                <span className="text-[17px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-primary-foreground leading-none">SITES</span>
                <span className="text-[17px] font-[family-name:var(--font-bebas)] tracking-[0.1em] text-primary-foreground/70 leading-none">UK</span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              The UK&apos;s most rigorous independent betting comparison platform. We evaluate every UKGC-licensed
              bookmaker to deliver unbiased rankings, verified bonuses, and authoritative analysis for discerning UK punters.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold mb-5 text-accent font-[family-name:var(--font-bebas)] tracking-[0.2em] uppercase">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/cookie-policy", label: "Cookie Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-accent/40 group-hover:w-4 group-hover:bg-accent transition-all duration-200 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-bold mb-5 text-accent font-[family-name:var(--font-bebas)] tracking-[0.2em] uppercase text-center">
              Responsible Gambling
            </h3>
            <div className="bg-primary-foreground/[0.06] border border-primary-foreground/10 p-4 rounded-md mb-4">
              <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
                All listed operators hold valid UK Gambling Commission licences. Gambling is strictly prohibited for
                persons under 18. If gambling is affecting your life, please seek support immediately.
              </p>
            </div>
            <p className="text-xs text-primary-foreground/40 text-center">
              GamCare: 0808 8020 133 &nbsp;|&nbsp; BeGambleAware.org &nbsp;|&nbsp; GamStop.co.uk
            </p>
          </div>
        </div>
      </div>

      {/* Logos bar */}
      <div className="border-b border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { href: "https://www.begambleaware.org/", src: "/gamble-aware.png", alt: "BeGambleAware", width: 90 },
              { href: "https://www.gamcare.org.uk/", src: "/gamcare.png", alt: "GamCare", width: 90 },
              { href: "https://www.gamblingtherapy.org/", src: "/gordon.png", alt: "Gambling Therapy", width: 90 },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", width: 90 },
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop", width: 90 },
            ].map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={32} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-6 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h4 className="text-accent text-xs font-bold text-center mb-3 font-[family-name:var(--font-bebas)] tracking-[0.2em] uppercase">
            Important Disclaimer
          </h4>
          <div className="space-y-3 text-[11px] text-primary-foreground/50 leading-relaxed">
            <p className="text-center">
              <strong className="text-primary-foreground/80">Elite Betting Sites UK</strong> is an independent comparison
              service. We may receive affiliate commission when you register through our links. All featured bookmakers
              hold valid UK Gambling Commission licences.
            </p>
            <div className="grid md:grid-cols-4 gap-2 mt-4">
              {[
                { title: "UKGC Licensed", body: "Only UK-regulated operators featured" },
                { title: "18+ Only", body: "Gambling is illegal for minors" },
                { title: "T&Cs Apply", body: "Always read all bonus conditions" },
                { title: "Bet Responsibly", body: "Gambling can be addictive" },
              ].map((item) => (
                <div key={item.title} className="bg-primary-foreground/[0.05] border-l-2 border-accent/50 p-2.5 rounded-sm">
                  <h5 className="text-primary-foreground/80 font-semibold mb-0.5 text-[10px] uppercase tracking-wide">{item.title}</h5>
                  <p className="text-[10px] text-primary-foreground/40">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[11px] text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Elite Betting Sites UK. All rights reserved.
            </p>
            <p className="text-[11px] text-primary-foreground/40">
              When the fun stops,{" "}
              <span className="text-accent font-semibold">STOP.</span>
              {" "}BeGambleAware.org &bull; GamCare.org.uk
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
