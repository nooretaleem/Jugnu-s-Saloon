/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Medal, HeartHandshake, ShieldCheck } from 'lucide-react';
import { TEAM, IMAGES } from '../data';

export default function About() {
  const luxuryBrands = [
    { name: 'Dermalogica', desc: 'Hydra Skin Health' },
    { name: 'MAC Cosmetics', desc: 'Flawless Finish Base' },
    { name: 'Huda Beauty', desc: 'Bespoke Glamour Palettes' },
    { name: 'Charlotte Tilbury', desc: 'Ethereal Star Dust Glow' },
    { name: 'Dior Backstage', desc: 'High-Definition Skin Prep' },
    { name: 'Anastasia Beverly Hills', desc: 'Precision Geometric Brows' },
  ];

  return (
    <div className="bg-cream-100 py-16 sm:py-24" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-300 p-2 bg-cream-50">
              <img
                src={IMAGES.entrance}
                alt="Jugnu's Saloon modern storefront entrance facade"
                className="w-full h-[450px] object-cover rounded-xl filter contrast-102 hover:scale-101 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 to-transparent"></div>
            </div>
            
            {/* Overlay medal */}
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-rose-deep p-5 rounded-2xl border border-gold-300 shadow-xl max-w-[200px] flex items-center gap-3">
              <Medal className="w-10 h-10 shrink-0 text-rose-deep" />
              <div>
                <p className="font-serif font-bold text-xs leading-tight">15+ YEARS</p>
                <p className="font-sans text-[10px] tracking-wider uppercase text-rose-deep/80 mt-1">Cosmetic Mastery</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-200/30 border border-gold-300/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-gold-700 font-bold">Our Legacy &amp; Story</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-rose-deep font-semibold tracking-tight mb-6">
              Empowering Confidence <br />
              <span className="text-gold-600 italic">Through Timeless Grace</span>
            </h2>
            <div className="w-12 h-1 bg-gold-400 mb-6"></div>
            
            <p className="text-base text-rose-medium/95 leading-relaxed font-sans font-light mb-6">
              Established in the magnificent B-17 Sector of Islamabad, Jugnu’s Saloon was born from a desire to redefine the luxury salon experience for Pakistani ladies. Our philosophy rejects standard cookie-cutter templates in favor of a personalized, artistic approach to styling and skin health.
            </p>
            <p className="text-sm text-rose-medium/80 leading-relaxed font-sans font-light mb-8">
              We specialize in blending state-of-the-art global bridal cosmetics with organic and calming wellness treatments. When you enter our sanctuary, you are not just a client; you are canvas for our fine cosmetic experts. From premium HD wedding makeovers to our deeply healing herbal facials, every appointment is unhurried, meticulous, and luxurious.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-200/20 flex items-center justify-center text-gold-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-rose-deep">Pristine Hygiene</h4>
                  <p className="text-xs font-sans text-rose-medium/70">Medical-grade sterilization tools</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-200/20 flex items-center justify-center text-gold-600 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-rose-deep">Bespoke Concierge</h4>
                  <p className="text-xs font-sans text-rose-medium/70">Personalized consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Quality Assurance Showcase */}
        <div className="bg-cream-200/50 rounded-3xl p-8 sm:p-12 border border-gold-200/40 text-center mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-xs tracking-[0.4em] uppercase text-gold-600 font-bold mb-3 font-sans">
              Our Commitment to Premium Products
            </h3>
            <h2 className="text-2xl sm:text-3xl font-serif text-rose-deep font-bold mb-8">
              Only the Most Fine Cosmetic Elixirs Touch Your Skin
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
              {luxuryBrands.map((brand, i) => (
                <div 
                  key={i} 
                  className="bg-cream-50 p-4 rounded-xl border border-gold-200/25 flex flex-col justify-center items-center hover:shadow-md transition-shadow"
                >
                  <span className="font-serif text-sm font-semibold text-rose-deep tracking-wider block">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-sans text-gold-600 tracking-wider mt-1 block">
                    {brand.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Artisans Section */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block font-sans">
            Our Elite Artisans
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-rose-deep font-semibold">
            Meet the Masters Behind the Glow
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div 
              key={member.id} 
              className="bg-cream-50 border border-gold-200/20 hover:border-gold-400 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              id={`team-member-${member.id}`}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden h-[320px] bg-rose-deep/10">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover filter transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/60 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-xl font-serif font-bold text-cream-50">{member.name}</h3>
                  <p className="text-xs text-gold-300 tracking-widest uppercase font-semibold font-sans mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio & Specialties */}
              <div className="p-6 text-left">
                <p className="text-xs sm:text-sm font-sans font-light text-rose-medium/85 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase font-semibold text-gold-700 font-sans mb-3">
                    Aesthetic Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, index) => (
                      <span 
                        key={index} 
                        className="text-[9px] font-sans uppercase tracking-widest px-2.5 py-1 rounded bg-gold-200/30 text-gold-900 font-bold border border-gold-400/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
