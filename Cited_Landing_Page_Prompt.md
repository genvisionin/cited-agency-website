# Cited — Landing Page Build Prompt
## Complete Content, Structure & Design System Specification

---

## INSTRUCTION TO AI MODEL

Build a single-page landing website for **Cited** (cited.agency), a GEO (Generative Engine Optimisation) agency that helps UK local businesses get recommended by AI platforms — ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude.

The site must be built with **Next.js + Tailwind CSS + shadcn/ui**. It is a single landing page with smooth scroll sections, a contact form, and a sticky navbar. No blog, no subpages. One page, one goal: get the visitor to fill the contact form.

---

## DESIGN SYSTEM

### Brand Identity
- **Agency Name:** Cited
- **Tagline:** Get recommended by AI.
- **Domain:** cited.agency

### Color Palette
- **Primary:** `#0F3D3E` — a deep teal-green. Conveys trust, authority, and modernity without the cliché blue of every other agency. Use for headings, CTA buttons, nav accents.
- **Secondary:** `#F97316` — a warm amber/orange. Use sparingly for highlights, hover states, badges, and accent elements. Creates energy against the teal.
- **Background:** `#FAFAF9` — warm off-white / stone white. NOT pure white. Soft, easy on the eyes.
- **Surface/Card:** `#FFFFFF` — true white for cards and elevated sections against the off-white background.
- **Text Primary:** `#1A1A1A` — near-black for body text.
- **Text Secondary:** `#6B7280` — muted grey for supporting text and captions.
- **Border/Divider:** `#E5E5E5` — subtle, clean.

### Typography
- **Display / Headings:** `"General Sans"` from Fontshare (or fallback `"Satoshi"` from Fontshare). Semi-bold (600) and Bold (700). Modern geometric sans with personality — NOT Inter, NOT Roboto, NOT Arial.
- **Body:** `"Inter"` at 400/500 weight for body text readability, since the headings carry the character.
- **Monospace accent (optional):** `"JetBrains Mono"` for any code-like UI elements, stats, or badge labels.

### Font Sizes (Tailwind)
- Hero headline: `text-5xl md:text-7xl` — large, commanding.
- Section headings: `text-3xl md:text-4xl`
- Sub-headings: `text-xl md:text-2xl`
- Body: `text-base` (16px) with `leading-relaxed`
- Small/Caption: `text-sm`

### Spacing & Layout
- Max content width: `max-w-6xl` centered.
- Section padding: `py-20 md:py-28` — generous vertical breathing room.
- Consistent `px-6 md:px-8` horizontal padding.
- Cards use `rounded-2xl` with subtle `shadow-sm` or `shadow-md`. No harsh borders.

### Animations & Motion
- Use `framer-motion` (or the Motion library for React).
- Page load: staggered fade-up reveals for hero elements (headline → subheadline → CTA → social proof) with 0.15s delays between each.
- Scroll-triggered section reveals: elements fade-up with `y: 30` on viewport entry.
- CTA buttons: subtle scale on hover (`scale(1.02)`), background color transition 200ms.
- Stats/numbers: count-up animation when they scroll into view.
- Keep it smooth and restrained — this is a professional agency, not a portfolio showcase. No bouncing, no spinning, no parallax overkill.

### UI Components (shadcn/ui)
- Use shadcn `Button`, `Input`, `Textarea`, `Card`, `Badge`, `Separator`, `Sheet` (for mobile nav).
- CTA buttons: filled primary (`bg-[#0F3D3E] text-white`), rounded-full or rounded-xl, medium padding.
- Secondary buttons: outline style with primary border color.

### Icons
- Use `lucide-react` icons throughout.
- Relevant icons: `Search`, `Eye`, `TrendingUp`, `CheckCircle`, `ArrowRight`, `MapPin`, `Star`, `BarChart3`, `Globe`, `Zap`, `Shield`, `MessageSquare`.

---

## PAGE STRUCTURE & CONTENT

The page has **9 sections** in this exact order. All copy is final — use it verbatim.

---

### SECTION 1 — NAVBAR (Sticky)

**Layout:** Sticky top navbar, transparent on hero → white with shadow on scroll. Logo left, nav links center, CTA button right. Mobile: hamburger → sheet/drawer.

**Logo:** The word "Cited" in the display font (General Sans Bold), primary color. A small dot/period after it in the secondary amber color. Like: **Cited.**

**Nav links:**
- How It Works
- What You Get
- Why Now
- Pricing
- Contact

**CTA Button (nav):** "Get Your Free Audit" → scrolls to the contact form section.

