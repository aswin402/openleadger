'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCw, Plus, Check } from 'lucide-react';

interface StepItem {
  id: string;
  heading: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    id: 'traceable',
    heading: 'Traceable decision-making',
    description: "Get full visibility into OpenLedger’s multi-hop reasoning process with a “white-box” view of its live tool calls and RAM-only zero-retention memory."
  },
  {
    id: 'tool-native',
    heading: 'Tool-native',
    description: "Activate any number of tools — from live web search and edge Python sandboxes to private SQL connectors and LLM agents — with 100% accuracy. For any workflow."
  },
  {
    id: 'rule-based',
    heading: 'Rule-based controllability',
    description: "With the capacity to enforce strict zero-retention policies, uncensored directives, and custom model system prompts — OpenLedger offers complete steerability."
  },
  {
    id: 'grounded',
    heading: 'Grounded responses',
    description: "Never rely solely on static training weights. Every answer is grounded with real-time sources, verified citations, and cross-model validation to eliminate hallucinations."
  },
  {
    id: 'fine-tuning',
    heading: 'Continuous fine-tuning',
    description: "OpenLedger adapts to your workflow with client-side encrypted vector memory that travels with you across any frontier model — without server logs."
  }
];

// Technical corner bracket SVG matching aui.io
function CornerBracket({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={`w-4 h-4 text-black/25 pointer-events-none ${className}`} 
      viewBox="0 0 16 16" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M1 15V1h14" />
    </svg>
  );
}

