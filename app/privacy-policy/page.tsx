import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | EliteBettingSitesUK.com",
  description:
    "Read our Privacy Policy to understand how EliteBettingSitesUK.com collects, processes, and protects your personal data in compliance with UK GDPR and the Data Protection Act 2018.",
}

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                <strong className="text-foreground">EliteBettingSitesUK.com</strong> is committed to protecting and
                respecting your privacy. This Privacy Policy sets out the basis on which any personal data we collect
                from you, or that you provide to us, will be processed by us. Please read the following carefully. Our
                practices comply with UK GDPR and the Data Protection Act 2018.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  1. Data We Collect
                </h2>
                <p className="mb-3 text-muted-foreground">We may collect and process the following categories of personal data:</p>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Contact and Identity Data",
                      desc: "Name and email address provided voluntarily when you contact us or subscribe to our newsletter.",
                    },
                    {
                      title: "Usage and Technical Data",
                      desc: "IP address, browser type, operating system, referring URLs, pages visited, time on site, and device identifiers — collected automatically via our analytics infrastructure.",
                    },
                    {
                      title: "Cookie and Tracking Data",
                      desc: "Preferences and interaction data stored via cookies and similar technologies. See our Cookie Policy for full detail.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <span><strong className="text-foreground">{item.title}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  2. How We Use Your Data
                </h2>
                <ul className="space-y-2">
                  {[
                    "Operating and maintaining our website infrastructure",
                    "Improving and personalising site content and user experience",
                    "Responding to enquiries, feedback, and support requests",
                    "Sending newsletters and updates where you have given explicit consent",
                    "Analysing usage patterns to refine editorial content",
                    "Detecting and preventing fraud, security threats, or technical abuse",
                    "Complying with applicable UK legal and regulatory obligations",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  3. Legal Basis for Processing
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      basis: "Consent",
                      desc: "Where you have given explicit permission, such as subscribing to our newsletter or accepting non-essential cookies.",
                    },
                    {
                      basis: "Legitimate Interests",
                      desc: "Where processing is necessary for our editorial and commercial operations, provided your fundamental rights are not overridden.",
                    },
                    {
                      basis: "Legal Obligation",
                      desc: "Where we must process data to comply with applicable UK law or respond to lawful regulatory requests.",
                    },
                  ].map((item) => (
                    <div key={item.basis} className="bg-card border border-border p-4 rounded-lg shadow-sm">
                      <strong className="text-foreground text-sm">{item.basis}:</strong>{" "}
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="mb-3 text-muted-foreground">
                  We do not sell, trade, or rent your personal data to third parties. We may share data only in the
                  following limited circumstances:
                </p>
                <ul className="space-y-2">
                  {[
                    "Trusted service providers who assist with website hosting, analytics, and email distribution — all bound by strict data processing agreements",
                    "Regulatory or law enforcement authorities where legally required",
                    "Successor entities in the event of a merger or acquisition, subject to equivalent privacy protections",
                    "Where necessary to prevent fraud, protect our legal rights, or ensure site security",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organisational measures to protect your personal data against
                  unauthorised access, accidental loss, destruction, or disclosure. These include SSL/TLS encryption,
                  restricted access controls, and regular security assessments. No transmission over the internet is
                  completely secure; we cannot guarantee absolute security but we take our obligations seriously.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  6. Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain personal data only for as long as is necessary to fulfil the purposes set out in this
                  policy, or as required by applicable law. When data is no longer required, it is securely deleted
                  or anonymised in accordance with our data retention schedule.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  7. Your Rights Under UK GDPR
                </h2>
                <p className="mb-3 text-muted-foreground">You have the following rights in respect of your personal data:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { right: "Right of Access", desc: "Request a copy of the data we hold about you" },
                    { right: "Right to Rectification", desc: "Correct inaccurate or incomplete data" },
                    { right: "Right to Erasure", desc: "Request deletion of your personal data" },
                    { right: "Right to Restrict Processing", desc: "Limit how we use your data" },
                    { right: "Right to Data Portability", desc: "Receive your data in a portable format" },
                    { right: "Right to Object", desc: "Object to processing for marketing or legitimate interests" },
                  ].map((item) => (
                    <div key={item.right} className="bg-card border border-border p-3.5 rounded-lg shadow-sm hover:border-accent/40 transition-colors duration-200">
                      <strong className="text-foreground text-xs block mb-1">{item.right}</strong>
                      <span className="text-muted-foreground text-xs">{item.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:privacy@elitebettingsitesuk.com"
                    className="text-accent hover:underline font-medium">privacy@elitebettingsitesuk.com</a>.
                  We will respond within one calendar month as required by UK GDPR.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  8. Third-Party Links
                </h2>
                <p className="text-muted-foreground">
                  Our site contains links to external bookmaker websites and third-party services. We are not
                  responsible for the privacy practices of those sites. We recommend reviewing their privacy policies
                  before submitting any personal information.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  9. Age Restriction
                </h2>
                <p className="text-muted-foreground">
                  This website is intended exclusively for adults aged 18 and over. We do not knowingly collect
                  personal data from anyone under 18. If you believe we have inadvertently collected data from a
                  minor, please contact us immediately so we can take appropriate action.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-bebas)] tracking-wide border-l-4 border-accent pl-4">
                  10. Policy Updates
                </h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy to reflect changes in our practices or legal obligations. The
                  &quot;Last updated&quot; date at the top of this page will be revised accordingly. Continued use of our site
                  following any update constitutes acceptance of the revised policy.
                </p>
              </div>

              {/* Section 11 — Contact */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg border-l-4 border-accent">
                <h2 className="text-xl font-bold mb-3 font-[family-name:var(--font-bebas)] tracking-wide text-primary-foreground">
                  11. Contact and Complaints
                </h2>
                <p className="mb-3 text-primary-foreground/80">
                  For privacy-related enquiries or to exercise your data rights:
                </p>
                <p className="text-primary-foreground/80">
                  <strong className="text-primary-foreground">Email:</strong>{" "}
                  <a href="mailto:privacy@elitebettingsitesuk.com"
                    className="text-accent hover:underline font-medium">privacy@elitebettingsitesuk.com</a>
                </p>
                <p className="mt-3 text-primary-foreground/70">
                  You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)
                  at{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium">ico.org.uk</a>{" "}
                  if you believe your data rights have not been respected.
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
