import React from 'react';
import { Phone, Calendar, Home, Sparkles, HeartHandshake, User, MapPin } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

interface MobileNavigationProps {
  onOpenVisits: () => void;
  bookingCount: number;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onOpenVisits,
  bookingCount,
}) => {
  return (
    <nav
      aria-label="Mobile Navigation and Quick Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-xl border-t border-surface-container shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      {/* Quick Action Top Split */}
      <div className="px-3 pt-2.5 pb-2">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={hospitalConfig.phone.dial}
            className="min-h-[42px] px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-transform"
          >
            <Phone className="w-3.5 h-3.5 text-secondary" />
            <span>Call Clinic</span>
          </a>

          <a
            href="#appointment-section"
            className="min-h-[42px] px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-3.5 h-3.5 text-[#b5eee4]" />
            <span>Book Appointment</span>
          </a>
        </div>
      </div>

      {/* 5 Bottom Nav Tab Buttons */}
      <div className="flex justify-around items-center h-12 px-2 border-t border-surface-container/60">
        <a
          href="#"
          className="flex flex-col items-center justify-center min-w-[48px] text-primary transition-colors py-1"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-semibold mt-0.5">Home</span>
        </a>

        <a
          href="#services-overview"
          className="flex flex-col items-center justify-center min-w-[48px] text-on-surface-variant hover:text-primary transition-colors py-1"
          aria-label="Services"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Services</span>
        </a>

        <a
          href="#about-hospital"
          className="flex flex-col items-center justify-center min-w-[48px] text-on-surface-variant hover:text-primary transition-colors py-1"
          aria-label="Philosophy"
        >
          <HeartHandshake className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Philosophy</span>
        </a>

        <button
          type="button"
          onClick={onOpenVisits}
          className="relative flex flex-col items-center justify-center min-w-[48px] text-on-surface-variant hover:text-primary transition-colors py-1 cursor-pointer"
          aria-label="My Visits"
        >
          <User className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Visits</span>
          {bookingCount > 0 && (
            <span className="absolute top-0 right-2 w-3.5 h-3.5 rounded-full bg-[#ba1a1a] text-white text-[9px] font-bold flex items-center justify-center">
              {bookingCount}
            </span>
          )}
        </button>

        <a
          href="#contact-location"
          className="flex flex-col items-center justify-center min-w-[48px] text-on-surface-variant hover:text-primary transition-colors py-1"
          aria-label="Clinic Info"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Clinic</span>
        </a>
      </div>
    </nav>
  );
};
