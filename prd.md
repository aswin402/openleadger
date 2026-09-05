# OpenLedger Product Requirements Document (PRD) 📄🚀

## 1. Executive Summary

**OpenLedger** is the unified, private intelligence layer for every frontier AI model. Rather than forcing users and teams to maintain separate, siloed subscriptions to OpenAI ($20/mo), Anthropic ($20/mo), Google Gemini ($20/mo), and xAI ($20/mo), OpenLedger consolidates 27+ frontier and open-weights models into a **single subscription, single thread, and unified memory workspace**—with zero retention, client-side encryption, and complete unmoderated freedom.

The frontend is constructed using the **Lamosa Design System** (`design.md`): an ultra-tactile, light-mode glassmorphic interface with a 4-tier elevation architecture, 5-stop ambient physics shadows, obsidian pill controls, and high-contrast modernist typography (Satoshi + Inter).

---

## 2. Target Audience & Personas

1. **Power AI Practitioners & Researchers**: Users constantly switching between Claude (for nuanced prose and reasoning), o3 (for hard mathematical proofs and planning), Gemini 2.5 Pro (for 1M token codebases), and DeepSeek R1 (for open reasoning).
2. **Privacy-Conscious Developers & Founders**: Teams working on confidential IP, proprietary algorithms, and sensitive enterprise data who cannot allow their inputs to be logged, retained, or used for model retraining.
3. **Engineering Teams & Startups**: Companies wasting $80+/seat/mo across fragmented AI portals seeking centralized billing, shared workspace context, audit logging, and team seat management.
4. **Autonomous Agent & Pipeline Builders**: Developers needing a single drop-in OpenAI-compatible endpoint (`/v1/chat/completions`) with intelligent cost/performance routing (`model: "auto"`).

---

## 3. Core Value Propositions & Strategic Pillars

| Pillar | Description & Guarantee |
| :--- | :--- |
| **Unified Access** | 27 frontier models across 5 modalities (Text, Image, Video, Audio, Music) under one $20/month subscription. |
| **Zero Retention Privacy** | Nothing stored, nothing filtered, no log corpus, no resale. Private inference available on request. |
| **Unified Memory** | Context and memory persist seamlessly across models. Switch from Claude to o3 without re-explaining context. |
| **Council Mode™** | One question evaluated simultaneously by 4 distinct frontier models to synthesize an unshakeable consensus. |
| **Smart Routing Engine** | Router allocates exact compute required rather than defaulting to the most expensive frontier model. |
| **Developer First** | Single OpenAI SDK drop-in endpoint with support for manual model selection or auto-routing. |

---

## 4. Key Feature Specifications

### 4.1 Floating Glass Navigation Header
- **Floating pill capsule** fixed at viewport top (`top: 16px`), blurred glass background (`#FCFCFD`), 1px white border, soft elevation shadow.
- **Nav Links**: Models, Council Mode, Security, Enterprise, Tokenomics, Pricing.
- **Interactive Badges**: "Live" indicator dot, "New" badge on Council Mode.
- **CTA Actions**: "Start Free" outline pill and "Go Pro ->" coral gradient pill button.
- **Mobile Drawer**: Responsive slide-down frosted sheet for screen widths `< 768px`.

### 4.2 Hero Section (Private Frontier Layer)
- **Section Indicator**: Coral square badge + `"■ Private Frontier Layer"`.
- **Display Typography**: Satoshi Bold 700 (`48px`–`64px`), tight tracking (`-0.05em`).
- **Headline**: `"One private layer for every frontier model."`
- **Sub-headline**: `"Chat with GPT, Claude, Gemini, Grok and DeepSeek in one place. Nothing stored, nothing filtered, and your memory travels with you."`
- **Dual Action CTAs**:
  - Primary: `"Start Chatting Free →"` (Coral gradient button with glowing shadow and white circular arrow container).
  - Secondary: `"Try Council Mode"` (Dark Obsidian pill button with 5-stop ambient shadow).
- **Hero Metrics Glass Grid**: Lamosa 3-column / 2-row recessed panel (`border-radius: 56px`, `#F6F7F8` -> `#EBECEF` gradient):
  - **Metric Card 1**: `27+` Frontier & Open-Weight Models (Obsidian diamond pill).
  - **Metric Card 2**: `100%` Zero-Log Privacy Guarantee (Obsidian shield/lock pill).
  - **Metric Card 3**: `"Start in 10 Seconds"` Action Card with halftone dot matrix texture, no credit card required, and dark pill CTA.
  - **Metric Card 4**: `$80/mo → $20/mo` Unified Subscription Cost Savings (Obsidian dollar pill).
  - **Metric Card 5**: `4 Models · 1 Consensus` Council Mode preview card with laurel wreath capsule badges and gradient fade mask.

