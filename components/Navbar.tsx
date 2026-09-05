'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none transition-all duration-300 ${isScrolled ? 'backdrop-blur-none' : ''}`}>
      <div className="w-full max-w-[1240px] flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo */}
        <Link 
          href="#" 
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[#0A0A0A] font-bold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="text-[#E1443A] font-black font-mono">{'//'}</span>
          <span className="font-['Satoshi'] tracking-tight">OpenLedger</span>
        </Link>

        {/* Center Glass Navigation Capsule (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2.5 bg-[#FCFCFD]/90 backdrop-blur-xl border border-white rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-sm font-medium text-[#737373]">
          <Link href="#models" className="hover:text-[#0A0A0A] transition-colors">
            Models
          </Link>
          <Link href="#council" className="flex items-center gap-1.5 hover:text-[#0A0A0A] transition-colors group">
            Council Mode
            <span className="px-2 py-0.5 text-[10px] font-semibold text-white bg-[#E1443A] rounded-full shadow-[0_2px_6px_rgba(225,68,58,0.3)]">
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
            className="px-4 py-2 text-sm font-medium text-[#0A0A0A] bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white hover:border-gray-300 transition-all"
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
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#E1443A] rounded-full shadow-[0_2px_8px_rgba(225,68,58,0.3)]"
          >
            Go Pro
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-white/90 backdrop-blur-md border border-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[#0A0A0A]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 p-5 bg-[#FCFCFD]/95 backdrop-blur-2xl border border-white rounded-[28px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col gap-4 pointer-events-auto md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <Link 
            href="#models" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-2xl transition-colors"
          >
            Models Catalog (27 Models)
          </Link>
          <Link 
            href="#council" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-2xl transition-colors"
          >
            <span>Council Mode™</span>
            <span className="px-2 py-0.5 text-xs font-semibold text-white bg-[#E1443A] rounded-full">
              New
            </span>
          </Link>
          <Link 
            href="#why" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-2xl transition-colors"
          >
            Why OpenLedger
          </Link>
          <Link 
            href="#tokenomics" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-2xl transition-colors"
          >
            $OPEN Tokenomics
          </Link>
          <Link 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-2xl transition-colors"
          >
            Pricing & Plans
          </Link>
          <Link 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 text-base font-semibold text-[#0A0A0A] hover:bg-black/5 rounded-2xl transition-colors"
          >
            Frequently Asked Questions
          </Link>
          
          <div className="pt-2 border-t border-black/5 flex flex-col gap-2.5">
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-[#0A0A0A] bg-white border border-gray-200 rounded-full shadow-sm"
            >
              Start Free (No card needed)
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
