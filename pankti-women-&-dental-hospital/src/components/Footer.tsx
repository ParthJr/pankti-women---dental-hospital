import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, HeartPulse, ShieldCheck } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenEmergency,
}) => {
  return (
    <footer className="w-full bg-primary text-[#f2f1eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand & Overview (Col 1-2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-white border border-[#b5eee4]/30">
                <HeartPulse className="w-5 h-5 text-[#b5eee4]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-white tracking-tight leading-none">
                  Pankti
                </span>
                <span className="text-[11px] font-semibold text-[#b5eee4] uppercase tracking-wider mt-0.5">
                  Women &amp; Dental Hospital
                </span>
              </div>
            </div>

            <p className="text-sm text-[#99d1c8] max-w-sm mb-6 leading-relaxed">
              Dedicated women&apos;s healthcare and personalized dental wellness in Sargasan, Gandhinagar. An editorial sanctuary of clinical precision and gentle care.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#f2f1eb]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b5eee4]" />
                <span className="tracking-wide">Emergency &amp; Desk: 063596 35941</span>
              </div>
              <a
                href={hospitalConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#b5eee4] hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Maps Directions →</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#99d1c8]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-hospital" className="hover:text-white transition-colors">
                  About Our Hospital
                </a>
              </li>
              <li>
                <a href="#dental-feature" className="hover:text-white transition-colors">
                  Dental Care Wing
                </a>
              </li>
              <li>
                <a href="#womens-health-feature" className="hover:text-white transition-colors">
                  Women&apos;s Healthcare
                </a>
              </li>
              <li>
                <a href="#appointment-section" className="hover:text-white transition-colors">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="#contact-location" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Care (Col 4) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Clinical Care
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#b5eee4] uppercase tracking-wider block mb-1.5">
                  Dental Wellness
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-[#99d1c8]">
                  <li>
                    <a href="#dental-feature" className="hover:text-white transition-colors">
                      Preventive Oral Care
                    </a>
                  </li>
                  <li>
                    <a href="#dental-feature" className="hover:text-white transition-colors">
                      Routine Check-ups
                    </a>
                  </li>
                  <li>
                    <a href="#dental-feature" className="hover:text-white transition-colors">
                      Dental Bonding &amp; Aesthetics
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#ffdad6] uppercase tracking-wider block mb-1.5">
                  Women&apos;s Health
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-[#99d1c8]">
                  <li>
                    <a href="#womens-health-feature" className="hover:text-white transition-colors">
                      Gynecological Wellness
                    </a>
                  </li>
                  <li>
                    <a href="#womens-health-feature" className="hover:text-white transition-colors">
                      Maternity Care Guidance
                    </a>
                  </li>
                  <li>
                    <a href="#womens-health-feature" className="hover:text-white transition-colors">
                      Preventive Screenings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location & Hours (Col 5) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Location &amp; Hours
            </h4>
            <div className="text-xs text-[#99d1c8] space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b5eee4] shrink-0 mt-0.5" />
                <span>The Sky Court, Sargasan, Gandhinagar, Gujarat 382419</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#b5eee4] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Open 24 Hours</p>
                  <p className="text-[#99d1c8] text-[11px] mt-0.5 leading-snug">
                    Specialist consultations verified on booking confirmation.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#b5eee4] text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b5eee4] animate-pulse" />
                  <span>Emergency Services Active</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="mt-12 pt-6 bg-primary-container/40 rounded-2xl px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#99d1c8]">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Pankti Women &amp; Dental Hospital. All rights reserved.{' '}
            <span className="hidden lg:inline text-white/30">·</span>{' '}
            <span className="italic block sm:inline mt-1 sm:mt-0 text-[#99d1c8]/90">
              Appointment requests subject to hospital confirmation.
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              type="button"
              onClick={onOpenEmergency}
              className="hover:text-white transition-colors underline cursor-pointer flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Emergency Triage</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
