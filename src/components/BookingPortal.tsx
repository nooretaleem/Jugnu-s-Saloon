/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Calendar, Clock, User, Heart, Info, ClipboardList, CheckCircle2, 
  Trash2, Ticket, Sparkles, AlertCircle, RefreshCw, Star, Download, Gift
} from 'lucide-react';
import { SERVICES, TEAM, TIME_SLOTS, SALON_INFO } from '../data';
import { BookingRequest } from '../types';

interface BookingPortalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string | null;
}

export default function BookingPortal({ isOpen, onClose, preSelectedServiceId }: BookingPortalProps) {
  const [step, setStep] = useState<1 | 2>(1); // 1 = Entry Form/Booking, 2 = Dashboard Overview
  
  // Form elements state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(preSelectedServiceId || SERVICES[0].id);
  const [selectedStylistId, setSelectedStylistId] = useState(TEAM[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [specialNotes, setSpecialNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Core list state reading from client local storage
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [activeTicket, setActiveTicket] = useState<BookingRequest | null>(null);

  // Initialize and seed simulated client data under storage for realism
  useEffect(() => {
    const saved = localStorage.getItem('jugnu_bookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    } else {
      // Seed with some mock completed and confirmed historical luxury bookings so the list is not blank.
      const initialSeed: BookingRequest[] = [
        {
          id: "seed-booking-1",
          clientName: "Demo Client",
          clientEmail: "meetmeonly@gmail.com",
          clientPhone: "+92 312 3456789",
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days ago
          timeSlot: "02:30 PM",
          serviceId: "massage",
          stylistId: "team-3",
          status: "Completed",
          notes: "Extra sensitive skin on cheek contours.",
          createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: "seed-booking-2",
          clientName: "Demo Client",
          clientEmail: "meetmeonly@gmail.com",
          clientPhone: "+92 312 3456789",
          date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10 days later
          timeSlot: "11:30 AM",
          serviceId: "bridal-services",
          stylistId: "team-1",
          status: "Confirmed",
          notes: "Need matching pink standard flower braids.",
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem('jugnu_bookings', JSON.stringify(initialSeed));
      setBookings(initialSeed);
    }
  }, []);

  // Update selected service if parent preSelectedServiceId changed
  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
      setStep(1); // Force to submission tab
    }
  }, [preSelectedServiceId]);

  const saveBookingsList = (updated: BookingRequest[]) => {
    localStorage.setItem('jugnu_bookings', JSON.stringify(updated));
    setBookings(updated);
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: Record<string, string> = {};

    if (!formName.trim()) tempErrors.name = "Full name is required";
    if (!formEmail.trim() || !/\S+@\S+\.\S+/.test(formEmail)) tempErrors.email = "Valid email is required";
    if (!formPhone.trim() || formPhone.length < 8) tempErrors.phone = "Valid phone is required";
    if (!selectedDate) tempErrors.date = "Please choose a desired date";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    const newRequest: BookingRequest = {
      id: "booking-" + Math.floor(Math.random() * 900000 + 100000),
      clientName: formName,
      clientEmail: formEmail,
      clientPhone: formPhone,
      date: selectedDate,
      timeSlot: selectedTime,
      serviceId: selectedServiceId,
      stylistId: selectedStylistId,
      status: 'Pending',
      notes: specialNotes,
      createdAt: new Date().toISOString()
    };

    const nextBookings = [newRequest, ...bookings];
    saveBookingsList(nextBookings);
    
    // Auto preset active ticket and switch step view
    setActiveTicket(newRequest);
    setStep(2); // Go to overview dashboard

    // Reset fields
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setSpecialNotes('');
    setErrors({});
  };

  const handleCancelBooking = (id: string) => {
    const isConfirm = window.confirm("Are you sure you want to cancel this beauty reservation?");
    if (!isConfirm) return;
    const filtered = bookings.filter(b => b.id !== id);
    saveBookingsList(filtered);
    if (activeTicket?.id === id) {
      setActiveTicket(null);
    }
  };

  const getServiceObj = (id: string) => SERVICES.find(s => s.id === id) || SERVICES[0];
  const getStylistObj = (id: string) => TEAM.find(t => t.id === id) || TEAM[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="booking-portal-overlay"
          className="fixed inset-0 z-50 bg-rose-deep/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Main Container */}
          <motion.div
            initial={{ scale: 0.96, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="bg-cream-100 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden border border-gold-300/35 relative my-4 flex flex-col justify-between max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gilded Row */}
            <div className="bg-rose-deep px-6 py-5 flex items-center justify-between border-b border-gold-300/40 shrink-0">
              <div className="flex gap-2 items-center">
                <Sparkles className="w-5 h-5 text-gold-400 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-cream-50 leading-none">
                  Jugnu&#39;s Appointment Portal
                </h2>
              </div>

              <div className="flex items-center gap-3">
                {/* Internal sub-navigation */}
                <div className="bg-rose-deep/50 border border-gold-400/20 p-1 rounded-full text-xs">
                  <button
                    onClick={() => setStep(1)}
                    className={`px-4 py-1.5 rounded-full uppercase tracking-wider font-semibold cursor-pointer ${
                      step === 1 ? 'bg-gold-500 text-rose-deep' : 'text-cream-100 hover:text-gold-200'
                    }`}
                  >
                    Reserve
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className={`px-4 py-1.5 rounded-full uppercase tracking-wider font-semibold cursor-pointer ${
                      step === 2 ? 'bg-gold-500 text-rose-deep' : 'text-cream-100 hover:text-gold-200'
                    }`}
                  >
                    My Bookings ({bookings.length})
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="text-cream-100 hover:text-gold-400 p-2 bg-cream-50/10 rounded-full border border-cream-100/10 focus:outline-none transition-colors cursor-pointer"
                  aria-label="Close appointment portal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="overflow-y-auto p-6 sm:p-8 flex-1 text-left bg-cream-100">
              {step === 1 ? (
                /* RESERVATION FORM */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column - Practical Booking Form */}
                  <form onSubmit={handleCreateBooking} className="lg:col-span-7 flex flex-col gap-4">
                    <div className="border-b border-gold-200/20 pb-2 mb-2">
                      <h3 className="text-lg font-serif font-bold text-rose-deep">Schedule Beauty Session</h3>
                      <p className="text-xs text-rose-medium/60 font-sans">B-17 sector office. Appointments require 24h prior booking.</p>
                    </div>

                    {/* Row 1: Demographics */}
                    <div>
                      <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className={`w-full px-4 py-2.5 bg-cream-50 rounded-xl border ${
                          errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gold-300/20 focus:border-gold-500'
                        } focus:outline-none focus:ring-1 text-sm text-rose-deep`}
                        placeholder="e.g., Ayesha Khan"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className={`w-full px-4 py-2.5 bg-cream-50 rounded-xl border ${
                            errors.email ? 'border-red-400' : 'border-gold-300/20'
                          } focus:outline-none text-sm text-rose-deep`}
                          placeholder="your.email@gmail.com"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className={`w-full px-4 py-2.5 bg-cream-50 rounded-xl border ${
                            errors.phone ? 'border-red-400' : 'border-gold-300/20'
                          } focus:outline-none text-sm text-rose-deep`}
                          placeholder="+92 312 3456789"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Row 2: Service & Stylist selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                          Treatment Desired
                        </label>
                        <select
                          value={selectedServiceId}
                          onChange={(e) => setSelectedServiceId(e.target.value)}
                          className="w-full px-4 py-2.5 bg-cream-50 rounded-xl border border-gold-300/20 text-xs text-rose-deep focus:outline-none"
                        >
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.id}>
                              {s.name} ({s.priceRange.split('–')[0]}...)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                          Aesthetic Specialist
                        </label>
                        <select
                          value={selectedStylistId}
                          onChange={(e) => setSelectedStylistId(e.target.value)}
                          className="w-full px-4 py-2.5 bg-cream-50 rounded-xl border border-gold-300/20 text-xs text-rose-deep focus:outline-none"
                        >
                          {TEAM.map(t => (
                            <option key={t.id} value={t.id}>{t.name} ({t.role.split('&')[0]})</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Calendar Date and Slot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                          Appointment Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          min={new Date().toISOString().split('T')[0]} // Block previous dates
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className={`w-full px-4 py-2.5 bg-cream-50 rounded-xl border ${
                            errors.date ? 'border-red-400' : 'border-gold-300/20'
                          } focus:outline-none text-xs text-rose-deep`}
                        />
                        {errors.date && <span className="text-[10px] text-red-500 mt-1 block">{errors.date}</span>}
                      </div>

                      <div>
                        <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                          Time Slot Selection
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-2.5 bg-cream-50 rounded-xl border border-gold-300/20 text-xs text-rose-deep focus:outline-none"
                        >
                          {TIME_SLOTS.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Special notes */}
                    <div>
                      <label className="text-[10px] tracking-wider uppercase font-semibold text-rose-deep font-sans block mb-1">
                        Styling Instructions / Skin Allergies (Optional)
                      </label>
                      <textarea
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        rows={2}
                        className="w-full px-4 py-2 bg-cream-50 rounded-xl border border-gold-300/20 text-xs focus:outline-none text-rose-deep"
                        placeholder="e.g., Sensitive neck margins, MAC brand base preference..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-rose-deep tracking-widest font-bold text-xs uppercase rounded-xl cursor-pointer transition-colors mt-2"
                    >
                      Confirm Booking Inquiry
                    </button>
                  </form>

                  {/* Right Column - Glamour Guidance Card */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Selected Service Card */}
                    <div className="bg-cream-50 rounded-2xl border border-gold-400/20 p-6 shadow-sm">
                      <span className="text-[8px] tracking-[0.25em] font-sans text-gold-600 font-bold uppercase block mb-3">
                        Selected Care Summary
                      </span>
                      
                      <h4 className="text-xl font-serif font-semibold text-rose-deep mb-2">
                        {getServiceObj(selectedServiceId).name}
                      </h4>
                      <p className="text-xs font-sans font-light text-rose-medium/80 leading-relaxed mb-4">
                        {getServiceObj(selectedServiceId).description}
                      </p>

                      <div className="flex justify-between items-center bg-cream-100 p-3 rounded-xl border border-gold-200/15">
                        <div className="text-left">
                          <p className="text-[8px] font-sans text-rose-medium/55 tracking-wider uppercase">Projected Rate</p>
                          <p className="text-sm font-serif font-black text-rose-deep">
                            {getServiceObj(selectedServiceId).priceRange}
                          </p>
                        </div>
                        <div className="text-right text-xs">
                          <p className="text-[8px] font-sans text-rose-medium/55 tracking-wider uppercase">Duration</p>
                          <p className="font-semibold text-gold-700">{getServiceObj(selectedServiceId).duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Assigned Specialist bios */}
                    <div className="bg-rose-deep/5 rounded-2xl border border-gold-300/15 p-6 flex flex-col gap-4 text-left">
                      <div className="flex items-center gap-4">
                        <img
                          src={getStylistObj(selectedStylistId).imageUrl}
                          alt={getStylistObj(selectedStylistId).name}
                          className="w-12 h-12 rounded-full object-cover border border-gold-400"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-sm font-serif font-bold text-rose-deep">
                            {getStylistObj(selectedStylistId).name}
                          </p>
                          <p className="text-[10px] font-sans text-gold-600 tracking-wider">
                            {getStylistObj(selectedStylistId).role}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-xs font-sans font-light text-stone-600 leading-relaxed">
                        &ldquo;{getStylistObj(selectedStylistId).bio.slice(0, 100)}...&rdquo;
                      </p>
                    </div>

                    {/* Booking notices */}
                    <div className="p-4 rounded-xl bg-gold-200/15 border border-gold-400/10 flex items-start gap-2 text-stone-600">
                      <Info className="w-4 h-4 shrink-0 text-gold-600 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-deep">Cancellation Code</span>
                        <p className="text-[10px] leading-relaxed mt-0.5">
                          Appointments can be cancelled or rescheduled up to 12 hours preceding without any consultation penalty fees.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                /* CUSTOMER DASHBOARD OVERVIEW */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Bookings list */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="border-b border-gold-200/20 pb-2 mb-2 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-rose-deep">My Luxury Transactions</h3>
                        <p className="text-xs text-rose-medium/60 font-sans">View schedules, check confirmation vouchers, or cancel care.</p>
                      </div>
                      <span className="text-xs font-sans tracking-wider uppercase font-bold bg-rose-deep/5 text-rose-deep px-3 py-1 rounded-full border border-gold-300/15">
                        Client Status: Active
                      </span>
                    </div>

                    {bookings.length === 0 ? (
                      <div className="py-12 text-center bg-cream-50 rounded-2xl border border-dashed border-gold-300 flex flex-col items-center justify-center">
                        <AlertCircle className="w-10 h-10 text-gold-600 mb-2 animate-bounce" />
                        <h4 className="font-serif font-bold text-rose-deep">No Bookings Recorded</h4>
                        <p className="text-xs text-rose-medium/60 mt-1">Submit your first beauty request in the reserve page.</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {bookings.map((booking) => (
                          <div 
                            key={booking.id}
                            className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left flex justify-between items-center ${
                              activeTicket?.id === booking.id
                                ? 'bg-cream-50 border-gold-500 shadow-md ring-1 ring-gold-400/20'
                                : 'bg-cream-50 border-gold-200/15 hover:border-gold-400 hover:shadow-xs'
                            }`}
                            onClick={() => setActiveTicket(booking)}
                          >
                            <div className="flex items-start gap-3.5">
                              {/* Status colored dot indicator */}
                              <div className="mt-1">
                                <span className={`flex h-3.5 w-3.5 rounded-full ${
                                  booking.status === 'Completed' ? 'bg-emerald-500' :
                                  booking.status === 'Confirmed' ? 'bg-blue-500' :
                                  'bg-amber-400'
                                }`}></span>
                              </div>

                              <div>
                                <h4 className="font-serif font-bold text-base text-rose-deep leading-tight">
                                  {getServiceObj(booking.serviceId).name}
                                </h4>
                                <p className="text-[11px] font-sans text-rose-medium/70 mt-1 flex items-center gap-1.5 flex-wrap">
                                  <span className="font-semibold">{booking.date}</span> •
                                  <span>{booking.timeSlot}</span> •
                                  <span className="text-gold-700 italic">Stylist: {getStylistObj(booking.stylistId).name}</span>
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className={`text-[9px] font-sans tracking-widest uppercase font-bold px-2 py-1 rounded ${
                                booking.status === 'Completed' ? 'bg-emerald-50 text-emerald-800 border border-emerald-400/20' :
                                booking.status === 'Confirmed' ? 'bg-blue-50 text-blue-800 border border-blue-400/20' :
                                'bg-amber-50 text-amber-800 border border-amber-400/20'
                              }`}>
                                {booking.status}
                              </span>

                              {/* Only cancelable if not completed */}
                              {booking.status !== 'Completed' && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCancelBooking(booking.id);
                                  }}
                                  className="text-stone-300 hover:text-red-500 p-1.5 rounded-full hover:bg-red-50 transition-colors"
                                  title="Cancel Appointment"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Active Booking Ticket / Receipt Card Card */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    {activeTicket ? (
                      /* Styled Aesthetic Ticket receipt */
                      <div className="bg-cream-50 rounded-2xl border-2 border-gold-300 shadow-lg overflow-hidden flex flex-col">
                        
                        {/* Core Ticket Header */}
                        <div className="bg-rose-deep text-gold-200. p-4 text-center border-b border-gold-300">
                          <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-gold-300">Beauty Voucher</span>
                          <h4 className="text-lg font-serif font-bold text-cream-50 mt-1 font-semibold">{SALON_INFO.name}</h4>
                        </div>

                        {/* Ticket details */}
                        <div className="p-6 flex flex-col gap-4 text-left font-sans text-xs flex-1 border-b-2 border-dashed border-gold-300 relative bg-linear-to-b from-cream-50 to-cream-100">
                          
                          {/* Details */}
                          <div className="flex justify-between border-b border-gold-200/10 pb-2">
                            <span className="text-rose-medium/60 font-medium">Receipt ID</span>
                            <span className="font-mono text-rose-deep font-bold">{activeTicket.id}</span>
                          </div>

                          <div className="flex justify-between border-b border-gold-200/10 pb-2">
                            <span className="text-rose-medium/60 font-medium">Client</span>
                            <span className="text-rose-deep font-bold">{activeTicket.clientName}</span>
                          </div>

                          <div className="flex justify-between border-b border-gold-200/10 pb-2">
                            <span className="text-rose-medium/60 font-medium">Treatment</span>
                            <span className="text-rose-deep font-bold text-right">{getServiceObj(activeTicket.serviceId).name}</span>
                          </div>

                          <div className="flex justify-between border-b border-gold-200/10 pb-2">
                            <span className="text-rose-medium/60 font-medium">Stylist Assigned</span>
                            <span className="text-rose-deep font-bold">{getStylistObj(activeTicket.stylistId).name}</span>
                          </div>

                          <div className="flex justify-between border-b border-gold-200/10 pb-2">
                            <span className="text-rose-medium/60 font-medium">Schedule</span>
                            <span className="text-rose-deep font-bold text-right">
                              {activeTicket.date} • {activeTicket.timeSlot}
                            </span>
                          </div>

                          <div className="flex justify-between pb-2 bg-gold-200/20 p-3 rounded-lg border border-gold-300/10 mb-2">
                            <span className="text-rose-deep font-bold uppercase tracking-wider text-[10px]">Estimated Price</span>
                            <span className="font-serif font-black text-rose-deep text-sm">{getServiceObj(activeTicket.serviceId).priceRange.split('–')[0]}</span>
                          </div>

                          {activeTicket.notes && (
                            <div className="bg-cream-50 p-2.5 rounded-lg border border-gold-300/10 text-[10px] text-stone-500 leading-normal">
                              <span className="font-bold text-rose-deep block mb-0.5">Special note:</span>
                              &ldquo;{activeTicket.notes}&rdquo;
                            </div>
                          )}

                          {/* Aesthetic ticket punch holes */}
                          <span className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-cream-100 border-r border-gold-300"></span>
                          <span className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-cream-100 border-l border-gold-300"></span>
                        </div>

                        {/* Barcode Mock */}
                        <div className="bg-cream-50 py-4 px-6 flex flex-col items-center justify-center">
                          <div className="flex gap-1 h-8 items-center opacity-75">
                            {[1,3,1,1,4,2,1,3,2,1,4,1,3,1,1,4,2,1,1,2].map((w, idx) => (
                              <span key={idx} className="bg-stone-900 h-full" style={{ width: `${w}px` }}></span>
                            ))}
                          </div>
                          <span className="text-[8px] font-mono tracking-wider text-rose-medium/55 mt-1.5 uppercase">
                            SALOON-B17-ISLAMABAD-{activeTicket.id}
                          </span>

                          <button 
                            onClick={() => window.print()}
                            className="mt-4 px-4 py-1.5 rounded-full border border-gold-400 bg-linear-to-r from-gold-100 to-cream-50 text-[10px] font-sans uppercase font-bold text-gold-800 tracking-wider flex items-center justify-center gap-1 hover:bg-gold-200 transition-colors cursor-pointer"
                          >
                            <Download className="w-3 h-3 text-gold-600" />
                            Print Receipt Voucher
                          </button>
                        </div>

                      </div>
                    ) : (
                      <div className="h-full bg-cream-50/50 rounded-2xl border border-dashed border-gold-300 p-8 flex flex-col items-center justify-center text-center">
                        <Ticket className="w-12 h-12 text-gold-400 mb-2 animate-pulse" />
                        <h4 className="font-serif font-bold text-stone-400">Select Booking Listing</h4>
                        <p className="text-[11px] text-stone-400 mt-1 max-w-[200px]">Click any reservation on the left to review your luxury entrance pass.</p>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* Bottom mini status bar */}
            <div className="bg-cream-200 border-t border-gold-200/20 px-6 py-4 flex flex-wrap justify-between items-center shrink-0 gap-3">
              <span className="text-[9px] font-sans font-light text-rose-medium inline-flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-gold-600" />
                Special: Get a 10% discount on Nikkah bookings by referencing your receipt.
              </span>
              <span className="text-[9px] font-sans text-rose-medium/50 tracking-wider">
                © {new Date().getFullYear()} Jugnu&#39;s Saloon. All Rights Reserved.
              </span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
