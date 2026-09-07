'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyOpenLedger } from '@/components/WhyOpenLedger';
import { Capabilities } from '@/components/Capabilities';
import { CouncilMode } from '@/components/CouncilMode';
import { ModelCatalog } from '@/components/ModelCatalog';
import { Tokenomics } from '@/components/Tokenomics';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7F8] text-[#0A0A0A] font-sans selection:bg-[oklch(0.696_0.204_43.5/0.15)] selection:text-[oklch(0.696_0.204_43.5)] overflow-x-clip">
      {/* 1. Floating Glass Capsule Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Second Section: Intelligence, on your terms (4 Feature Cards) */}
        <WhyOpenLedger />

        {/* 3. Third Section: Capabilities (Text, Images, Audio, Video) */}
        <Capabilities />

        {/* 4. Council Mode™ 4-Model Interactive Synthesis Stage */}
        <CouncilMode />

        {/* 4. Complete 27-Model Catalog with Infinite Ticker & Filter Tabs */}
        <ModelCatalog />

        {/* 5. $OPEN Protocol Value Flow & Deflationary Burn Cards */}
        <Tokenomics />

        {/* 6. Unified Pricing Matrix ($0 Free, $20 Pro, $30 Team) */}
        <Pricing />

        {/* 7. Glass Accordion Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 10. Pre-Footer Call to Action & Link Matrix */}
      <Footer />
    </div>
  );
}
