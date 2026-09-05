'use client';

import React from 'react';
import { Flame, ArrowUpRight } from 'lucide-react';

export function Tokenomics() {
  const steps = [
    {
      num: '01',
      title: 'Product revenue',
      body: 'People and enterprises pay to use every model in the catalog. Live and generating cash flow today.',
      preview: (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#EBECEF] rounded-2xl border border-white/60">
          <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>INVOICE_STREAM</span>
            <span className="text-emerald-700 font-semibold">+Live</span>
          </div>
          <div className="space-y-1.5 my-auto">
            <div className="flex justify-between items-center bg-white px-3 py-1.5 rounded-xl border border-gray-200/60 text-xs">
              <span className="font-medium text-[#0A0A0A]">Pro Subscribers</span>
              <span className="font-mono font-bold text-[#0A0A0A]">$20.00/mo</span>
            </div>
            <div className="flex justify-between items-center bg-white px-3 py-1.5 rounded-xl border border-gray-200/60 text-xs">
              <span className="font-medium text-[#0A0A0A]">API Batch Volume</span>
              <span className="font-mono font-bold text-[#0A0A0A]">$0.002/1K</span>
            </div>
          </div>
          <div className="text-[11px] text-[#737373] text-right font-medium">
            100% real utility demand
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Protocol fees',
      body: 'A programmatic share of every credit spent flows straight into the protocol treasury contracts.',
      preview: (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#EBECEF] rounded-2xl border border-white/60">
          <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>TREASURY_ALLOCATION</span>
            <span className="text-emerald-700 font-semibold">15.0%</span>
          </div>
          <div className="my-auto flex items-end justify-between gap-2 h-16 pt-2">
            {[35, 55, 45, 75, 60, 90, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-[#010309] rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="text-[11px] text-[#737373] flex justify-between font-medium">
            <span>Treasury Pool</span>
            <span className="font-bold text-[#0A0A0A]">Automated Smart Contract</span>
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Market buys $OPEN',
      body: 'Accumulated fees systematically buy $OPEN on open decentralized and centralized markets. Bought, never inflated.',
      preview: (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#EBECEF] rounded-2xl border border-white/60">
          <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>MARKET_BUY_ENGINE</span>
            <span className="text-[oklch(0.696_0.204_43.5)] font-semibold">EXEC_BUY</span>
          </div>
          <div className="my-auto bg-white p-3 rounded-xl border border-gray-200/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#010309] text-white flex items-center justify-center font-bold text-xs">
                $O
              </div>
              <div>
                <span className="font-bold text-xs text-[#0A0A0A] block">$OPEN Market Buy</span>
                <span className="text-[10px] text-[#737373] block">Protocol Automated Liquidity</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-[11px] text-[#737373] text-right font-medium">
            Continuous buy pressure
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Providers rewarded, surplus burns',
      body: 'Providers are rewarded first for verified compute delivered. Whatever the network does not need is burned verifiably on-chain.',
      highlight: true,
      preview: (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#EBECEF] rounded-2xl border border-white/60 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>BURN_CONTRACT</span>
            <span className="text-[oklch(0.696_0.204_43.5)] font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> Deflationary
            </span>
          </div>

          {/* Floating Pill Tooltip (+429% Monthly Burn) */}
          <div className="my-auto self-center lamosa-pill-obsidian px-4 py-2 flex items-center gap-2 text-xs font-bold text-white shadow-[0_7px_16px_rgba(1,3,9,0.25)]">
            <span className="text-[oklch(0.696_0.204_43.5)]">+429%</span>
            <span>Monthly Protocol Burn</span>
          </div>

          <div className="text-[11px] text-[#737373] flex justify-between font-medium">
            <span>Verified On-Chain</span>
            <span className="text-[oklch(0.696_0.204_43.5)] font-bold">100% Provable</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="tokenomics" className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-20 sm:mb-28">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="lamosa-section-badge mb-4">
          <span className="lamosa-badge-dot" />
          <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] font-['Inter']">
            How value flows
          </span>
        </div>

        <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-[-0.04em] leading-tight mb-4">
          The $OPEN Protocol Engine
        </h2>

        <p className="font-['Inter'] text-sm sm:text-base text-[#737373] leading-relaxed">
          The layer is live and earning today. Value created by user subscriptions directly drives protocol buybacks and burns, closing the economic loop between users and compute providers.
        </p>
      </div>

      {/* Recessed Stage Panel (Image 2 Lamosa 2x2 Process Layout) */}
      <div className="lamosa-panel p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className={`lamosa-card p-5 sm:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] border border-white ${
                st.highlight ? 'ring-1 ring-[oklch(0.696_0.204_43.5)]/25' : ''
              }`}
            >
              {/* Top Interactive Micro-Mockup Container */}
              <div className="w-full aspect-[1.87] min-h-[170px] mb-5">
                {st.preview}
              </div>

              {/* Numbered Step Pill Badge */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-6 rounded-full bg-[#010309] text-white text-xs font-bold font-mono flex items-center justify-center">
                  {st.num}
                </span>
                {st.highlight && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[oklch(0.696_0.204_43.5)]/10 text-[oklch(0.696_0.204_43.5)] text-[10px] font-bold">
                    Net Deflationary
                  </span>
                )}
              </div>

              {/* Step Title & Body */}
              <div className="mt-auto">
                <h3 className="font-['Satoshi'] text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-2 tracking-tight">
                  {st.title}
                </h3>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#737373] leading-relaxed">
                  {st.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
