import React from 'react';
import { Heart, MessageSquare, Sparkles } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

export const AboutHospital: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="about-hospital">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-surface-container">
              <img
                src={hospitalConfig.media.receptionLounge}
                alt="Tranquil and welcoming clinic lounge at Pankti Hospital Gandhinagar"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-5 right-4 sm:right-6 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary text-white shadow-xl border border-primary-fixed/20">
              <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-primary-fixed">
                <Heart className="w-5 h-5 fill-[#b5eee4] text-[#b5eee4]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight text-white">Compassionate</span>
                <span className="text-xs text-[#b5eee4] mt-0.5">Patient-first consultations</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase font-sans">
              The Pankti Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-primary tracking-tight mt-1.5 mb-4 leading-tight">
              A Healthcare Experience Built Around You
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed">
              Every patient deserves to feel heard, respected, and comfortable. Our approach brings together attentive care, clear communication, and a welcoming environment designed to dispel medical anxiety.
            </p>

            {/* 3 Philosophy Pillars */}
            <div className="space-y-4 w-full">
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white shadow-xs border border-surface-container/60">
                <div className="w-10 h-10 rounded-full bg-secondary-container/60 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-on-surface">Patient-First Approach</h4>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Care plans tailored to individual needs without rushed consultations, ensuring every concern is thoroughly addressed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white shadow-xs border border-surface-container/60">
                <div className="w-10 h-10 rounded-full bg-secondary-container/60 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-on-surface">Clear Communication</h4>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Transparent explanations of every procedure, treatment option, and preventive step before any clinical intervention begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white shadow-xs border border-surface-container/60">
                <div className="w-10 h-10 rounded-full bg-secondary-container/60 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-on-surface">Comfort and Care</h4>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    A serene, non-intimidating clinic atmosphere engineered to alleviate anxiety from the moment you step through our doors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
