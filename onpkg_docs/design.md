# Lamosa Design System & Component Specification 🎨✨

A reverse-engineered, production-ready design specification based on **Lamosa** (`https://lamossa.framer.website/`). This document outlines the design language, layered glassmorphic architecture, multi-stop physics shadows, color tokens, typography scales, and detailed implementations for all featured components.

---

## 1. Design Philosophy & Visual Language

Lamosa’s signature visual aesthetic combines **Ultra-Clean Light Mode Minimalist Surface Design** with **Tactile Neumorphic / Glassmorphic Depth**. Rather than relying solely on blurred backgrounds, it establishes depth through a **4-tier physical elevation hierarchy**:

1. **Tier 0 – Base Canvas (`#F6F7F8`)**: Soft, warm-neutral off-white background that prevents glare and allows white surfaces to pop.
2. **Tier 1 – Recessed Container Panel (`linear-gradient(180deg, #F6F7F8 0%, #EBECEF 100%)`)**: Large rounded container (`border-radius: 56px`) with a translucent white top-edge border (`rgba(255, 255, 255, 0.45)`) that acts like a matte tray holding cards.
3. **Tier 2 – Elevated Glass Card (`linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%)`)**: Crisp 1px solid pure white border (`#FFFFFF`) or frosted glass with subtle inner specular highlight, casting soft contact shadows onto the recessed panel.
4. **Tier 3 – Floating Obsidian Accents (`#010309`)**: High-contrast, deep midnight-black pill badges and control bars floating above cards with an **ultra-diffuse 5-stop ambient drop shadow** (`box-shadow: 0 7px 16px rgba(1,3,9,0.25), 0 29px 29px ...`).

---

## 2. Color Palette & Design Tokens

### 2.1 Core Neutral & Surface Colors

| Token Name | Hex Code | RGB / RGBA | Usage |
| :--- | :--- | :--- | :--- |
| `--surface-canvas` | `#F6F7F8` | `rgb(246, 247, 248)` | Global page background, light badge backgrounds |
| `--surface-panel-end`| `#EBECEF` | `rgb(235, 236, 239)` | Bottom stop of outer section panel, secondary cards |
| `--surface-card-top` | `#FFFFFF` | `rgb(255, 255, 255)` | Pure white card gradient top, button icons |
| `--surface-card-bot` | `#FCFCFD` | `rgb(252, 252, 253)` | Pure off-white card gradient bottom, floating nav pill |
| `--surface-obsidian` | `#010309` | `rgb(1, 3, 9)` | Deep midnight black for floating icon pills, CTA buttons |
| `--surface-dark-btn` | `#0A0A0A` | `rgb(10, 10, 10)` | Primary dark button background |
| `--border-panel` | `#FFFFFF73`| `rgba(255, 255, 255, 0.45)` | Translucent frosted border on recessed panel |
| `--border-card` | `#FFFFFF` | `rgba(255, 255, 255, 1.0)` | Solid crisp border on elevated cards |
| `--border-obsidian`| `#18181B` | `rgb(24, 24, 27)` | Border around midnight-black buttons and pills |
| `--border-subtle` | `#E5E7EB` | `rgb(229, 231, 235)` | Subtle dividers and secondary borders |

### 2.2 Accent & Brand Colors

| Token Name | Hex Code | RGB / RGBA | Usage |
| :--- | :--- | :--- | :--- |
| `--brand-coral-top` | `#FF4D36` | `rgb(255, 77, 54)` | Gradient top for primary CTA buttons |
| `--brand-coral-bot` | `#E1443A` | `rgb(225, 68, 58)` | Gradient bottom for primary CTA buttons, section indicator square |
| `--brand-coral-border`| `#FCE9E740`| `rgba(252, 233, 231, 0.25)` | Specular highlight border on coral buttons |
| `--brand-peach-tint`| `#F7C1BB` | `rgb(247, 193, 187)` | Gradient stop on stat tooltips (`+429% Monthly revenue`) |
| `--brand-glow` | `#E1443A26`| `rgba(225, 68, 57, 0.15)` | Ambient glow shadow under coral buttons |

