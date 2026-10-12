import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, User, HeartPulse } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

interface HeaderProps {
  onOpenVisits: () => void;
  bookingCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVisits, bookingCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about-hospital' },
    { label: 'Dental Care', href: '#dental-feature' },
    { label: "Women's Healthcare", href: '#womens-health-feature' },
    { label: 'Our Standards', href: '#patient-standards' },
    { label: 'Contact', href: '#contact-location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#FAF8F2]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
            : 'bg-[#FAF8F2]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 group"
            aria-label="Pankti Women & Dental Hospital - Home"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <HeartPulse className="w-5 h-5 text-[#b5eee4]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-normal text-primary tracking-tight leading-none">
                Pankti
              </span>
              <span className="font-sans text-[11px] font-semibold text-secondary tracking-widest uppercase mt-0.5">
                Women &amp; Dental Hospital
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1.5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Cluster: Direct Call, Booking CTA, Visit History */}
          <div className="flex items-center gap-3">
            {/* Direct Phone Pill */}
            <a
              href={hospitalConfig.phone.dial}
              className="hidden md:flex items-center gap-2 bg-secondary-container/60 hover:bg-secondary-container px-3.5 py-1.5 rounded-full text-secondary hover:text-on-secondary-fixed transition-colors font-medium text-xs shadow-xs focus-visible:ring-2 focus-visible:ring-primary"
              title="Call Sargasan reception desk"
            >
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <span>{hospitalConfig.phone.display} · Sargasan, Gandhinagar</span>
            </a>

            {/* Primary Appointment CTA */}
            <a
              href="#appointment-section"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-white text-sm font-semibold hover:bg-primary transition-all duration-200 shadow-[0_4px_16px_-2px_rgba(36,92,85,0.25)] focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Calendar className="w-4 h-4" />
              <span className="whitespace-nowrap">Book an Appointment</span>
            </a>

            {/* Visit History / Patient Profile Toggle */}
            <button
              type="button"
              onClick={onOpenVisits}
              className="relative w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="View submitted appointment enquiries"
              title="View my appointment requests"
            >
              <User className="w-4 h-4 text-white" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ba1a1a] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#FAF8F2]">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-primary rounded-full hover:bg-surface-container transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 xl:hidden flex flex-col bg-surface/98 backdrop-blur-xl transition-all"
        >
          <div className="h-20 px-4 sm:px-6 flex items-center justify-between border-b border-surface-container">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5 text-[#b5eee4]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-normal text-primary leading-none">
                  Pankti Hospital
                </span>
                <span className="font-sans text-[10px] font-semibold text-secondary uppercase tracking-wider mt-0.5">
                  Sargasan, Gandhinagar
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-on-surface hover:bg-surface-container-high transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-6 border-t border-surface-container">
              <a
                href={hospitalConfig.phone.dial}
                className="w-full h-12 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span>Call Desk: {hospitalConfig.phone.display}</span>
              </a>

              <a
                href="#appointment-section"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 rounded-full bg-primary text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisits();
                }}
                className="w-full h-12 rounded-full bg-surface-container text-on-surface font-semibold text-sm flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-primary" />
                <span>My Appointments {bookingCount > 0 ? `(${bookingCount})` : ''}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
