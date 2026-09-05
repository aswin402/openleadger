'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How is OpenLedger different from paying for ChatGPT Plus and Claude Pro directly?',
    answer: 'With OpenLedger, you get all 27 models—OpenAI, Anthropic, Google, xAI, DeepSeek, and Meta—for the price of just one single subscription ($20/mo instead of $80+/mo). More importantly, your memory persists seamlessly across all models, and your prompts are never retained on disk or used for model retraining.'
  },
  {
    question: 'What exactly is Council Mode™?',
    answer: 'Council Mode evaluates your prompt across four distinct frontier models in parallel (e.g., o3, Claude Opus 4, Gemini 2.5 Pro, and DeepSeek R1). The models answer and critique one another\'s reasoning in real time, delivering a synthesized final verdict you can rely on when models disagree.'
  },
  {
    question: 'How does OpenLedger guarantee zero data retention?',
    answer: 'We operate as an encrypted streaming proxy. Once your tokens are streamed back to your client browser, they are instantly purged from transient RAM. We maintain zero database tables for user conversation logs or prompt telemetry.'
  },
  {
    question: 'Can I use my existing OpenAI code with OpenLedger?',
    answer: 'Yes! OpenLedger exposes a standard OpenAI-compatible /v1/chat/completions endpoint. Simply replace your base_url with https://api.openledger.xyz/v1 and you can call any model in the catalog using your standard OpenAI Python or TypeScript SDK.'
  }
];

export function FAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto mb-20 sm:mb-28">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="lamosa-section-badge mb-4">
          <span className="lamosa-badge-dot" />
          <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] font-['Inter']">
            FAQ
          </span>
        </div>

        <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-[-0.04em] leading-tight mb-4">
          Got questions? <br />
          <span className="text-[#737373]">We&apos;ve got answers.</span>
        </h2>
      </div>

      {/* Accordion Stack */}
      <div className="flex flex-col gap-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={faq.question}
              onClick={() => toggleFAQ(idx)}
              className="lamosa-card p-5 sm:p-6 cursor-pointer border border-white transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-['Satoshi'] text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug">
                  {faq.question}
                </h3>
                <div className="p-1 rounded-full text-[#737373] flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {isOpen && (
                <div className="mt-3.5 pt-3.5 border-t border-gray-100 text-xs sm:text-sm text-[#737373] leading-relaxed animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
