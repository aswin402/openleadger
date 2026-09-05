'use client';

import React, { useState } from 'react';
import { Search, Sparkles, FileText, Image as ImageIcon, Video, Mic, Music } from 'lucide-react';

export interface AIModel {
  name: string;
  provider: string;
  code: string;
  kind: 'text' | 'image' | 'video' | 'audio' | 'music';
  detail: string;
  bestFor: string;
  description: string;
}

export const ALL_MODELS: AIModel[] = [
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Everyday reasoning & vision',
    description: 'The safe default when you are not sure which model to reach for. Quick, reads images as input, and strong across almost everything.'
  },
  {
    name: 'o3',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'text',
    detail: '200K Context',
    bestFor: 'Hard maths, proofs, planning',
    description: 'Thinks for longer before it answers. Worth the wait on proofs, multi-step plans and any problem where a wrong answer is expensive.'
  },
  {
    name: 'Claude Opus 4',
    provider: 'Anthropic',
    code: 'AN',
    kind: 'text',
    detail: '200K Context',
    bestFor: 'Long documents & drafting',
    description: 'The strongest writer in the catalog. Holds a long document in its head, edits carefully, and produces prose that does not read like a machine.'
  },
  {
    name: 'Claude Sonnet 4',
    provider: 'Anthropic',
    code: 'AN',
    kind: 'text',
    detail: '200K Context',
    bestFor: 'Code review & refactors',
    description: 'The balanced daily driver. Reads a large repository, follows instructions closely, and stays quick enough for back-and-forth work.'
  },
  {
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    code: 'GG',
    kind: 'text',
    detail: '1M Context',
    bestFor: 'Whole repositories & video',
    description: 'A million token window that also accepts video and audio, so it can watch a recording or read an entire codebase and answer questions about it.'
  },
  {
    name: 'Grok 4',
    provider: 'xAI',
    code: 'XA',
    kind: 'text',
    detail: '256K Context',
    bestFor: 'Live search & conversation',
    description: 'Reaches live sources while it answers, which makes it the one to ask about anything that happened this week.'
  },
  {
    name: 'GPT-4.1',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'text',
    detail: '1M Context',
    bestFor: 'Very long inputs',
    description: 'Takes a million tokens in a single request, so whole document sets and codebases go in at once without chunking.'
  },
  {
    name: 'o4-mini',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'text',
    detail: '200K Context',
    bestFor: 'Cheap reasoning at volume',
    description: 'Most of the reasoning of o3 at a fraction of the cost. Built for batch jobs and agent loops that run all day.'
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Fast everyday tasks',
    description: 'The cheapest sensible default for classification, extraction and short replies.'
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    code: 'AN',
    kind: 'text',
    detail: '200K Context',
    bestFor: 'Quick drafts & routing',
    description: 'Fast and inexpensive, with enough judgement to triage a queue of work before a larger model picks up what matters.'
  },
  {
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    code: 'GG',
    kind: 'text',
    detail: '1M Context',
    bestFor: 'High volume, low latency',
    description: 'The same enormous context at a fraction of the latency. Made for pipelines that run at scale.'
  },
  {
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    code: 'DS',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Open reasoning at low cost',
    description: 'Open weights with its reasoning on show. Competitive with closed models on maths and code for a fraction of the price.'
  },
  {
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    code: 'DS',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'General open weight work',
    description: 'A capable general model that you could also self-host, if you ever want the option to leave.'
  },
  {
    name: 'Llama 3.3 70B',
    provider: 'Meta',
    code: 'MT',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Open weights, private hosting',
    description: 'Small enough to run on your own hardware, supported by nearly every tool in the ecosystem.'
  },
  {
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    code: 'MT',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'The largest open model',
    description: 'The biggest openly licensed model here. Slower to answer, but it holds its own against closed frontier models.'
  },
  {
    name: 'Mistral Large',
    provider: 'Mistral',
    code: 'MS',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Fast structured generation',
    description: 'Reliable at JSON, tool calls and anything that has to match a schema exactly, first time.'
  },
  {
    name: 'Mistral Small',
    provider: 'Mistral',
    code: 'MS',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Cheap classification & tags',
    description: 'Tiny and quick. Ideal for tagging, routing and cleanup passes where a large model is waste.'
  },
  {
    name: 'Grok 3',
    provider: 'xAI',
    code: 'XA',
    kind: 'text',
    detail: '128K Context',
    bestFor: 'Conversation & search',
    description: 'The previous generation, still capable at open conversation and quick research.'
  },
  {
    name: 'FLUX.1',
    provider: 'Black Forest Labs',
    code: 'BF',
    kind: 'image',
    detail: 'Up to 2K Resolution',
    bestFor: 'Photoreal generation',
    description: 'Sharp, photoreal images with unusually good prompt adherence. The default for product shots and editorial work.'
  },
  {
    name: 'GPT Image',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'image',
    detail: 'Up to 2K Resolution',
    bestFor: 'Editing & inpainting',
    description: 'Generates and edits. Hand it an existing image with a mask and it changes only the part you pointed at.'
  },
  {
    name: 'Imagen 4',
    provider: 'Google',
    code: 'GG',
    kind: 'image',
    detail: 'Up to 2K Resolution',
    bestFor: 'Text inside images',
    description: 'The best here at rendering readable text inside a generated image, which most image models still fumble.'
  },
  {
    name: 'Stable Diffusion 3.5',
    provider: 'Stability AI',
    code: 'SA',
    kind: 'image',
    detail: 'Up to 2K Resolution',
    bestFor: 'Open image generation',
    description: 'Open weights, a wide style range, and a huge library of community fine tunes to draw on.'
  },
  {
    name: 'Sora',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'video',
    detail: 'Up to 20s Clips',
    bestFor: 'Video from a prompt',
    description: 'Short clips from a written description, holding subjects and style consistent across shots.'
  },
  {
    name: 'Veo 3',
    provider: 'Google',
    code: 'GG',
    kind: 'video',
    detail: 'Up to 8s with Sound',
    bestFor: 'Video with synchronized audio',
    description: 'Generates video with matching audio, so a clip arrives with its own effects and atmosphere already on it.'
  },
  {
    name: 'Whisper',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'audio',
    detail: '90+ Languages',
    bestFor: 'Speech Transcription',
    description: 'Turns speech into accurate text across languages and accents, and copes with noisy recordings.'
  },
  {
    name: 'GPT-4o Audio',
    provider: 'OpenAI',
    code: 'OA',
    kind: 'audio',
    detail: 'Speech-to-Speech',
    bestFor: 'Voice interfaces',
    description: 'Speech in, speech out, in one call. Used for voice products that answer without a text round trip.'
  },
  {
    name: 'Lyria',
    provider: 'Google',
    code: 'GG',
    kind: 'music',
    detail: 'Instrumental Tracks',
    bestFor: 'Music & soundtrack generation',
    description: 'Writes instrumental tracks from a description, with control over genre, mood and tempo.'
  }
];

