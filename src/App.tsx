/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Star, Quote, ArrowRight, ArrowLeft, Heart, Calendar, 
  Clock, Phone
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BookingPortal from './components/BookingPortal';
import Footer from './components/Footer';
import { TESTIMONIALS, SERVICES, IMAGES, SALON_INFO } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | null>(null);

  // Review slide state
  const [activeReviewIdx, setActiveReviewIdx] = useState<number>(0);

  // Scroll back to top on tab change and ensure document title is correct
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Jugnu's Saloon B-17 | Luxury Beauty Salon & Bridal Studio";
  }, [activeTab]);

  const openBookingWithService = (serviceId: string) => {
    setPreSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const openStandardBooking = () => {
    setPreSelectedServiceId(null);
    setIsBookingOpen(true);
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Extract top popular services for home display
  const popularServices = SERVICES.filter(s => s.popular).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-cream-100 selection:bg-gold-500/30 selection:text-rose-deep overflow-x-hidden">
      
      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openBookingModal={openStandardBooking} 
      />

      {/* Main Tab Controller Stage */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeTab === 'home' && (
              <>
                {/* Hero Showcase with parallax features */}
                <Hero 
                  setActiveTab={setActiveTab} 
                  openBookingModal={openStandardBooking} 
                />

                {/* Popular Services Highlights on Homepage */}
                <section className="bg-cream-50 py-16 sm:py-24 border-b border-gold-200/20 text-left">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                      <div>
                        <span className="text-xs tracking-[0.4em] uppercase text-gold-600 font-bold mb-2 block font-sans">
                          Aesthetic Highlights
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-rose-deep font-semibold">
                          Our Signature <span className="text-gold-600 italic">Treatments</span>
                        </h2>
                      </div>
                      
                      <button
                        onClick={() => setActiveTab('services')}
                        className="inline-flex items-center gap-1.5 text-xs text-rose-deep font-bold tracking-widest uppercase hover:text-gold-600 transition-colors border-b border-rose-deep hover:border-gold-500 pb-1 font-sans cursor-pointer"
                      >
                        <span>View Full Luxury Treatment Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {popularServices.map((service) => (
                        <div 
                          key={service.id}
                          className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-gold-200/15 hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[9px] tracking-widest uppercase font-bold text-gold-600 font-sans block mb-2">
                              {service.category.toUpperCase()} • IN DEMAND
                            </span>
                            <h3 className="text-xl font-serif font-bold text-rose-deep mb-3">
                              {service.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-sans font-light text-rose-medium/80 leading-normal mb-8">
                              {service.description.slice(0, 110)}...
                            </p>
                          </div>

                          <div className="flex justify-between items-center border-t border-gold-100/30 pt-4 mt-auto">
                            <div>
                              <p className="text-[8px] font-sans tracking-tight text-rose-medium/55 uppercase">Estimated rate</p>
                              <p className="text-sm font-serif font-bold text-rose-deep">{service.priceRange.split('–')[0]}</p>
                            </div>
                            <button
                              onClick={() => openBookingWithService(service.id)}
                              className="px-4 py-2 bg-rose-deep text-gold-100 text-[10px] sm:text-xs tracking-wider uppercase rounded-full hover:bg-gold-500 hover:text-rose-deep transition-all duration-300 font-sans font-bold cursor-pointer"
                            >
                              Reserve Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Gilded Experience Statement Banner */}
                <section className="bg-rose-deep/5 py-16 border-b border-gold-100/20 text-center relative overflow-hidden">
                  <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
                    <Heart className="w-8 h-8 text-gold-600 mb-4 animate-pulse opacity-85" />
                    <h3 className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold-700 font-bold mb-3 font-sans">
                      Our Promise
                    </h3>
                    <p className="text-2xl sm:text-3xl font-serif text-rose-deep font-semibold italic max-w-2xl leading-snug">
                      &ldquo;Every woman is her own finest sculpture. At Jugnu’s, we do not cover or hide; we polish and reflect your inner majesty.&rdquo;
                    </p>
                    <span className="text-xs font-sans text-rose-medium/70 mt-4 block pr-1 uppercase tracking-widest font-semibold">
                      — Jugnu Chaudhry, Creative Director
                    </span>
                  </div>
                </section>

                {/* Elegant Testimonials Carousel Section on Homepage */}
                <section className="bg-cream-100 py-16 sm:py-24 text-left relative overflow-hidden">
                  <div className="absolute top-1/2 left-0 w-48 h-48 bg-gold-400/5 rounded-full blur-2xl"></div>
                  
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                      <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold mb-2 block font-sans">
                        Praise from Elite Ladies
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif text-rose-deep font-bold">
                        Islamabad Customer <span className="text-gold-600 italic">Testimonials</span>
                      </h2>
                      <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4"></div>
                    </div>

                    <div className="bg-cream-50 rounded-2xl p-8 sm:p-12 border border-gold-200/20 shadow-lg relative min-h-[250px] flex flex-col justify-between">
                      {/* Enormous quotation mark behind */}
                      <Quote className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-24 h-24 text-gold-200/20 pointer-events-none select-none" />

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeReviewIdx}
                          initial={{ opacity: 0, x: 25 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -25 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Stars Row */}
                          <div className="flex gap-1 mb-5 text-gold-500">
                            {[...Array(TESTIMONIALS[activeReviewIdx].rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-gold-500 stroke-gold-600" />
                            ))}
                          </div>

                          <p className="text-base sm:text-lg font-sans font-light text-rose-medium/95 leading-relaxed italic mb-8">
                            &ldquo;{TESTIMONIALS[activeReviewIdx].text}&rdquo;
                          </p>

                          {/* Author line */}
                          <div className="flex justify-between items-center flex-wrap gap-4 pt-6 border-t border-gold-100">
                            <div>
                              <h4 className="font-serif font-black text-rose-deep text-lg">
                                {TESTIMONIALS[activeReviewIdx].author}
                              </h4>
                              <p className="text-[10px] font-sans text-gold-650 tracking-wider uppercase font-semibold mt-0.5">
                                Verified Service: {TESTIMONIALS[activeReviewIdx].service} • {TESTIMONIALS[activeReviewIdx].date}
                              </p>
                            </div>
                            <span className="text-[10px] font-sans tracking-widest text-stone-400 uppercase">
                              {SALON_INFO.shortAddress}
                            </span>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Direction Toggles */}
                      <div className="flex justify-end gap-3 mt-8">
                        <button
                          onClick={prevReview}
                          className="p-2.5 rounded-full border border-gold-300 bg-cream-50 text-rose-deep hover:bg-gold-500 hover:text-rose-deep cursor-pointer transition-colors focus:outline-none"
                          aria-label="Previous testimonial"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextReview}
                          className="p-2.5 rounded-full border border-gold-300 bg-cream-50 text-rose-deep hover:bg-gold-500 hover:text-rose-deep cursor-pointer transition-colors focus:outline-none"
                          aria-label="Next testimonial"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'about' && <About />}
            {activeTab === 'services' && <Services onSelectService={openBookingWithService} />}
            {activeTab === 'gallery' && <Gallery />}
            {activeTab === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Exquisite Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        openBookingModal={openStandardBooking} 
      />

      {/* Standard Universal Appointment inquiry modal */}
      <BookingPortal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedServiceId={preSelectedServiceId} 
      />

      {/* FLOATING ACTION CALENDAR BOOKING CALLOUT BUTTON - visible on all screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.05, 1, 1.03, 1, 1, 1, 1, 1, 1],
          y: [0, -8, 0, -4, 0, 0, 0, 0, 0, 0]
        }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1 },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
        className="fixed bottom-6 right-6 z-30"
      >
        <button
          onClick={openStandardBooking}
          id="floating-booking-callout"
          className="flex items-center gap-2 p-3.5 sm:p-4 bg-gold-400 hover:bg-gold-500 text-rose-deep font-bold rounded-full shadow-2xl hover:shadow-[0_10px_25px_rgba(194,151,75,0.4)] transition-all duration-300 uppercase tracking-widest text-[9px] sm:text-xs cursor-pointer group border border-gold-300/35 hover:-translate-y-1"
          title="Reserve your beauty slot instantly"
        >
          <Calendar className="w-4.5 h-4.5 text-rose-deep transition-transform group-hover:rotate-12" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 whitespace-nowrap-keep pr-0 group-hover:pr-1">
            Book Appointment
          </span>
          <span className="text-[10px] bg-rose-deep text-gold-100 flex items-center justify-center p-1 w-5 h-5 rounded-full text-center">
            ✦
          </span>
        </button>
      </motion.div>
    </div>
  );
}
