/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, SALON_INFO } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Bridal' | 'Party Makeup' | 'Hair' | 'Nails' | 'Salon Studio'>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Bridal', 'Party Makeup', 'Hair', 'Nails', 'Salon Studio'] as const;

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-cream-100 py-16 sm:py-24" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-200/30 border border-gold-300/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] sm:text-xs tracking-wider uppercase text-gold-700 font-bold">Aesthetic Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-rose-deep font-semibold">
            The Gallery of <span className="text-gold-600 italic">Masterpieces</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-rose-medium/80 font-sans font-light">
            A selective showcase of exquisite bridal, editorial glam, and couture hair artistry crafted daily in our B-17 Islamabad parlour.
          </p>
        </div>

        {/* Gallery Tab Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer text-center font-sans font-semibold focus:outline-none ${
                selectedCategory === category
                  ? 'bg-rose-deep text-gold-100 border border-gold-400/50 shadow-md scale-102'
                  : 'bg-cream-50 text-rose-medium border border-gold-200/20 hover:border-gold-300 hover:text-rose-deep'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-gold-300/10 hover:border-gold-400 bg-rose-deep/5 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Standard quality image with referrer policies */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover filter transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Golden Overlay Sheet */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/90 via-rose-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-[9px] tracking-[0.25em] font-sans text-gold-300 font-bold uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-cream-50 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-sans font-light text-cream-100/80 mb-4">
                    {item.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-1 text-gold-300 text-xs font-semibold italic">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Artwork</span>
                  </div>
                </div>

                {/* Floating Aspect Zoom cue */}
                <div className="absolute top-4 right-4 bg-cream-50/80 backdrop-blur-md p-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity border border-gold-400/20">
                  <Maximize2 className="w-3.5 h-3.5 text-rose-deep" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal Backdrop Overlay */}
        <AnimatePresence>
          {activeLightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-rose-deep/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActiveLightboxItem(null)}
            >
              <button
                className="absolute top-6 right-6 text-cream-55 hover:text-gold-400 p-3 bg-cream-50/10 rounded-full cursor-pointer focus:outline-none transition-colors border border-cream-100/10"
                onClick={() => setActiveLightboxItem(null)}
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-cream-100" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-cream-100 rounded-2xl max-w-3xl w-full overflow-hidden border border-gold-300/30 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* High Quality image view */}
                  <div className="md:col-span-8 h-[350px] sm:h-[450px] bg-rose-deep/20">
                    <img
                      src={activeLightboxItem.imageUrl}
                      alt={activeLightboxItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Informational specs right lane */}
                  <div className="md:col-span-4 p-8 flex flex-col justify-between text-left bg-cream-50">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] font-sans text-gold-600 font-bold uppercase block mb-3">
                        {activeLightboxItem.category} Portfolio
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-rose-deep mb-2">
                        {activeLightboxItem.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-gold-400 mb-4"></div>
                      <p className="text-xs sm:text-sm font-sans font-light text-rose-medium/85 leading-relaxed">
                        This gorgeous look demonstrates the sheer technical perfection and artistic blending signature of Jugnu&#39;s Saloon. Formulated using pure organic cosmetic base palettes.
                      </p>
                    </div>

                    <div className="pt-8 border-t border-gold-200/15">
                      <p className="text-[10px] font-sans text-rose-medium/50 tracking-wider uppercase mb-1">Created At</p>
                      <p className="text-xs font-sans font-semibold text-rose-deep mb-4">{SALON_INFO.shortAddress}</p>
                      <button
                        onClick={() => setActiveLightboxItem(null)}
                        className="w-full py-2.5 bg-rose-deep text-gold-100 tracking-widest text-[10px] uppercase font-bold rounded-full border border-gold-400/35 hover:bg-gold-500 hover:text-rose-deep transition-all duration-300"
                      >
                        Return to Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
