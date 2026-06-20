/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, TeamMember, Testimonial } from './types';

// Let's import the exact paths to our custom generated images matching the business profile
import heroImage from './assets/images/jugnus_salon_interior_1781668265635.jpg';
import bridalImage from './assets/images/bridal_makeup_portfolio_1781668286958.jpg';
import hairImage from './assets/images/hair_styling_glam_1781668309858.jpg';
import nailsImage from './assets/images/luxurious_nail_art_1781668336045.jpg';
import partyMakeupImage from './assets/images/party_makeup_radiance_1781668359900.jpg';
import entranceImage from './assets/images/jugnus_salon_entrance_1781669981871.jpg';
import washAreaImage from './assets/images/salon_wash_area_1781670210493.jpg';
import guestLoungeImage from './assets/images/salon_guest_lounge_1781670234702.jpg';
import pedicureStationImage from './assets/images/salon_pedicure_station_1781670255498.jpg';
import stylingAreaImage from './assets/images/salon_styling_area_1781670275595.jpg';
import leadStylistImage from './assets/images/salon_lead_stylist_1781670295502.jpg';
import luxuriousRadianceImage from './assets/images/luxurious_radiance_1781963087801.jpg';
import uncompromisingArtistryImage from './assets/images/uncompromising_artistry_1781963110582.jpg';
import eliteSanctuaryImage from './assets/images/elite_sanctuary_1781963136090.jpg';

export const IMAGES = {
  hero: heroImage,
  bridal: bridalImage,
  hair: hairImage,
  partyMakeup: partyMakeupImage,
  nails: nailsImage,
  entrance: entranceImage,
  washArea: washAreaImage,
  guestLounge: guestLoungeImage,
  pedicureStation: pedicureStationImage,
  stylingArea: stylingAreaImage,
  leadStylist: leadStylistImage,
  luxuriousRadiance: luxuriousRadianceImage,
  uncompromisingArtistry: uncompromisingArtistryImage,
  eliteSanctuary: eliteSanctuaryImage,
  spa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  staff1: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  staff2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
};

