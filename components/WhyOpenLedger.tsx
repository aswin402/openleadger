'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Wrench, FileText, CheckCircle2, ShieldCheck, Cpu, Database, Network } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export function WhyOpenLedger() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Card 1 interactive state
  const [zeroRetention, setZeroRetention] = useState(true);

  // Card 2 interactive active model in orbit
  const [activeOrbitModel, setActiveOrbitModel] = useState({
    name: 'CLAUDE OPUS 4',
    threadCount: 15,
    symbol: 'A',
    color: 'from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)]'
  });

  const TABS: TabItem[] = [
    {
      id: 'private',
      label: 'Private & Unfiltered',
      icon: <ShieldCheck className="w-4 h-4" />,
      tagline: 'Private by default. Uncensored by design.',
      description: 'Your prompts leave without your name attached and are gone the moment they are answered. No logs, no profile, and no filter of our own placed over the model you chose.',
      linkText: 'HOW PRIVACY WORKS',
      linkHref: '#faq'
    },
    {
      id: 'models',
      label: 'Multi-Model Access',
      icon: <Cpu className="w-4 h-4" />,
      tagline: 'Every frontier model, one conversation.',
      description: 'Change model in the middle of a sentence and the thread stays exactly where it was. One account, one subscription, nothing to copy between apps.',
      linkText: 'SEE EVERY MODEL',
      linkHref: '#models'
    },
    {
      id: 'memory',
      label: 'Unified Memory',
      icon: <Database className="w-4 h-4" />,
      tagline: 'One memory. Every model.',
      description: "Your files, preferences and past chats live in your account rather than inside one company's app, so whichever model answers already knows them. Export the lot whenever you want.",
      linkText: 'EXPLORE MEMORY SYSTEM',
      linkHref: '#models'
    },
    {
      id: 'agents',
      label: 'Built for Agents',
      icon: <Network className="w-4 h-4" />,
      tagline: 'One endpoint your agents can call.',
      description: 'Your agents get the same routing, memory and privacy behind a single API. Pin a model, or send auto and let the router choose the right one for each request.',
      linkText: 'READ THE API DOCS',
      linkHref: '#pricing'
    }
  ];

  // Auto-advance through tabs every 5.5s unless hovered or paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, TABS.length]);

  return (
    <section id="why" className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pt-16 sm:pt-24 mb-20 sm:mb-28 scroll-mt-16">
      
      {/* 1. Header Section matching Mockup */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        {/* Kicker Badge with orange square */}
        <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/70 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-xs bg-[oklch(0.696_0.204_43.5)]" />
          <span className="text-xs font-semibold tracking-widest text-[#737373] uppercase font-mono">
            WHY OPENLEDGER
          </span>
        </div>

        {/* Display Heading */}
        <h2 className="font-['Satoshi'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-[1.08] mb-3.5">
          Intelligence, on your terms.
        </h2>

        {/* Subheading */}
        <p className="font-['Inter'] text-base sm:text-lg text-[#737373] leading-relaxed max-w-2xl mx-auto">
          A private, uncensored layer in front of the ones you already use.
        </p>
      </div>

      {/* 2. Folder-Tabbed Outer Enclosure Card matching Mockup Image 2 */}
      <div 
        className="bg-[#E3E5EA] border border-black/5 rounded-[32px] sm:rounded-[44px] p-2.5 sm:p-4 md:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Tab Bar Row with Seamless Curved Folder Tab Architecture */}
        <div 
          className="flex items-end pl-0 overflow-x-auto scrollbar-none select-none relative"
          role="tablist"
        >
          {TABS.map((tab, idx) => {
            const isActive = activeTab === idx;

            if (isActive) {
              const isFirst = idx === 0;
              const isLast = idx === TABS.length - 1;

              return (
                <div
                  key={tab.id}
                  className={`relative z-20 bg-white pt-2.5 sm:pt-3 px-2.5 sm:px-3 pb-3 mb-[-1px] flex items-center ${
                    isFirst
                      ? 'rounded-tl-[24px] sm:rounded-tl-[32px]'
                      : 'rounded-t-[20px] sm:rounded-t-[24px]'
                  } ${isLast ? 'rounded-tr-[24px] sm:rounded-tr-[32px]' : ''}`}
                >
                  {/* Left Concave Inverted Fillet Curve (when not first tab) */}
                  {!isFirst && (
                    <svg
                      className="absolute -left-6 sm:-left-7 bottom-0 w-6 sm:w-7 h-6 sm:h-7 text-white fill-current pointer-events-none"
                      viewBox="0 0 28 28"
                    >
                      <path d="M 0 28 A 28 28 0 0 0 28 0 L 28 28 Z" />
                    </svg>
                  )}

                  {/* Active Button with Card Background (White) and Orange Text */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(idx);
                      setIsPaused(true);
                    }}
                    className="flex items-center gap-2 bg-white text-[oklch(0.696_0.204_43.5)] font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] whitespace-nowrap cursor-pointer transition-all hover:scale-[1.01]"
                    aria-selected={true}
                    role="tab"
                  >
                    <span>{tab.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.696_0.204_43.5)] animate-pulse" />
                  </button>

                  {/* Right Concave Inverted Fillet Curve (when not last tab) */}
                  {!isLast && (
                    <svg
                      className="absolute -right-6 sm:-right-7 bottom-0 w-6 sm:w-7 h-6 sm:h-7 text-white fill-current pointer-events-none"
                      viewBox="0 0 28 28"
                    >
                      <path d="M 0 0 A 28 28 0 0 0 28 28 L 0 28 Z" />
                    </svg>
                  )}
                </div>
              );
            }

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(idx);
                  setIsPaused(true);
                }}
                onMouseEnter={() => {
                  setActiveTab(idx);
                  setIsPaused(true);
                }}
                className="relative z-10 px-4 sm:px-6 py-3.5 sm:py-4 text-[#4B5563] hover:text-[#0A0A0A] font-semibold text-xs sm:text-sm md:text-base cursor-pointer transition-colors whitespace-nowrap mb-1"
                aria-selected={false}
                role="tab"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Seamless White Card Body matching Mockup 2 */}
        <div 
          className={`relative bg-white rounded-b-[24px] sm:rounded-b-[36px] p-6 sm:p-10 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white min-h-[520px] sm:min-h-[560px] md:min-h-[580px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 transition-all duration-300 overflow-hidden ${
            activeTab === 0
              ? 'rounded-tr-[24px] sm:rounded-tr-[36px]'
              : activeTab === TABS.length - 1
              ? 'rounded-tl-[24px] sm:rounded-tl-[36px]'
              : 'rounded-tl-[24px] sm:rounded-tl-[36px] rounded-tr-[24px] sm:rounded-tr-[36px]'
          }`}
          role="tabpanel"
        >
          {/* Technical Decorative Corner Accents */}
          <div className="absolute top-5 left-5 w-3.5 h-3.5 border-t-2 border-l-2 border-black/15 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-3.5 h-3.5 border-b-2 border-r-2 border-black/15 pointer-events-none" />

          {/* Left Column: Text & Content Information */}
          <div 
            key={`text-${activeTab}`} 
            className="w-full lg:w-1/2 flex flex-col justify-between h-full animate-in fade-in slide-in-from-left-2 duration-300"
          >
            <div>
              {/* Tab Category Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[oklch(0.696_0.204_43.5)] mb-3.5">
                <span>— FEATURE {activeTab + 1} OF {TABS.length}</span>
              </div>

              {/* Main Feature Title */}
              <h3 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-3 tracking-tight">
                {TABS[activeTab].label}
              </h3>

              {/* Tagline */}
              <p className="text-sm sm:text-base md:text-lg font-semibold text-[oklch(0.696_0.204_43.5)] mb-4">
                {TABS[activeTab].tagline}
              </p>

              {/* Description Body */}
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8 max-w-lg">
                {TABS[activeTab].description}
              </p>
            </div>

            {/* Feature Action Link */}
            <div>
              <Link
                href={TABS[activeTab].linkHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] hover:bg-[oklch(0.696_0.204_43.5)] text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all group"
              >
                <span>{TABS[activeTab].linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Visual Widget */}
          <div 
            key={`widget-${activeTab}`} 
            className="w-full lg:w-1/2 flex items-center justify-center animate-in fade-in zoom-in-95 duration-300"
          >
            {/* ================= TAB 0: Private & Unfiltered Widget ================= */}
            {activeTab === 0 && (
              <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#F0F5F2] to-[#E4ECE7] border border-gray-200/70 p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[350px] relative overflow-hidden shadow-inner">
                {/* Top Toggle Switch */}
                <div className="flex items-center justify-between z-10">
                  <button
                    type="button"
                    onClick={() => setZeroRetention(!zeroRetention)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-sm border border-white rounded-full shadow-xs text-xs font-semibold text-[#0A0A0A] cursor-pointer hover:bg-white transition-all"
                  >
                    <span>Zero retention mode</span>
                    <span className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors ${zeroRetention ? 'bg-[#22C55E]' : 'bg-gray-300'}`}>
                      <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${zeroRetention ? 'translate-x-4' : 'translate-x-0'}`} />
                    </span>
                  </button>

                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    {zeroRetention ? 'Active' : 'Disabled'}
                  </span>
                </div>

                {/* Center 3D Shield Graphic */}
                <div className="my-auto self-center flex flex-col items-center justify-center py-4 relative">
                  <div className="absolute w-32 h-32 bg-[#34D399]/25 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative w-24 h-28 flex items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_12px_24px_rgba(16,185,129,0.3)]">
                      <defs>
                        <linearGradient id="shieldGradWhy" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#34D399" stopOpacity="0.95" />
                          <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.98" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M50 5 L90 22 C90 68 50 110 50 110 C50 110 10 68 10 22 Z"
                        fill="url(#shieldGradWhy)"
                        stroke="rgba(255,255,255,0.85)"
                        strokeWidth="2"
                      />
                    </svg>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                      <Lock className="w-7 h-7 stroke-[2.5]" />
                    </div>
                  </div>

                  <div className="w-28 h-1.5 bg-white/70 rounded-full mt-2 blur-[0.5px]" />
                  <div className="w-16 h-1 bg-white/50 rounded-full mt-0.5" />
                </div>

                {/* Inset Footer Metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#525252] pt-3 border-t border-black/5 z-10">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ZERO DISK LOGS
                  </span>
                  <span>0 BYTES KEPT</span>
                </div>
              </div>
            )}

            {/* ================= TAB 1: Multi-Model Access Widget ================= */}
            {activeTab === 1 && (
              <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#F8F6F2] to-[#EBE9E4] border border-gray-200/70 p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[350px] relative overflow-hidden shadow-inner">
                <div className="my-auto self-center relative w-full h-48 flex items-center justify-center">
                  {/* Dashed Orbit Ring */}
                  <div className="absolute w-64 h-36 border border-dashed border-gray-400/60 rounded-[80px] pointer-events-none" />

                  {/* Central Active Model Pill */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-b ${activeOrbitModel.color} text-white font-bold text-2xl flex items-center justify-center shadow-xl ring-4 ring-white/80 animate-in zoom-in duration-200`}>
                      {activeOrbitModel.symbol}
                    </div>
                  </div>

                  {/* Satellite 1: Claude Opus 4 */}
                  <button
                    type="button"
                    onClick={() => setActiveOrbitModel({ name: 'CLAUDE OPUS 4', threadCount: 15, symbol: 'A', color: 'from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)]' })}
                    className="absolute top-2 left-6 w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)] text-white text-xs font-bold flex items-center justify-center shadow-md hover:scale-115 transition-transform cursor-pointer"
                    title="Claude Opus 4"
                  >
                    A
                  </button>

                  {/* Satellite 2: Gemini 2.5 Pro */}
                  <button
                    type="button"
                    onClick={() => setActiveOrbitModel({ name: 'GEMINI 2.5 PRO', threadCount: 15, symbol: 'G', color: 'from-[#4285F4] to-[#1A73E8]' })}
                    className="absolute top-1 right-12 w-9 h-9 rounded-full bg-[#1A73E8] text-white text-xs font-bold flex items-center justify-center shadow-md hover:scale-115 transition-transform cursor-pointer"
                    title="Gemini 2.5 Pro"
                  >
                    G
                  </button>

                  {/* Satellite 3: Grok 4 */}
                  <button
                    type="button"
                    onClick={() => setActiveOrbitModel({ name: 'GROK 4', threadCount: 15, symbol: 'X', color: 'from-[#111] to-[#000]' })}
                    className="absolute top-12 right-2 w-8 h-8 rounded-lg bg-[#111] text-white text-xs font-bold flex items-center justify-center shadow-md hover:scale-115 transition-transform cursor-pointer"
                    title="Grok 4"
                  >
                    ✕
                  </button>

                  {/* Satellite 4: DeepSeek R1 */}
                  <button
                    type="button"
                    onClick={() => setActiveOrbitModel({ name: 'DEEPSEEK R1', threadCount: 15, symbol: 'DS', color: 'from-[#1E40AF] to-[#1D4ED8]' })}
                    className="absolute bottom-2 right-10 w-9 h-9 rounded-full bg-[#1D4ED8] text-white text-[10px] font-bold flex items-center justify-center shadow-md hover:scale-115 transition-transform cursor-pointer"
                    title="DeepSeek R1"
                  >
                    DS
                  </button>

                  {/* Satellite 5: Llama 3.3 */}
                  <button
                    type="button"
                    onClick={() => setActiveOrbitModel({ name: 'LLAMA 3.3 70B', threadCount: 15, symbol: '∞', color: 'from-[#0668E1] to-[#004BB7]' })}
                    className="absolute -bottom-1 left-28 w-9 h-9 rounded-full bg-[#0668E1] text-white text-sm font-bold flex items-center justify-center shadow-md hover:scale-115 transition-transform cursor-pointer"
                    title="Llama 3.3"
                  >
                    ∞
                  </button>

                  {/* Satellite 6: o3 Reasoning */}
                  <button
                    type="button"
                    onClick={() => setActiveOrbitModel({ name: 'o3 REASONING', threadCount: 15, symbol: 'o3', color: 'from-[#10A37F] to-[#0D8A6C]' })}
                    className="absolute top-14 left-1 w-9 h-9 rounded-xl bg-[#10A37F] text-white text-xs font-bold flex items-center justify-center shadow-md hover:scale-115 transition-transform cursor-pointer"
                    title="o3 Reasoning"
                  >
                    ⬡
                  </button>
                </div>

                {/* Inset Footer Metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#525252] pt-3 border-t border-black/5 z-10">
                  <span className="font-bold text-[#0A0A0A]">{activeOrbitModel.name}</span>
                  <span>THREAD KEPT · {activeOrbitModel.threadCount} MESSAGES</span>
                </div>
              </div>
            )}

            {/* ================= TAB 2: Unified Memory Widget ================= */}
            {activeTab === 2 && (
              <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#F4F2F8] to-[#E8E4F0] border border-gray-200/70 p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[350px] relative overflow-hidden shadow-inner">
                <div className="grid grid-cols-12 gap-3 my-auto items-center">
                  {/* Stacked Memory Chips */}
                  <div className="col-span-7 space-y-2">
                    <div className="px-3.5 py-1.5 bg-white rounded-xl border border-purple-300 shadow-xs text-xs font-semibold text-[#3B0764] flex items-center justify-between">
                      <span className="truncate">Writes in British English</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0 animate-ping" />
                    </div>

                    <div className="px-3.5 py-1.5 bg-white/95 rounded-xl border border-gray-200/80 text-xs text-[#525252] truncate shadow-xs">
                      Ships on Thursdays
                    </div>

                    <div className="px-3.5 py-1.5 bg-white/95 rounded-xl border border-gray-200/80 text-xs text-[#525252] flex items-center gap-1.5 shadow-xs">
                      <FileText className="w-3.5 h-3.5 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                      <span className="truncate">brand-book.pdf</span>
                    </div>

                    <div className="px-3.5 py-1.5 bg-white/95 rounded-xl border border-gray-200/80 text-xs text-[#525252] truncate shadow-xs">
                      Prefers tables to prose
                    </div>
                  </div>

                  {/* Connecting Tree & Models */}
                  <div className="col-span-5 flex flex-col items-center justify-center relative">
                    <div className="w-0.5 h-7 bg-purple-400 mb-2.5" />

                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)] text-white text-xs font-bold flex items-center justify-center shadow-md" title="Claude">
                        A
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#10A37F] text-white text-xs font-bold flex items-center justify-center shadow-md ring-2 ring-purple-400" title="OpenAI">
                        ⬡
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#1A73E8] text-white text-xs font-bold flex items-center justify-center shadow-md" title="Gemini">
                        G
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inset Footer Metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#525252] pt-3 border-t border-black/5 z-10">
                  <span>ONE UNIFIED CONTEXT</span>
                  <span>SYNCED ACROSS ALL MODELS</span>
                </div>
              </div>
            )}

            {/* ================= TAB 3: Built for Agents Widget ================= */}
            {activeTab === 3 && (
              <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#EFF3F6] to-[#E2E8EC] border border-gray-200/70 p-6 flex flex-col justify-between min-h-[320px] sm:min-h-[350px] relative overflow-hidden shadow-inner">
                <div className="my-auto flex flex-col items-center justify-center py-2">
                  {/* API Request Pill */}
                  <div className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-xs font-mono flex items-center gap-2">
                    <span className="text-[#2563EB] font-bold">POST</span>
                    <span className="text-[#0A0A0A]">/v1/chat</span>
                    <span className="text-[#737373]">{'{ model: "auto" }'}</span>
                  </div>

                  {/* Tree Routing SVG Connectors */}
                  <svg className="w-56 h-9 text-gray-400" viewBox="0 0 192 32" fill="none">
                    <path d="M96 0 V16 H24 V32 M96 16 V32 M96 16 H168 V32" stroke="currentColor" strokeWidth="1.5" />
                  </svg>

                  {/* 3 Routed Targets */}
                  <div className="flex items-center justify-between w-64 pt-1">
                    {/* Target 1: o3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-xl bg-[#10A37F] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                        ⬡
                      </div>
                      <span className="text-[10px] font-mono text-[#737373] mt-1 font-medium">O3</span>
                    </div>

                    {/* Target 2: Sonnet 4 */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.696_0.204_43.5)] to-[oklch(0.58_0.18_40)] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                        A
                      </div>
                      <span className="text-[10px] font-mono text-[#737373] mt-1 font-medium">SONNET 4</span>
                    </div>

                    {/* Target 3: Tools (Active) */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-xl bg-[#010309] text-white text-xs font-bold flex items-center justify-center shadow-md ring-2 ring-[oklch(0.696_0.204_43.5)]/40">
                        <Wrench className="w-4 h-4 text-[oklch(0.696_0.204_43.5)]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#0A0A0A] mt-1">TOOLS</span>
                    </div>
                  </div>
                </div>

                {/* Inset Footer Metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#525252] pt-3 border-t border-black/5 z-10">
                  <span className="font-bold text-[#0A0A0A]">ROUTED TO TOOLS</span>
                  <span>SEARCH, CODE, BROWSER</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
