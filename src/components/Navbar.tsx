/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Calendar, PhoneCall, Clock } from 'lucide-react';
import { SALON_INFO } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBookingModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, openBookingModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Top micro bar for luxury contact hints */}
      <div className="w-full bg-rose-deep text-gold-200 text-[10px] sm:text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center tracking-widest font-sans uppercase">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            {SALON_INFO.hours.weekdays} (Sun: {SALON_INFO.hours.sunday})
          </span>
          <span className="hidden md:flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
            {SALON_INFO.phone}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>B-17 Islamabad, Pakistan</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-100/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gold-200/30 py-3'
            : 'bg-cream-100/50 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand Brand Signature */}
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="relative">
              <span className="text-xl sm:text-2xl font-semibold tracking-wider text-rose-deep italic">
                Jugnu<span className="font-serif text-gold-600 font-bold">&#39;</span>s
              </span>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-sans text-gold-600 font-bold -mt-1 pl-0.5">
                Saloon &amp; Spa
              </span>
              {/* Gold dot decoration */}
              <span className="absolute -top-1 -right-2 text-gold-500 animate-pulse text-xs">✦</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-1 py-1 text-sm tracking-widest uppercase transition-colors cursor-pointer font-sans text-xs focus:outline-none ${
                  activeTab === item.id
                    ? 'text-rose-deep font-semibold'
                    : 'text-rose-medium/80 hover:text-rose-deep'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeNavTabIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openBookingModal}
              id="cta-nav-booking"
              className="px-6 py-2.5 text-xs tracking-widest font-sans uppercase rounded-full cursor-pointer transition-all duration-300 font-semibold bg-rose-deep text-gold-100 border border-gold-400/50 hover:bg-gold-500 hover:text-rose-deep hover:border-rose-deep shadow-md flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openBookingModal}
              className="px-4 py-2 text-[10px] tracking-widest font-sans uppercase rounded-full bg-rose-deep text-gold-100 hover:bg-gold-500 hover:text-rose-deep font-bold flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-rose-deep hover:text-gold-600 focus:outline-none bg-cream-200/50 rounded-full"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Overlay menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-cream-100 border-b border-gold-200/50 shadow-lg z-50 md:hidden flex flex-col font-sans py-4 px-6 gap-3"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`py-3 text-left border-b border-cream-200 text-sm tracking-wider uppercase font-semibold focus:outline-none ${
                    activeTab === item.id ? 'text-gold-600 pl-2' : 'text-rose-deep hover:text-gold-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2 text-center text-xs text-rose-medium flex flex-col gap-2">
                <span className="flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3 text-gold-500" />
                  {SALON_INFO.hours.weekdays}
                </span>
                <span className="flex items-center justify-center gap-1">
                  <PhoneCall className="w-3 h-3 text-gold-500" />
                  {SALON_INFO.phone}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
