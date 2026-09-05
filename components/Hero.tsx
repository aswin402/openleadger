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
    <section className="min-h-screen min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 text-center relative max-w-[1440px] mx-auto w-full mb-16 sm:mb-24">
      
      {/* Invisible spacing top anchor */}
      <div className="w-full h-2" />

      {/* Main Center Stage */}
      <div className="w-full max-w-4xl flex flex-col items-center my-auto py-6 sm:py-10">
        
        {/* Editorial Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-7 sm:mb-9 select-none">
          Ask anything
        </h1>

        {/* Capsule Search / Input Bar */}
        <div className="w-full max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center bg-white rounded-full pl-4 sm:pl-5 pr-2 py-2 sm:py-2.5 border border-gray-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-300 focus-within:border-gray-400 focus-within:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all"
          >
            {/* Left Paperclip Attachment Button */}
            <button
              type="button"
              onClick={handleAttachMock}
              className={`p-1.5 rounded-full transition-colors ${
                attachedFile ? 'text-[oklch(0.696_0.204_43.5)] bg-orange-50' : 'text-[#8E8E93] hover:text-[#0A0A0A]'
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
              className="flex-1 bg-transparent px-3 py-2 text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none font-normal"
            />

            {/* Right Up-Arrow Submit Capsule Circle */}
            <button
              type="submit"
              disabled={isSimulating || !query.trim()}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EBECEF] hover:bg-[#010309] text-[#737373] hover:text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-[#EBECEF] disabled:hover:text-[#737373] flex-shrink-0 cursor-pointer"
              aria-label="Send prompt"
            >
              {isSimulating ? (
                <div className="w-4 h-4 border-2 border-[#737373] border-t-transparent rounded-full animate-spin" />
              ) : (
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </form>

          {/* Attached File Pill Preview */}
          {attachedFile && (
            <div className="mt-2.5 flex items-center justify-between px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-[#0A0A0A] max-w-xs mx-auto animate-in fade-in duration-150">
              <div className="flex items-center gap-2 truncate">
                <FileUp className="w-3.5 h-3.5 text-[oklch(0.696_0.204_43.5)] flex-shrink-0" />
                <span className="truncate">{attachedFile}</span>
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
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-gray-200/80 hover:border-gray-300 text-xs sm:text-sm font-medium text-[#262626] shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-sm hover:bg-gray-50/60 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {p.icon}
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Simulation Drawer */}
          {simulatedResponse && (
            <div className="mt-5 p-4 sm:p-5 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)] text-left animate-in fade-in slide-in-from-top-2 duration-200">
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
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-3">
                {simulatedResponse}
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#737373] pt-2 border-t border-gray-100">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero disk logs retained
                </span>
                <Link href="#models" className="text-[oklch(0.696_0.204_43.5)] hover:underline font-medium">
                  Switch model in catalog →
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Bottom Sub-Navigation Area */}
      <div className="w-full flex flex-col items-center gap-4 mt-auto">
        
        {/* Also On Pills */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[11px] font-semibold text-[#A3A3A3] uppercase tracking-wider">
            ALSO ON
          </span>
          <span className="px-3 py-1 bg-white border border-gray-200/90 rounded-full text-xs font-medium text-[#262626] shadow-xs cursor-pointer hover:border-gray-400 transition-colors">
            iOS
          </span>
          <span className="px-3 py-1 bg-white border border-gray-200/90 rounded-full text-xs font-medium text-[#262626] shadow-xs cursor-pointer hover:border-gray-400 transition-colors">
            Android
          </span>
        </div>

        {/* Smooth Scroll Anchor Link */}
        <a
          href="#why"
          className="inline-flex flex-col items-center gap-1 text-xs sm:text-sm font-medium text-[#737373] hover:text-[#0A0A0A] transition-colors group pt-1"
        >
          <span>Learn more about OpenLedger</span>
          <ArrowDown className="w-4 h-4 text-[#737373] group-hover:translate-y-1 transition-transform" />
        </a>

      </div>

    </section>
  );
}
