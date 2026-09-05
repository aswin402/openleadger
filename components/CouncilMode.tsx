'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

interface CouncilTopic {
  id: string;
  name: string;
  question: string;
  verdict: string;
  models: {
    name: string;
    provider: string;
    stance: string;
    camp: 'delay' | 'ship';
    quote: string;
    timing: string;
  }[];
}

const topics: CouncilTopic[] = [
  {
    id: 'architecture',
    name: 'Database Migration Risk',
    question: 'Our database migration is scheduled for tonight, but dual-write testing revealed a 2% replication delay. Should we proceed with the scheduled rollout behind a feature flag, or postpone by 1 week?',
    verdict: 'Proceed with dark shadow-routing: Deploy the migration code tonight with write-amplification disabled. Validate replication integrity with real read traffic for 72 hours before switching primary writes.',
    models: [
      {
        name: 'o3',
        provider: 'OpenAI',
        stance: 'Postpone / Delay',
        camp: 'delay',
        quote: 'Two live auth/data paths is what causes the incident, not the missed date. A 2% replication gap under production load will corrupt distributed session state.',
        timing: '4.1s reasoning'
      },
      {
        name: 'Gemini 2.5 Pro',
        provider: 'Google',
        stance: 'Cost Analysis',
        camp: 'delay',
        quote: 'Put numbers on both. One emergency database rollback and data reconciliation costs 14x more in engineering hours than the single calendar week you save.',
        timing: '5.2s reasoning'
      },
      {
        name: 'Claude Opus 4',
        provider: 'Anthropic',
        stance: 'Ship Behind Flag',
        camp: 'ship',
        quote: 'Ship behind a shadow-read flag without activating writes. The legacy path continues serving 100% of live traffic while you profile the 2% lag in real-world conditions.',
        timing: '3.3s reasoning'
      },
      {
        name: 'DeepSeek R1',
        provider: 'DeepSeek',
        stance: 'Cut Scope & Ship',
        camp: 'ship',
        quote: 'The migration timeline slipped because the migration scope grew. Strip the non-critical audit tables and ship the core session store tonight.',
        timing: '2.6s reasoning'
      }
    ]
  },
  {
    id: 'security',
    name: 'Zero-Retention Memory Protocol',
    question: 'How can we provide cross-model persistent memory for users without persisting conversation history on central servers?',
    verdict: 'Implement client-side encrypted vector embeddings synced via private user enclaves with ephemeral ephemeral key exchange. Zero plain text touches central disk.',
    models: [
      {
        name: 'o3',
        provider: 'OpenAI',
        stance: 'Enclave Storage',
        camp: 'delay',
        quote: 'Ephemeral hardware enclaves (AWS Nitro / Apple Private Cloud) guarantee zero operator access even under subpoena.',
        timing: '3.8s reasoning'
      },
      {
        name: 'Gemini 2.5 Pro',
        provider: 'Google',
        stance: 'Local Device DB',
        camp: 'delay',
        quote: 'Store vector embeddings in IndexedDB on the client device. Re-inject relevant memories directly into prompt headers.',
        timing: '4.7s reasoning'
      },
      {
        name: 'Claude Opus 4',
        provider: 'Anthropic',
        stance: 'Hybrid Ephemeral',
        camp: 'ship',
        quote: 'Combine local device cache with zero-knowledge homomorphic token routing. The proxy never inspects memory payload.',
        timing: '3.1s reasoning'
      },
      {
        name: 'DeepSeek R1',
        provider: 'DeepSeek',
        stance: 'Stateless Context',
        camp: 'ship',
        quote: 'Encrypt session tokens client-side with user passphrase; models decrypt transiently in RAM per stream request.',
        timing: '2.4s reasoning'
      }
    ]
  },
  {
    id: 'pricing',
    name: 'Subscription vs Pay-Per-Token',
    question: 'Should a unified frontier intelligence layer bill as a flat $20/month subscription or strictly pass-through per-token micro-billing?',
    verdict: 'Flat $20/mo with dynamic background token routing: Provide an unrestricted everyday baseline with smart routing, offering developer API pass-through for batch automation.',
    models: [
      {
        name: 'o3',
        provider: 'OpenAI',
        stance: 'Flat Pricing',
        camp: 'ship',
        quote: 'Users hate unpredictability. Four separate $20 subscriptions is why people seek consolidation. $20 flat provides peace of mind.',
        timing: '3.5s reasoning'
      },
      {
        name: 'Gemini 2.5 Pro',
        provider: 'Google',
        stance: 'Tiered Model',
        camp: 'delay',
        quote: 'High token consumers will consume 50x median compute on 1M token windows. A hybrid quota or fair-use threshold is mandatory.',
        timing: '4.2s reasoning'
      },
      {
        name: 'Claude Opus 4',
        provider: 'Anthropic',
        stance: 'Smart Routing Buffer',
        camp: 'ship',
        quote: 'Use the router to absorb margin. Simple queries go to lightweight models, preserving high-margin reasoning budget for hard questions.',
        timing: '3.2s reasoning'
      },
      {
        name: 'DeepSeek R1',
        provider: 'DeepSeek',
        stance: 'Open Weight Offload',
        camp: 'ship',
        quote: 'Directing 60% of commodity volume to efficient open weights (DeepSeek, Llama) allows infinite flat $20 consumer pricing.',
        timing: '2.1s reasoning'
      }
    ]
  }
];

