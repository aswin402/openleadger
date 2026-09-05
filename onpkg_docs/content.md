# OpenLedger Content Inventory & Copywriting Specification 📝✨

This document contains the complete textual content, model catalogs, pricing details, council mode dialogues, and microcopy extracted and synthesized from **`https://openledger-chat.vercel.app/`**.

---

## 1. Global & Meta Content

- **Page Title**: `OpenLedger · One private layer for every model`
- **Meta Description**: `OpenLedger is one private layer for every frontier model. Chat with GPT, Claude, Gemini, Grok and DeepSeek in one place. Nothing stored, nothing filtered, and your memory travels with you.`
- **Brand Tagline**: `One private layer for every model. Chat anywhere, keep your memory, leave no trace.`
- **Protocol Motto**: `Private by design. Unfiltered by default.`

---

## 2. Navigation Bar

| Element | Label / Text | Target / Action | Attributes |
| :--- | :--- | :--- | :--- |
| **Brand Logo** | `// OpenLedger` | Top (`#`) | Bold display font |
| **Pill Item 1** | `Models` | `#models` | Anchor scroll |
| **Pill Item 2** | `Council Mode` | `#council` | `[New]` coral badge |
| **Pill Item 3** | `Why OpenLedger`| `#why` | Anchor scroll |
| **Pill Item 4** | `Tokenomics` | `#tokenomics` | `$OPEN` protocol flow |
| **Pill Item 5** | `Pricing` | `#pricing` | Anchor scroll |
| **Secondary CTA** | `Start Free` | `#pricing` | Ghost pill button |
| **Primary CTA** | `Go Pro →` | `#pricing` | Coral gradient pill with white arrow circle |

---

## 3. Hero Section Copy

- **Section Badge**: `■ Private Frontier Layer`
- **Primary Headline**: `One private layer for every frontier model.`
- **Supporting Paragraph**: `Chat with GPT, Claude, Gemini, Grok and DeepSeek in one place. Nothing stored, nothing filtered, and your memory travels with you.`
- **Micro-Callout**: `Text, image, video, audio, code and search in one place, all private or anonymous. One subscription, one thread, one memory across every one of them.`
- **Primary Action Button**: `Start Chatting Free →`
- **Secondary Action Button**: `Try Council Mode`
- **Trust Reassurance**: `Free to start · No card required · Zero data retention`

---

## 4. Hero Impact Metrics & Feature Cards (Lamosa 5-Card Panel)

### Card 1: Frontier Model Breadth
- **Icon Badge**: Obsidian pill with Diamond Icon
- **Metric**: `27+`
- **Title**: `Frontier models under one roof`
- **Description**: `Access GPT-4o, o3, Claude Opus 4, Gemini 2.5 Pro, Grok 4, DeepSeek R1, FLUX.1, and Sora without jumping between apps.`

### Card 2: Zero Retention Privacy
- **Icon Badge**: Obsidian pill with Shield / Lock Icon
- **Metric**: `100%`
- **Title**: `Private inference guarantee`
- **Description**: `No chat history stored on central servers, no training corpus contribution, no data resale. Complete cryptographic session security.`

### Card 3: Instant Onboarding (Matte Inset Card)
- **Background**: Cool matte gray (`#EBECEF`) with halftone dot matrix grid overlay.
- **Title**: `Let's start building`
- **Subtitle**: `One private layer. Chat anywhere, keep your memory, leave no trace.`
- **CTA Button**: `Get Started Now` (Obsidian Black Pill)

### Card 4: Subscription Consolidation
- **Icon Badge**: Obsidian pill with Dollar Icon
- **Metric**: `$80/mo → $20/mo`
- **Title**: `Consolidated intelligence billing`
- **Description**: `Stop paying $20 to OpenAI, $20 to Anthropic, $20 to Google, and $20 to xAI. One unified plan gives you everything.`

### Card 5: Council Mode™ Recognition (2-Column Span)
- **Icon Badge**: Obsidian pill with Trophy / Scales of Justice Icon
- **Top Button**: `Explore Council Mode →`
- **Laurel Capsule Badges (with fade mask)**:
  - Laurel 1: `o3 & DeepSeek R1` · `Code & Mathematical Reasoning`
  - Laurel 2: `Claude Opus 4` · `Editorial & Long Context Drafting`
  - Laurel 3: `Gemini 2.5 Pro` · `1M Token Repo & Multi-modal Video`
  - Laurel 4: `Grok 4 & FLUX.1` · `Real-time Web Search & Photoreal Image`