### 4.3 Interactive Council Mode™ Simulator
- **Eyebrow**: `"4 models · 1 question"`
- **Heading**: `"Council Mode: When answers need to hold up once models disagree."`
- **Interactive Switcher**: Allows visitors to toggle between sample high-stakes prompts:
  1. *Architecture*: "Should we ship the new auth system or delay 1 week to complete a dual-run migration?"
  2. *Product*: "Should we build an in-house vector DB or integrate a managed platform?"
  3. *Security*: "How should we handle cross-model memory persistence without server retention?"
- **Model Debate Cards**:
  - **o3 (OpenAI)**: Delay Stance ("Two live auth paths is what causes the incident, not the missed date.")
  - **Gemini 2.5 Pro (Google)**: Cost Calculation Stance ("Put numbers on both. One bad rollback costs more than the week you save.")
  - **Claude Opus 4 (Anthropic)**: Feature Flag Stance ("Ship behind a flag. The old path keeps serving until the new one is clean.")
  - **DeepSeek R1 (DeepSeek)**: Scope Reduction Stance ("The date slipped because scope grew. Cut it back to the session store.")
- **Consensus Verdict Pill**: Synthesized final recommendation highlighting tradeoffs.

### 4.4 Comprehensive Multi-Modal Model Catalog
- **Filter Tabs**: All (`27`), Text (`18`), Image (`4`), Video (`2`), Audio (`2`), Music (`1`).
- **Interactive Cards**:
  - Model Name & Provider Badge (OpenAI, Anthropic, Google, xAI, DeepSeek, Meta, Mistral, Black Forest Labs, Stability AI).
  - Context Window Capsule (e.g. `1M tokens`, `200K tokens`, `128K tokens`).
  - Best-For Tag (e.g. `Hard maths & proofs`, `Refactors & large repos`, `Long document drafting`).
  - Concise description of strengths and latency profile.

### 4.5 Why OpenLedger: 4-Pillar Glass Cards
- **Pillar 1: Private by Design, Unfiltered by Default**
  - Zero server logging, client-side session hashing, unmoderated frontier access.
- **Pillar 2: Unified Memory Workspace**
  - Memory travels across models. Switch from Claude to o3 to Gemini without repeating context.
- **Pillar 3: Smart Token Routing & Optimisation**
  - The router spends what a request needs, not what the largest model charges.
- **Pillar 4: Unified Developer API**
  - Standard OpenAI SDK compatibility (`https://api.openledger.xyz/v1`).

### 4.6 Tokenomics & Protocol Engine ($OPEN)
- **4-Step Physical Process Flow**:
  - `Step 01`: Product revenue — People pay to use every model in the catalog.
  - `Step 02`: Protocol fees — A share of every credit spent flows directly to the protocol.
  - `Step 03`: Market buys $OPEN — Protocol fees purchase $OPEN on the open market (bought, not minted).
  - `Step 04`: Providers rewarded, surplus burns — Providers are rewarded; network surplus is burned verifiably on-chain.

### 4.7 Transparent Pricing Matrix
- **Free ($0 forever)**: Daily allowance across models, 1 memory workspace, zero retention.
- **Pro ($20/month)**: Unlimited access to all 27 models, Council Mode, unified cross-model memory, file uploads, API access.
- **Team ($30/seat/month)**: Pro features + shared team workspace memory, seat roles, spend limits, SSO, and compliance audit logs.

### 4.8 Interactive FAQ Accordion
- Expandable glass pill cards with smooth height transition.

---

## 5. Responsive Design & Screen Support Matrix

| Breakpoint | Screen Width | Layout & UI Adaptations |
| :--- | :--- | :--- |
| **2XL / Ultra-Wide** | `1536px+` | Max container width `1440px`, centered with generous margins, 3-column grids. |
| **Desktop (LG/XL)** | `1024px – 1535px` | Standard 3-column metric grid, 2-column services/process layouts, full pill navbar. |
| **Tablet (MD)** | `768px – 1023px` | 2-column card layouts, recessed panel radius `48px`, condensed navigation pill. |
| **Mobile (SM)** | `480px – 767px` | 1-column stacked cards, horizontal scrollable model pills, hamburger drawer. |
| **Small Mobile (XS)**| `< 480px` (360px+) | Inset padding `12px`, panel radius `32px`, font sizes scaled down for readability. |

---

## 6. Non-Functional & Technical Requirements

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 + Lamosa Design System tokens (`design.md`).
- **UI Primitives**: shadcn/ui components (`button`, `card`, `input`, `badge`, `tabs`, `dialog`).
- **Icons**: `lucide-react`.
- **Accessibility**: WCAG 2.1 AA compliant, semantic HTML5 landmarks, ARIA labels, full keyboard navigation.
- **Performance**: Zero hydration mismatch, sub-1.0s LCP on desktop, optimal font loading.