export const SALON_INFO = {
  name: "Jugnu's Saloon B-17",
  tagline: "Where Beauty Meets Elegance",
  address: "plot 4 Block C, mini Commercial, Madina Arcade, Street 8, Block C Multi Gardens B-17, Islamabad, Pakistan",
  shortAddress: "B-17 Segment, Islamabad, PK",
  phone: "0331 5550639",
  whatsapp: "+92 331 5550639",
  email: "concierge@jugnussaloon.com",
  hours: {
    weekdays: "10:30 AM – 8:30 PM",
    sunday: "10:30 AM – 8:30 PM",
  },
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Jugnu's+saloon+B17+Islamabad",
  socials: {
    instagram: "https://instagram.com/jugnus.saloon.official",
    facebook: "https://facebook.com/jugnus.saloon",
    pinterest: "https://pinterest.com/jugnussaloon",
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "acrylic-nails",
    name: "Acrylic nails",
    category: "nails",
    description: "Deluxe acrylic full-set with custom shaping, cuticle refinement, and premium glass-shine gel lacquer or custom nail couture.",
    priceRange: "PKR 5,500 – 8,500",
    duration: "90 mins",
    popular: false
  },
  {
    id: "balayage",
    name: "Balayage",
    category: "hair",
    description: "Bespoke hand-painted dimensional highlights for a seamless, sun-kissed caramel or golden blonde finish that grows out beautifully.",
    priceRange: "PKR 18,000 – 32,500",
    duration: "180 mins",
    popular: true
  },
  {
    id: "blow-dry",
    name: "Blow dry",
    category: "hair",
    description: "Fabulous structural, long-lasting volumizing round brush blowout finished with high-shine organic nourishing oils.",
    priceRange: "PKR 3,000 – 5,500",
    duration: "45 mins",
    popular: false
  },
  {
    id: "body-waxing",
    name: "Body waxing",
    category: "spa",
    description: "Exceptional comprehensive body hair removal utilizing our premium ultra-gentle, organic honey-chamomile warm wax.",
    priceRange: "PKR 4,500 – 12,000",
    duration: "60 mins",
    popular: false
  },
  {
    id: "bridal-services",
    name: "Bridal services",
    category: "makeup",
    description: "Our legendary high-definition wedding makeover including full premium skin prep, luxurious contouring, and exquisite eyelash couture.",
    priceRange: "PKR 45,000 – 65,000",
    duration: "180 mins",
    popular: true
  },
  {
    id: "eyebrow-shaping",
    name: "Eyebrow shaping",
    category: "face",
    description: "Expert eyebrow sculpting and styling meticulously tailored to complement your facial structure, using precision tweezing and organic balms.",
    priceRange: "PKR 1,250 – 2,500",
    duration: "25 mins",
    popular: false
  },
  {
    id: "eyebrow-threading",
    name: "Eyebrow threading",
    category: "face",
    description: "Flawless precision cotton threading to clean and define your eyebrow arch with minimal skin friction, finished with cool organic gel.",
    priceRange: "PKR 600 – 1,200",
    duration: "15 mins",
    popular: false
  },
  {
    id: "hair-extensions",
    name: "Hair extensions",
    category: "hair",
    description: "Luxurious premium 100% Remy human hair extensions blended seamlessly to deliver gorgeous immediate volume, density, and customized length.",
    priceRange: "PKR 25,000 – 45,000",
    duration: "150 mins",
    popular: false
  },
  {
    id: "hairstyling",
    name: "Hairstyling",
    category: "hair",
    description: "Sensational haute hair styling for special events, including Hollywood waves, romantic textured half-updos, and sleek royal buns.",
    priceRange: "PKR 6,500 – 12,000",
    duration: "75 mins",
    popular: true
  },
  {
    id: "hair-threading",
    name: "Hair threading",
    category: "face",
    description: "Gentle facial hair threading details for cheeks, chin, forehead, or upper lip to ensure a perfectly smooth skin surface for makeup foundations.",
    priceRange: "PKR 800 – 2,000",
    duration: "20 mins",
    popular: false
  },
  {
    id: "makeup-services",
    name: "Make-up services",
    category: "makeup",
    description: "Bespoke signature party glow or evening velvet glam designed to enhance your natural beauty. Includes eyelashes.",
    priceRange: "PKR 12,000 – 18,000",
    duration: "90 mins",
    popular: true
  },
  {
    id: "massage",
    name: "Massage",
    category: "spa",
    description: "Divine full body therapeutic pressure point massage and hot candle aromatherapy to deeply release physical stress and refresh your mind.",
    priceRange: "PKR 6,000 – 10,000",
    duration: "60 mins",
    popular: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-entrance",
    category: "Salon Studio",
    title: "Sanctuary Front Facade",
    subtitle: "Our exquisite white-marble salon storefront entrance",
    imageUrl: IMAGES.entrance
  },
  {
    id: "gal-lounge",
    category: "Salon Studio",
    title: "Luxurious Guest Lounge",
    subtitle: "Shell-backed black velvet tufted sofas and wooden slat ceiling",
    imageUrl: IMAGES.guestLounge
  },
  {
    id: "gal-styling",
    category: "Salon Studio",
    title: "Styling Suite",
    subtitle: "Arched vanity mirrors over fluted teak accent wall paneling",
    imageUrl: IMAGES.stylingArea
  },
  {
    id: "gal-pedicure",
    category: "Salon Studio",
    title: "Prance Pedicure & Nail Bar",
    subtitle: "Deluxe cream leather chairs resting on elevated porcelain basins",
    imageUrl: IMAGES.pedicureStation
  },
  {
    id: "gal-wash",
    category: "Salon Studio",
    title: "Hair Washing Station",
    subtitle: "Ergonomic deep wash basins beside contemporary geometric feature tiles",
    imageUrl: IMAGES.washArea
  },
  {
    id: "gal-1",
    category: "Bridal",
    title: "The Regal Bride",
    subtitle: "Classic traditional red dupatta makeup styling",
    imageUrl: IMAGES.bridal
  },
  {
    id: "gal-2",
    category: "Party Makeup",
    title: "Champagne Luminescence",
    subtitle: "Elegant nude finish with dewy contour",
    imageUrl: IMAGES.partyMakeup
  },
  {
    id: "gal-3",
    category: "Hair",
    title: "Honey Waves & Pearl Art",
    subtitle: "Soft Hollywood waves in luxury gold accents",
    imageUrl: IMAGES.hair
  },
  {
    id: "gal-4",
    category: "Nails",
    title: "Parisian Blush Tip",
    subtitle: "Crisp almond-shaped gel overlay extensions",
    imageUrl: IMAGES.nails
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Jugnu Chaudhry",
    role: "Founder & Creative Director",
    bio: "With over 15 years of cosmetic mastery trained in London and Dubai, Jugnu founded the saloon to bring elite, modern international bridal and cosmetic philosophies to Islamabad.",
    specialties: ["HD Bridal Makeup", "Facial Structuring", "Aesthetic Consulting"],
    imageUrl: IMAGES.team
  },
  {
    id: "team-2",
    name: "Sabeen Malik (Mrs. Usman Bashir)",
    role: "Senior Hair & Styling Artisan",
    bio: "Sabeen is our celebrated senior expert in custom balayages, structured high-volume blowouts, and intricate bridal updos. Passionate, meticulous, and elegant, she designs custom hair-crowns tailored to each guest.",
    specialties: ["Balayage & Pigment Art", "Couture Cuts", "Bridal Updos & Hair Artistry"],
    imageUrl: IMAGES.leadStylist
  },
  {
    id: "team-3",
    name: "Dr. Amara Khan",
    role: "Skin Esthetician & Therapist",
    bio: "With a degree in clinical cosmetology, Amara designs personalized cellular facials and anti-stress therapies using premier ingredients to reveal your natural luminous glow.",
    specialties: ["Hydra-cellular Therapy", "24K Gold Peeling", "Acupressure Facial Massage"],
    imageUrl: IMAGES.staff2
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    author: "Ayesha Ahmed",
    service: "Bridal Makeup",
    text: "Jugnu made me feel like absolute royalty on my wedding day! The B-17 parlour is incredibly serene, clean, and beautiful. My makeup lasted flawless for 12 hours under the lights, and the pictures look dreamlike. Truly Islamabad's finest!",
    rating: 5,
    date: "May 24, 2026"
  },
  {
    id: "rev-2",
    author: "Zainab Raza",
    service: "Gold Facial & Pedicure",
    text: "The milk and rose lavender soak and back massage was pure heaven! From the moment you walk in, the champagne and blush gold decor immediately calms you. Their commitment to premium products and hygiene is amazing. Highly recommend!",
    rating: 5,
    date: "Jun 02, 2026"
  },
  {
    id: "rev-3",
    author: "Maryam Shah",
    service: "Balayage & Hair UP-DO",
    text: "Sabeen worked her magic on my locks. I got a custom caramel balayage and soft waved half-updo, and the compliments haven't stopped. The attention to detail here is on another level.",
    rating: 5,
    date: "Jun 11, 2026"
  }
];

export const TIME_SLOTS = [
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "01:30 PM",
  "02:30 PM",
  "03:30 PM",
  "04:30 PM",
  "05:30 PM",
  "06:30 PM",
  "07:30 PM"
];
