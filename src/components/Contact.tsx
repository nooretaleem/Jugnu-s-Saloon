/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, Star, ShieldCheck } from 'lucide-react';
import { SALON_INFO, IMAGES } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultation Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formState.name.trim()) tempErrors.name = "Name is required";
    if (!formState.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formState.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (formState.phone.length < 8) {
      tempErrors.phone = "Invalid phone number";
    }
    if (!formState.message.trim()) tempErrors.message = "Message body is empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    // Simulate API pipeline
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'Consultation Inquiry',
        message: ''
      });
      // Clear submission banner after some time
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1500);
  };

  return (
    <div className="bg-cream-100 py-16 sm:py-24" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Headers */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-gold-600 font-bold mb-2 block font-sans">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-rose-deep font-semibold">
            Visit Our <span className="text-gold-600 italic">Sanctuary</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-rose-medium/80 font-sans font-light">
            We are located in B-17 Sector, Islamabad. For direct bookings, general styling questions, or bridal portfolio consulting, reach out and we will respond immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          {/* Left Corner: Essential Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Real Storefront Entrance Image Showcase */}
            <div className="relative group overflow-hidden rounded-2xl border border-gold-300/30 shadow-md bg-rose-deep/5 aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-64">
              <img 
                src={IMAGES.entrance} 
                alt="Jugnu's Saloon Storefront Entrance" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/95 via-rose-deep/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] sm:text-xs tracking-[0.2em] font-sans text-gold-300 uppercase font-bold mb-1">
                  Our B-17 Sector Sanctuary
                </span>
                <h4 className="text-lg sm:text-xl font-serif text-cream-50 font-bold leading-tight">
                  Salon Main Entrance &amp; Facade
                </h4>
              </div>
            </div>

            {/* Hour Card */}
            <div className="bg-cream-50 p-6 rounded-2xl border border-gold-200/20 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold-200/20 flex items-center justify-center text-gold-600 shrink-0 border border-gold-300/10">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-rose-deep mb-1">Business Hours</h4>
                <p className="text-sm font-sans text-rose-medium/90 font-light">
                  Open Daily (Mon – Sun): <span className="font-semibold text-rose-deep">{SALON_INFO.hours.weekdays}</span>
                </p>
                <p className="text-xs font-sans text-emerald-600 font-semibold mt-1">
                  Continuous Operations • No Weekly Off
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-cream-50 p-6 rounded-2xl border border-gold-200/20 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold-200/20 flex items-center justify-center text-gold-600 shrink-0 border border-gold-300/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h4 className="font-serif font-bold text-base text-rose-deep mb-1">Our Location</h4>
                <p className="text-sm font-sans text-rose-medium/90 font-light leading-relaxed">
                  {SALON_INFO.address}
                </p>
                
                {/* External navigation link */}
                <a
                  href={SALON_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold-600 font-bold tracking-wider uppercase mt-4 hover:text-rose-deep transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Calling Card */}
            <div className="bg-cream-50 p-6 rounded-2xl border border-gold-200/20 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold-200/20 flex items-center justify-center text-gold-600 shrink-0 border border-gold-300/10">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-rose-deep mb-1">Appointments &amp; Inquiries</h4>
                <p className="text-sm font-sans text-rose-medium/90 font-light">
                  Telephone: <a href={`tel:${SALON_INFO.phone}`} className="hover:text-gold-600 font-semibold">{SALON_INFO.phone}</a>
                </p>
                <p className="text-sm font-sans text-rose-medium/90 font-light mt-1">
                  WhatsApp: <a href={`https://wa.me/${SALON_INFO.whatsapp.replace(/\+/g, '').replace(/ /g, '')}`} className="hover:text-emerald-500 font-semibold">{SALON_INFO.whatsapp}</a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-cream-50 p-6 rounded-2xl border border-gold-200/20 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold-200/20 flex items-center justify-center text-gold-600 shrink-0 border border-gold-300/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-rose-deep mb-1">Digital Concierge</h4>
                <p className="text-sm font-sans text-rose-medium/90 font-light">
                  Email: <a href={`mailto:${SALON_INFO.email}`} className="hover:text-gold-600 font-medium">{SALON_INFO.email}</a>
                </p>
                <p className="text-xs font-sans text-rose-medium/50 mt-1">Response time: within 2 hours</p>
              </div>
            </div>

          </div>

          {/* Right Corner: Message Inquiry Form */}
          <div className="lg:col-span-7 bg-cream-50 p-8 rounded-3xl border border-gold-200/25 shadow-md text-left">
            <h3 className="text-2xl font-serif text-rose-deep font-bold mb-2">Send Us a Message</h3>
            <p className="text-xs sm:text-sm font-sans text-rose-medium/70 font-light mb-8">
              Fill out the form below and our aesthetic representative will finalize your request.
            </p>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="font-bold">Inquiry Sent Successfully!</span>
                    <p className="text-xs mt-0.5 text-emerald-700 font-normal">
                      Thank you for contacting Jugnu&#39;s Saloon. Our concierge team is validating your custom request and will call you back shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-cream-100 rounded-xl border ${
                      errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gold-300/30 focus:border-gold-500'
                    } focus:outline-none focus:ring-1 text-sm text-rose-deep`}
                    placeholder="Enter full name"
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-cream-100 rounded-xl border ${
                      errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gold-300/30 focus:border-gold-500'
                    } focus:outline-none focus:ring-1 text-sm text-rose-deep`}
                    placeholder="example@gmail.com"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-cream-100 rounded-xl border ${
                      errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gold-300/30 focus:border-gold-500'
                    } focus:outline-none focus:ring-1 text-sm text-rose-deep`}
                    placeholder="+92 300 0000000"
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                    Subject Selection
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-100 rounded-xl border border-gold-300/30 focus:border-gold-500 focus:outline-none focus:ring-1 text-sm text-rose-deep"
                  >
                    <option value="Consultation Inquiry">Custom Styling Consult</option>
                    <option value="Bridal Makeup Session">Elite Bridal Package</option>
                    <option value="Hair Cut & Highlights">Hair Design / Highlights</option>
                    <option value="Compliment & Feedback">Client Feedback</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message Text Area */}
              <div>
                <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                  How can we make you feel beautiful? (Your Message)
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className={`w-full px-4 py-3 bg-cream-100 rounded-xl border ${
                    errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gold-300/30 focus:border-gold-500'
                  } focus:outline-none focus:ring-1 text-sm text-rose-deep`}
                  placeholder="Tell us about your beauty goals or the style you want for your event..."
                />
                {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-rose-deep hover:bg-gold-500 hover:text-rose-deep text-gold-100 font-bold tracking-widest text-xs uppercase rounded-xl transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gold-300 border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Custom B-17 Sector Map Vector Canvas */}
        <div className="bg-cream-50 rounded-3xl border border-gold-200/25 p-8 sm:p-12 text-center max-w-7xl mx-auto overflow-hidden relative shadow-md">
          <div className="absolute top-0 left-0 w-36 h-36 bg-gold-200/5 rounded-full blur-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-left">
              <span className="text-[9px] tracking-widest font-sans font-bold text-gold-600 uppercase mb-2 block">
                Travel &amp; Directions
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-rose-deep font-bold mb-4">
                Finding Jugnu&#39;s in B-17
              </h3>
              <p className="text-xs sm:text-sm font-sans font-light text-rose-medium/80 leading-relaxed mb-6">
                Our tranquil studio is nested in B-17 Sector of Islamabad, Pakistan, just off the Main GT Road. This area is known for lovely green scenery and uncrowded streets, making it the perfect relaxing location away from the noise of central city sectors.
              </p>
              
              <div className="flex flex-col gap-3 text-xs font-sans text-rose-medium/90">
                <div className="flex gap-2 items-center">
                  <Star className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Landmark: Located near Block C Gate of Multi-Gardens.</span>
                </div>
                <div className="flex gap-2 items-center">
                  <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Security: Premium gated housing society with luxury parking spaces.</span>
                </div>
              </div>
            </div>

            {/* Beautiful stylized mock map representation */}
            <div className="md:col-span-8 bg-cream-200/80 rounded-2xl border border-gold-300/30 p-4 h-[350px] relative overflow-hidden flex flex-col justify-between shadow-inner">
              <div className="absolute inset-0 z-0">
                {/* Decorative map lines */}
                <svg className="w-full h-full opacity-20 stroke-gold-900 stroke-[1.5]" xmlns="http://www.w3.org/2000/svg">
                  {/* Highways */}
                  <line x1="0" y1="100" x2="800" y2="100" />
                  <line x1="550" y1="0" x2="550" y2="400" />
                  {/* Local Sector C roads */}
                  <line x1="200" y1="100" x2="200" y2="400" />
                  <line x1="200" y1="200" x2="550" y2="200" />
                  <line x1="100" y1="300" x2="550" y2="300" />
                  {/* Diagonal green contours representing Margalla landscape */}
                  <path d="M 0 50 Q 150 0 300 120" fill="none" className="stroke-emerald-900 border" />
                  <path d="M 50 30 Q 250 10 400 180" fill="none" className="stroke-emerald-900 border" />
                </svg>

                {/* Styled landmarks as small UI components */}
                <div className="absolute top-[80px] left-[50px] bg-gold-500/10 text-gold-900 text-[9px] tracking-wider uppercase font-extrabold px-2 py-0.5 rounded border border-gold-400">
                  GT Road Islamabad
                </div>
                
                <div className="absolute top-[180px] left-[150px] bg-emerald-500/10 text-emerald-900 text-[9px] tracking-wider uppercase font-bold px-2 py-0.5 rounded border border-emerald-400/35">
                  Multi-Gardens Block B
                </div>

                <div className="absolute top-[280px] left-[320px] bg-emerald-500/10 text-emerald-900 text-[9px] tracking-wider uppercase font-bold px-2 py-0.5 rounded border border-emerald-400/35">
                  Sector C Gate Security
                </div>

                {/* Pin pointer for Jugnu's Saloon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="absolute top-[210px] left-[390px] z-10 cursor-pointer"
                >
                  <div className="relative flex flex-col items-center">
                    {/* Pulsing ring */}
                    <span className="absolute -bottom-1 w-6 h-6 rounded-full bg-gold-500/35 animate-ping"></span>
                    <span className="absolute -bottom-1 w-2.5 h-1 bg-stone-950/20 rounded-full blur-xs"></span>
                    
                    {/* Glowing pin body */}
                    <div className="bg-rose-deep text-gold-200 px-3.5 py-1.5 rounded-full border-2 border-gold-400 shadow-xl flex items-center gap-1.5 font-serif font-bold text-xs">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>Jugnu&#39;s Saloon</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom information bar */}
              <div className="relative z-10 w-full mt-auto flex flex-wrap justify-between items-center text-left bg-cream-50/90 backdrop-blur-md p-4 rounded-xl border border-gold-300/30 gap-4">
                <div>
                  <h4 className="text-sm font-serif font-bold text-rose-deep">Islamabad B-17 Headquarters</h4>
                  <p className="text-[11px] font-sans text-rose-medium/70 mt-0.5 leading-relaxed">
                    plot 4 Block C, mini Commercial, Madina Arcade, Street 8, Block C Multi Gardens B-17, Islamabad.
                  </p>
                </div>
                <a
                  href={SALON_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-rose-deep text-gold-100 text-[10px] font-sans font-bold uppercase tracking-widest rounded-full hover:bg-gold-500 hover:text-rose-deep transition-colors shrink-0"
                >
                  Retrieve Live Navigation
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