---

### SECTION 2 — HERO

**Layout:** Full viewport height on desktop. Centered content. Clean, spacious, high-impact. No background image — let the typography and spacing do the work. Optionally a very subtle dot-grid or noise texture on the background for depth.

**Eyebrow badge** (small pill/badge above headline):
> AI Visibility Agency for UK Businesses

**Headline** (display font, large):
> Your customers are asking AI where to go.
> Are you the answer?

**Sub-headline** (body font, muted text, max-w-2xl):
> When someone asks ChatGPT, Perplexity, or Google AI for the best [dentist / restaurant / gym] in their city — a few businesses get named. Everyone else is invisible. Cited makes sure you're the one they recommend.

**Primary CTA button:**
> Get Your Free AI Visibility Audit →

**Secondary CTA (text link below):**
> See how it works ↓

**Social proof strip below CTAs** (small text + logos/icons, muted):
> Helping UK businesses get found on ChatGPT · Perplexity · Google AI · Gemini · Claude

Display the five platform names with small recognisable icons or simple text pills.

---

### SECTION 3 — THE PROBLEM (Storytelling)

**Layout:** Two-column on desktop. Left column: text. Right column: a styled mock-up of a ChatGPT-style conversation UI showing an AI recommending competitors but NOT showing the visitor's business. This mock-up should look realistic — dark mode chat bubble style, with a user prompt and an AI response listing 3 businesses. Make it look real but clearly stylised.

**Section label** (small, uppercase, muted, tracking-wide):
> THE SHIFT

**Headline:**
> Search has changed. Most businesses haven't noticed.

**Body copy** (2-3 short paragraphs, body font):

> Your customers aren't Googling like they used to. They're opening ChatGPT and asking: *"What's the best dental clinic near the university?"* or *"Where should I eat in the city centre tonight?"*

> The AI doesn't show ten links. It recommends two or three businesses by name. Those businesses get the call. Everyone else doesn't exist to that customer.

> Here's the uncomfortable part: years of Google SEO don't help here. AI platforms pull from different signals — structured data, business consistency, authoritative mentions, and content written in formats that AI can actually extract. Most local business websites aren't built that way.

**Pull quote / highlighted stat** (large text, primary color):
> 60% of Google searches now result in zero clicks. Your customers are getting answers without ever visiting your website.

---

### SECTION 4 — HOW IT WORKS

**Layout:** Three-step horizontal cards on desktop, stacked on mobile. Each card has a number (01, 02, 03), a heading, a short description, and a lucide icon.

**Section label:**
> HOW IT WORKS

**Headline:**
> From invisible to recommended. Here's the process.

**Step 01 — Audit**
- Icon: `Search`
- Heading: We audit your AI visibility
- Body: We search for your business across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. You'll see exactly where you show up — and where you don't. Most businesses are shocked by the results.

**Step 02 — Optimise**
- Icon: `Zap`
- Heading: We rebuild your digital signals
- Body: We fix your structured data, optimise your Google Business Profile, rewrite your content in formats AI can extract, and build authoritative citations that AI trusts. This is the technical work that moves the needle.

**Step 03 — Track**
- Icon: `BarChart3`
- Heading: We measure and grow your presence
- Body: Every month you get a clear report showing which AI platforms mention you, how your visibility score is changing, and how you compare to competitors. No vanity metrics — just whether AI recommends you or not.

---

### SECTION 5 — WHAT YOU GET (Services Detail)

**Layout:** Two-column grid of cards (2×3 on desktop, stacked on mobile). Each card has an icon, a bold heading, and 2-3 sentences. Cards are white with subtle shadow on the off-white background.

**Section label:**
> WHAT YOU GET

**Headline:**
> Everything your business needs to show up in AI search.

**Card 1 — AI Visibility Audit**
- Icon: `Eye`
- We test your business across every major AI platform and deliver a detailed report with screenshots. You'll see exactly what AI says about you — if it says anything at all.

**Card 2 — Google Business Profile Optimisation**
- Icon: `MapPin`
- Your Google Business Profile is one of the strongest signals AI uses. We audit and fully optimise it — categories, attributes, photos, posts, Q&A, and review strategy.

**Card 3 — Structured Data & Schema**
- Icon: `Globe`
- We implement LocalBusiness JSON-LD schema on your website so AI platforms can read your business information accurately. This is the technical foundation most local businesses are missing.

**Card 4 — Content Rewriting for AI**
- Icon: `MessageSquare`
- We rewrite your service pages and create FAQ content in the Q&A format that AI platforms extract and cite. Your website starts speaking the language AI understands.