- **Title**: `Council Mode Consensus`
- **Description**: `The flagship feature. Submit one prompt and witness four frontier models debate in parallel to produce an answer that holds up when models disagree.`

---

## 5. Council Mode™ Interactive Debate Content

### Debate Topic 1: Software Architecture Dilemma
- **User Prompt**: `"Our database migration is scheduled for tonight, but dual-write latency testing uncovered a 2% replication delay. Should we proceed with the scheduled rollout behind a feature flag, or postpone by 1 week?"`
- **Model 1 — OpenAI o3**:
  - *Stance*: `Postpone / Delay` (Delay Camp)
  - *Analysis*: `"Two live auth/data paths is what causes the incident, not the missed date. A 2% replication gap under production load will corrupt distributed session state."`
- **Model 2 — Google Gemini 2.5 Pro**:
  - *Stance*: `Cost Calculation` (Delay Camp)
  - *Analysis*: `"Put numbers on both. One emergency database rollback and data reconciliation costs 14x more in engineering hours than the single calendar week you save."`
- **Model 3 — Anthropic Claude Opus 4**:
  - *Stance*: `Ship Conditionally` (Ship Camp)
  - *Analysis*: `"Ship behind a shadow-read flag without activating writes. The legacy path continues serving 100% of live traffic while you profile the 2% lag in real-world traffic."`
- **Model 4 — DeepSeek R1**:
  - *Stance*: `Scope Reduction` (Ship Camp)
  - *Analysis*: `"The migration timeline slipped because the migration scope grew. Strip the non-critical audit tables and ship the core session store tonight."`
- **Council Consensus Verdict**:
  - `"Proceed with dark shadow-routing: Deploy the migration code tonight with write-amplification disabled. Validate replication integrity with real read traffic for 72 hours before switching primary writes."`

---

## 6. Complete Model Catalog (27 Models Across 5 Modalities)

### 6.1 Text Models (18)

1. **GPT-4o** (OpenAI) · `128K context`
   - *Best for*: Everyday reasoning and vision
   - *Description*: The safe default when you are not sure which model to reach for. Quick, reads images as input, and strong across almost everything.
2. **o3** (OpenAI) · `200K context`
   - *Best for*: Hard maths, proofs, planning
   - *Description*: Thinks for longer before it answers. Worth the wait on proofs, multi-step plans and any problem where a wrong answer is expensive.
3. **Claude Opus 4** (Anthropic) · `200K context`
   - *Best for*: Long documents and drafting
   - *Description*: The strongest writer in the catalog. Holds a long document in its head, edits carefully, and produces prose that does not read like a machine.
4. **Claude Sonnet 4** (Anthropic) · `200K context`
   - *Best for*: Code review and refactors
   - *Description*: The balanced daily driver. Reads a large repository, follows instructions closely, and stays quick enough for back-and-forth work.
5. **Gemini 2.5 Pro** (Google) · `1M context`
   - *Best for*: Whole repositories and video
   - *Description*: A million token window that also accepts video and audio, so it can watch a recording or read an entire codebase and answer questions about it.
6. **Grok 4** (xAI) · `256K context`
   - *Best for*: Live search and conversation
   - *Description*: Reaches live sources while it answers, which makes it the one to ask about anything that happened this week.
7. **GPT-4.1** (OpenAI) · `1M context`
   - *Best for*: Very long inputs
   - *Description*: Takes a million tokens in a single request, so whole document sets and codebases go in at once without chunking.
8. **o4-mini** (OpenAI) · `200K context`
   - *Best for*: Cheap reasoning at volume
   - *Description*: Most of the reasoning of o3 at a fraction of the cost. Built for batch jobs and agent loops that run all day.
9. **GPT-4o mini** (OpenAI) · `128K context`
   - *Best for*: Fast everyday tasks
   - *Description*: The cheapest sensible default for classification, extraction and short replies.
10. **Claude Haiku 4.5** (Anthropic) · `200K context`
    - *Best for*: Quick drafts and routing
    - *Description*: Fast and inexpensive, with enough judgement to triage a queue of work before a larger model picks up what matters.
11. **Gemini 2.5 Flash** (Google) · `1M context`
    - *Best for*: High volume, low latency
    - *Description*: The same enormous context at a fraction of the latency. Made for pipelines that run at scale.
12. **Grok 3** (xAI) · `128K context`
    - *Best for*: Conversation and search
    - *Description*: The previous generation, still capable at open conversation and quick research.
