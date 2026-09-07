'use client';

import React, { useState } from 'react';
import { 
  Paperclip, 
  ArrowUp, 
  PenLine, 
  Lightbulb, 
  Code2, 
  Search, 
  Sparkles, 
  ArrowDown, 
  CheckCircle2, 
  X,
  FileUp
} from 'lucide-react';
import Link from 'next/link';
import { AuiShaderBackground } from './AuiShaderBackground';

interface PromptPreset {
  id: string;
  label: string;
  icon: React.ReactNode;
  prompt: string;
  defaultModel: string;
}

const PRESETS: PromptPreset[] = [
  {
    id: 'content',
    label: 'Write content',
    icon: <PenLine className="w-3.5 h-3.5 text-[#525252]" />,
    prompt: 'Draft an executive briefing on the security guarantees of zero-retention AI architectures.',
    defaultModel: 'Claude Opus 4'
  },
  {
    id: 'brainstorm',
    label: 'Brainstorm ideas',
    icon: <Lightbulb className="w-3.5 h-3.5 text-[#525252]" />,
    prompt: 'Brainstorm 5 high-leverage products that combine multi-model consensus with edge vector search.',
    defaultModel: 'o3'
  },
  {
    id: 'code',
    label: 'Write code',
    icon: <Code2 className="w-3.5 h-3.5 text-[#525252]" />,
    prompt: 'Write a TypeScript client that routes queries across Claude, o3, and Gemini with streaming fallback.',
    defaultModel: 'Claude Sonnet 4'
  },
  {
    id: 'research',
    label: 'Research a topic',
    icon: <Search className="w-3.5 h-3.5 text-[#525252]" />,
    prompt: 'Analyze trade-offs between client-side encrypted vector embeddings and hardware enclave memory.',
    defaultModel: 'Gemini 2.5 Pro'
  },
  {
    id: 'surprise',
    label: 'Surprise me',
    icon: <Sparkles className="w-3.5 h-3.5 text-[#525252]" />,
    prompt: 'Compare how 4 frontier models analyze a database migration risk under 2% replication delay.',
    defaultModel: 'Council Mode™ (4 Models)'
  }
];