**Card 5 — Citation & Authority Building**
- Icon: `Shield`
- We build consistent mentions of your business across authoritative directories, local sources, and industry platforms. More trusted mentions = higher AI confidence in recommending you.

**Card 6 — Monthly Reporting & Growth**
- Icon: `TrendingUp`
- Every month you receive a clear report: which platforms mention you, your visibility score progression, and competitor comparison. We track what matters — are you getting recommended or not.

---

### SECTION 6 — WHY NOW (Urgency Section)

**Layout:** Dark section. Background `#0F3D3E` (primary teal), white text. Creates visual contrast and emphasises urgency. A few stats displayed as large count-up numbers.

**Section label:**
> WHY NOW

**Headline:**
> The businesses that move first will be impossible to displace.

**Body copy:**
> AI trust signals compound over time. The businesses that build their AI presence now will hold those positions for years — just like the businesses that invested in Google SEO in 2006 dominated for a decade. Except this time, most of your competitors haven't even heard of it yet.

**Three stats in a row (large display numbers, amber accent):**

| Stat | Label |
|---|---|
| 30% | of UK consumers now use AI to research before buying |
| 60% | of Google searches end without a single click |
| <10% | of UK businesses have any AI visibility strategy |

**Closing line (italic or slightly smaller):**
> The window is open now. It won't stay open.

---

### SECTION 7 — PRICING

**Layout:** Three pricing cards side-by-side on desktop. The middle card ("Growth") is slightly elevated or has a "Most Popular" badge in amber. Cards are white on the off-white background with rounded corners and shadow.

**Section label:**
> PRICING

**Headline:**
> Simple pricing. Real results.

**Important note displayed subtly below headline:**
> Every engagement starts with a free AI visibility audit — no commitment required.

---

**Card 1 — One-Time Audit**
- Price: **£500** (one-time)
- Description: See exactly where you stand.
- Includes:
  - Full AI visibility audit across 5 platforms
  - Competitor comparison report
  - Detailed action plan with priorities
  - Screenshots of every AI mention (or absence)
- CTA button: "Book Your Audit" → scrolls to contact form
- Best for: Business owners who want to understand the landscape before committing.

**Card 2 — Starter**
- Price: **£300/month**
- Description: Build your AI foundation.
- Includes:
  - Everything in the One-Time Audit
  - Google Business Profile optimisation
  - Schema markup implementation
  - NAP consistency correction (15+ directories)
  - Monthly AI visibility report
- CTA button: "Get Started" → scrolls to contact form

**Card 3 — Growth** ← flagged as "Most Popular"
- Price: **£500/month**
- Description: Full AI visibility engine.
- Includes:
  - Everything in Starter
  - Service page rewrites for AI extraction
  - Dedicated FAQ page targeting AI queries
  - Monthly citation building
  - Competitor tracking & comparison
  - E-E-A-T signal improvements
- CTA button: "Get Started" → scrolls to contact form

---

### SECTION 8 — FAQ

**Layout:** Accordion / collapsible list. Clean, simple. Max-width `max-w-3xl` centered. Use shadcn `Accordion` component.

**Section label:**
> QUESTIONS

**Headline:**
> You're probably wondering...

**Q1: What is GEO and how is it different from SEO?**
> SEO gets you ranked on Google's link results. GEO (Generative Engine Optimisation) gets you recommended by AI platforms like ChatGPT, Perplexity, and Google AI Overviews — when they answer questions directly instead of showing links. Different platforms, different signals, different strategy.

**Q2: I already rank well on Google. Isn't that enough?**
> Google rankings and AI recommendations are built on different signals. We've audited businesses that rank #1 on Google but don't appear in a single AI recommendation. As more searches move to AI, being invisible there means losing customers you'd never even know about.

**Q3: How quickly will I see results?**
> Foundation work (schema, Google Business Profile, directories) is completed in the first month. Most clients begin seeing AI mentions within 8-12 weeks. AI visibility compounds over time — the earlier you start, the harder it becomes for competitors to catch up.

**Q4: Which AI platforms do you cover?**
> We audit and optimise across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. These are the five platforms UK consumers use most when searching for local businesses.

**Q5: I'm not sure this applies to my business. Can I just get an audit first?**
> Absolutely. Our one-time audit (£500) gives you the full picture — where you appear, where you don't, and what your competitors are doing. No commitment beyond that. Most businesses that see the audit results choose to continue.

**Q6: What types of businesses do you work with?**
> We work with local UK businesses — dental clinics, restaurants, salons, gyms, physiotherapists, opticians, student accommodation, and more. If your customers are searching for your type of business in a specific area, GEO matters to you.