13. **DeepSeek R1** (DeepSeek) · `128K context`
    - *Best for*: Open reasoning at low cost
    - *Description*: Open weights with its reasoning on show. Competitive with closed models on maths and code for a fraction of the price.
14. **DeepSeek V3** (DeepSeek) · `128K context`
    - *Best for*: General open weight work
    - *Description*: A capable general model that you could also self host, if you ever want the option to leave.
15. **Llama 3.3 70B** (Meta) · `128K context`
    - *Best for*: Open weights, private hosting
    - *Description*: Small enough to run on your own hardware, supported by nearly every tool in the ecosystem.
16. **Llama 3.1 405B** (Meta) · `128K context`
    - *Best for*: The largest open model
    - *Description*: The biggest openly licensed model here. Slower to answer, but it holds its own against closed frontier models.
17. **Mistral Large** (Mistral) · `128K context`
    - *Best for*: Fast structured generation
    - *Description*: Reliable at JSON, tool calls and anything that has to match a schema exactly, first time.
18. **Mistral Small** (Mistral) · `128K context`
    - *Best for*: Cheap classification and tags
    - *Description*: Tiny and quick. Ideal for tagging, routing and cleanup passes where a large model is waste.

### 6.2 Image Generation Models (4)

19. **FLUX.1** (Black Forest Labs) · `Up to 2K resolution`
    - *Best for*: Photoreal generation
    - *Description*: Sharp, photoreal images with unusually good prompt adherence. The default for product shots and editorial work.
20. **GPT Image** (OpenAI) · `Up to 2K resolution`
    - *Best for*: Editing and inpainting
    - *Description*: Generates and edits. Hand it an existing image with a mask and it changes only the part you pointed at.
21. **Imagen 4** (Google) · `Up to 2K resolution`
    - *Best for*: Text inside images
    - *Description*: The best here at rendering readable text inside a generated image, which most image models still fumble.
22. **Stable Diffusion 3.5** (Stability AI) · `Up to 2K resolution`
    - *Best for*: Open image generation
    - *Description*: Open weights, a wide style range, and a huge library of community fine tunes to draw on.

### 6.3 Video Generation Models (2)

23. **Sora** (OpenAI) · `Up to 20s clips`
    - *Best for*: Video from a prompt
    - *Description*: Short clips from a written description, holding subjects and style consistent across shots.
24. **Veo 3** (Google) · `Up to 8s with sound`
    - *Best for*: Video with synchronized sound
    - *Description*: Generates video with matching audio, so a clip arrives with its own effects and atmosphere already on it.

### 6.4 Audio & Transcription Models (2)

25. **Whisper** (OpenAI) · `90+ languages`
    - *Best for*: Transcription
    - *Description*: Turns speech into accurate text across languages and accents, and copes with noisy recordings.
26. **GPT-4o Audio** (OpenAI) · `Speech to speech`
    - *Best for*: Voice interfaces
    - *Description*: Speech in, speech out, in one call. Used for voice products that answer without a text round trip.

### 6.5 Music Generation Models (1)

27. **Lyria** (Google) · `Instrumental generation`
    - *Best for*: Music & soundtrack generation
    - *Description*: Writes instrumental tracks from a description, with control over genre, mood and tempo.

---

## 7. Why OpenLedger: The 4 Core Architectural Pillars

### Pillar 1: Private by Design, Unfiltered by Default
- **Summary**: No logs, no corpus contribution, no data resale.
- **Deep Dive**: When you prompt an AI company directly, your interactions are routinely ingested into their evaluation datasets and future training corpuses. OpenLedger enforces zero-retention routing with transient memory stored only on your local device or encrypted private enclave.

### Pillar 2: Unified Cross-Model Memory
- **Summary**: Your thoughts, preferences, and context travel with you.
- **Deep Dive**: Start a project analysis in Claude Sonnet 4, switch to o3 for a hard algorithmic proof, and generate marketing copy in Grok 4. You never have to copy-paste context or start from scratch again.

### Pillar 3: Smart Token Routing & Optimisation
- **Summary**: The router spends what a request needs, not what the largest model charges.
- **Deep Dive**: Not every request requires an expensive reasoning model. Send `model: "auto"`, and OpenLedger evaluates complexity in milliseconds, routing simple tasks to fast models ($0.05/1M) and reserving frontier reasoning for difficult problems.

