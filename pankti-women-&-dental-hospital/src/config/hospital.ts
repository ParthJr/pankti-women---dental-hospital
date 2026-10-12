/**
 * Central Hospital Configuration File
 * Pankti Women & Dental Hospital, Sargasan, Gandhinagar, Gujarat
 *
 * All business details, contact information, hours, location links,
 * and service data are centralized here for easy maintenance.
 */

export interface HospitalConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    full: string;
  };
  phone: {
    display: string;
    formatted: string;
    dial: string;
  };
  whatsapp: {
    number: string;
    url: string;
    defaultMessage: string;
  };
  maps: {
    locationUrl: string;
    directionsUrl: string;
    embedPlaceName: string;
  };
  reviews: {
    rating: number;
    count: number;
    source: string;
    locationSummary: string;
    featuredQuote: string;
  };
  hours: {
    headline: string;
    emergencyTag: string;
    opdSchedule: string;
    clarification: string;
  };
  media: {
    logoUrl: string;
    heroConsultation: string;
    dentalOperatory: string;
    consultationRoom: string;
    receptionLounge: string;
    mapGraphic: string;
  };
  services: {
    id: string;
    title: string;
    category: string;
    badge: string;
    tagClass: string;
    icon: string;
    description: string;
    points: string[];
    anchorId: string;
  }[];
  dentalProcedures: {
    title: string;
    icon: string;
    description: string;
    benefit: string;
  }[];
  womensHealthServices: {
    title: string;
    icon: string;
    description: string;
  }[];
  trustPrinciples: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const hospitalConfig: HospitalConfig = {
  name: "Pankti Women & Dental Hospital",
  shortName: "Pankti Hospital",
  tagline: "Care That Puts You First.",
  subTagline: "Compassionate Care. Confident Smiles.",
  address: {
    line1: "2nd Floor, The Sky Court",
    line2: "Swagat Flamingo Road",
    locality: "Sargasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    landmark: "Sargasan Cross Roads, Near Swagat Flamingo",
    full: "2nd Floor, The Sky Court, Swagat Flamingo Road, Sargasan, Gandhinagar, Gujarat 382419",
  },
  phone: {
    display: "063596 35941",
    formatted: "+91 63596 35941",
    dial: "tel:06359635941",
  },
  whatsapp: {
    number: "916359635941",
    url: "https://wa.me/916359635941?text=Hello%20Pankti%20Hospital%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20appointment.",
    defaultMessage: "Hello Pankti Hospital, I would like to enquire about booking an appointment.",
  },
  maps: {
    locationUrl: "https://maps.google.com/?q=Pankti+Women+%26+Dental+Hospital+The+Sky+Court+Sargasan+Gandhinagar+Gujarat+382419",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Pankti+Women+%26+Dental+Hospital+The+Sky+Court+Sargasan+Gandhinagar",
    embedPlaceName: "The Sky Court, Sargasan, Gandhinagar",
  },
  reviews: {
    rating: 4.9,
    count: 459,
    source: "Google reviews",
    locationSummary: "Reflected across 459 Google reviews from families in Sargasan, Kudasan & Gandhinagar.",
    featuredQuote: "Dr. Pankti and the clinical staff handled my treatment with unbelievable patience and warmth. Best hospital in Gandhinagar.",
  },
  hours: {
    headline: "Listed as Open 24 Hours",
    emergencyTag: "Emergency Services Active",
    opdSchedule: "Routine OPD & Dental Consultations: 9:00 AM – 8:30 PM (Mon-Sat)",
    clarification: "Specialist consultation and outpatient timings verified upon booking confirmation.",
  },
  media: {
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT05wv_opv5yb3l8qKfGtS8TZym-_b2-pCoIr5sfWMdC-g3Rroh1gI_DT8abBO7wuMcgzJtYkr9q3a3f4amZl2kfjrATJkKxD3CEd3OI15VlYlZ8dmNMAYNVrm7bSjCJV3tPdw0dpA7G3BoqTN-IixkE4Drrx7F1MEfFJjCqDs_b5ZGMT3RTgFQqJofJMBg1dLfS5N2TUQ4YyxRQrQZehj1zJYUNZymnvBAGHzmaEObA84_TpCYuoY",
    heroConsultation: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8yhxFQEvEyNgmrrUQ9K5SQvSC_-O28Cw3RbWaQyTNJNiW5RadkgKdhC0zmVs39eFFQWPbdm4Hzqi8djv8LG8reWKKHky59LOQchIHVGznzRHWnHW21nJUm-XLn0uIyB-t12l7OIl039wzJ0f73nvG-N9_FLpk08Ehpw4pBZTQbwnmsD11UJ-DF74tzYLix5O4il_WtnDlcrmvOY2nDJwpS8WoLR0IpnCCvh659K7HH52bpW4U4w8m",
    dentalOperatory: "https://lh3.googleusercontent.com/aida-public/AB6AXuBntzdhsjaseXvUYqzCso7CtV0GUn87iHB_2_hPM-e73esdCwOvOvhQxk3yXBAH3Ooy8XwIbDAaW23LhSuOIpjYaPmHQcyH_6XMZ3sL0xbv2bwTaraGc6fh2ggZieaSwAeUUdTI-oOIEX2ocJ_Ov7f8schvNcm_tDqwn0ZFevk10steoY5zW2o_qF6o6lPI_OJ1ouv8RvVQ8zZ_OKkzyPjTqCNwzsl-mf32QwQmSdPcc3PbVCQF6z65",
    consultationRoom: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN9qPyeFK1Bdh4HCsYzALXtsDOiJnVUELZFm4EyJcs8JSrvRQrKPSbeA00ALixs6GshxwzHr1cEDEOzstwbaMpK849M3Wc5NE5fmPMv17cn0WLK3kzHEkhqTm0JCJMJzTwu_CfpEGEElCiUsZvBsslngTadlZcgZTja-JJ6gah8QHw4eCMroVqd8n5XXYCOcz1Ps54zQpYmjWESKq6KXVihDfnjQeLKOemxHwmrbhQswgOSeB0vnxX",
    receptionLounge: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtma2IwfsmpyLw7xluvNHK_THPexPtBz3omCcQUvNaif48A5JZoqVZkJydJcqW63cYiE7fMobNKvVxZk6Mniyyf-vF1DvE3Pip2mDPDv6Xbs3v1fsaNgGmxHmeXnxsJpUBF3W9Ehlbe3k9eDDOD9xxWMZ7Ptu6UdvwNIILZwdJYdK0Kw-SktpHcmSyYzKyv7SBaaY50xxFiKM_3ViUPp_8n6iezuAQO3bCsN4SFFHBhiMkO6-ut7uq",
    mapGraphic: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkDrbH337eAzro80rRyPx9UvtAnPwouSBwtH4uZRjQJvzjnHNCdZ6jzk7n7IRqnsHJ8Z151Fo3vJZ9ZrdujYcgmL4SriwSETXPaVjJihVKbtNxMpQpBh9fdds7FRhntTh24xRZMlDLiOWKgvvi0VOawXQovzE1yB7v9jlKx5_iFw11r-GgmCCECVct2_oz9qhlncnQMi0_DOG92tcuOJT_l27u8Wo2miwyh4Zx-zEvTSDUwTULlwPn",
  },
  services: [
    {
      id: "dental-care",
      title: "Dental Care",
      category: "Department of Dental Surgery & Aesthetics",
      badge: "Dental Wellness",
      tagClass: "bg-[#cde9d6]/60 text-[#02443e]",
      icon: "dentistry",
      description: "Personalized dental care focused on oral health, comfort, and confident smiles.",
      points: [
        "Preventive oral examinations & digital radiographs",
        "Restorative treatments & aesthetic bonding",
        "Gentle ultrasonic hygiene & cavity prophylaxis",
      ],
      anchorId: "dental-feature",
    },
    {
      id: "womens-healthcare",
      title: "Women's Healthcare",
      category: "Department of Gynecology & Women's Health",
      badge: "Women's Health",
      tagClass: "bg-[#ffdad6]/60 text-[#56332f]",
      icon: "female",
      description: "Considerate healthcare in a welcoming, respectful, and discreet clinical environment.",
      points: [
        "Gynecological wellness & hormonal consultations",
        "Maternity care guidance (subject to confirmation)",
        "Preventive screenings & reproductive health exams",
      ],
      anchorId: "womens-health-feature",
    },
    {
      id: "preventive-care",
      title: "Preventive Care & Check-ups",
      category: "Routine Wellness & Multi-Point Screenings",
      badge: "Annual Wellness",
      tagClass: "bg-[#eae8e2] text-[#404947]",
      icon: "health_and_safety",
      description: "Regular check-ups and early screenings to empower you with clarity and sustained peace of mind.",
      points: [
        "Comprehensive multi-point wellness evaluations",
        "Periodic diagnostic health assessments",
        "Ongoing preventative health baseline tracking",
      ],
      anchorId: "appointment-section",
    },
  ],
  dentalProcedures: [
    {
      title: "Dental Consultation",
      icon: "search",
      description: "In-depth clinical examination, digital panoramic imaging, and personalized treatment planning with zero pressure.",
      benefit: "Thorough assessment",
    },
    {
      title: "Routine Check-ups",
      icon: "cleaning_services",
      description: "Ultrasonic plaque removal, enamel polish, cavity screenings, and periodontal gum tissue monitoring.",
      benefit: "Gentle hygiene protocol",
    },
    {
      title: "Dental Bonding",
      icon: "auto_fix_high",
      description: "Conservative aesthetic repair for minor chips, gaps, and tooth surface discoloration (subject to confirmation upon evaluation).",
      benefit: "Aesthetic precision",
    },
    {
      title: "Personalized Oral Care",
      icon: "health_and_safety",
      description: "Targeted oral care routines, sensitivity remedies, and enamel preservation techniques tailored to you.",
      benefit: "Long-term protection",
    },
  ],
  womensHealthServices: [
    {
      title: "Gynecological Wellness",
      icon: "spa",
      description: "Annual screenings, hormone balance, and routine pelvic health checks.",
    },
    {
      title: "Maternity Care",
      icon: "child_care",
      description: "Attentive maternal support and prenatal guidance (subject to confirmation).",
    },
    {
      title: "Adolescent & Menopause",
      icon: "change_circle",
      description: "Empathetic care through every hormonal milestone and life stage.",
    },
    {
      title: "Preventive Screenings",
      icon: "biotech",
      description: "Proactive testing for peace of mind, early detection, and longevity.",
    },
  ],
  trustPrinciples: [
    {
      number: "01",
      title: "Welcoming Care Environment",
      description: "Tranquil interior aesthetics with abundant natural Gujarat sunlight, natural linen tones, and restful seating.",
    },
    {
      number: "02",
      title: "Clear Explanations",
      description: "Every step and diagnostic finding is thoroughly discussed in clear, supportive dialogue prior to beginning care.",
    },
    {
      number: "03",
      title: "Attention to Comfort",
      description: "Ergonomically contoured treatment chairs, gentle touch protocols, and unhurried appointment blocks.",
    },
    {
      number: "04",
      title: "Focus on Prevention",
      description: "Empowering you with personalized home habits, nutritional insights, and sustainable wellness practices.",
    },
  ],
};
