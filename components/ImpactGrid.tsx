'use client';

import React from 'react';
import { Gem, ShieldCheck, DollarSign, Trophy, ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

export function ImpactGrid() {
  return (
    <section id="impact" className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-20 sm:mb-28 scroll-mt-24">
      
      {/* Outer Recessed Panel (Lamosa Tier 1) */}
      <div className="lamosa-panel p-4 sm:p-6 lg:p-8">
        
        {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: 27+ Frontier Models */}
          <div className="lamosa-card p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[320px]">
            {/* Floating Obsidian Pill */}
            <div className="w-[74px] sm:w-[80px] h-[44px] sm:h-[48px] lamosa-pill-obsidian flex items-center justify-center">
              <Gem className="w-5 h-5 text-white" />
            </div>

            <div className="mt-auto pt-6">
              <div className="font-['Satoshi'] text-3xl sm:text-4xl font-bold tracking-[-0.05em] text-[#0A0A0A] mb-1">
                27+
              </div>
              <h3 className="font-['Satoshi'] text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2 leading-snug">
                Frontier models under one roof
              </h3>
              <p className="font-['Inter'] text-sm text-[#737373] leading-relaxed">
                Access GPT-4o, o3, Claude Opus 4, Gemini 2.5 Pro, Grok 4, DeepSeek R1, FLUX.1, and Sora without jumping between accounts.
              </p>
            </div>
          </div>

          {/* Card 2: 100% Private Inference Guarantee */}
          <div className="lamosa-card p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[320px]">
            {/* Floating Obsidian Pill */}
            <div className="w-[74px] sm:w-[80px] h-[44px] sm:h-[48px] lamosa-pill-obsidian flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>

            <div className="mt-auto pt-6">
              <div className="font-['Satoshi'] text-3xl sm:text-4xl font-bold tracking-[-0.05em] text-[#0A0A0A] mb-1">
                100%
              </div>
              <h3 className="font-['Satoshi'] text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2 leading-snug">
                Private inference guarantee
              </h3>
              <p className="font-['Inter'] text-sm text-[#737373] leading-relaxed">
                Zero chat logs stored on disk, zero training corpus contributions, and zero data resale. Your context lives strictly in your session.
              </p>
            </div>
          </div>

          {/* Card 3: Action / Pitch Card (Matte Inset with Halftone Dots) */}
          <div className="relative rounded-[32px] bg-[#EBECEF] p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[320px] overflow-hidden border border-white/60">
            {/* Background Halftone Matrix Pattern */}
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-halftone-dots opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <h3 className="font-['Satoshi'] text-2xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
                Let&apos;s start building
              </h3>
              <p className="font-['Inter'] text-sm text-[#616161] leading-relaxed max-w-[28ch]">
                One private layer. Chat anywhere, keep your memory, leave no trace.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#010309] text-white text-sm font-semibold hover:bg-[#1a1c24] transition-colors shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Card 4: $80/mo -> $20/mo Cost Savings */}
          <div className="lamosa-card p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[320px]">
            {/* Floating Obsidian Pill */}
            <div className="w-[74px] sm:w-[80px] h-[44px] sm:h-[48px] lamosa-pill-obsidian flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>

            <div className="mt-auto pt-6">
              <div className="font-['Satoshi'] text-2xl sm:text-3xl font-bold tracking-[-0.05em] text-[#0A0A0A] mb-1">
                $80/mo <span className="text-[oklch(0.696_0.204_43.5)] text-xl sm:text-2xl font-semibold">→ $20/mo</span>
              </div>
              <h3 className="font-['Satoshi'] text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2 leading-snug">
                Consolidated intelligence billing
              </h3>
              <p className="font-['Inter'] text-sm text-[#737373] leading-relaxed">
                Stop paying $20 to OpenAI, $20 to Anthropic, $20 to Google, and $20 to xAI. One unified plan gives you every frontier model.
              </p>
            </div>
          </div>

          {/* Card 5: Council Mode Consensus (2-Column Span on Desktop) */}
          <div className="lamosa-card p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[320px] md:col-span-2 lg:col-span-2">
            
            {/* Header row: Trophy Pill on Left, Demo Button on Right */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-[74px] sm:w-[80px] h-[44px] sm:h-[48px] lamosa-pill-obsidian flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-white" />
              </div>

              <Link
                href="#council"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#F6F7F8] hover:bg-white border border-gray-200 text-xs font-semibold text-[#0A0A0A] rounded-full transition-all shadow-sm"
              >
                <span>See Council Mode Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Laurel Wreath Badges Grid with Gradient Fade Mask */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 my-2 mask-gradient-fade-bottom">
              
              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#F6F7F8] rounded-full border border-white/80">
                <Award className="w-4 h-4 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#0A0A0A]">o3 & DeepSeek R1</span>
                  <span className="text-[#737373] ml-1.5">Maths & Logic</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#F6F7F8] rounded-full border border-white/80">
                <Award className="w-4 h-4 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#0A0A0A]">Claude Opus 4</span>
                  <span className="text-[#737373] ml-1.5">Editorial Drafting</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#F6F7F8] rounded-full border border-white/80">
                <Award className="w-4 h-4 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#0A0A0A]">Gemini 2.5 Pro</span>
                  <span className="text-[#737373] ml-1.5">1M Token Codebase</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#F6F7F8] rounded-full border border-white/80">
                <Award className="w-4 h-4 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#0A0A0A]">Grok 4 & FLUX.1</span>
                  <span className="text-[#737373] ml-1.5">Live Web & Image</span>
                </div>
              </div>

            </div>

            {/* Bottom Meta */}
            <div className="mt-3">
              <div className="font-['Satoshi'] text-2xl sm:text-3xl font-bold tracking-[-0.05em] text-[#0A0A0A] mb-1">
                4 Models · 1 Consensus
              </div>
              <h3 className="font-['Satoshi'] text-lg sm:text-xl font-bold text-[#0A0A0A] mb-1.5 leading-snug">
                Council Mode™ Multi-Model Synthesis
              </h3>
              <p className="font-['Inter'] text-sm text-[#737373] leading-relaxed">
                One prompt evaluated simultaneously by four top frontier models. Real-time critique and debate that reveals the single answer that holds up when models disagree.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
