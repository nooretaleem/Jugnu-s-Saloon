/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Facebook, Instagram, Radio, Sparkles, Navigation, Phone, Clock, MessageSquareHeart } from 'lucide-react';
import { SALON_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openBookingModal: () => void;
}

export default function Footer({ setActiveTab, openBookingModal }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const footerLinks = [
    { id: 'about', label: 'About Our Legacy' },
    { id: 'services', label: 'The Treatment Menu' },
    { id: 'gallery', label: 'Aesthetic Portfolio' },
    { id: 'contact', label: 'Get in Touch' },
  ];

  return (
    <footer className="bg-rose-deep text-gold-100 border-t border-gold-400/20 relative" id="website-footer">
      {/* Decorative floral elements simulated with soft gold gradients */}
      <div className="absolute top-0 left-12 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Column 1: Brand Pitch */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <span className="text-2xl font-serif font-semibold tracking-wider text-cream-50 italic">
                Jugnu<span className="font-serif text-gold-400 font-bold">&#39;</span>s
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-sans text-gold-400 font-bold mt-1 pl-0.5">
                Saloon &amp; Spa
              </span>
            </div>

            <p className="text-xs sm:text-sm font-sans font-light text-cream-100/75 leading-relaxed">
              Islamabad’s premier sanctuary of cosmetic brilliance. We blend fine European skin health techniques with glamorous South Asian bridal artistry to enhance your natural beauty.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <a
                href={SALON_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-cream-100/5 border border-gold-400/20 rounded-full flex items-center justify-center text-gold-300 hover:text-rose-deep hover:bg-gold-400 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SALON_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-cream-100/5 border border-gold-400/20 rounded-full flex items-center justify-center text-gold-300 hover:text-rose-deep hover:bg-gold-400 transition-all"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SALON_INFO.socials.pinterest}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-cream-100/5 border border-gold-400/20 rounded-full flex items-center justify-center text-gold-300 hover:text-rose-deep hover:bg-gold-400 transition-all"
                aria-label="Pinterest Page"
              >
                <MessageSquareHeart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-serif font-bold text-sm text-gold-300 tracking-wider uppercase mb-6">
              Establishment
            </h4>
            <ul className="flex flex-col gap-3 text-xs tracking-wider font-sans font-light text-cream-100/80">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-gold-400 transition-colors cursor-pointer text-left focus:outline-none focus:ring-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={openBookingModal}
                  className="hover:text-gold-400 transition-colors cursor-pointer font-bold text-gold-300"
                >
                  Reserve Session
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact coordinates */}
          <div className="md:col-span-3 flex flex-col gap-4 text-left">
            <h4 className="font-serif font-bold text-sm text-gold-300 tracking-wider uppercase mb-2">
              Contact Detail
            </h4>

            <div className="flex flex-col gap-3.5 text-xs text-cream-100/80 font-sans font-light">
              <div className="flex items-start gap-2.5">
                <Navigation className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {SALON_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-gold-300">
                  {SALON_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>
                  {SALON_INFO.hours.weekdays} <br />
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase">Open Daily (Mon – Sun)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Box */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-serif font-bold text-sm text-gold-300 tracking-wider uppercase mb-4">
              Beauty Dispatch
            </h4>
            <p className="text-xs text-cream-100/70 font-sans font-light mb-4 leading-relaxed">
              Sign up for seasonal skincare releases, styling consults, and priority slots in Islamabad.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/5 text-xs text-cream-100 border border-gold-400/20 focus:border-gold-400 focus:outline-none placeholder-cream-100/40"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-1.5 p-1.5 bg-gold-500 rounded-lg hover:bg-gold-600 transition-colors group cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-deep group-hover:scale-105" />
                </button>
              </div>

              {subscribed && (
                <span className="text-[10px] text-gold-400 font-semibold animate-pulse mt-1 block">
                  ✓ Successfully subscribed! Check your inbox.
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-16 pt-8 border-t border-gold-400/10 flex flex-col sm:flex-row justify-between items-center text-xs text-cream-100/50 gap-4">
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Premium Ladies Saloon &amp; Skin Clinic in Sector B-17, Islamabad</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Jugnu&#39;s Saloon. Designed with absolute precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
