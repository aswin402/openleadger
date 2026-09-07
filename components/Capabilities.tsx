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

      // Only apply sticky progress on desktop
      if (window.innerWidth < 1024) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      // Calculate how far container has scrolled past viewport top
      const currentScrolled = -rect.top;
      const progress = Math.min(Math.max(currentScrolled / scrollableDistance, 0), 0.999);

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

    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;

    if (scrollableDistance > 0) {
      const targetScroll = containerTop + (index / STEPS.length + 0.05) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="capabilities" 
      ref={containerRef}
      className="relative w-full lg:min-h-[400vh] scroll-mt-20"
    >
      {/* Sticky Viewport Container */}
      <div className="lg:sticky lg:top-0 w-full lg:h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0 overflow-hidden">
        
        {/* Main Outer Enclosure Card in Elevated Theme Glass */}
        <div className="relative w-full max-w-[1360px] mx-auto bg-gradient-to-b from-white/95 via-white/85 to-[#FCFCFD]/75 backdrop-blur-2xl border border-white/90 rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] overflow-hidden">
          
          {/* 4 Technical Corner Brackets */}
          <CornerBracket className="absolute top-5 left-5 sm:top-7 sm:left-7" />
          <CornerBracket className="absolute top-5 right-5 sm:top-7 sm:right-7 rotate-90" />
          <CornerBracket className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 -rotate-90" />
          <CornerBracket className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 rotate-180" />

          {/* Top Header Row matching aui.io Meet Apollo-1 layout */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 sm:mb-12">
            {/* Left Kicker Badges in Theme Glass Style */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="px-3 py-1 bg-[oklch(0.696_0.204_43.5)] text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs">
                WHAT YOU CAN DO
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[#525252] font-mono text-[11px] font-semibold uppercase tracking-wider rounded-full border border-gray-200/60 shadow-xs">
                02 // CAPABILITIES
              </span>
            </div>

            {/* Right Huge Headline */}
            <div className="max-w-2xl text-left lg:text-left">
              <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.04em] text-[#0A0A0A] leading-[0.95]">
                THE BREAKTHROUGH <br className="hidden sm:inline" />
                <span className="text-[#0A0A0A]/60">FOUNDATION ENGINE</span>
              </h2>
            </div>
          </div>

          {/* Two-Column Interactive Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
            
            {/* Left Column: 5 Steps with Vertical Progress Rail (5 cols) */}
            <div className="lg:col-span-5 relative pl-6 sm:pl-8 border-l border-black/10 flex flex-col justify-center">
              
              {/* Dynamic Orange Progress Bar Indicator with Glow */}
              <div 
                className="absolute left-[-2px] w-[3px] bg-[oklch(0.696_0.204_43.5)] rounded-full shadow-[0_0_12px_oklch(0.696_0.204_43.5/0.6)] transition-all duration-300 ease-out"
                style={{
                  top: `${(activeStep * 20)}%`,
                  height: '20%'
                }}
              />

              <div className="space-y-4 sm:space-y-5">
                {STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div 
                      key={step.id}
                      onClick={() => handleStepClick(idx)}
                      className="cursor-pointer group text-left transition-all duration-300"
                      style={{
                        transform: `translateY(${isActive ? 0 : (idx - activeStep) * 2}px)`
                      }}
                    >
                      <h3 className={`font-['Satoshi'] text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                        isActive 
                          ? 'text-[#0A0A0A]' 
                          : 'text-[#8E8E93] hover:text-[#0A0A0A]'
                      }`}>
                        {step.heading}
                      </h3>

                      {/* Smoothly expanding active description with parallax fade */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? 'max-h-36 opacity-100 mt-2' : 'max-h-0 opacity-0'
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
            <div className="lg:col-span-7">
              <div className="w-full aspect-[16/10] sm:aspect-[729/460] bg-[#0E1015] rounded-2xl border border-white/10 p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col justify-between">
                
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
                    transform: `translateY(${(activeStep - 2) * 24}px)`
                  }}
                />

                {/* Parallax Stack: Container hosting all 5 Visuals */}
                <div className="relative w-full h-full flex flex-col justify-between">

                {/* VISUAL 0: Traceable Decision-Making (Image 0 White Box) */}
                {activeStep === 0 && (
                  <div key={`step-0-${replayKey}`} className="relative z-10 flex flex-col h-full justify-between animate-in fade-in duration-300">
                    <div>
                      {/* White Box Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          WHITE BOX // REASONING TIMELINE
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-[11px] text-emerald-400">ZERO DISK LOGS</span>
                        </div>
                      </div>

                      {/* Timeline Enclosure */}
                      <div className="bg-[#16181F] rounded-lg border border-white/10 p-4 sm:p-5 space-y-3.5 relative">
                        
                        {/* Connecting vertical line */}
                        <div className="absolute left-[25px] sm:left-[29px] top-6 bottom-6 w-px bg-[oklch(0.696_0.204_43.5)]/40" />

                        {/* Step A */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1 text-xs">
                            <span className="text-white font-medium">Product Details:</span>
                            <span className="text-white/60"> insufficient information in sources to answer user&apos;s prompt</span>
                            <div className="text-[11px] text-[oklch(0.696_0.204_43.5)] mt-0.5 font-mono">
                              Activating Web Search fallback tool to verify answer
                            </div>
                          </div>
                        </div>

                        {/* Step B */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-xs">
                            <span className="text-white font-medium">Activating </span>
                            <span className="text-[oklch(0.696_0.204_43.5)] font-semibold">Web Search</span>
                            <span className="text-white/60"> Tool (RAM buffer only)</span>
                          </div>
                        </div>

                        {/* Step C */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-xs">
                            <span className="text-[oklch(0.696_0.204_43.5)] font-semibold">Web Search:</span>
                            <span className="text-white/60"> Sources verified and sufficient to answer user&apos;s prompt</span>
                          </div>
                        </div>

                        {/* Step D */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-xs text-white/90">
                            Generating response across Claude Opus 4 enclave
                          </div>
                        </div>

                        {/* Step E */}
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-xs text-white/80">
                            Generating follow-up suggestions & scrubbing session memory
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-white/40">
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
                )}

                {/* VISUAL 1: Tool-Native (Image 1 Tools Toggle List) */}
                {activeStep === 1 && (
                  <div className="relative z-10 flex flex-col h-full justify-between animate-in fade-in duration-300">
                    <div>
                      {/* Tools Header matching Image 1 */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-['Satoshi'] text-lg font-bold text-white tracking-wide">
                          Tools
                        </span>
                        <button className="flex items-center gap-1 font-mono text-xs text-white/60 hover:text-white px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors">
                          <span>Add a new tool</span>
                          <Plus className="w-3 h-3 text-[oklch(0.696_0.204_43.5)]" />
                        </button>
                      </div>

                      {/* Tool Items Grid/Stack with Green Toggles */}
                      <div className="space-y-2">
                        {tools.map((tool) => (
                          <div 
                            key={tool.id}
                            onClick={() => toggleTool(tool.id)}
                            className="flex items-center justify-between px-4 py-2.5 bg-[#16181F] hover:bg-[#1A1D24] border border-white/5 hover:border-white/10 rounded-lg transition-all cursor-pointer group"
                          >
                            <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white">
                              {tool.name}
                            </span>
                            
                            {/* Toggle Switch */}
                            <div className={`w-9 h-5 rounded-full transition-colors relative flex items-center p-0.5 ${
                              tool.active ? 'bg-emerald-500' : 'bg-white/20'
                            }`}>
                              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                tool.active ? 'translate-x-4' : 'translate-x-0'
                              }`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-white/40">
                      <span>{tools.filter(t => t.active).length} Tools Connected</span>
                      <span className="font-mono text-[oklch(0.696_0.204_43.5)]">100% Accuracy Routing</span>
                    </div>
                  </div>
                )}

                {/* VISUAL 2: Rule-Based Controllability (Policies & Guardrails) */}
                {activeStep === 2 && (
                  <div className="relative z-10 flex flex-col h-full justify-between animate-in fade-in duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          STEERABILITY // SYSTEM POLICIES
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px] rounded-xs">
                          ENFORCED (RAM ONLY)
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="p-3 bg-[#16181F] border border-white/10 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Zero Disk Persistence</div>
                            <div className="text-[11px] text-white/50">Wipe session cache immediately on socket close</div>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-sm">ACTIVE [✓]</span>
                        </div>

                        <div className="p-3 bg-[#16181F] border border-white/10 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Header & IP Masking</div>
                            <div className="text-[11px] text-white/50">Strip client headers before forwarding to LLM providers</div>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-sm">ACTIVE [✓]</span>
                        </div>

                        <div className="p-3 bg-[#16181F] border border-white/10 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Unfiltered Model Output</div>
                            <div className="text-[11px] text-white/50">Bypass secondary provider censorship layers</div>
                          </div>
                          <span className="text-xs font-mono text-[oklch(0.696_0.204_43.5)] bg-[oklch(0.696_0.204_43.5)]/10 px-2 py-1 rounded-sm">ENABLED [✓]</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-white/40">
                      <span>Zero-Retention Enclave Active</span>
                      <span className="font-mono text-white/60">Strict Policy Compliance</span>
                    </div>
                  </div>
                )}

                {/* VISUAL 3: Grounded Responses (Source Attribution & Multi-Verification) */}
                {activeStep === 3 && (
                  <div className="relative z-10 flex flex-col h-full justify-between animate-in fade-in duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          GROUNDED CONSENSUS // SOURCE VERIFICATION
                        </span>
                        <span className="text-xs font-mono text-[oklch(0.696_0.204_43.5)]">
                          99.8% ACCURACY
                        </span>
                      </div>

                      <div className="bg-[#16181F] rounded-lg border border-white/10 p-4 space-y-3">
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                          <span className="text-white/60">Grounded Citation Sources:</span>
                          <span className="text-emerald-400 font-mono text-[11px]">3 Sources Verified</span>
                        </div>

                        <div className="space-y-2">
                          <div className="p-2 bg-black/30 rounded border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-white font-mono">[1] sec_filings_2026_q3.pdf</span>
                            <span className="text-white/40 font-mono text-[11px]">99.4% Match</span>
                          </div>
                          <div className="p-2 bg-black/30 rounded border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-white font-mono">[2] realtime_crypto_ledger_stream</span>
                            <span className="text-white/40 font-mono text-[11px]">Live Socket</span>
                          </div>
                          <div className="p-2 bg-black/30 rounded border border-white/5 flex items-center justify-between text-xs">
                            <span className="text-white font-mono">[3] bloomberg_terminal_feed</span>
                            <span className="text-white/40 font-mono text-[11px]">Verified</span>
                          </div>
                        </div>

                        <p className="text-xs text-white/70 italic pt-1">
                          &ldquo;Zero hallucinations detected across independent verification passes.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-white/40">
                      <span>Synthesized across 4 frontier engines</span>
                      <span className="font-mono text-emerald-400">Verified Output</span>
                    </div>
                  </div>
                )}

                {/* VISUAL 4: Continuous Fine-Tuning (Client-Side Vector Memory) */}
                {activeStep === 4 && (
                  <div className="relative z-10 flex flex-col h-full justify-between animate-in fade-in duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                          CONTINUOUS ADAPTATION // VECTOR MEMORY
                        </span>
                        <span className="font-mono text-[11px] text-emerald-400">
                          AES-256 ENCRYPTED
                        </span>
                      </div>

                      <div className="bg-[#16181F] rounded-lg border border-white/10 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white font-medium">Memory Nodes in Vault:</span>
                          <span className="text-xs font-mono text-[oklch(0.696_0.204_43.5)]">2,048 Embeddings</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between p-2 bg-black/30 rounded border border-white/5">
                            <span className="text-white/90">User Preferences & Architecture</span>
                            <span className="text-white/40 font-mono text-[10px]">Client Vault</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-black/30 rounded border border-white/5">
                            <span className="text-white/90">Project Coding Guidelines</span>
                            <span className="text-white/40 font-mono text-[10px]">Client Vault</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-black/30 rounded border border-white/5">
                            <span className="text-white/90">Enterprise System Prompts</span>
                            <span className="text-white/40 font-mono text-[10px]">Client Vault</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <button className="flex-1 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded text-xs font-semibold transition-colors">
                            Export Private Vault
                          </button>
                          <button className="flex-1 py-1.5 bg-red-500/15 hover:bg-red-500/25 text-red-400 rounded text-xs font-semibold transition-colors">
                            Instant Purge (0s)
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-white/40">
                      <span>Zero data shared with LLM providers</span>
                      <span className="font-mono text-white/60">Client-Side Ownership</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          </div>

          {/* Bottom Call to Action Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10 pt-6 border-t border-black/5">
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
