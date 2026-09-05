'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      
      {/* Pre-Footer Call to Action Glass Panel */}
      <div className="lamosa-panel p-8 sm:p-12 lg:p-16 mb-16 sm:mb-20 text-center relative overflow-hidden">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#FF4D36]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="lamosa-section-badge mb-2">
            <span className="lamosa-badge-dot" />
            <span className="text-xs font-semibold text-[#0A0A0A] font-['Inter']">
              Join The Frontier
            </span>
          </div>

          <h2 className="font-['Satoshi'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-[-0.04em] leading-tight">
            One subscription. <br />
            Every model. Zero trace.
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-[#737373] leading-relaxed max-w-lg mx-auto pb-4">
            Stop paying separate $20 fees. Get GPT-4o, o3, Claude Opus 4, Gemini 2.5 Pro, and DeepSeek R1 in one private unified workspace.
          </p>

          <div>
            <Link
              href="#pricing"
              className="lamosa-btn-coral text-base py-3.5 px-8"
            >
              <span>Start Chatting Free</span>
              <div className="icon-circle">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="pt-2 text-xs text-[#737373] font-medium">
            Free to start · No credit card required · Instant access
          </div>
        </div>
      </div>

      {/* Main Footer Links Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-gray-200">
        
        {/* Brand Column (Span 2 on Mobile) */}
        <div className="col-span-2 space-y-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-bold text-[#0A0A0A]">
            <span className="text-[#E1443A] font-black font-mono">{'//'}</span>
            <span className="font-['Satoshi'] tracking-tight">OpenLedger</span>
          </Link>
          
          <p className="font-['Inter'] text-xs sm:text-sm text-[#737373] leading-relaxed max-w-xs">
            One private layer for every frontier model. Chat anywhere, keep your memory, leave no trace.
          </p>

          <div className="flex items-center gap-3 pt-2 text-[#737373]">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-gray-200 hover:text-[#0A0A0A] transition-colors" aria-label="X (Twitter)">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-gray-200 hover:text-[#0A0A0A] transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 1: Product */}
        <div className="space-y-3">
          <h4 className="font-['Satoshi'] text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            Product
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#737373]">
            <li><Link href="#models" className="hover:text-[#0A0A0A] transition-colors">Model Catalog (27)</Link></li>
            <li><Link href="#council" className="hover:text-[#0A0A0A] transition-colors">Council Mode™</Link></li>
            <li><Link href="#why" className="hover:text-[#0A0A0A] transition-colors">Private Inference</Link></li>
            <li><Link href="#pricing" className="hover:text-[#0A0A0A] transition-colors">Pricing & Plans</Link></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">iOS & Android Apps</a></li>
          </ul>
        </div>

        {/* Column 2: Developers */}
        <div className="space-y-3">
          <h4 className="font-['Satoshi'] text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            Developers
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#737373]">
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Python SDK</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">TypeScript SDK</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Model Endpoints</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Gateway Status</a></li>
          </ul>
        </div>

        {/* Column 3: Company & Legal */}
        <div className="space-y-3">
          <h4 className="font-['Satoshi'] text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            Protocol
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#737373]">
            <li><Link href="#tokenomics" className="hover:text-[#0A0A0A] transition-colors">$OPEN Tokenomics</Link></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Zero-Log Architecture</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Security Audits</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Encrypted Zero-Retention Proxy Protocol</span>
        </div>
        <p>© 2026 OpenLedger Inc. All rights reserved.</p>
      </div>

    </footer>
  );
}
