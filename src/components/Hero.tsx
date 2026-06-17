/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, Flower2, Eye, HeartHandshake } from 'lucide-react';
import { IMAGES, SALON_INFO } from '../data';

interface HeroProps {
  setActiveTab: (tab: string) => void;
  openBookingModal: () => void;
}

export default function Hero({ setActiveTab, openBookingModal }: HeroProps) {
  return (
    <div className="relative overflow-hidden" id="hero-section">
      {/* Immersive Landing Splash Stage */}
      <div className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center bg-rose-deep">
        {/* Soft-focus warm-lit beauty background with luxury absolute dark/pink gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Jugnus Saloon Luxury Vanity Showcase"
            className="w-full h-full object-cover object-center scale-102 filter brightness-85 contrast-95"
            referrerPolicy="no-referrer"
          />
          {/* Champagne Pink and warm amber gradients for high luxury text legibility and aesthetic layering */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/90 via-rose-deep/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-deep/20 to-cream-100"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="max-w-2xl text-left">
            {/* Elegant premium banner badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/35 backdrop-blur-md mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-200 font-bold">
                Premier Ladies Parlour • B-17 Islamabad
              </span>
            </motion.div>

            {/* Luxurious Brand Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif text-cream-50 font-medium leading-tight tracking-wide mb-4"
            >
              Where Beauty <br />
              <span className="text-gold-200 italic font-light font-serif">Meets Elegance</span>
            </motion.h1>

            {/* Captivating Philosophy message */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-cream-100 font-sans font-light text-base sm:text-lg tracking-wide leading-relaxed mb-10 max-w-lg"
            >
              Step into Islamabad’s sanctuary of cosmetic artistry. Indulge in bespoke HD makeup, 24k gold skincare elixir, and exquisite couture hair updos, entirely curated to unveil your radiant inner light.
            </motion.p>

            {/* Custom CTA Action Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={openBookingModal}
                className="px-8 py-3.5 bg-gold-500 text-rose-deep tracking-widest uppercase font-bold text-xs rounded-full hover:bg-gold-200 hover:text-rose-deep cursor-pointer transition-all duration-300 shadow-lg shadow-gold-500/10 flex items-center gap-2 group border border-gold-300/35 hover:-translate-y-0.5"
                id="hero-book-cta"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                Reserve Experience
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className="px-8 py-3.5 bg-transparent text-cream-50 hover:bg-cream-100/10 tracking-widest uppercase font-semibold text-xs rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2 border border-cream-100/30"
                id="hero-explore-cta"
              >
                <Compass className="w-4 h-4" />
                Explore Services
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Pitch Section: The Pillars of Luxury */}
      <section className="bg-cream-100 py-16 sm:py-24 border-b border-gold-200/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e6d2b3_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs tracking-[0.4em] uppercase text-gold-600 font-bold mb-3 font-sans">
              The Salon Philosophy
            </h2>
            <p className="text-3xl sm:text-4xl font-serif text-rose-deep font-semibold leading-snug">
              Elevating cosmetics to fine art, designed around the contemporary elegance.
            </p>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-cream-50/70 backdrop-blur-md p-8 rounded-2xl border border-gold-200/20 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold-200/20 flex items-center justify-center text-gold-600 mb-6 border border-gold-300/25">
                <Flower2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-rose-deep uppercase tracking-widest mb-3">
                Luxurious Radiance
              </h3>
              <p className="text-sm font-sans font-light text-rose-medium/80 leading-relaxed">
                Nourishing treatments blending organic botanicals and premium state-of-the-art formulations to restore your youthful vital energy.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-cream-50/70 backdrop-blur-md p-8 rounded-2xl border border-gold-200/20 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold-200/20 flex items-center justify-center text-gold-600 mb-6 border border-gold-300/25">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-rose-deep uppercase tracking-widest mb-3">
                Uncompromising Artistry
              </h3>
              <p className="text-sm font-sans font-light text-rose-medium/80 leading-relaxed">
                Our technicians provide highly customized, masterfully detailed finishes that respect your micro-features for a striking, balanced look.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-cream-50/70 backdrop-blur-md p-8 rounded-2xl border border-gold-200/20 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold-200/20 flex items-center justify-center text-gold-600 mb-6 border border-gold-300/25">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-rose-deep uppercase tracking-widest mb-3">
                Elite Sanctuary
              </h3>
              <p className="text-sm font-sans font-light text-rose-medium/80 leading-relaxed">
                Quiet your senses in an environment defined by soft rose aesthetics, pristine hygiene protocols, and individual, unhurried focus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
