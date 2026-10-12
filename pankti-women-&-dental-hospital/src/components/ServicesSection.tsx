import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Heart, Activity } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dentistry':
        return <Sparkles className="w-6 h-6 text-primary" />;
      case 'female':
        return <Heart className="w-6 h-6 text-tertiary" />;
      default:
        return <Activity className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Sub-copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase font-sans">
              Comprehensive Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-primary tracking-tight mt-1.5 leading-tight">
              Care for Every Stage of Life
            </h2>
          </div>
          <p className="text-base text-on-surface-variant max-w-md leading-relaxed">
            Harmonizing delicate gynecological consultations and progressive dental hygiene in one tranquil sanctuary.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {hospitalConfig.services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white shadow-xs hover:shadow-xl transition-all duration-300 border border-surface-container/60 group"
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    service.id === 'womens-healthcare'
                      ? 'bg-[#ffdad6]/60 text-tertiary'
                      : 'bg-secondary-container/60 text-primary'
                  }`}
                >
                  {getIcon(service.icon)}
                </div>

                {/* Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    service.id === 'womens-healthcare'
                      ? 'bg-[#ffdad6]/40 text-[#56332f]'
                      : service.id === 'dental-care'
                      ? 'bg-secondary-container/40 text-secondary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {service.badge}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl font-normal text-on-surface mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Check Points */}
                <ul className="space-y-2.5 mb-8">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          service.id === 'womens-healthcare' ? 'text-tertiary' : 'text-secondary'
                        }`}
                      />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <a
                href={`#${service.anchorId}`}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:translate-x-0.5 ${
                  service.id === 'womens-healthcare'
                    ? 'text-tertiary hover:text-tertiary-container'
                    : 'text-primary hover:text-primary-container'
                }`}
              >
                <span>
                  {service.id === 'dental-care'
                    ? 'Explore Dental Care'
                    : service.id === 'womens-healthcare'
                    ? "Explore Women's Healthcare"
                    : 'Learn More & Schedule'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
