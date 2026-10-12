import React from 'react';
import { Heart, Baby, RefreshCw, Microscope, ShieldCheck, Mail } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

export const WomensHealthcareSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Heart className="w-5 h-5 text-tertiary" />;
      case 1:
        return <Baby className="w-5 h-5 text-tertiary" />;
      case 2:
        return <RefreshCw className="w-5 h-5 text-tertiary" />;
      default:
        return <Microscope className="w-5 h-5 text-tertiary" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="womens-health-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold text-tertiary tracking-widest uppercase font-sans">
              Department of Gynecology &amp; Women's Health
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-primary tracking-tight mt-1.5 mb-4 leading-tight">
              Women's Healthcare, With Understanding
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed">
              Healthcare should feel personal, supportive, and respectful. Discover a welcoming clinical environment where your questions, transitions, and long-term vitality receive unhurried, considerate attention.
            </p>

            {/* 2x2 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {hospitalConfig.womensHealthServices.map((service, idx) => (
                <div
                  key={service.title}
                  className="p-5 rounded-2xl bg-surface-container-low border border-surface-container/70 flex flex-col"
                >
                  <div className="mb-2.5">{getIcon(idx)}</div>
                  <h4 className="text-base font-semibold text-on-surface mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button in Muted Rose / Tertiary */}
            <a
              href="#appointment-section"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-tertiary text-white font-semibold text-sm shadow-md hover:bg-tertiary-container transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-tertiary"
            >
              <Mail className="w-4 h-4" />
              <span>Enquire About Women's Healthcare</span>
            </a>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface-container">
              <img
                src={hospitalConfig.media.consultationRoom}
                alt="Empathetic consultation environment at Pankti Women's Hospital"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Dignified Consultation Badge */}
            <div className="mt-4 p-4 rounded-2xl bg-white shadow-sm border border-surface-container/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ffdad6]/60 flex items-center justify-center text-tertiary shrink-0">
                  <ShieldCheck className="w-5 h-5 text-tertiary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-on-surface">
                    Private &amp; Dignified Consultation Rooms
                  </p>
                  <p className="text-[11px] sm:text-xs text-outline font-medium">
                    Dedicated female patient advocacy
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-secondary bg-secondary-container/50 px-3 py-1 rounded-full whitespace-nowrap">
                Discreet Care
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
