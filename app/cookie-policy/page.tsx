import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | EliteBettingSitesUK.com",
  description:
    "Learn how EliteBettingSitesUK.com uses cookies and similar technologies, your rights under PECR and UK GDPR, and how to manage your preferences.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[59px] bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />
        <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-accent" />
              <span className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide">
              Cookie Policy
            </h1>
            <p className="text-primary-foreground/60 text-sm">Last updated: 2026</p>
          </div>
        </div>
      </section>

      <section className="py-14 flex-grow border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10 text-foreground leading-relaxed text-sm">

              <p className="text-muted-foreground">
                This Cookie Policy explains how <strong className="text-foreground">EliteBettingSitesUK.com</strong> uses
                cookies and similar tracking technologies when you visit our website. It describes what these technologies
                are, the purposes for which we deploy them, and your rights to control their use — in full compliance with
                the UK&apos;s Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that a website places on your device when you visit. They serve a range
                  of functions: maintaining session state, storing preferences, enabling analytics, and facilitating
                  advertising targeting. Cookies may be set by us directly (first-party) or by third-party services
                  we have integrated into our site.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  2. Categories of Cookies We Use
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "2.1 Strictly Necessary Cookies",
                      body: "These cookies are essential for the website to function. They enable core functionality such as security, cookie consent state management, and form submissions. They cannot be disabled. No personally identifiable information is stored in these cookies.",
                    },
                    {
                      title: "2.2 Performance and Analytics Cookies",
                      body: "These cookies collect anonymous, aggregated data about how visitors use our site — pages visited, time on page, traffic sources, and device types. This information helps us identify content that performs well, diagnose technical issues, and improve overall user experience. No individual user is identified through this data.",
                    },
                    {
                      title: "2.3 Functional Cookies",
                      body: "Functional cookies remember choices you make — such as region preferences or display settings — and personalise your experience accordingly. They may be set by us or by embedded third-party services. Declining these cookies may result in reduced functionality or less personalised content.",
                    },
                    {
                      title: "2.4 Targeting and Advertising Cookies",
                      body: "These cookies, deployed by our advertising partners, build a profile of your interests based on browsing activity in order to display relevant advertisements on other sites you visit. They identify your browser and device uniquely but do not store directly identifiable personal data. Declining these cookies does not eliminate advertising; it means advertisements will be generic rather than interest-based.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-card border border-border p-5 rounded-lg shadow-sm">
                      <h3 className="text-foreground font-semibold mb-2 text-sm">{item.title}</h3>
                      <p className="text-muted-foreground">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  3. First-Party vs Third-Party Cookies
                </h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">First-party cookies</strong> are set by EliteBettingSitesUK.com and
                  used exclusively for site functionality and performance analytics.
                </p>
                <p className="mt-3 text-muted-foreground">
                  <strong className="text-foreground">Third-party cookies</strong> are placed by external service providers
                  we use — including analytics platforms, social media widgets, and affiliate tracking systems. Each
                  third-party provider operates under its own privacy and cookie policies.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  4. Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "4.1 Via Our Consent Banner",
                      body: "On your first visit, our cookie consent banner allows you to accept all cookies or decline non-essential categories. You may update your preferences at any time by clearing your browser cookies and revisiting the site.",
                    },
                    {
                      title: "4.2 Via Your Browser Settings",
                      body: "All modern browsers allow you to view, block, and delete cookies through their privacy settings. Blocking all cookies may impair site functionality.",
                      link: { href: "https://www.allaboutcookies.org", label: "allaboutcookies.org" },
                    },
                    {
                      title: "4.3 Advertising Opt-Out",
                      body: "To opt out of interest-based advertising from participating networks, visit",
                      link: { href: "https://www.youronlinechoices.com/uk", label: "youronlinechoices.com/uk" },
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 className="text-foreground font-semibold mb-1.5 text-sm">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.body}{" "}
                        {item.link && (
                          <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                            className="text-accent hover:underline font-medium">
                            {item.link.label}
                          </a>
                        )}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  5. Third-Party Services
                </h2>
                <p className="mb-3 text-muted-foreground">We integrate the following trusted third-party services, each of which may set cookies:</p>
                <ul className="space-y-2">
                  {[
                    { name: "Google Analytics", desc: "Anonymous website traffic and performance analysis" },
                    { name: "Affiliate Tracking Platforms", desc: "Attribution of bookmaker referrals from our links" },
                    { name: "Advertising Networks", desc: "Interest-based advertising and campaign measurement" },
                    { name: "Social Media Widgets", desc: "Content sharing functionality and social proof elements" },
                  ].map((item) => (
                    <li key={item.name} className="flex gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">{item.name}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  6. Cookie Lifespan
                </h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Session cookies</strong> expire when you close your browser.{" "}
                  <strong className="text-foreground">Persistent cookies</strong> remain on your device for a defined period —
                  ranging from 30 days to 24 months depending on their purpose — or until you delete them manually. We
                  review cookie retention periods periodically to ensure they remain proportionate.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  7. Updates to This Policy
                </h2>
                <p className="text-muted-foreground">
                  We may revise this Cookie Policy to reflect changes in our practices, service providers, or
                  applicable legal requirements. The &quot;Last updated&quot; date at the top of this page indicates when material
                  changes were last made. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Section 8 — Contact */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg border-l-4 border-accent">
                <h2 className="text-xl font-bold mb-3 font-[family-name:var(--font-bebas)] tracking-wide text-primary-foreground">
                  8. Contact
                </h2>
                <p className="text-primary-foreground/80">
                  For questions about our cookie practices or to exercise any of your rights under PECR or UK GDPR,
                  please contact us at:{" "}
                  <a href="mailto:cookies@elitebettingsitesuk.com"
                    className="text-accent hover:underline font-medium">
                    cookies@elitebettingsitesuk.com
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