### 2.3 Typography Colors

| Token Name | Hex Code | RGB / RGBA | Usage |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `#0A0A0A` | `rgb(10, 10, 10)` | Headings, big metrics, bold labels |
| `--text-secondary` | `#737373` | `rgb(115, 115, 115)` | Body copy, card descriptions, navigation links |
| `--text-body-alt` | `#616161` | `rgb(97, 97, 97)` | Secondary descriptions, subheadings |
| `--text-muted` | `#A3A3A3` | `rgb(163, 163, 163)` | Form placeholders, inactive steps, faded badges |
| `--text-inverse` | `#FFFFFF` | `rgb(255, 255, 255)` | Text on obsidian pills and coral buttons |

---

## 3. Shadows & Elevation Architecture

The visual depth in Lamosa is engineered through multi-layer physics shadows (ambient light + contact shadow).

### 3.1 The Obsidian Floating Pill Shadow (Signature Depth)
Used on floating black icon pills, the floating video call controls bar, and metric tooltips. This produces the look of an object hovering ~12px–20px above the white glass card:

```css
/* 5-stop ambient diffusion shadow */
box-shadow:
  0px 7px 16px rgba(1, 3, 9, 0.25),
  0px 29px 29px rgba(1, 3, 9, 0.20),
  0px 65px 39px rgba(1, 3, 9, 0.15),
  0px 115px 46px rgba(1, 3, 9, 0.06),
  0px 180px 51px rgba(1, 3, 9, 0.03);
```

### 3.2 The Primary Coral Button Glow Shadow
Used on "Get Template ->" and "Start A Project ->" buttons:

```css
/* Full multi-tier physics glow */
box-shadow:
  0px 4px 16px -6px rgba(225, 68, 57, 0.15),
  0px 2.35px 0.94px -0.625px rgba(225, 68, 57, 0.10),
  0px 5.57px 2.23px -1.25px rgba(225, 68, 57, 0.10),
  0px 10.16px 4.06px -1.875px rgba(225, 68, 57, 0.09),
  0px 16.90px 6.76px -2.500px rgba(225, 68, 57, 0.09),
  0px 27.29px 10.91px -3.125px rgba(225, 68, 57, 0.08),
  0px 44.68px 17.87px -3.750px rgba(225, 68, 57, 0.07),
  0px 76.93px 30.77px -4.375px rgba(225, 68, 57, 0.06),
  0px 150.00px 60.00px -5.000px rgba(225, 68, 57, 0.04);

/* Standard simplified CSS equivalent */
box-shadow: 0px 4px 16px 0px rgba(225, 68, 57, 0.25);
```

### 3.3 The Button Icon Circle Shadow
Used on the circular white arrow container inside the coral CTA button:

```css
box-shadow:
  0px 9px 20px 0px rgba(1, 3, 9, 0.10),
  0px 36px 36px 0px rgba(1, 3, 9, 0.09),
  0px 81px 49px 0px rgba(1, 3, 9, 0.05),
  0px 144px 58px 0px rgba(1, 3, 9, 0.01),
  0px 225px 63px 0px rgba(1, 3, 9, 0.00);
```

### 3.4 Card & Container Elevation Shadow
Used when elevated cards sit over slightly darker backgrounds:

```css
box-shadow:
  0 1px 2px 0 rgba(0, 0, 0, 0.02),
  0 4px 16px 0 rgba(0, 0, 0, 0.03),
  inset 0 1px 1px 0 rgba(255, 255, 255, 0.90);
```

---

## 4. Typography Hierarchy & Tokens

The typography pairs **Satoshi** (high-contrast, geometric modernist sans-serif for display headings) with **Inter** (clean, readable sans-serif for UI, numbers, badges, and body copy).