export function Capabilities() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [replayKey, setReplayKey] = useState(0);

  // Interactive state for Mockup 2: Tool Toggles
  const [tools, setTools] = useState([
    { id: 'reviews', name: 'Verified Reviews', active: true },
    { id: 'search', name: 'Web Search', active: true },
    { id: 'dialogue', name: 'General Dialogue', active: true },
    { id: 'source', name: 'Data Source', active: true },
    { id: 'details', name: 'Product Details', active: true },
    { id: 'comparison', name: 'Product Comparison', active: false }
  ]);

  const toggleTool = (id: string) => {
    setTools(prev => prev.map(t => t.id === id ? { ...t, active: !t.active } : t));
  };

  // Sticky Scroll & Parallax Engine for Desktop (aui.io style)
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      // Only calculate sticky progress on desktop screens
      if (window.innerWidth < 1024) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const navbarOffset = 64;
      const scrollableDistance = containerHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      // Distance scrolled into the container past the navbar offset
      const currentScrolled = navbarOffset - rect.top;
      const rawProgress = currentScrolled / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(progress);

      // Determine active step index
      const stepIndex = Math.min(Math.floor(progress * STEPS.length), STEPS.length - 1);
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Jump to step on click with smooth scroll to step checkpoint
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    const container = containerRef.current;
    if (!container || window.innerWidth < 1024) return;

    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;
    const navbarOffset = 64;

    if (scrollableDistance > 0) {
      const targetScroll = containerTop - navbarOffset + (index / STEPS.length + 0.02) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="capabilities" 
      ref={containerRef}
      className="relative w-full lg:h-[400vh] scroll-mt-20"
    >
      {/* Sticky Viewport Container - Sticks right under fixed navbar */}
      <div className="lg:sticky lg:top-16 w-full lg:h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        
        {/* Main Outer Enclosure Card in Elevated Theme Glass */}
        <div className="relative w-full max-w-[1360px] mx-auto bg-gradient-to-b from-white/95 via-white/85 to-[#FCFCFD]/75 backdrop-blur-2xl border border-white/90 rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] overflow-hidden">
          
          {/* 4 Technical Corner Brackets */}
          <CornerBracket className="absolute top-5 left-5 sm:top-6 sm:left-6" />
          <CornerBracket className="absolute top-5 right-5 sm:top-6 sm:right-6 rotate-90" />
          <CornerBracket className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 -rotate-90" />
          <CornerBracket className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 rotate-180" />

          {/* Top Header Row matching aui.io Meet Apollo-1 layout */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 lg:mb-8">
            {/* Left Kicker Badges in Theme Glass Style */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="px-3 py-1 bg-[oklch(0.696_0.204_43.5)] text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs">
                WHAT YOU CAN DO
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[#525252] font-mono text-[11px] font-semibold uppercase tracking-wider rounded-full border border-gray-200/60 shadow-xs">
                02 // CAPABILITIES
              </span>
            </div>

            {/* Right Headline */}
            <div className="max-w-2xl text-left lg:text-right">
              <h2 className="font-['Satoshi'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.04em] text-[#0A0A0A] leading-[0.95]">
                THE BREAKTHROUGH <br className="hidden sm:inline" />
                <span className="text-[#0A0A0A]/60">FOUNDATION ENGINE</span>
              </h2>
            </div>
          </div>

          {/* Two-Column Interactive Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-[380px] lg:min-h-[420px]">
            
            {/* Left Column: 5 Steps with Vertical Progress Rail (5 cols) */}
            <div className="lg:col-span-5 relative pl-6 sm:pl-8 flex flex-col justify-center">
              
              {/* Vertical Guide Track Line */}
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-black/10 rounded-full overflow-hidden">
                {/* Dynamic Orange Progress Bar Indicator with Glow */}
                <div 
                  className="w-full bg-[oklch(0.696_0.204_43.5)] rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_oklch(0.696_0.204_43.5)]"
                  style={{
                    height: `${Math.max(scrollProgress * 100, 15)}%`
                  }}
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                {STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div 
                      key={step.id}
                      onClick={() => handleStepClick(idx)}
                      className="cursor-pointer group text-left transition-all duration-300"
                    >
                      <h3 className={`font-['Satoshi'] text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                        isActive 
                          ? 'text-[#0A0A0A]' 
                          : 'text-[#8E8E93] hover:text-[#0A0A0A]'
                      }`}>
                        {step.heading}
                      </h3>

                      {/* Smoothly expanding active description */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? 'max-h-28 opacity-100 mt-1.5 sm:mt-2' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="font-['Inter'] text-xs sm:text-sm text-[#525252] leading-relaxed pr-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dark Viewport Card in Elevated Obsidian Glass (7 cols) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full aspect-[16/10] sm:aspect-[729/440] max-h-[440px] bg-[#0E1015] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col justify-between">
                
                {/* Authentic Tech Dot Grid Background Texture */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }} 
                />

                {/* Parallax Ambient Radial Glow Orb */}
                <div 
                  className="absolute -top-16 -right-16 w-72 h-72 bg-[oklch(0.696_0.204_43.5)]/15 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateY(${(activeStep - 2) * 20}px)`
                  }}
                />

                {/* Parallax Stack: Container hosting all 5 Visuals with smooth cross-fade */}
                <div className="relative w-full h-full flex flex-col justify-between">

                  {/* VISUAL 0: Traceable Decision-Making (Image 0 White Box) */}
                  <div 
                    key={`step-0-${replayKey}`}
                    className={`absolute inset-0 z-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      activeStep === 0 
                        ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                        : 'opacity-0 scale-98 pointer-events-none translate-y-2'
                    }`}
                  >
                    <div>
                      {/* White Box Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          WHITE BOX // REASONING TIMELINE
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-[11px] text-emerald-400">ZERO DISK LOGS</span>
                        </div>
                      </div>

                      {/* Timeline Enclosure */}
                      <div className="bg-[#16181F] rounded-lg border border-white/10 p-3.5 sm:p-4 space-y-2.5 relative">
                        
                        {/* Connecting vertical line */}
                        <div className="absolute left-[23px] sm:left-[27px] top-5 bottom-5 w-px bg-[oklch(0.696_0.204_43.5)]/40" />

                        {/* Step A */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <div className="flex-1 text-[11px] sm:text-xs leading-snug">
                            <span className="text-white font-medium">Product Details:</span>
                            <span className="text-white/60"> insufficient information in sources to answer user&apos;s prompt</span>
                            <div className="text-[10px] text-[oklch(0.696_0.204_43.5)] mt-0.5 font-mono">
                              Activating Web Search fallback tool to verify answer
                            </div>
                          </div>
                        </div>

                        {/* Step B */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <div className="text-[11px] sm:text-xs">
                            <span className="text-white font-medium">Activating </span>
                            <span className="text-[oklch(0.696_0.204_43.5)] font-semibold">Web Search</span>
                            <span className="text-white/60"> Tool (RAM buffer only)</span>
                          </div>
                        </div>

                        {/* Step C */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <div className="text-[11px] sm:text-xs">
                            <span className="text-[oklch(0.696_0.204_43.5)] font-semibold">Web Search:</span>
                            <span className="text-white/60"> Sources verified and sufficient to answer prompt</span>
                          </div>
                        </div>

                        {/* Step D */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <div className="text-[11px] sm:text-xs text-white/90">
                            Generating response across Claude Opus 4 enclave
                          </div>
                        </div>

                        {/* Step E */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <div className="text-[11px] sm:text-xs text-white/80">
                            Generating follow-up suggestions & scrubbing memory
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[11px] text-white/40">
                      <span>RAM Execution: 185ms • 0 bytes logged</span>
                      <button 
                        onClick={() => setReplayKey(k => k + 1)} 
                        className="flex items-center gap-1 text-white/60 hover:text-white font-mono transition-colors cursor-pointer"
                      >
                        <RotateCw className="w-3 h-3" />
                        <span>Replay trace</span>
                      </button>
                    </div>
                  </div>

                  {/* VISUAL 1: Tool-Native (Image 1 Tools Toggle List) */}
                  <div 
                    className={`absolute inset-0 z-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      activeStep === 1 
                        ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                        : 'opacity-0 scale-98 pointer-events-none translate-y-2'
                    }`}
                  >
                    <div>
                      {/* Tools Header matching Image 1 */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-['Satoshi'] text-base sm:text-lg font-bold text-white tracking-wide">
                          Tools
                        </span>
                        <button className="flex items-center gap-1 font-mono text-xs text-white/60 hover:text-white px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors">
                          <span>Add a new tool</span>
                          <Plus className="w-3 h-3 text-[oklch(0.696_0.204_43.5)]" />
                        </button>
                      </div>

                      {/* Tool Items Grid/Stack with Green Toggles */}
                      <div className="space-y-1.5 sm:space-y-2">
                        {tools.map((tool) => (
                          <div 
                            key={tool.id}
                            onClick={() => toggleTool(tool.id)}
                            className="flex items-center justify-between px-3.5 py-2 bg-[#16181F] hover:bg-[#1A1D24] border border-white/5 hover:border-white/10 rounded-lg transition-all cursor-pointer group"
                          >
                            <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white">
                              {tool.name}
                            </span>
                            
                            {/* Toggle Switch */}
                            <div className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center p-0.5 ${
                              tool.active ? 'bg-emerald-500' : 'bg-white/20'
                            }`}>
                              <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                                tool.active ? 'translate-x-3.5' : 'translate-x-0'
                              }`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[11px] text-white/40">
                      <span>{tools.filter(t => t.active).length} Tools Connected</span>
                      <span className="font-mono text-[oklch(0.696_0.204_43.5)]">100% Accuracy Routing</span>
                    </div>
                  </div>

                  {/* VISUAL 2: Rule-Based Controllability (Policies & Guardrails) */}
                  <div 
                    className={`absolute inset-0 z-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      activeStep === 2 
                        ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                        : 'opacity-0 scale-98 pointer-events-none translate-y-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          STEERABILITY // SYSTEM POLICIES
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px] rounded-xs">
                          ENFORCED (RAM ONLY)
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 sm:p-3 bg-[#16181F] border border-white/10 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Zero Disk Persistence</div>
                            <div className="text-[11px] text-white/50">Wipe session cache immediately on socket close</div>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-sm">ACTIVE [✓]</span>
                        </div>

                        <div className="p-2.5 sm:p-3 bg-[#16181F] border border-white/10 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Header & IP Masking</div>
                            <div className="text-[11px] text-white/50">Strip client headers before forwarding to LLMs</div>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-sm">ACTIVE [✓]</span>
                        </div>

                        <div className="p-2.5 sm:p-3 bg-[#16181F] border border-white/10 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Unfiltered Model Output</div>
                            <div className="text-[11px] text-white/50">Bypass secondary provider censorship layers</div>
                          </div>
                          <span className="text-xs font-mono text-[oklch(0.696_0.204_43.5)] bg-[oklch(0.696_0.204_43.5)]/10 px-2 py-1 rounded-sm">ENABLED [✓]</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[11px] text-white/40">
                      <span>Zero-Retention Enclave Active</span>
                      <span className="font-mono text-white/60">Strict Policy Compliance</span>
                    </div>
                  </div>

                  {/* VISUAL 3: Grounded Responses (Source Attribution & Multi-Verification) */}
                  <div 
                    className={`absolute inset-0 z-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      activeStep === 3 
                        ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                        : 'opacity-0 scale-98 pointer-events-none translate-y-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          GROUNDED CONSENSUS // SOURCE VERIFICATION
                        </span>
                        <span className="text-xs font-mono text-[oklch(0.696_0.204_43.5)]">
                          99.8% ACCURACY
                        </span>
                      </div>

                      <div className="bg-[#16181F] rounded-lg border border-white/10 p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between text-xs pb-1.5 border-b border-white/5">
                          <span className="text-white/60">Grounded Citation Sources:</span>
                          <span className="text-emerald-400 font-mono text-[11px]">3 Sources Verified</span>
                        </div>

                        <div className="space-y-1.5">
                          <div className="p-2 bg-black/30 rounded border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-white font-mono text-[11px] sm:text-xs">[1] sec_filings_2026_q3.pdf</span>
                            <span className="text-white/40 font-mono text-[10px]">99.4% Match</span>
                          </div>
                          <div className="p-2 bg-black/30 rounded border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-white font-mono text-[11px] sm:text-xs">[2] realtime_crypto_ledger_stream</span>
                            <span className="text-white/40 font-mono text-[10px]">Live Socket</span>
                          </div>
                          <div className="p-2 bg-black/30 rounded border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-white font-mono text-[11px] sm:text-xs">[3] bloomberg_terminal_feed</span>
                            <span className="text-white/40 font-mono text-[10px]">Verified</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-white/70 italic pt-0.5">
                          &ldquo;Zero hallucinations detected across independent verification passes.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[11px] text-white/40">
                      <span>Synthesized across 4 frontier engines</span>
                      <span className="font-mono text-emerald-400">Verified Output</span>
                    </div>
                  </div>

                  {/* VISUAL 4: Continuous Fine-Tuning (Client-Side Vector Memory) */}
                  <div 
                    className={`absolute inset-0 z-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      activeStep === 4 
                        ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                        : 'opacity-0 scale-98 pointer-events-none translate-y-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          CONTINUOUS ADAPTATION // VECTOR MEMORY
                        </span>
                        <span className="font-mono text-[11px] text-emerald-400">
                          AES-256 ENCRYPTED
                        </span>
                      </div>

                      <div className="bg-[#16181F] rounded-lg border border-white/10 p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white font-medium">Memory Nodes in Vault:</span>
                          <span className="text-xs font-mono text-[oklch(0.696_0.204_43.5)]">2,048 Embeddings</span>
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="flex items-center justify-between p-2 bg-black/30 rounded border border-white/5">
                            <span className="text-white/90 text-[11px] sm:text-xs">User Preferences & Architecture</span>
                            <span className="text-white/40 font-mono text-[10px]">Client Vault</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-black/30 rounded border border-white/5">
                            <span className="text-white/90 text-[11px] sm:text-xs">Project Coding Guidelines</span>
                            <span className="text-white/40 font-mono text-[10px]">Client Vault</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-black/30 rounded border border-white/5">
                            <span className="text-white/90 text-[11px] sm:text-xs">Enterprise System Prompts</span>
                            <span className="text-white/40 font-mono text-[10px]">Client Vault</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1.5">
                          <button className="flex-1 py-1 bg-white/10 hover:bg-white/15 text-white rounded text-xs font-semibold transition-colors">
                            Export Private Vault
                          </button>
                          <button className="flex-1 py-1 bg-red-500/15 hover:bg-red-500/25 text-red-400 rounded text-xs font-semibold transition-colors">
                            Instant Purge (0s)
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[11px] text-white/40">
                      <span>Zero data shared with LLM providers</span>
                      <span className="font-mono text-white/60">Client-Side Ownership</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Bottom Call to Action Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-black/5">
            <div className="flex items-center gap-3">
              <Link
                href="#models"
                className="lamosa-btn-coral text-sm"
              >
                <span>Explore all 27 models</span>
                <div className="icon-circle">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
              <Link
                href="#council"
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-black/5 hover:bg-black/10 rounded-full transition-all"
              >
                Try Council Mode™
              </Link>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#A3A3A3]">
              ZERO DISK LOGS • CLIENT-ENCRYPTED • MULTI-MODEL
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
