export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    score: 9.8,
    bonus: "Get £30 Free Bets",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com",
    reviews: 6244,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    score: 9.6,
    bonus: "Only £5 to Claim £30 Welcome Bonus",
    features: ["Live Betting", "Cash Out", "Best Odds"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://sports.ladbrokes.com/",
    reviews: 6831,
  },
  {
    id: "betfred",
    name: "BetFred",
    logo: "/betfred.webp",
    score: 9.4,
    bonus: "Get £50 Free Bets",
    features: ["Fast Payouts", "Best Odds", "Live Streaming"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com",
    reviews: 5782,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    score: 9.3,
    bonus: "Get £30 in Free Bets",
    features: ["Esports Focus", "Modern Interface", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 4158,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    score: 9.2,
    bonus: "£40 Welcome Offer",
    features: ["UK Presence", "Football Specials", "Local Support"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.boylesports.com",
    reviews: 2937,
  },
]