| Style Level | Font Family | Size | Weight | Line Height | Letter Spacing | Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title / Display** | `Satoshi, sans-serif` | `48px` | `700` (Bold) | `1.2em` (`56px`) | `-0.05em` | `#0A0A0A` |
| **Section Heading (H2)** | `Satoshi, sans-serif` | `36px` | `700` (Bold) | `40px` | `-0.05em` | `#0A0A0A` |
| **Metric Value (Hero Stat)** | `Satoshi, sans-serif` | `36px` / `40px` | `700` (Bold) | `1.15em` | `-0.05em` | `#0A0A0A` |
| **Card Title (H3)** | `Satoshi, sans-serif` | `28px` | `700` (Bold) | `36px` | `-0.05em` | `#0A0A0A` |
| **Sub-Feature (H4)** | `Satoshi, sans-serif` | `24px` | `700` (Bold) | `28px` | `-0.04em` | `#0A0A0A` |
| **Accordion Header (H5)** | `Satoshi, sans-serif` | `20px` | `500` (Medium) | `28px` | `-0.04em` | `#0A0A0A` |
| **Step Title (H6)** | `Satoshi, sans-serif` | `18px` | `500` (Medium) | `24px` | `-0.03em` | `#0A0A0A` |
| **Body Large** | `Inter, sans-serif` | `18px` | `500` (Medium) | `1.3em` | `0em` | `#737373` |
| **Body Medium (Default)**| `Inter, sans-serif` | `16px` | `500` (Medium) | `1.3em` | `0em` | `#737373` |
| **Body Small / Captions**| `Inter, sans-serif` | `14px` | `500` (Medium) | `1.3em` | `0em` | `#737373` |
| **Pills & Micro Badges** | `Inter, sans-serif` | `12px` / `13px` | `500` (Medium) | `1.2em` | `0.02em` | `#0A0A0A` / `#737373` |

---

## 5. Glassmorphism & Surface Construction Recipes

### 5.1 The Lamosa Outer Recessed Panel Recipe
This wraps the main content blocks (e.g. the 5-card Hero metrics grid in Image 0).

```css
.lamosa-recessed-panel {
  /* Soft vertical tint transition */
  background: linear-gradient(
    180deg,
    #F6F7F8 0%,
    #F6F7F8 0%,
    #EBECEF 100%
  );
  /* 45% white frosted top edge */
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 56px; /* Tablet: 48px, Mobile: 42px */
  padding: 24px;       /* Tablet: 16px, Mobile: 10px */
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  gap: 24px;
  position: relative;
  overflow: visible;
}
```

### 5.2 The Elevated Glass Card Recipe
Used for individual stat cards, accordion rows, and process cards (Images 0, 1, 2).

```css
.lamosa-glass-card {
  position: relative;
  background: linear-gradient(
    180deg,
    #FFFFFF 0%,
    #FCFCFD 100%
  );
  border-radius: 32px; /* Mobile: 24px */
  padding: 24px;       /* Mobile: 16px */
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;

  /* Specular Highlight Overlay */
  border: 1px solid #FFFFFF;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.02),
    0 4px 16px 0 rgba(0, 0, 0, 0.03),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.9);
}

/* Modern Web Enhanced Glass Alternative (with backdrop-blur) */
.lamosa-glass-card-frosted {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.90) 0%,
    rgba(252, 252, 253, 0.70) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 32px;
  box-shadow:
    0 4px 24px -1px rgba(0, 0, 0, 0.04),
    inset 0 1px 2px rgba(255, 255, 255, 1.0);
}
```

### 5.3 The Floating Obsidian Icon Pill
Used in the top-left of the metric cards (Diamond, Chart, Dollar, Trophy, Figma icon).

```css
.lamosa-icon-pill {
  width: 80px;
  height: 48px;
  border-radius: 99px;
  background-color: #010309;
  border: 1px solid rgb(24, 24, 27);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  position: relative;
  flex: none;

  /* 5-stop ambient shadow casting downwards */
  box-shadow:
    0 7px 16px rgba(1, 3, 9, 0.25),
    0 29px 29px rgba(1, 3, 9, 0.20),
    0 65px 39px rgba(1, 3, 9, 0.15),
    0 115px 46px rgba(1, 3, 9, 0.06),
    0 180px 51px rgba(1, 3, 9, 0.03);
}

/* Compact variant (Accordion / Cards) */
.lamosa-icon-pill-compact {
  width: 70px;
  height: 44px;
}
```

---

