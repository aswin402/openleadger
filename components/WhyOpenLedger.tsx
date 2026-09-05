'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Wrench, FileText } from 'lucide-react';

export function WhyOpenLedger() {
  // Card 1 interactive state
  const [zeroRetention, setZeroRetention] = useState(true);

  // Card 2 interactive active model in orbit
  const [activeOrbitModel, setActiveOrbitModel] = useState({
    name: 'CLAUDE OPUS 4',
    threadCount: 15,
    symbol: 'A',
    color: 'from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)]'
  });

  return (
    <section id="why" className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-20 sm:mb-28 scroll-mt-24">
      
      {/* 1. Header Section matching Screenshot Image 0 */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-2xl">
          {/* Section Kicker Badge with dot */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.696_0.204_43.5)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-[oklch(0.696_0.204_43.5)] uppercase font-mono">
              WHY OPENLEDGER
            </span>
          </div>

          {/* Main Display Heading */}
          <h2 className="font-['Satoshi'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-[1.08] mb-3">
            Intelligence, on your terms.
          </h2>

          {/* Subheading */}
          <p className="font-['Inter'] text-base sm:text-lg text-[#737373] leading-relaxed">
            Not another model. A private, uncensored layer in front of the ones you already use.
          </p>
        </div>

        {/* Right Metrics Block */}
        <div className="flex lg:flex-col items-center lg:items-start gap-8 lg:gap-4 lg:pl-10 lg:border-l lg:border-gray-200/80 flex-shrink-0">
          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#A3A3A3] mb-0.5">
              PROVIDERS
            </div>
            <div className="font-['Satoshi'] text-3xl sm:text-4xl font-bold text-[#0A0A0A]">
              7
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#A3A3A3] mb-0.5">
              PROMPTS STORED
            </div>
            <div className="font-['Satoshi'] text-3xl sm:text-4xl font-bold text-[#0A0A0A]">
              0
            </div>
          </div>
        </div>
      </div>

      {/* 2. 2x2 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* ================= CARD 1: Private & Unfiltered ================= */}
        <div className="relative bg-white border border-gray-200/90 rounded-[32px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between group">
          
          {/* Technical Corner Brackets */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-black/30 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-black/30 pointer-events-none" />

          <div>
            <h3 className="font-['Satoshi'] text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-1.5">
              Private & Unfiltered
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[oklch(0.696_0.204_43.5)] mb-3">
              Private by default. Uncensored by design.
            </p>
            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
              Your prompts leave without your name attached and are gone the moment they are answered. No logs, no profile, and no filter of our own placed over the model you chose.
            </p>
          </div>

          {/* Visual Graphic Box 1: Shield with Lock & Retention Toggle */}
          <div className="rounded-2xl bg-gradient-to-b from-[#F0F5F2] to-[#E4ECE7] border border-white/90 p-5 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            
            {/* Top Toggle Switch */}
            <div className="flex items-center justify-between z-10">
              <button
                type="button"
                onClick={() => setZeroRetention(!zeroRetention)}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-white rounded-full shadow-xs text-xs font-semibold text-[#0A0A0A] cursor-pointer hover:bg-white transition-all"
              >
                <span>Zero retention</span>
                <span className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${zeroRetention ? 'bg-[#22C55E]' : 'bg-gray-300'}`}>
                  <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${zeroRetention ? 'translate-x-4' : 'translate-x-0'}`} />
                </span>
              </button>
            </div>

            {/* Center 3D Translucent Shield Graphic */}
            <div className="my-auto self-center flex flex-col items-center justify-center py-2 relative">
              {/* Radial ambient glow behind shield */}
              <div className="absolute w-28 h-28 bg-[#34D399]/20 rounded-full blur-xl pointer-events-none" />
              
              {/* Shield Icon Container */}
              <div className="relative w-20 h-24 flex items-center justify-center">
                <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_8px_16px_rgba(16,185,129,0.25)]">
                  <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#10B981" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 5 L90 22 C90 68 50 110 50 110 C50 110 10 68 10 22 Z"
                    fill="url(#shieldGrad)"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2"
                  />
                </svg>

                {/* Lock icon centered in shield */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                  <Lock className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>

              {/* Pedestal line */}
              <div className="w-24 h-1.5 bg-white/70 rounded-full mt-1 blur-[0.5px]" />
              <div className="w-16 h-1 bg-white/50 rounded-full mt-0.5" />
            </div>

            {/* Inset Footer Metadata */}
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#737373] pt-2 border-t border-black/5 z-10">
              <span>NOTHING TRAINED ON</span>
              <span>0 BYTES KEPT</span>
            </div>
          </div>

          {/* Card Action Link */}
          <div className="mt-5 flex justify-end">
            <Link
              href="#faq"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A0A0A] hover:text-[oklch(0.696_0.204_43.5)] transition-colors"
            >
              <span>HOW PRIVACY WORKS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>


        {/* ================= CARD 2: Multi-Model Access ================= */}
        <div className="relative bg-white border border-gray-200/90 rounded-[32px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between group">
          
          {/* Technical Corner Brackets */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-black/30 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-black/30 pointer-events-none" />

          <div>
            <h3 className="font-['Satoshi'] text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-1.5">
              Multi-Model Access
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[oklch(0.696_0.204_43.5)] mb-3">
              Every frontier model, one conversation.
            </p>
            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
              Change model in the middle of a sentence and the thread stays exactly where it was. One account, one subscription, nothing to copy between apps.
            </p>
          </div>

          {/* Visual Graphic Box 2: Central Active Model + Orbiting Ring */}
          <div className="rounded-2xl bg-gradient-to-b from-[#F8F6F2] to-[#EBE9E4] border border-white/90 p-5 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            
            <div className="my-auto self-center relative w-64 h-36 flex items-center justify-center">
              
              {/* Dashed Orbit Ring */}
              <div className="absolute w-52 h-28 border border-dashed border-gray-300 rounded-[60px] pointer-events-none" />

              {/* Central Active Model Pill */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-b ${activeOrbitModel.color} text-white font-bold text-xl flex items-center justify-center shadow-lg ring-4 ring-white/70 animate-in zoom-in duration-200`}>
                  {activeOrbitModel.symbol}
                </div>
              </div>

              {/* Orbiting Satellite 1: Claude (A) - Top Left */}
              <button
                type="button"
                onClick={() => setActiveOrbitModel({ name: 'CLAUDE OPUS 4', threadCount: 15, symbol: 'A', color: 'from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)]' })}
                className="absolute top-1 left-8 w-8 h-8 rounded-xl bg-gradient-to-br from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)] text-white text-xs font-bold flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="Claude Opus 4"
              >
                A
              </button>

              {/* Orbiting Satellite 2: Google Gemini (G) - Top Right */}
              <button
                type="button"
                onClick={() => setActiveOrbitModel({ name: 'GEMINI 2.5 PRO', threadCount: 15, symbol: 'G', color: 'from-[#4285F4] to-[#1A73E8]' })}
                className="absolute top-0 right-16 w-8 h-8 rounded-full bg-[#1A73E8] text-white text-xs font-bold flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="Gemini 2.5 Pro"
              >
                G
              </button>

              {/* Orbiting Satellite 3: xAI (X) - Center Right */}
              <button
                type="button"
                onClick={() => setActiveOrbitModel({ name: 'GROK 4', threadCount: 15, symbol: 'X', color: 'from-[#111] to-[#000]' })}
                className="absolute top-8 right-5 w-7 h-7 rounded-lg bg-[#111] text-white text-xs font-bold flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="Grok 4"
              >
                ✕
              </button>

              {/* Orbiting Satellite 4: DeepSeek (Whale) - Bottom Right */}
              <button
                type="button"
                onClick={() => setActiveOrbitModel({ name: 'DEEPSEEK R1', threadCount: 15, symbol: 'DS', color: 'from-[#1E40AF] to-[#1D4ED8]' })}
                className="absolute bottom-2 right-12 w-8 h-8 rounded-full bg-[#1D4ED8] text-white text-[10px] font-bold flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="DeepSeek R1"
              >
                DS
              </button>

              {/* Orbiting Satellite 5: Meta (Infinity) - Bottom Center */}
              <button
                type="button"
                onClick={() => setActiveOrbitModel({ name: 'LLAMA 3.3 70B', threadCount: 15, symbol: '∞', color: 'from-[#0668E1] to-[#004BB7]' })}
                className="absolute -bottom-1 left-24 w-8 h-8 rounded-full bg-[#0668E1] text-white text-xs font-bold flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="Llama 3.3"
              >
                ∞
              </button>

              {/* Orbiting Satellite 6: OpenAI (Cube) - Left Center */}
              <button
                type="button"
                onClick={() => setActiveOrbitModel({ name: 'o3 REASONING', threadCount: 15, symbol: 'o3', color: 'from-[#10A37F] to-[#0D8A6C]' })}
                className="absolute top-10 left-3 w-8 h-8 rounded-xl bg-[#10A37F] text-white text-xs font-bold flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                title="o3 Reasoning"
              >
                ⬡
              </button>
            </div>

            {/* Inset Footer Metadata */}
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#737373] pt-2 border-t border-black/5 z-10">
              <span className="font-bold text-[#0A0A0A]">{activeOrbitModel.name}</span>
              <span>THREAD KEPT · {activeOrbitModel.threadCount}</span>
            </div>
          </div>

          {/* Card Action Link */}
          <div className="mt-5 flex justify-end">
            <Link
              href="#models"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A0A0A] hover:text-[oklch(0.696_0.204_43.5)] transition-colors"
            >
              <span>SEE EVERY MODEL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>


        {/* ================= CARD 3: Unified Memory ================= */}
        <div className="relative bg-white border border-gray-200/90 rounded-[32px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between group">
          
          {/* Technical Corner Brackets */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-black/30 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-black/30 pointer-events-none" />

          <div>
            <h3 className="font-['Satoshi'] text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-1.5">
              Unified Memory
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[oklch(0.696_0.204_43.5)] mb-3">
              One memory. Every model.
            </p>
            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
              Your files, preferences and past chats live in your account rather than inside one company&apos;s app, so whichever model answers already knows them. Export the lot whenever you want.
            </p>
          </div>

          {/* Visual Graphic Box 3: Stacked Memory Cards connecting to Models */}
          <div className="rounded-2xl bg-gradient-to-b from-[#F4F2F8] to-[#E8E4F0] border border-white/90 p-5 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            
            <div className="grid grid-cols-12 gap-3 my-auto items-center">
              
              {/* Stacked Memory Chips (Left 7 Cols) */}
              <div className="col-span-7 space-y-1.5">
                {/* Active Memory Item with Purple Ring */}
                <div className="px-3 py-1.5 bg-white rounded-xl border border-purple-300 shadow-xs text-xs font-semibold text-[#3B0764] flex items-center justify-between">
                  <span className="truncate">Writes in British English</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                </div>

                <div className="px-3 py-1 bg-white/90 rounded-xl border border-gray-200/80 text-xs text-[#525252] truncate shadow-xs">
                  Ships on Thursdays
                </div>

                <div className="px-3 py-1 bg-white/90 rounded-xl border border-gray-200/80 text-xs text-[#525252] flex items-center gap-1.5 shadow-xs">
                  <FileText className="w-3 h-3 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                  <span className="truncate">brand-book.pdf</span>
                </div>

                <div className="px-3 py-1 bg-white/90 rounded-xl border border-gray-200/80 text-xs text-[#525252] truncate shadow-xs">
                  Prefers tables to prose
                </div>
              </div>

              {/* Connecting Tree & 3 Models (Right 5 Cols) */}
              <div className="col-span-5 flex flex-col items-center justify-center relative">
                {/* Subtle vertical connection line */}
                <div className="w-0.5 h-6 bg-purple-300 mb-2" />

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    A
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#10A37F] text-white text-xs font-bold flex items-center justify-center shadow-sm ring-2 ring-purple-400">
                    ⬡
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    G
                  </div>
                </div>
              </div>

            </div>

            {/* Inset Footer Metadata */}
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#737373] pt-2 border-t border-black/5 z-10">
              <span>ONE MEMORY, 3 MODELS</span>
              <span>NOTHING RE-EXPLAINED</span>
            </div>
          </div>

          {/* Card bottom spacing to align with sister card */}
          <div className="mt-5 h-4" />
        </div>


        {/* ================= CARD 4: Built for Agents ================= */}
        <div className="relative bg-white border border-gray-200/90 rounded-[32px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between group">
          
          {/* Technical Corner Brackets */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-black/30 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-black/30 pointer-events-none" />

          <div>
            <h3 className="font-['Satoshi'] text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-1.5">
              Built for Agents
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[oklch(0.696_0.204_43.5)] mb-3">
              One endpoint your agents can call.
            </p>
            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
              Your agents get the same routing, memory and privacy behind a single API. Pin a model, or send auto and let the router choose the right one for each request.
            </p>
          </div>

          {/* Visual Graphic Box 4: API Endpoint Pill & Tree Routing to Tools */}
          <div className="rounded-2xl bg-gradient-to-b from-[#EFF3F6] to-[#E2E8EC] border border-white/90 p-5 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            
            <div className="my-auto flex flex-col items-center justify-center">
              
              {/* API Request Pill */}
              <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-xs font-mono flex items-center gap-2">
                <span className="text-[#2563EB] font-bold">POST</span>
                <span className="text-[#0A0A0A]">/v1/chat</span>
                <span className="text-[#737373]">{'{ model: "auto" }'}</span>
              </div>

              {/* Tree Routing SVG Connectors */}
              <svg className="w-48 h-8 text-gray-300" viewBox="0 0 192 32" fill="none">
                <path d="M96 0 V16 H24 V32 M96 16 V32 M96 16 H168 V32" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* 3 Routed Targets */}
              <div className="flex items-center justify-between w-56 pt-1">
                {/* Target 1: o3 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-xl bg-[#10A37F] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    ⬡
                  </div>
                  <span className="text-[10px] font-mono text-[#737373] mt-1">O3</span>
                </div>

                {/* Target 2: Sonnet 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    A
                  </div>
                  <span className="text-[10px] font-mono text-[#737373] mt-1">SONNET 4</span>
                </div>

                {/* Target 3: Tools (Active Highlighted) */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-xl bg-[#010309] text-white text-xs font-bold flex items-center justify-center shadow-md ring-2 ring-[#010309]/20">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#0A0A0A] mt-1">TOOLS</span>
                </div>
              </div>

            </div>

            {/* Inset Footer Metadata */}
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#737373] pt-2 border-t border-black/5 z-10">
              <span className="font-bold text-[#0A0A0A]">ROUTED TO TOOLS</span>
              <span>SEARCH, FILES</span>
            </div>
          </div>

          {/* Card Action Link */}
          <div className="mt-5 flex justify-end">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A0A0A] hover:text-[oklch(0.696_0.204_43.5)] transition-colors"
            >
              <span>READ THE API</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
