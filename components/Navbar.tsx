'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whySection = document.getElementById('why');
      if (whySection) {
        // When the 2nd section top reaches within 80px (navbar height) of viewport top
        const rect = whySection.getBoundingClientRect();
        setIsPastHero(rect.top <= 80);
      } else {
        // Fallback: window height minus navbar height
        setIsPastHero(window.scrollY > (window.innerHeight - 80));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-2xl border-b border-black/[0.08]'
          : isPastHero
          ? 'bg-white/90 backdrop-blur-2xl border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="#" 
          className="flex items-center gap-2 text-[#0A0A0A] font-bold text-lg tracking-tight hover:opacity-85 transition-opacity"
        >
          <span className="text-[oklch(0.696_0.204_43.5)] font-black font-mono">{'//'}</span>
          <span className="font-['Satoshi'] tracking-tight">OpenLedger</span>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#525252]">
          <Link href="#models" className="hover:text-[#0A0A0A] transition-colors">
            Models
          </Link>
          <Link href="#council" className="flex items-center gap-1.5 hover:text-[#0A0A0A] transition-colors group">
            <span>Council Mode</span>
            <span className="px-2 py-0.5 text-[10px] font-semibold text-white bg-[oklch(0.696_0.204_43.5)] rounded-full shadow-[0_2px_6px_oklch(0.696_0.204_43.5/0.3)]">
              New
            </span>
          </Link>
          <Link href="#why" className="hover:text-[#0A0A0A] transition-colors">
            Why OpenLedger
          </Link>
          <Link href="#tokenomics" className="hover:text-[#0A0A0A] transition-colors">
            $OPEN Token
          </Link>
          <Link href="#pricing" className="hover:text-[#0A0A0A] transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-[#0A0A0A] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right Action CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#pricing"
            className="px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:text-black hover:bg-black/[0.04] rounded-full transition-all"
          >
            Sign up
          </Link>
          <Link
            href="#pricing"
            className="lamosa-btn-coral text-sm"
          >
            <span>Go Pro</span>
            <div className="icon-circle">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="#pricing"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[oklch(0.696_0.204_43.5)] rounded-full shadow-[0_2px_8px_oklch(0.696_0.204_43.5/0.3)]"
          >
            Go Pro
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="w-full bg-white/95 backdrop-blur-2xl border-b border-black/[0.08] px-5 py-6 flex flex-col gap-4 md:hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-top-2 duration-200">
          <Link 
            href="#models" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
          >
            Models Catalog (27 Models)
          </Link>
          <Link 
            href="#council" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
          >
            <span>Council Mode™</span>
            <span className="px-2 py-0.5 text-xs font-semibold text-white bg-[oklch(0.696_0.204_43.5)] rounded-full">
              New
            </span>
          </Link>
          <Link 
            href="#why" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
          >
            Why OpenLedger
          </Link>
          <Link 
            href="#tokenomics" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
          >
            $OPEN Tokenomics
          </Link>
          <Link 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
          >
            Pricing & Plans
          </Link>
          <Link 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-xl transition-colors"
          >
            Frequently Asked Questions
          </Link>
          
          <div className="pt-3 border-t border-black/5 flex flex-col gap-2.5">
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-[#0A0A0A] bg-black/[0.04] hover:bg-black/[0.08] rounded-full transition-colors"
            >
              Sign up
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full lamosa-btn-coral justify-center py-3 text-sm font-semibold"
            >
              <span>Get Unlimited Pro ($20/mo)</span>
              <div className="icon-circle">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