## 6. Detailed Component Specifications

### 6.1 Floating Pill Navigation Bar (Image 0)

A floating, rounded capsule anchored at the top of the viewport.

#### Layout & Dimensions:
- **Outer Container**: Sticky or fixed top, centered, with `padding-top: 16px` to `24px`.
- **Nav Links Capsule**:
  - `background-color: #FCFCFD` (`rgb(252, 252, 253)`)
  - `border: 1px solid #FFFFFF`
  - `border-radius: 100px` (pill)
  - `padding: 6px 6px 6px 20px` (desktop)
  - `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04)`
  - Flex layout: `align-items: center`, `gap: 24px`

#### Items:
1. **Dropdown Link (`Company ⌵`)**: Font `Inter 14px`, weight `500`, color `#737373`, chevron icon right.
2. **Badge Link (`Projects [New]`)**:
   - Label: `Projects` (`#737373`)
   - Badge: Red capsule (`background: #E1443A`, `color: #FFFFFF`, font `Inter 11px 600`, `padding: 2px 8px`, `border-radius: 100px`).
3. **Links (`Blog`, `About us`)**: Font `Inter 14px`, color `#737373`, hover color `#0A0A0A`.
4. **Primary CTA Button (`Get Template →`)**:
   - `background: linear-gradient(180deg, #FF4D36 0%, #E1443A 100%)`
   - `border: 1px solid rgba(252, 233, 231, 0.25)`
   - `border-radius: 100px`
   - `color: #FFFFFF`
   - `padding: 8px 16px 8px 20px`
   - Arrow icon contained in small white circle:
     - `width: 24px; height: 24px; border-radius: 50%; background: #F3F4F6; border: 1px solid #FFFFFF; color: #010309;`
   - Multi-tier warm glow shadow: `box-shadow: 0px 4px 16px 0px rgba(225, 68, 57, 0.25);`

---

### 6.2 Section Marker Badge System

Above section headlines (e.g. `■ Impact`, `■ Services`, `■ Process`):

```html
<div class="lamosa-section-badge">
  <span class="lamosa-badge-dot"></span>
  <span class="lamosa-badge-text">Impact</span>
</div>
```

```css
.lamosa-section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.lamosa-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: #E1443A;
  box-shadow: 0 0 8px rgba(225, 68, 58, 0.4);
}

.lamosa-badge-text {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #0A0A0A;
}
```

---

### 6.3 Hero Impact Metrics Grid (Image 0)

Composed of a 3-column layout inside the recessed panel:

```
+---------------------------+---------------------------+---------------------------+
| [Card 1] 1,500+           | [Card 2] 126%             | [Card 3] Let's start      |
| Projects Delivered        | Increased in conversion   | building (Gray Inset +    |
| (Floating Diamond Pill)   | (Floating Chart Pill)     | Halftone Grid + CTA)      |
+---------------------------+---------------------------+---------------------------+
| [Card 4] $100M+           | [Card 5] 12+ Awards Recognition                       |
| Seed + Series A Funding   | (Laurel Capsule Badges with gradient fade mask + CTA) |
| (Floating Dollar Pill)    |                                                       |
+---------------------------+-------------------------------------------------------+
```

#### Card 1 & Card 2 & Card 4 (Metric Cards):
- **Container**: `lamosa-glass-card` (`border-radius: 32px`, `padding: 24px`).
- **Top**: Floating Obsidian Icon Pill (`lamosa-icon-pill`) with silver/white vector line icon.
- **Bottom**:
  - Metric Big Number: `font-family: 'Satoshi'; font-size: 36px; font-weight: 700; letter-spacing: -0.05em; color: #0A0A0A; margin-top: auto; margin-bottom: 6px;`
  - Metric Title: `font-family: 'Satoshi'; font-size: 18px; font-weight: 600; color: #0A0A0A; margin-bottom: 8px;`
  - Metric Description: `font-family: 'Inter'; font-size: 14px; font-weight: 400; line-height: 1.4; color: #737373;`