export function CouncilMode() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const activeTopic = topics[activeTopicIndex];

  return (
    <section id="council" className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto mb-20 sm:mb-28">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="lamosa-section-badge mb-4">
          <span className="lamosa-badge-dot" />
          <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] font-['Inter']">
            4 models · 1 question
          </span>
        </div>

        <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-[-0.04em] leading-tight mb-4">
          Council Mode™ <br />
          <span className="text-[#737373]">When answers need to hold up once models disagree.</span>
        </h2>

        <p className="font-['Inter'] text-sm sm:text-base text-[#737373] leading-relaxed">
          The flagship feature. Submit one prompt and witness four frontier models debate in parallel. The disagreement reveals the true tradeoffs, giving you a synthesized consensus you can actually trust.
        </p>
      </div>

      {/* Topic Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {topics.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => setActiveTopicIndex(idx)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTopicIndex === idx
                ? 'bg-[#010309] text-white shadow-md'
                : 'bg-white border border-gray-200 text-[#737373] hover:text-[#0A0A0A]'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Recessed Council Stage Panel */}
      <div className="lamosa-panel p-4 sm:p-6 lg:p-8">
        
        {/* User Prompt Box */}
        <div className="lamosa-card p-5 sm:p-6 mb-6 border border-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E1443A] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prompt submitted to the council:</span>
          </div>
          <p className="font-['Satoshi'] text-base sm:text-lg md:text-xl font-bold text-[#0A0A0A] leading-snug">
            &ldquo;{activeTopic.question}&rdquo;
          </p>
        </div>

        {/* 4 Model Response Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
          {activeTopic.models.map((m) => (
            <div
              key={m.name}
              className="lamosa-card p-5 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] border border-white"
            >
              <div>
                {/* Model Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="font-['Satoshi'] text-base sm:text-lg font-bold text-[#0A0A0A] block">
                      {m.name}
                    </span>
                    <span className="text-[11px] text-[#737373] font-medium block">
                      {m.provider}
                    </span>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      m.camp === 'delay'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {m.stance}
                  </span>
                </div>

                {/* Model Quote */}
                <p className="font-['Inter'] text-xs sm:text-sm text-[#0A0A0A] leading-relaxed italic">
                  &ldquo;{m.quote}&rdquo;
                </p>
              </div>

              {/* Timing Footer */}
              <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between text-[11px] text-[#737373]">
                <span>Inference completed</span>
                <span className="font-mono font-medium">{m.timing}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Council Consensus Synthesis Card */}
        <div className="rounded-[28px] bg-white p-5 sm:p-7 border border-emerald-300/80 shadow-[0_8px_24px_rgba(16,185,129,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Council Consensus Verdict
              </span>
              <span className="text-xs text-[#737373] font-medium hidden sm:inline">
                Synthesized across 4 models
              </span>
            </div>
            <p className="font-['Satoshi'] text-sm sm:text-base font-bold text-[#0A0A0A] leading-relaxed">
              {activeTopic.verdict}
            </p>
          </div>

          <a
            href="#pricing"
            className="flex-shrink-0 lamosa-pill-obsidian px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#1f2230] transition-colors"
          >
            Try in Council Mode
          </a>
        </div>

      </div>

    </section>
  );
}
