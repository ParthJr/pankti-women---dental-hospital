import React from 'react';
import { Search, Sparkles, Wand2, Shield, Check, Calendar } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

export const DentalCareSection: React.FC = () => {
  const getProcedureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-primary" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-primary" />;
      case 2:
        return <Wand2 className="w-5 h-5 text-primary" />;
      default:
        return <Shield className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-secondary-container/20" id="dental-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase font-sans">
              Department of Dental Surgery &amp; Aesthetics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-primary tracking-tight mt-1.5 leading-tight">
              A Healthier Smile Starts Here
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
              Modern dental solutions delivered with clinical precision, advanced digital technology, and patient gentleness.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="#appointment-section"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-white font-semibold text-sm shadow-md hover:bg-primary transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Calendar className="w-4 h-4" />
              <span>Request a Dental Consultation</span>
            </a>
          </div>
        </div>

        {/* 4 Bento Dental Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitalConfig.dentalProcedures.map((proc, index) => (
            <div
              key={proc.title}
              className="p-6 rounded-2xl bg-white shadow-xs hover:shadow-md transition-shadow border border-surface-container/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary-container/70 flex items-center justify-center text-primary mb-4">
                  {getProcedureIcon(index)}
                </div>
                <h4 className="font-sans text-lg font-semibold text-on-surface mb-2">
                  {proc.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {proc.description}
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-surface-container flex items-center text-xs font-semibold text-secondary">
                <Check className="w-4 h-4 mr-1.5 text-secondary shrink-0" />
                <span>{proc.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ergonomic Operatories Showcase Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white shadow-md border border-surface-container/70 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-5/12 aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden bg-surface-container shrink-0">
            <img
              src={hospitalConfig.media.dentalOperatory}
              alt="Natural daylight streaming through Pankti Dental clinic operatory in Gandhinagar"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest font-sans">
              Architectural Calm
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-primary mt-1 mb-3">
              Ergonomic, Light-Filled Operatories
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Our treatment spaces are intentionally oriented toward soothing green vistas in Sargasan. High-grade sterilization safeguards ensure unmatched clinical hygiene, while whisper-quiet technology transforms your dental visit into an effortless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