export function ModelCatalog() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'text' | 'image' | 'video' | 'audio' | 'music'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModels = ALL_MODELS.filter((m) => {
    const matchesFilter = activeFilter === 'all' || m.kind === activeFilter;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getKindIcon = (kind: string) => {
    switch (kind) {
      case 'text': return <FileText className="w-3.5 h-3.5" />;
      case 'image': return <ImageIcon className="w-3.5 h-3.5" />;
      case 'video': return <Video className="w-3.5 h-3.5" />;
      case 'audio': return <Mic className="w-3.5 h-3.5" />;
      case 'music': return <Music className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="models" className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-20 sm:mb-28">
      
      {/* Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden mb-12 sm:mb-16 py-3 border-y border-gray-200/60 bg-white/60 backdrop-blur-sm rounded-2xl">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {[...ALL_MODELS, ...ALL_MODELS].map((m, i) => (
            <div key={`${m.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-[#0A0A0A]">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.696_0.204_43.5)]" />
              <span className="font-['Satoshi'] font-bold">{m.name}</span>
              <span className="text-[#737373] text-[11px] font-normal font-mono">({m.provider})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="lamosa-section-badge mb-4">
          <span className="lamosa-badge-dot" />
          <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] font-['Inter']">
            Models Available Now
          </span>
        </div>

        <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-[-0.04em] leading-tight mb-4">
          Every model you already pay for.
        </h2>

        <p className="font-['Inter'] text-sm sm:text-base text-[#737373] leading-relaxed">
          Text, images, video, audio, and music from every provider worth routing to. Pick one by name, or send <code className="text-[#0A0A0A] bg-gray-200/80 px-1.5 py-0.5 rounded text-xs font-mono font-bold">auto</code> and let the router choose per request.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        
        {/* Modality Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
          {(['all', 'text', 'image', 'video', 'audio', 'music'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#010309] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-[#737373] hover:text-[#0A0A0A]'
              }`}
            >
              {filter} {filter === 'all' ? `(${ALL_MODELS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 27 models..."
            className="w-full bg-white border border-gray-200 rounded-full pl-9 pr-4 py-2 text-xs text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[oklch(0.696_0.204_43.5)]"
          />
        </div>
      </div>

      {/* Recessed Container Grid */}
      <div className="lamosa-panel p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredModels.map((m) => (
            <div
              key={m.name}
              className="lamosa-card p-5 sm:p-6 flex flex-col justify-between min-h-[240px] border border-white"
            >
              <div>
                {/* Top Row: Provider & Modality Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider">
                    {m.provider}
                  </span>
                  
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F6F7F8] border border-gray-200 text-[11px] font-medium text-[#0A0A0A]">
                    {getKindIcon(m.kind)}
                    <span className="capitalize">{m.kind}</span>
                  </div>
                </div>

                {/* Model Title */}
                <h3 className="font-['Satoshi'] text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-1 tracking-tight">
                  {m.name}
                </h3>

                {/* Context Window / Spec Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-black/5 text-[11px] font-mono font-medium text-[#0A0A0A] mb-3">
                  {m.detail}
                </div>

                {/* Description */}
                <p className="font-['Inter'] text-xs sm:text-sm text-[#737373] leading-relaxed mb-4">
                  {m.description}
                </p>
              </div>

              {/* Best For Tag Footer */}
              <div className="pt-3 border-t border-gray-100 mt-auto">
                <span className="text-[11px] font-semibold text-[#0A0A0A]">
                  Best for: <span className="text-[oklch(0.696_0.204_43.5)] font-medium">{m.bestFor}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredModels.length === 0 && (
          <div className="text-center py-16 text-[#737373] text-sm font-medium">
            No models found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>

    </section>
  );
}
