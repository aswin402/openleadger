'use client';

import React from 'react';
import Link from 'next/link';
import { Image as ImageIcon, Video } from 'lucide-react';

interface Modality {
  id: string;
  name: string;
  count: string;
  description: string;
  gradient: string;
  shadow: string;
  icon: React.ReactNode;
}

const MODALITIES: Modality[] = [
  {
    id: 'text',
    name: 'Text',
    count: '18 MODELS',
    description: 'Chat, code, analysis and documents that run to a million tokens.',
    gradient: 'from-[#3A3F4D] to-[#1E222A]',
    shadow: 'shadow-[0_8px_20px_rgba(30,34,42,0.25)]',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    )
  },
  {
    id: 'images',
    name: 'Images',
    count: '4 MODELS',
    description: 'Generate from a prompt, or edit and inpaint an image you already have.',
    gradient: 'from-[#9333EA] to-[#6B21A8]',
    shadow: 'shadow-[0_8px_20px_rgba(107,33,168,0.3)]',
    icon: (
      <div className="relative">
        <ImageIcon className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 text-[10px] text-white">✦</span>
      </div>
    )
  },
  {
    id: 'audio',
    name: 'Audio',
    count: '3 MODELS',
    description: 'Transcription in 90+ languages, speech to speech, and music from a brief.',
    gradient: 'from-[#2DD4BF] to-[#0D9488]',
    shadow: 'shadow-[0_8px_20px_rgba(13,148,136,0.3)]',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="9" width="2.5" height="6" rx="1.25" />
        <rect x="9" y="6" width="2.5" height="12" rx="1.25" />
        <rect x="14" y="4" width="2.5" height="16" rx="1.25" />
        <rect x="19" y="8" width="2.5" height="8" rx="1.25" />
      </svg>
    )
  },
  {
    id: 'video',
    name: 'Video',
    count: '2 MODELS',
    description: 'Short clips from a written description, some of them with sound.',
    gradient: 'from-[#FB7185] to-[#E11D48]',
    shadow: 'shadow-[0_8px_20px_rgba(225,29,72,0.3)]',
    icon: (
      <div className="flex items-center justify-center">
        <Video className="w-6 h-6 text-white" />
      </div>
    )
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-20 sm:mb-28 scroll-mt-24">
      
      {/* 1. Header with Top-Right Index '02 / CAPABILITIES' */}
      <div className="flex items-center justify-between border-b border-gray-200/80 pb-3 mb-8">
        {/* Section Kicker */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.696_0.204_43.5)] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-[oklch(0.696_0.204_43.5)] uppercase font-mono">
            WHAT YOU CAN DO
          </span>
        </div>

        {/* Index Marker in Top Right */}
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A3A3A3]">
          02 / CAPABILITIES
        </span>
      </div>

      {/* 2. Main Title Row & Models Counter */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-2xl">
          <h2 className="font-['Satoshi'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-[1.08] mb-4">
            Uncensored chat, <br />
            images, video and more.
          </h2>

          <p className="font-['Inter'] text-base sm:text-lg text-[#737373] leading-relaxed">
            Text, image, video, audio, code and search in one place, all private or anonymous.
          </p>
        </div>

        {/* Models 27 Metric Counter */}
        <div className="flex flex-col items-start lg:items-end flex-shrink-0 lg:pl-10">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#A3A3A3] mb-0.5">
            MODELS
          </div>
          <div className="font-['Satoshi'] text-3xl sm:text-4xl font-bold text-[#0A0A0A]">
            27
          </div>
        </div>
      </div>

      {/* 3. 4-Column Matrix with Thin Vertical Dividers */}
      <div className="border-t border-gray-200/80 pt-8 sm:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {MODALITIES.map((mod, idx) => (
            <div
              key={mod.id}
              className={`flex flex-col lg:px-7 ${
                idx === 0
                  ? 'lg:pl-0 lg:border-r lg:border-gray-200/80'
                  : idx === 3
                  ? 'lg:pr-0'
                  : 'lg:border-r lg:border-gray-200/80'
              }`}
            >
              {/* 3D Gradient Squircle App Icon */}
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-b ${mod.gradient} flex items-center justify-center mb-5 ${mod.shadow} ring-1 ring-white/50 relative overflow-hidden`}
              >
                {/* Subtle top glossy highlight reflection */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-white/20 rounded-t-2xl pointer-events-none" />
                <div className="relative z-10">{mod.icon}</div>
              </div>

              {/* Title & Model Count Pill */}
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-['Satoshi'] text-xl font-bold text-[#0A0A0A]">
                  {mod.name}
                </h3>
                <span className="text-xs font-mono font-semibold text-[#A3A3A3] uppercase tracking-wider">
                  {mod.count}
                </span>
              </div>

              {/* Description */}
              <p className="font-['Inter'] text-xs sm:text-sm text-[#737373] leading-relaxed">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Action CTA Button & Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12 sm:mt-16 pt-4">
        <Link
          href="#models"
          className="px-6 py-3 rounded-full bg-[oklch(0.696_0.204_43.5)] hover:bg-[oklch(0.65_0.20_43.5)] text-white text-sm font-semibold shadow-sm transition-all"
        >
          See what you can make
        </Link>
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A3A3A3]">
          EVERY KIND, WITH WHAT PEOPLE USE IT FOR
        </span>
      </div>

    </section>
  );
}
