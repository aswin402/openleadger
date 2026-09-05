'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Pricing() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      tagline: 'Try the layer.',
      features: [
        'Daily token allowance across all models',
        'Single private memory workspace',
        'Zero retention & no logs on disk',
        'Web & responsive mobile access',
        'Standard inference routing'
      ],
      ctaText: 'Start Free',
      ctaHref: '#',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$20',
      period: 'per month',
      tagline: 'One plan instead of four.',
      features: [
        'Every frontier model (GPT-4o, o3, Claude Opus 4, Gemini 2.5 Pro)',
        'Council Mode™ multi-model consensus',
        'Unified cross-model persistent memory',
        'High-resolution image & video generation (FLUX.1, Sora)',
        'Developer API access included ($10 credits/mo)',
        'Unlimited file, code, and document uploads',
        'Smart auto-routing token optimisation'
      ],
      ctaText: 'Go Pro',
      ctaHref: '#',
      popular: true
    },
    {
      id: 'team',
      name: 'Team',
      price: '$30',
      period: 'per seat / month',
      tagline: 'Shared memory, one invoice.',
      features: [
        'Everything in Pro plan included',
        'Shared workspace team memory & folders',
        'Granular role-based access & spend caps',
        'SAML / SSO & verifiable audit logs',
        'Dedicated private hardware inference',
        'Priority SLA & centralized invoicing'
      ],
      ctaText: 'Start a Team',
      ctaHref: '#',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto mb-20 sm:mb-28">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="lamosa-section-badge mb-4">
          <span className="lamosa-badge-dot" />
          <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] font-['Inter']">
            Pricing
          </span>
        </div>

        <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-[-0.04em] leading-tight mb-4">
          Every model, one subscription.
        </h2>

        <p className="font-['Inter'] text-sm sm:text-base text-[#737373] leading-relaxed">
          Billed monthly · Cancel any time · Free to start · Nothing retained.
        </p>
      </div>

      {/* Comparison Callout Pill */}
      <div className="max-w-2xl mx-auto mb-10 p-3 sm:p-4 bg-white/80 border border-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 pl-3">
          <span className="line-through text-[#A3A3A3] font-medium">$80/month</span>
          <span className="text-[#737373] hidden sm:inline">(Separate OpenAI + Anthropic + Google + xAI)</span>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <span className="font-bold text-[#0A0A0A] font-['Satoshi'] text-base">$20/month</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
            Save 75%
          </span>
        </div>
      </div>

      {/* Recessed Grid */}
      <div className="lamosa-panel p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`lamosa-card p-6 sm:p-8 flex flex-col justify-between border ${
                p.popular
                  ? 'border-[#E1443A]/30 shadow-[0_8px_32px_rgba(225,68,57,0.12)]'
                  : 'border-white'
              }`}
            >
              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Satoshi'] text-2xl font-bold text-[#0A0A0A]">
                    {p.name}
                  </h3>
                  {p.popular && (
                    <span className="px-3 py-1 rounded-full bg-[#E1443A] text-white text-xs font-semibold shadow-sm">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-['Satoshi'] text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-xs sm:text-sm text-[#737373] font-medium">
                    {p.period}
                  </span>
                </div>

                <p className="font-['Inter'] text-xs sm:text-sm text-[#737373] mb-6">
                  {p.tagline}
                </p>

                <hr className="border-gray-100 mb-6" />

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A0A0A]">
                      <Check className="w-4 h-4 text-[#E1443A] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-4 mt-auto">
                {p.popular ? (
                  <Link
                    href={p.ctaHref}
                    className="w-full lamosa-btn-coral justify-center py-3 text-sm font-semibold"
                  >
                    <span>{p.ctaText}</span>
                    <div className="icon-circle">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={p.ctaHref}
                    className="w-full flex items-center justify-center py-3 text-sm font-semibold rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-[#0A0A0A] transition-colors shadow-sm"
                  >
                    {p.ctaText}
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
