import React from 'react';
import { X, Shield, Phone, AlertTriangle, Clock, Calendar, CheckCircle, FileText } from 'lucide-react';
import { hospitalConfig } from '../config/hospital';
import { AppointmentRecord } from '../services/appointmentService';

// Modal Base Container
interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, title, icon, children }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-surface-container overflow-hidden max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-surface-container flex items-center justify-between bg-surface-container-low shrink-0">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {icon}
              </div>
            )}
            <h3 id="modal-title" className="font-serif text-xl sm:text-2xl text-primary font-normal">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-on-surface-variant leading-relaxed">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-surface-container bg-surface-container-low flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-container transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// 1. Privacy Policy Modal
export const PrivacyPolicyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    title="Clinical Privacy Policy"
    icon={<Shield className="w-5 h-5 text-primary" />}
  >
    <div className="space-y-4">
      <p className="font-medium text-on-surface">
        At Pankti Women &amp; Dental Hospital (Sargasan, Gandhinagar), we hold patient confidentiality and medical data ethics to the highest clinical standards.
      </p>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">1. Collection of Contact Details</h4>
        <p>
          We only collect personal information (name, 10-digit mobile number, preferred service, date, and general non-sensitive inquiry notes) that you voluntarily supply through our appointment coordination form.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">2. Purpose of Processing</h4>
        <p>
          Your information is used strictly by our authorized Gandhinagar clinic reception staff to reach out via phone or SMS for scheduling, confirming slot availability, and providing directions to our 2nd Floor Sky Court facility.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">3. Medical History &amp; Sensitive Data</h4>
        <p>
          This website is an informational and scheduling interface. We do not solicit, store, or process comprehensive clinical diagnostic records online. All clinical evaluations and sensitive gynecological/dental health discussions occur privately within our physical consultation rooms.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">4. Non-Disclosure &amp; Third Parties</h4>
        <p>
          We never sell, rent, or monetize patient contact information to third-party marketing companies, insurance solicitors, or external commercial databases.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">5. Contact &amp; Rectification</h4>
        <p>
          If you wish to update or remove your appointment inquiry records, please contact our reception desk directly at <a href={hospitalConfig.phone.dial} className="text-primary underline font-medium">063596 35941</a> or visit us at 2nd Floor, The Sky Court, Sargasan, Gandhinagar.
        </p>
      </div>
    </div>
  </BaseModal>
);

// 2. Terms of Use Modal
export const TermsOfUseModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    title="Terms of Use & Clinical Notice"
    icon={<FileText className="w-5 h-5 text-primary" />}
  >
    <div className="space-y-4">
      <p className="font-medium text-on-surface">
        Please read these terms carefully before utilizing the digital informational services of Pankti Women &amp; Dental Hospital.
      </p>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">1. Informational Purpose Only</h4>
        <p>
          The content published on this website is for general health awareness and appointment coordination only. It does not constitute formal medical diagnosis, tele-consultation, or personalized clinical prescription.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">2. No Guarantee of Clinical Outcomes</h4>
        <p>
          Healthcare outcomes vary based on individual physiology, medical history, and clinical diagnosis. Pankti Women &amp; Dental Hospital does not promise or guarantee specific treatment outcomes on this website.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">3. Appointment Confirmation Subject to Availability</h4>
        <p>
          Submitting an online appointment request does not constitute an immediate confirmed booking. Our desk team will call you to confirm specialist availability, timing, and outpatient slots.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-on-surface mb-1 text-sm">4. Emergency Situations</h4>
        <p>
          In acute medical, obstetric, or severe dental emergencies, do not rely on web form submissions. Immediately visit our 24/7 casualty wing at The Sky Court, Sargasan, or call <a href={hospitalConfig.phone.dial} className="text-primary underline font-medium">063596 35941</a>.
        </p>
      </div>
    </div>
  </BaseModal>
);

