import React from 'react';
import { hospitalConfig } from '../config/hospital';
import { AlertCircle, PhoneCall } from 'lucide-react';

interface TriageBarProps {
  currentLang: 'EN' | 'GUJ';
  onLangChange: (lang: 'EN' | 'GUJ') => void;
  onOpenEmergency: () => void;
}

export const TriageBar: React.FC<TriageBarProps> = ({
  currentLang,
  onLangChange,
  onOpenEmergency,
}) => {
  return (
    <aside
      aria-label="Clinical notice and language settings"
      className="w-full bg-primary text-white px-4 sm:px-6 lg:px-8 py-2 text-xs flex flex-wrap items-center justify-between gap-2 shadow-xs"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span
          aria-hidden="true"
          className="w-2 h-2 rounded-full bg-secondary-container animate-pulse shrink-0"
        />
        <p className="text-surface font-medium truncate">
          {currentLang === 'EN'
            ? 'Emergency & Casualty Triage: Sargasan Cross Roads, Gandhinagar'
            : 'કટોકટી અને કેઝ્યુઅલ્ટી ટ્રાયેજ: સરગાસણ ચાર રસ્તા, ગાંધીનગર'}
        </p>
        <span className="hidden md:inline text-outline-variant">·</span>
        <button
          type="button"
          onClick={onOpenEmergency}
          className="hidden md:inline-flex items-center gap-1 text-[#b5eee4] hover:text-white underline font-medium cursor-pointer"
        >
          <PhoneCall className="w-3 h-3" />
          <span>24/7 Casualty Protocol</span>
        </button>
      </div>

      <div className="flex items-center gap-3 shrink-0 ml-auto">
        <a
          href={hospitalConfig.phone.dial}
          className="md:hidden text-[#b5eee4] hover:text-white font-medium underline flex items-center gap-1"
        >
          <AlertCircle className="w-3 h-3" />
          <span>24/7 Help</span>
        </a>

        {/* Bilingual Context Switcher */}
        <div
          role="group"
          aria-label="Language selection"
          className="flex items-center bg-primary-container/80 rounded-full p-0.5"
        >
          <button
            type="button"
            aria-pressed={currentLang === 'EN'}
            onClick={() => onLangChange('EN')}
            className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
              currentLang === 'EN'
                ? 'bg-primary text-white shadow-xs'
                : 'text-surface/80 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            aria-pressed={currentLang === 'GUJ'}
            onClick={() => onLangChange('GUJ')}
            className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
              currentLang === 'GUJ'
                ? 'bg-primary text-white shadow-xs'
                : 'text-surface/80 hover:text-white'
            }`}
          >
            ગુજ
          </button>
        </div>
      </div>
    </aside>
  );
};
