import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

export const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="contact-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-3xl bg-white shadow-md border border-surface-container/70 overflow-hidden">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-secondary mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wider font-sans">
                  Gandhinagar Flagship Clinic
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl font-normal text-primary tracking-tight mb-8">
                Pankti Women &amp; Dental Hospital
              </h3>

              {/* Info Items */}
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">
                      Hospital Address
                    </h5>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {hospitalConfig.address.full}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">
                      Direct Telephone
                    </h5>
                    <a
                      href={hospitalConfig.phone.dial}
                      className="font-serif text-2xl text-primary hover:text-primary-container transition-colors block mt-0.5 tracking-tight"
                    >
                      {hospitalConfig.phone.display}
                    </a>
                    <p className="text-xs text-outline font-medium mt-0.5">
                      Tap to dial Sargasan reception desk
                    </p>
                  </div>
                </div>

                {/* Clinical Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">
                      Clinical Hours
                    </h5>
                    <p className="text-sm text-on-surface font-semibold mt-1">
                      {hospitalConfig.hours.headline}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                      {hospitalConfig.hours.clarification}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-2.5 pt-6 border-t border-surface-container w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                <a
                  href={hospitalConfig.phone.dial}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary-container text-white text-xs sm:text-sm font-semibold hover:bg-primary transition-colors text-center shadow-xs whitespace-nowrap min-h-[42px]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call Reception</span>
                </a>

                <a
                  href={hospitalConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-surface-container text-on-surface text-xs sm:text-sm font-semibold hover:bg-surface-container-high transition-colors text-center whitespace-nowrap min-h-[42px]"
                >
                  <Navigation className="w-4 h-4 text-primary shrink-0" />
                  <span>Directions ↗</span>
                </a>
              </div>

              <a
                href={hospitalConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#cde9d6]/70 text-[#082014] text-xs sm:text-sm font-semibold hover:bg-[#cde9d6] transition-colors text-center w-full min-h-[38px]"
                title="Message on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Map Element */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden shadow-md bg-white border border-surface-container/70 min-h-[420px] relative">
            <div
              className="w-full h-full min-h-[380px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url('${hospitalConfig.media.mapGraphic}')`,
              }}
            >
              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

              {/* Map Target Marker Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-xl ring-4 ring-white animate-bounce">
                  <MapPin className="w-6 h-6 text-[#b5eee4]" />
                </div>
                <span className="mt-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold shadow-md whitespace-nowrap">
                  Pankti Hospital
                </span>
              </div>

              {/* Simulated Map Overlay HUD */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-surface-container/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#b5eee4]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface leading-tight">
                      {hospitalConfig.maps.embedPlaceName}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Swagat Flamingo Road, Gandhinagar 382419
                    </p>
                  </div>
                </div>

                <a
                  href={hospitalConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-container transition-colors shrink-0 shadow-xs"
                >
                  <span>Navigate in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
