

# YesColab SRE Landing Page — Precision Site

Converting the trifold brochure into a modern, minimalist single-page website following the YesColab aesthetic: high-contrast typography, expansive whitespace, monochrome palette, no decoration.

## Structure (Top → Bottom)

### 1. Hero (Full Screen)
- Massive display type: **"Platform Stability & Growth"**
- Subtitle: "SRE & Infrastructure Services for Revenue-Critical Platforms"
- Tagline: "Uptime is revenue. We protect both."
- Minimal nav: logo top-left, "Contact" top-right
- Trusted-by tags: Entertainment, Betting & Gaming, Streaming, Marketplaces

### 2. Problem Section — "Downtime Is Expensive"
- Two-column layout: sticky header left, scrolling content right
- Revenue loss stats ($5k–50k/min), broken campaigns, reputational damage
- "Yet many platforms run with..." list (no monitoring, unknown risks, etc.)

### 3. Pain Points Grid — "Does This Sound Familiar?"
- 4-card grid (no borders, shadow-only depth):
  - Revenue Loss, Hidden Costs, Performance Problems, Security Risks
- Each with bullet points from the brochure
- Numbered labels (01–04) with monospace utility text

### 4. Case Study
- Large quote-style layout
- "Adult Streaming Platform — 2M+ monthly users"
- Before/after metrics: 97.9%→99.6% uptime, –28% costs, –70% incidents
- "$250k+ annual revenue protected" as highlighted stat

### 5. Service Packages — 3-Column Grid
- **Rescue** (Fix instability fast) — one-time
- **Stabilize** (Predictable operations) — ongoing
- **Scale** (Architecture for growth) — project-based
- Each with deliverables list and result statement
- Subtle card hover lift animation

### 6. Free Stability Audit CTA
- "Every engagement begins with a FREE Stability Audit"
- "3–7 business days" + what we assess list
- Large-target email CTA

### 7. Footer / Contact
- hello@yescolab.com, yescolab.com, @yescolab Telegram
- NDA on first call, discretion standard, crypto billing available
- "Response time: within 24 hours"

## Design System
- **Colors**: White background, Zinc-950 text, Zinc-500 muted, no colored backgrounds
- **Typography**: Geist Sans / Inter, tight tracking on headings, monospace for labels
- **Animations**: Framer Motion `whileInView` with staggered children, studio easing
- **Cards**: Shadow-only (no borders), subtle hover lift
- **Layout**: 12-column grid, flush-left text, max-w-[60ch] for body