// 3. Emergency Triage Modal
export const EmergencyTriageModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    title="Emergency & Casualty Protocol"
    icon={<AlertTriangle className="w-5 h-5 text-[#ba1a1a]" />}
  >
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-[#ffdad6]/60 border border-[#ba1a1a]/30 text-[#93000a]">
        <h4 className="font-bold text-sm mb-1">When to Seek Immediate Emergency Attention:</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Acute obstetric symptoms: sudden intense pain, heavy bleeding, or fluid leakage during pregnancy.</li>
          <li>Severe maxillofacial dental trauma, continuous uncontrolled oral bleeding, or breathing difficulty from facial swelling.</li>
          <li>Sudden severe lower abdominal or pelvic distress.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-on-surface text-sm">Immediate Actions:</h4>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={hospitalConfig.phone.dial}
            className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#b5eee4]" />
            <span>Call 24/7 Casualty: 063596 35941</span>
          </a>
          <a
            href={hospitalConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-surface-container text-on-surface font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
          >
            <span>Drive to The Sky Court ↗</span>
          </a>
        </div>
      </div>

      <div className="text-xs text-outline space-y-1 pt-2 border-t border-surface-container">
        <p><strong>Hospital Address:</strong> 2nd Floor, The Sky Court, Swagat Flamingo Road, Sargasan, Gandhinagar, Gujarat 382419.</p>
        <p>Elevator and wheelchair access available from ground parking.</p>
      </div>
    </div>
  </BaseModal>
);

// 4. Patient Visit History Drawer / Modal
interface VisitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: AppointmentRecord[];
}

export const VisitsModal: React.FC<VisitsModalProps> = ({ isOpen, onClose, appointments }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    title="My Appointment Requests"
    icon={<Calendar className="w-5 h-5 text-primary" />}
  >
    {appointments.length === 0 ? (
      <div className="text-center py-8 px-4">
        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline mx-auto mb-3">
          <Clock className="w-6 h-6" />
        </div>
        <h4 className="font-semibold text-on-surface text-base">No Active Requests Found</h4>
        <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm mx-auto mt-1 leading-relaxed">
          You haven&apos;t submitted any appointment enquiries from this browser yet. Use the booking form on the homepage to request a specialist consultation.
        </p>
        <a
          href="#appointment-section"
          onClick={onClose}
          className="inline-block mt-5 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-container transition-colors"
        >
          Book an Appointment Now
        </a>
      </div>
    ) : (
      <div className="space-y-4">
        <p className="text-xs text-on-surface-variant">
          Showing appointment coordination requests submitted from this browser. Our Sargasan desk coordinator will contact you to finalize the exact slot.
        </p>

        <div className="space-y-3">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-surface-container space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-primary bg-white px-2.5 py-1 rounded-md border border-surface-container">
                  {apt.referenceNumber}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-[#cde9d6]/50 px-2.5 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3 text-secondary" />
                  <span>{apt.status}</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-outline block">Department</span>
                  <span className="font-semibold text-on-surface">{apt.service}</span>
                </div>
                <div>
                  <span className="text-outline block">Requested Timing</span>
                  <span className="font-semibold text-on-surface">
                    {apt.date} ({apt.timeWindow})
                  </span>
                </div>
                <div>
                  <span className="text-outline block">Patient Name</span>
                  <span className="font-medium text-on-surface">{apt.fullName}</span>
                </div>
                <div>
                  <span className="text-outline block">Phone</span>
                  <span className="font-medium text-on-surface">+91 {apt.phone}</span>
                </div>
              </div>

              {apt.notes && (
                <div className="text-xs pt-1.5 border-t border-surface-container/60">
                  <span className="text-outline block text-[11px]">Notes:</span>
                  <span className="text-on-surface-variant italic">&quot;{apt.notes}&quot;</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-secondary-container/40 flex items-center justify-between text-xs text-secondary">
          <span>Need immediate updates?</span>
          <a href={hospitalConfig.phone.dial} className="font-bold underline text-primary">
            Call 063596 35941
          </a>
        </div>
      </div>
    )}
  </BaseModal>
);