export function Hero() {
  const [query, setQuery] = useState('');
  const [activeModel, setActiveModel] = useState('Claude Opus 4');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [attachedFile, setAttachedFile] = useState<string | null>(null);

  const handleSelectPreset = (preset: PromptPreset) => {
    setQuery(preset.prompt);
    setActiveModel(preset.defaultModel);
    runSimulation(preset.prompt, preset.defaultModel);
  };

  const handleAttachMock = () => {
    if (attachedFile) {
      setAttachedFile(null);
    } else {
      setAttachedFile('system_architecture.pdf (240 KB)');
    }
  };

  const runSimulation = (promptText: string, modelName: string) => {
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedResponse(
        `[${modelName}] Routed via Zero-Log Ephemeral Proxy. 0 tokens retained on server disk. Processing "${promptText.slice(0, 60)}..." completed with 100% private session encryption.`
      );
    }, 750);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    runSimulation(query, activeModel);
  };

  return (
    <section className="relative isolate w-full min-h-screen min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 text-center overflow-hidden border-b border-black/10">
      
      {/* 1. Luminous Fluid Animated Gradient Background (Matching user design) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAF6F2] pointer-events-none w-full h-full">
        {/* WebGL Canvas running fluid Perlin noise shader */}
        <AuiShaderBackground imageSrc="/images/hero-ambient-gradient.png" active={true} />

        {/* Ambient Glowing Depth Orbs (Top-right radiant orange, bottom-left warm peach) */}
        <div className="absolute -top-28 -right-28 w-[550px] h-[550px] bg-gradient-to-br from-[#FF7A29]/25 via-[#FFA45E]/15 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFA86A]/20 via-[#FDCBA4]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle Tech Dot Grid Overlay Texture */}
        <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-30 mix-blend-multiply" />
      </div>

      {/* Invisible spacing top anchor */}
      <div className="w-full h-2 relative z-10" />

      {/* Main Center Stage */}
      <div className="w-full max-w-4xl flex flex-col items-center my-auto py-6 sm:py-10 relative z-10">
        
        {/* Editorial Serif Heading with high-contrast text */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-7 sm:mb-9 select-none drop-shadow-xs">
          Ask anything
        </h1>

        {/* Capsule Search / Input Bar */}
        <div className="w-full max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center bg-white/90 backdrop-blur-2xl rounded-full pl-4 sm:pl-5 pr-2 py-2 sm:py-2.5 border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)] hover:bg-white focus-within:bg-white focus-within:ring-2 focus-within:ring-[#FF6600]/30 transition-all"
          >
            {/* Left Paperclip Attachment Button */}
            <button
              type="button"
              onClick={handleAttachMock}
              className={`p-1.5 rounded-full transition-colors ${
                attachedFile ? 'text-[#FF6600] bg-orange-50' : 'text-[#8E8E93] hover:text-[#0A0A0A]'
              }`}
              title={attachedFile ? 'Remove attached file' : 'Attach document or image'}
              aria-label="Attach file"
            >
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
            </button>

            {/* Input Text Field */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything privately..."
              className="flex-1 bg-transparent px-3 py-2 text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#8E8E93] focus:outline-none font-normal"
            />

            {/* Right Up-Arrow Submit Capsule Circle */}
            <button
              type="submit"
              disabled={isSimulating || !query.trim()}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A0A0A] hover:bg-[#FF6600] text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-[#0A0A0A] flex-shrink-0 cursor-pointer shadow-xs"
              aria-label="Send prompt"
            >
              {isSimulating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </form>

          {/* Attached File Pill Preview */}
          {attachedFile && (
            <div className="mt-2.5 flex items-center justify-between px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-black/[0.08] rounded-full text-xs text-[#0A0A0A] max-w-xs mx-auto animate-in fade-in duration-150 shadow-xs">
              <div className="flex items-center gap-2 truncate">
                <FileUp className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
                <span className="truncate font-medium">{attachedFile}</span>
              </div>
              <button
                type="button"
                onClick={() => setAttachedFile(null)}
                className="text-[#737373] hover:text-black ml-2"
                aria-label="Remove attachment"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* 5 Suggestion Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-5">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelectPreset(p)}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white/85 hover:bg-white backdrop-blur-md rounded-full border border-black/[0.08] hover:border-black/[0.15] text-xs sm:text-sm font-medium text-[#1F2937] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {p.icon}
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Simulation Drawer */}
          {simulatedResponse && (
            <div className="mt-5 p-4 sm:p-5 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.08] text-left animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[#0A0A0A]">
                    {activeModel} Response (Private Enclave)
                  </span>
                </div>
                <button
                  onClick={() => setSimulatedResponse(null)}
                  className="text-gray-400 hover:text-black text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-3 font-normal">
                {simulatedResponse}
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#737373] pt-2 border-t border-gray-100">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero disk logs retained
                </span>
                <Link href="#models" className="text-[#FF6600] hover:underline font-medium">
                  Switch model in catalog →
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Bottom Sub-Navigation Area */}
      <div className="w-full flex flex-col items-center gap-4 mt-auto relative z-10">
        
        {/* Also On Pills with Official Platform Logos */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[11px] font-semibold text-[#737373] uppercase tracking-wider font-mono">
            ALSO ON
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 hover:bg-white border border-black/[0.08] backdrop-blur-md rounded-full text-xs font-medium text-[#1F2937] shadow-xs cursor-pointer transition-colors">
            <svg className="w-3.5 h-3.5 fill-current text-[#1F2937] -mt-0.5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.4c.64-.78 1.08-1.86.96-2.95-1 .04-2.13.66-2.79 1.44-.59.68-1.1 1.77-.96 2.83 1.11.09 2.15-.55 2.79-1.32" />
            </svg>
            <span>iOS</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 hover:bg-white border border-black/[0.08] backdrop-blur-md rounded-full text-xs font-medium text-[#1F2937] shadow-xs cursor-pointer transition-colors">
            <svg className="w-3.5 h-3.5 fill-current text-[#1F2937]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.856 8.1 12 8.1s-3.5902.311-5.1368.8507L4.841 5.4477a.416.416 0 00-.5677-.1521.4157.4157 0 00-.152 1.5676l1.9972 3.4592C2.688 12.008 1.4 15.008 1.4 18.4h21.2c0-3.392-1.288-6.392-4.7185-8.0786" />
            </svg>
            <span>Android</span>
          </span>
        </div>

        {/* Smooth Scroll Anchor Link */}
        <a
          href="#why"
          className="inline-flex flex-col items-center gap-1 text-xs sm:text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors group pt-1"
        >
          <span>Learn more about OpenLedger</span>
          <ArrowDown className="w-4 h-4 text-[#525252] group-hover:text-[#0A0A0A] group-hover:translate-y-1 transition-transform" />
        </a>

      </div>

    </section>
  );
}
