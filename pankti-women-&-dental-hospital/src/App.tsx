import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TriageBar } from './components/TriageBar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutHospital } from './components/AboutHospital';
import { DentalCareSection } from './components/DentalCareSection';
import { WomensHealthcareSection } from './components/WomensHealthcareSection';
import { TrustSection } from './components/TrustSection';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileNavigation } from './components/MobileNavigation';
import {
  PrivacyPolicyModal,
  TermsOfUseModal,
  EmergencyTriageModal,
  VisitsModal,
} from './components/Modals';
import { getStoredAppointments, AppointmentRecord } from './services/appointmentService';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'EN' | 'GUJ'>('EN');
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);

  // Modal Visibility States
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [visitsOpen, setVisitsOpen] = useState(false);

  // Sync stored appointments on mount
  useEffect(() => {
    setAppointments(getStoredAppointments());
  }, []);

  const refreshAppointments = () => {
    setAppointments(getStoredAppointments());
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-secondary-container selection:text-on-secondary-fixed">
      {/* 1. Top Casualty & Triage Bar */}
      <TriageBar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        onOpenEmergency={() => setEmergencyOpen(true)}
      />

      {/* 2. Fixed Header & Navigation */}
      <Header
        onOpenVisits={() => setVisitsOpen(true)}
        bookingCount={appointments.length}
      />

      {/* 3. Main Content Flow with 80px Header Clearance */}
      <main className="w-full pt-20 bg-surface flex-grow pb-16 md:pb-0">
        {/* Section 1: Editorial Asymmetric Hero */}
        <HeroSection currentLang={currentLang} />

        {/* Section 2: Three Distinct Service Cards */}
        <ServicesSection />

        {/* Section 3: About the Hospital / The Pankti Philosophy */}
        <AboutHospital />

        {/* Section 4: Dedicated Dental Feature Section */}
        <DentalCareSection />

        {/* Section 5: Women's Healthcare Feature Section */}
        <WomensHealthcareSection />

        {/* Section 6: Patient Experience & Trust Principles */}
        <TrustSection />

        {/* Section 7: Interactive Appointment Booking Panel */}
        <AppointmentForm
          onSuccess={refreshAppointments}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />

        {/* Section 8: Location & Contact Section */}
        <ContactSection />
      </main>

      {/* 4. Comprehensive Hospital Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenEmergency={() => setEmergencyOpen(true)}
      />

      {/* 5. Mobile Fixed Bottom Navigation */}
      <MobileNavigation
        onOpenVisits={() => setVisitsOpen(true)}
        bookingCount={appointments.length}
      />

      {/* 6. Accessible Modals */}
      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <TermsOfUseModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />

      <EmergencyTriageModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />

      <VisitsModal
        isOpen={visitsOpen}
        onClose={() => setVisitsOpen(false)}
        appointments={appointments}
      />
    </div>
  );
}