#### Card 3 (Action / Pitch Card):
- **Background**: `background-color: #EBECEF` (matte cool gray container).
- **Halftone Dot Texture**: Positioned absolute on the right:
  `background-image: radial-gradient(#0A0A0A 1px, transparent 1px); background-size: 12px 12px; opacity: 0.15;`
- **Content**:
  - Title: `Let's start building` (`Satoshi 28px 700 -0.05em`).
  - Subtitle: `We're the A-team you can trust and need to launch your product` (`Inter 14px 400 #616161`).
  - Button: `Get Started`
    - `background-color: #010309`
    - `border-radius: 99px`
    - `color: #FFFFFF`
    - `padding: 12px 28px`
    - `font-family: 'Inter'; font-size: 14px; font-weight: 500;`

#### Card 5 (Awards Recognition Card - Span 2 Columns):
- **Header**: Top-left floating obsidian trophy pill; Top-right pill button: `"See our Awards"` (`border: 1px solid #E5E7EB`, `background: #FFFFFF`, `border-radius: 100px`, `padding: 8px 18px`).
- **Awards Grid**: 2 columns of laurel capsules:
  - **Capsule Badge**:
    - `background-color: #F6F7F8;`
    - `border-radius: 100px;`
    - `padding: 10px 18px;`
    - Flex layout with Laurel Wreath Icon on left.
    - Title: `"Site of the Day"`, Subtitle: `"Award - 2025"`.
- **Frosted Fade Mask**:
  The bottom row of awards uses CSS mask to fade into invisibility:
  ```css
  mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%);
  ```
- **Footer**: `12+ Awards recognition` title and description.

---

### 6.4 Services Accordion & Media Display (Image 1)

A 2-column split section:

#### Left Column (Accordion Stack):
Stack of 4 glass pill items with `gap: 12px`:
1. **Web Design & UX/UI** (Active / Expanded state):
   - **Outer Frame**:
     `background: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);`
     `border: 1px solid #FFFFFF; border-radius: 32px; padding: 14px;`
   - **Header Row**:
     - Left: Square-rounded floating obsidian icon badge (`width: 44px; height: 44px; border-radius: 14px; background: #010309; box-shadow: 0 7px 16px rgba(1,3,9,0.25)...`).
     - Center: Title `"Web Design & UX/UI"` (`Satoshi 20px 600 #0A0A0A`).
     - Right: Chevron-up icon.
   - **Expanded Content Inset**:
     - `background-color: #F6F7F8;`
     - `border-radius: 16px;`
     - `padding: 16px;`
     - `margin-top: 12px;`
     - Text: `"Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions."` (`Inter 14px #616161`).
2. **Collapsed Rows** (`No-code Development`, `MVP prototyping`, `Ongoing Design Partner`):
   - Single height row (`padding: 14px 20px`).
   - Icon badge on left, title in center, chevron-down on right.

#### Right Column (Visual Card):
- Large rounded image card (`border-radius: 32px`).
- Displays a high-contrast dark screenshot / photo (e.g. glowing code terminal with orange bokeh light highlights).
- Subtly mirrors the orange brand accent in the dark visual.

---

### 6.5 4-Step Process Section & Micro-Mockups (Image 2)

A 2x2 grid of cards (`section-process`):

#### Card Structure:
- `lamosa-glass-card` with `border-radius: 32px`, `padding: 24px`.
- **Top**: Interactive Micro-Mockup Container (`background-color: #EBECEF`, `border-radius: 16px`, `aspect-ratio: 1.87`, `padding: 16px`).
- **Middle**: Numbered Pill Badge (`01`, `02`, `03`, `04`):
  - `background-color: #010309; color: #FFFFFF; font-size: 13px; font-weight: 600; padding: 4px 16px; border-radius: 100px;`
- **Bottom**:
  - Title: `"Discovery & Strategy"` (`Satoshi 20px 600 #0A0A0A`).
  - Text: `"We uncover your goals, audience, and challenges to build a clear roadmap for success."` (`Inter 14px #737373`).

