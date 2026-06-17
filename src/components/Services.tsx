/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, CheckCircle2, DollarSign } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'makeup' | 'hair' | 'face' | 'nails' | 'spa'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'makeup', label: 'Couture Makeup' },
    { id: 'hair', label: 'Hair Architecture' },
    { id: 'face', label: 'Facial Elixirs' },
    { id: 'nails', label: 'Nail Bar' },
    { id: 'spa', label: 'Spa & Esthetics' },
  ] as const;

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === activeCategory);

  return (
    <div className="bg-cream-100 py-16 sm:py-24" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-200/30 border border-gold-300/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] sm:text-xs tracking-wider uppercase text-gold-700 font-bold">The Treatment Menu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-rose-deep font-semibold">
            Bespoke Services <span className="text-gold-600 italic">&amp;</span> Experiences
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-rose-medium/80 font-sans font-light">
            Indulge in artisanal beauty experiences customized around your preferences. We use the world&#39;s finest organic cosmetics to deliver breathtaking, high-definition results.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer text-center font-sans font-semibold focus:outline-none ${
                activeCategory === category.id
                  ? 'bg-rose-deep text-gold-100 border border-gold-400/50 shadow-md scale-102'
                  : 'bg-cream-50 text-rose-medium border border-gold-200/20 hover:border-gold-300 hover:text-rose-deep'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services List Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-gold-200/20 hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
              >
                {/* Popular Flag subtle overlay */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-rose-deep text-[8px] sm:text-[9px] tracking-[0.2em] font-bold uppercase py-1 px-4 rounded-bl-xl border-l border-b border-gold-300/30 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Signature Care
                  </div>
                )}

                <div>
                  {/* Category breadcrumb */}
                  <span className="text-[10px] tracking-widest uppercase text-gold-600 font-bold block mb-2">
                    {service.category === 'face' ? 'SKIN ELIXIRS' : service.category === 'spa' ? 'SPA & ESTHETICS' : service.category}
                  </span>

                  {/* Header row */}
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-rose-deep group-hover:text-gold-700 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans font-light text-rose-medium/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Pricing / Duration bottom section */}
                <div className="border-t border-gold-200/15 pt-5 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-sans text-rose-medium/50 tracking-widest uppercase">Pricing Tier</span>
                    <span className="text-sm sm:text-base font-serif font-bold text-rose-deep">
                      {service.priceRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-rose-medium/70 text-xs">
                      <Clock className="w-3.5 h-3.5 text-gold-500" />
                      <span>{service.duration}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className="px-4 py-2 bg-rose-deep/5 text-rose-deep text-[10px] tracking-widest font-semibold uppercase rounded-full hover:bg-rose-deep hover:text-gold-100 transition-colors cursor-pointer border border-rose-deep/15 font-sans"
                    >
                      Instant Book
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Pricing Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto py-5 px-6 rounded-2xl bg-cream-200/35 border border-gold-300/30">
          <p className="text-xs font-sans font-light text-rose-medium/80 italic">
            * Note: All prices mentioned are estimated ranges. Customized bridal consults can fluctuate based on customization request, travel requirements, or stylist assignments. Please book an online consultation for exact rate cards.
          </p>
        </div>

      </div>
    </div>
  );
}
