import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';

export const TrustSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="patient-standards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase font-sans">
            The Pankti Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-primary tracking-tight mt-1.5 mb-3 leading-tight">
            Designed for Your Peace of Mind
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            We have eliminated clinical sterility and hurried visits. Experience clinical guidance centered entirely on your comfort and peace of mind.
          </p>
        </div>

        {/* 4 Numbered Trust Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hospitalConfig.trustPrinciples.map((item) => (
            <div
              key={item.number}
              className="p-6 sm:p-7 rounded-2xl bg-white shadow-xs border border-surface-container/60 text-left flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="font-serif text-3xl font-normal text-secondary/35 mb-2 block select-none">
                  {item.number}
                </span>
                <h4 className="text-base font-semibold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Google Profile Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-primary text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-[#b5eee4] shrink-0 shadow-inner">
              <MessageCircle className="w-7 h-7 text-[#b5eee4]" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-serif text-2xl font-normal text-white">
                  {hospitalConfig.reviews.rating} ★ Rating
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#cde9d6]/20 text-[#b5eee4] text-xs font-semibold">
                  Verified Patient Trust
                </span>
              </div>
              <p className="text-sm text-[#99d1c8] mt-1 leading-relaxed">
                {hospitalConfig.reviews.locationSummary}
              </p>
            </div>
          </div>

          <a
            href={hospitalConfig.maps.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#b5eee4] text-[#00201c] font-semibold text-xs sm:text-sm hover:bg-[#99d1c8] transition-colors shrink-0 shadow-sm active:scale-[0.98] w-full md:w-auto text-center"
          >
            <span>View Verified Google Profile &amp; Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
