import React from 'react';
import { Star, ShieldCheck, Armchair, ArrowRight, Calendar } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

interface HeroSectionProps {
  currentLang?: 'EN' | 'GUJ';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang = 'EN' }) => {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-on-secondary-fixed mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wider uppercase font-sans">
                {currentLang === 'EN'
                  ? 'Compassionate Care. Confident Smiles.'
                  : 'સહાનુભૂતિપૂર્વક સારસંભાળ. આત્મવિશ્વાસપૂર્ણ સ્મિત.'}
              </span>
            </div>

            {/* Main Headline with Serif Typography */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-normal text-primary tracking-tight leading-[1.15] mb-5 max-w-xl text-balance">
              {currentLang === 'EN' ? (
                <>
                  Care That Puts <span className="italic font-normal">You</span> First.
                </>
              ) : (
                <>
                  સારવાર જે હંમેશા <span className="italic font-normal">તમને</span> પ્રથમ રાખે છે.
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              {currentLang === 'EN'
                ? "Thoughtful dental and women's healthcare in a welcoming environment, with your comfort and well-being at the heart of every visit."
                : 'સરગાસણ ગાંધીનગરમાં એક આરામદાયક વાતાવરણમાં વિચારશીલ દંત અને મહિલા આરોગ્ય સેવાઓ, તમારી સુવિધા અને સુખાકારીને કેન્દ્રમાં રાખીને.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6 w-full sm:w-auto">
              <a
                href="#appointment-section"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-white font-semibold text-sm shadow-md hover:bg-primary transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </a>
              <a
                href="#services-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary-container/50 text-primary font-semibold text-sm hover:bg-secondary-container transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Subtle Brand Tagline */}
            <p className="text-sm text-secondary italic mb-8">
              A more personal approach to your healthcare.
            </p>

            {/* Verified Google Review Card */}
            <a
              href={hospitalConfig.maps.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 p-3 pr-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-surface-container/60 group cursor-pointer"
              title="View Google Reviews for Pankti Hospital"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-on-surface">
                    {hospitalConfig.reviews.rating}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-outline font-medium">
                    ({hospitalConfig.reviews.count} Google reviews)
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium mt-0.5">
                  Trusted clinic in Sargasan, Gandhinagar
                </span>
              </div>
            </a>
          </div>

          {/* Right Asymmetric Image Composition */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Primary Consultation Photo */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface-container">
              <img
                src={hospitalConfig.media.heroConsultation}
                alt="Compassionate patient consultation at Pankti Hospital Gandhinagar"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="relative lg:absolute -mt-8 sm:-mt-10 lg:-mt-0 lg:-bottom-8 lg:-left-8 w-full sm:w-80 p-4 rounded-2xl bg-white shadow-xl backdrop-blur-sm z-20 border border-surface-container/80">
              <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden mb-3 bg-surface-container-low">
                <img
                  src={hospitalConfig.media.dentalOperatory}
                  alt="Modern and gentle dental care suite at Pankti Hospital"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start gap-2.5">
                <Armchair className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Gentle, modern dental suites designed with expansive natural light for patient ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