#### The 4 Micro-Mockups:
1. **Mockup 01 – Video Call Interface**:
   - Dual participant video tiles with rounded corners (`border-radius: 12px`).
   - Subtle peach/coral grid dots behind tiles.
   - **Floating Call Control Bar**:
     - Obsidian pill (`background: #010309; border-radius: 100px; padding: 6px 12px; gap: 12px;`)
     - Icons: Mic, Video, Captions (`CC`), Emoji smiley, and a Red End Call Pill (`background: #E1443A`).
     - Signature 5-stop ambient shadow underneath.
2. **Mockup 02 – Analytics CRM Dashboard**:
   - Clean mini UI with search bar, "Invite", "+ Create New" button.
   - 4 stat blocks: `7030 Total leads`, `2529 Contacted`, `980 Qualified`, `240 Hot leads`.
   - Mini bar chart (`Monthly Lead Growth`) + status indicators.
3. **Mockup 03 – Code/Project Widget**:
   - Inset input bar with path: `/.lamossa/Templates.md` and trash icon.
4. **Mockup 04 – Growth Trendline & Floating Metric**:
   - Red line chart with circular node.
   - Floating pill tooltip badge:
     - `background: linear-gradient(180deg, #FFFFFF 0%, #F7C1BB 100%);`
     - `border: 1px solid #FFFFFF; border-radius: 14px; padding: 6px 14px;`
     - Text: `+429% Monthly revenue` in bold red-black text.
     - Signature ambient drop shadow underneath.

---

## 7. Interactive States & Motion Guidelines

### 7.1 Hover Interactions
- **Cards**: Subtle translateY lift on hover:
  ```css
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  ```
  `&:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06); }`
- **Buttons**:
  - Dark buttons: `background-color: #1a1a1f;` on hover.
  - Coral CTA buttons: Arrow icon inside the white circle translates `transform: translate(2px, -2px);` on hover.
  - Links: `color: #0A0A0A;` transition.

### 7.2 Page Load & Scroll In-View Animation (Framer Motion Spec)
All major cards share the staggered slide-up enter effect:
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
```

---

## 8. Ready-To-Use Code Implementations

### 8.1 Tailwind CSS Config (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#F6F7F8',
        panel: {
          start: '#F6F7F8',
          end: '#EBECEF',
        },
        card: {
          top: '#FFFFFF',
          bottom: '#FCFCFD',
        },
        obsidian: '#010309',
        coral: {
          top: '#FF4D36',
          bot: '#E1443A',
          glow: 'rgba(225, 68, 57, 0.25)',
        },
        lamosa: {
          black: '#0A0A0A',
          gray: '#737373',
          muted: '#A3A3A3',
          tint: '#F7C1BB',
        }
      },
      fontFamily: {
        display: ['Satoshi', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
        '6xl': '56px',
      },
      boxShadow: {
        'obsidian-float': '0 7px 16px rgba(1,3,9,0.25), 0 29px 29px rgba(1,3,9,0.20), 0 65px 39px rgba(1,3,9,0.15), 0 115px 46px rgba(1,3,9,0.06), 0 180px 51px rgba(1,3,9,0.03)',
        'coral-glow': '0px 4px 16px 0px rgba(225, 68, 57, 0.25)',
        'glass-edge': '0 1px 2px 0 rgba(0, 0, 0, 0.02), 0 4px 16px 0 rgba(0, 0, 0, 0.03), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)',
      }
    }
  }
}
```

### 8.2 Pure CSS Stylesheet (`lamosa-theme.css`)