### Pillar 4: One Endpoint for Developers
- **Summary**: Replace your OpenAI client configuration with one line of code.
- **Code Snippet**:
```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.openledger.xyz/v1",
    api_key="ol_live_your_key_here"
)

# Route to Claude Opus 4 using standard OpenAI syntax
response = client.chat.completions.create(
    model="claude-opus-4",
    messages=[{"role": "user", "content": "Review this system architecture"}]
)
```

---

## 8. Tokenomics Protocol Flow ($OPEN)

- **Eyebrow**: `How value flows`
- **Headline**: `The $OPEN Protocol Engine`
- **Sub-headline**: `The layer is live and earning today. Built on real product utility, not inflationary promises.`
- **Flow Steps**:
  - `01`: **Product Revenue** — People and organizations pay fiat or crypto to use every model in the catalog. Live and generating cash today.
  - `02`: **Protocol Fees** — A programmatic share of every credit spent flows straight into the protocol treasury.
  - `03`: **Market Buys $OPEN** — Protocol treasury fees systematically buy $OPEN on open decentralized and centralized markets.
  - `04`: **Providers Rewarded & Surplus Burns** — Model inference providers and node operators are rewarded for verified compute. All surplus $OPEN purchased is permanently burned on-chain.

---

## 9. Pricing Plans Copy

- **Eyebrow**: `Pricing`
- **Headline**: `Every model, one subscription.`
- **Sub-headline**: `Billed monthly · Cancel any time · Free to start · Nothing retained`

### Tier 1: Free
- **Price**: `$0` `forever`
- **Tagline**: `Try the layer.`
- **Features**:
  - Daily token allowance across all models
  - 1 private memory workspace
  - Zero data storage & no logs
  - Web & mobile app access
- **CTA**: `Start a chat`

### Tier 2: Pro (Most Popular)
- **Price**: `$20` `per month`
- **Tagline**: `One plan instead of four.`
- **Features**:
  - Every frontier model (GPT-4o, o3, Claude Opus 4, Gemini 2.5 Pro)
  - Council Mode™ multi-model consensus
  - Unified persistent cross-model memory
  - High-resolution image & video generation
  - Developer API access included ($10 credits/mo)
  - Unlimited file, code & PDF uploads
- **CTA**: `Go Pro`

### Tier 3: Team
- **Price**: `$30` `per seat / month`
- **Tagline**: `Shared memory, one invoice.`
- **Features**:
  - Everything included in Pro
  - Shared workspace team memory & folders
  - Granular role-based access & seat spend limits
  - Centralized SAML / SSO authentication
  - Verifiable cryptographic audit logs
  - Dedicated private inference routing
- **CTA**: `Start a team`

---

## 10. Frequently Asked Questions (FAQ)

1. **How is OpenLedger different from paying for ChatGPT Plus and Claude Pro directly?**
   *With OpenLedger, you get all 27 models—OpenAI, Anthropic, Google, xAI, DeepSeek, and Meta—for the price of just one single subscription ($20/mo instead of $80+/mo). More importantly, your memory persists across models, and your prompts are never stored or used for retraining.*

2. **What exactly is Council Mode™?**
   *Council Mode submits your prompt to four distinct models at once (e.g., o3, Claude Opus 4, Gemini 2.5 Pro, and DeepSeek R1). The models answer and critique one another's reasoning in real time, delivering a synthesized final verdict.*

3. **How does OpenLedger guarantee zero data retention?**
   *We operate as an encrypted streaming proxy. Once your tokens are streamed back to your browser, they are instantly discarded from memory. We maintain zero database tables for user conversation logs.*

4. **Can I use my existing OpenAI code with OpenLedger?**
   *Yes! OpenLedger exposes an OpenAI-compatible `/v1/chat/completions` endpoint. Simply change your `base_url` to `https://api.openledger.xyz/v1` and you can call any model in the catalog using your standard OpenAI SDK.*

---

## 11. Footer Navigation

- **Brand**: `OpenLedger` — One private layer for every frontier model.
- **Product**: Chat, Models Catalog, Council Mode, iOS App, Android App, Pricing.
- **Developers**: API Reference, Quickstart, Model IDs, Status, Python SDK, TypeScript SDK.
- **Company**: About Us, $OPEN Tokenomics, Blog, Security Audits, Careers, Contact.
- **Legal**: Zero-Data Policy, Terms of Service, Privacy Notice, Compliance.
- **Copyright**: `© 2026 OpenLedger Inc. All rights reserved.`
