/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'hair' | 'face' | 'nails' | 'spa';
  description: string;
  priceRange: string;
  duration: string;
  popular: boolean;
}

export interface GalleryItem {
  id: string;
  category: 'Bridal' | 'Party Makeup' | 'Hair' | 'Nails' | 'Salon Studio';
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  service: string;
  text: string;
  rating: number;
  date: string;
}

export interface BookingRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  timeSlot: string;
  serviceId: string;
  stylistId: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  notes?: string;
  createdAt: string;
}