```css
:root {
  --bg-canvas: #F6F7F8;
  --panel-gradient: linear-gradient(180deg, #F6F7F8 0%, #EBECEF 100%);
  --panel-border: rgba(255, 255, 255, 0.45);
  --card-gradient: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);
  --card-border: #FFFFFF;
  --color-obsidian: #010309;
  --color-text-title: #0A0A0A;
  --color-text-body: #737373;
  --color-coral-top: #FF4D36;
  --color-coral-bot: #E1443A;
  --shadow-obsidian: 0 7px 16px rgba(1, 3, 9, 0.25), 0 29px 29px rgba(1, 3, 9, 0.20), 0 65px 39px rgba(1, 3, 9, 0.15), 0 115px 46px rgba(1, 3, 9, 0.06), 0 180px 51px rgba(1, 3, 9, 0.03);
  --shadow-coral: 0 4px 16px rgba(225, 68, 57, 0.25);
}

body {
  background-color: var(--bg-canvas);
  color: var(--color-text-title);
  font-family: 'Inter', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

/* 1. Recessed Container Panel */
.lamosa-panel {
  background: var(--panel-gradient);
  border: 1px solid var(--panel-border);
  border-radius: 56px;
  padding: 24px;
}

/* 2. Elevated Glass Card */
.lamosa-card {
  background: var(--card-gradient);
  border: 1px solid var(--card-border);
  border-radius: 32px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255,255,255,0.9);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.lamosa-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,1);
}

/* 3. Floating Obsidian Pill */
.lamosa-pill-obsidian {
  background-color: var(--color-obsidian);
  border-radius: 99px;
  border: 1px solid rgb(24, 24, 27);
  box-shadow: var(--shadow-obsidian);
  color: #FFFFFF;
}

/* 4. Coral CTA Button */
.lamosa-btn-coral {
  background: linear-gradient(180deg, var(--color-coral-top) 0%, var(--color-coral-bot) 100%);
  border: 1px solid rgba(252, 233, 231, 0.25);
  border-radius: 99px;
  color: #FFFFFF;
  box-shadow: var(--shadow-coral);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 22px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lamosa-btn-coral:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(225, 68, 57, 0.35);
}

.lamosa-btn-coral .icon-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #F3F4F6;
  border: 1px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #010309;
}
```

### 8.3 React / HTML Blueprint for an Impact Metric Card

```tsx
export function MetricCard({
  icon,
  metric,
  title,
  description
}: {
  icon: React.ReactNode;
  metric: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-col justify-between p-6 bg-gradient-to-b from-white to-[#FCFCFD] border border-white rounded-[32px] overflow-hidden min-h-[300px] shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:-translate-y-1 transition-all duration-300">
      {/* Floating Obsidian Icon Pill */}
      <div className="w-[80px] h-[48px] rounded-full bg-[#010309] border border-zinc-900 text-white flex items-center justify-center shadow-[0_7px_16px_rgba(1,3,9,0.25),0_29px_29px_rgba(1,3,9,0.20),0_65px_39px_rgba(1,3,9,0.15),0_115px_46px_rgba(1,3,9,0.06),0_180px_51px_rgba(1,3,9,0.03)]">
        {icon}
      </div>

      {/* Metric Content */}
      <div className="mt-auto pt-8">
        <div className="font-['Satoshi'] text-[36px] font-bold tracking-[-0.05em] text-[#0A0A0A] leading-tight mb-2">
          {metric}
        </div>
        <h3 className="font-['Satoshi'] text-[18px] font-semibold text-[#0A0A0A] mb-2 leading-snug">
          {title}
        </h3>
        <p className="font-['Inter'] text-[14px] font-normal leading-relaxed text-[#737373]">
          {description}
        </p>
      </div>
    </div>
  );
}
```

---

## 9. Summary & Quick Implementation Checklist

When implementing the Lamosa design in your own project:

- [x] **Set canvas background** to `#F6F7F8` (never pure `#FFFFFF` for the page body).
- [x] **Wrap card groups** inside a `.lamosa-recessed-panel` (`border-radius: 56px`, `padding: 24px`, gradient `#F6F7F8` to `#EBECEF`).
- [x] **Build cards** with `border-radius: 32px`, white gradient `#FFFFFF` -> `#FCFCFD`, and a crisp `1px solid #FFFFFF` border.
- [x] **Apply the 5-stop obsidian shadow** to floating pill badges, video controls, and metric tooltips to achieve that deep floating visual effect.
- [x] **Use Satoshi font** for all titles, display headers, and big metric numbers with tight tracking (`-0.04em` to `-0.05em`).
- [x] **Use Inter font** for UI controls, body descriptions, and badge text.
- [x] **Style primary CTA buttons** with a 2-stop vertical coral gradient (`#FF4D36` to `#E1443A`), a 25% white border highlight, and an inset circular arrow badge with its own ambient drop shadow.