---

### SECTION 9 — CONTACT FORM (CTA Section)

**Layout:** Split section. Left side: compelling copy + trust signals. Right side: the form. Background can be very light grey or the off-white with a subtle left-to-right gradient toward white.

**Section label:**
> GET STARTED

**Headline:**
> See what AI says about your business. It takes 30 seconds.

**Sub-copy:**
> Fill in your details and we'll run a free AI visibility audit across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. You'll receive a detailed report showing exactly where you stand — and what your competitors are doing. No obligation, no hard sell.

**Form fields:**
1. Your Name — text input
2. Business Name — text input
3. Business Type — dropdown: Dental Clinic, Restaurant, Salon / Beauty, Gym / Fitness, Healthcare (Physio, Optician), Student Accommodation, Other
4. City — text input (pre-filled or placeholder "e.g. Leeds")
5. Email Address — email input
6. Phone (Optional) — tel input
7. **Submit button:** "Request My Free Audit →"

**Below the form (trust signals):**
> ✓ Free audit — no commitment · ✓ Report delivered within 48 hours · ✓ Covers all 5 major AI platforms

---

### SECTION 10 — FOOTER

**Layout:** Simple, clean footer. Dark background (`#1A1A1A`), white/grey text.

**Content:**
- Logo: **Cited.**
- One-liner: AI Visibility Agency for UK Businesses
- Email: hello@cited.agency
- Links: How It Works · What You Get · Pricing · Contact
- Copyright: © 2026 Cited. All rights reserved.

---

## TECHNICAL REQUIREMENTS

1. **Framework:** Next.js (App Router)
2. **Styling:** Tailwind CSS v4 + shadcn/ui components
3. **Animation:** framer-motion for scroll reveals and staggered load animations
4. **Font loading:** Use `next/font` to load General Sans (or Satoshi) from Fontshare, Inter from Google Fonts
5. **Responsive:** Mobile-first. Every section must look polished on mobile, tablet, and desktop.
6. **Performance:** No heavy images. Use SVG for icons (lucide-react). Lazy load any illustrative elements.
7. **Form:** Client-side validation. On submit, either POST to an API route (for future webhook/email integration) or simply show a success toast. No backend needed for now.
8. **Smooth scrolling:** All nav links smooth-scroll to the target section.
9. **SEO meta:** Page title: "Cited — Get Recommended by AI | UK GEO Agency". Meta description: "Cited helps UK local businesses get recommended by ChatGPT, Perplexity, Google AI Overviews, and more. Free AI visibility audit."
10. **Open Graph image:** Generate a simple OG card with the logo and tagline.

---

## DESIGN PRINCIPLES — NON-NEGOTIABLE

1. **Minimal text, maximum impact.** Every word on this page earns its place. No filler. No marketing waffle.
2. **White space is a feature.** Generous padding between sections. Let the content breathe.
3. **No stock photos.** Use the ChatGPT mock-up in the Problem section as the only illustrative element. Everything else is typography, icons, and spacing.
4. **Professional, not flashy.** This is an agency selling to business owners, not a creative portfolio. Clean, trustworthy, modern.
5. **One clear CTA throughout.** Every section should have a path back to "Get Your Free Audit." The page has one job.
6. **Mobile experience matters equally.** Many business owners will see this on their phone after receiving a cold email or LinkedIn message. The mobile layout must be as polished as desktop.

---

## MOCK-UP ELEMENT — AI CHAT SIMULATION (Section 3)

Build a styled UI component that looks like a ChatGPT-style conversation. Dark background (`#1A1A1A` or `#343541` for ChatGPT feel), rounded message bubbles.

**User message:**
> What's the best dental clinic in Leeds?

**AI response:**
> Based on my research, here are the top dental clinics in Leeds:
>
> 1. **Smilewright Dental** — Highly rated for cosmetic dentistry, located in the city centre. Known for their modern facilities and patient care.
>
> 2. **Park Row Dental Practice** — Excellent reviews for general and family dentistry. Convenient central location.
>
> 3. **The Dental Suite** — Specialises in implants and orthodontics. Strong reputation among Leeds residents.

Below this mock-up, add a callout/annotation in amber:
> **Is your business here? If not, your competitors are winning customers you'll never even know about.**

This is a static styled component — not functional. Just needs to look convincing.

---

*End of specification. Build the complete page from this prompt. Every piece of copy is final and should be used verbatim. Focus on making it feel like a real, credible, operating agency — not a template.*
