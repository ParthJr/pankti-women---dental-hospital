import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  HelpCircle,
  Loader2,
} from 'lucide-react';
import { hospitalConfig } from '../config/hospital';
import {
  AppointmentPayload,
  submitAppointment,
  validateAppointmentForm,
} from '../services/appointmentService';

interface AppointmentFormProps {
  onSuccess?: () => void;
  onOpenPrivacy?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  onSuccess,
  onOpenPrivacy,
}) => {
  // Form State
  const [formData, setFormData] = useState<AppointmentPayload>({
    fullName: '',
    phone: '',
    service: '',
    date: '',
    timeWindow: '',
    notes: '',
    consent: false,
  });

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    referenceNumber?: string;
    errorType?: string;
  } | null>(null);

  // Today's date string in YYYY-MM-DD for min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const handleBlur = (field: keyof AppointmentPayload) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validation = validateAppointmentForm(formData);
    setErrors(validation.errors);
  };

  const handleChange = (
    field: keyof AppointmentPayload,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear inline error on change if touched
    if (touched[field]) {
      const updated = { ...formData, [field]: value };
      const validation = validateAppointmentForm(updated);
      setErrors(validation.errors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      phone: true,
      service: true,
      date: true,
      timeWindow: true,
      consent: true,
    });

    const validation = validateAppointmentForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitAppointment(formData);
      setSubmitResult(result);

      if (result.success) {
        if (onSuccess) onSuccess();
      }
    } catch {
      setSubmitResult({
        success: false,
        errorType: 'SERVER_ERROR',
        message:
          'A system error occurred. Please call reception directly at 063596 35941 to book your slot.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      service: '',
      date: '',
      timeWindow: '',
      notes: '',
      consent: false,
    });
    setErrors({});
    setTouched({});
    setSubmitResult(null);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="appointment-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white shadow-xl border border-surface-container/70">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold text-secondary tracking-widest uppercase font-sans">
              Prompt Clinical Coordination
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-primary tracking-tight mt-1 mb-2 leading-tight">
              Let&apos;s Plan Your Visit
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Select your service and preferred time. Our Sargasan reception team will contact you promptly to confirm availability.
            </p>
          </div>

          {/* Success Banner */}
          {submitResult && submitResult.success ? (
            <div
              role="alert"
              className="p-6 sm:p-8 rounded-2xl bg-[#cde9d6]/50 border border-[#b2cdbb] flex flex-col gap-5 animate-in fade-in duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#b5eee4]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Official Confirmation
                  </span>
                  <h3 className="font-serif text-2xl text-primary font-normal mt-0.5">
                    Appointment Request Received!
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
                    {submitResult.message}
                  </p>
                </div>
              </div>

              {/* Verified Details Card */}
              <div className="bg-white/80 backdrop-blur-xs p-5 rounded-xl border border-[#b2cdbb]/60 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-surface-container">
                  <span className="text-on-surface-variant font-medium">Tracking Reference:</span>
                  <span className="font-mono font-bold text-primary text-sm">
                    {submitResult.referenceNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Patient Name:</span>
                  <span className="font-semibold text-on-surface">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Registered Mobile:</span>
                  <span className="font-semibold text-on-surface">+91 {formData.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Department:</span>
                  <span className="font-semibold text-on-surface">{formData.service}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Preferred Schedule:</span>
                  <span className="font-semibold text-on-surface">
                    {formData.date} ({formData.timeWindow})
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Reception Desk: 063596 35941</span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-container transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Error banner if submission failed */}
              {submitResult && !submitResult.success && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-[#ffdad6]/80 border border-[#ba1a1a]/30 text-[#93000a] flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#ba1a1a]" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">Unable to Complete Request</p>
                    <p className="mt-0.5 leading-relaxed">{submitResult.message}</p>
                    <div className="mt-2.5 flex items-center gap-3">
                      <a
                        href={hospitalConfig.phone.dial}
                        className="font-bold underline text-[#56332f] hover:text-black"
                      >
                        Call 063596 35941
                      </a>
                      <span>·</span>
                      <a
                        href={hospitalConfig.whatsapp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline text-[#56332f] hover:text-black"
                      >
                        WhatsApp Desk
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Row 1: Full Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-xs sm:text-sm font-semibold text-on-surface flex items-center justify-between"
                  >
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onBlur={() => handleBlur('fullName')}
                    aria-invalid={!!(touched.fullName && errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    placeholder="e.g. Ananya Patel"
                    className={`h-12 px-4 rounded-xl bg-surface-container-low text-on-surface text-sm transition-all outline-none ${
                      touched.fullName && errors.fullName
                        ? 'border-2 border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border border-surface-container focus:bg-white focus:ring-2 focus:ring-primary/30'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <span id="fullName-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Mobile Number (+91) */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs sm:text-sm font-semibold text-on-surface flex items-center justify-between"
                  >
                    <span>Mobile Number (India) *</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-sm font-medium text-outline select-none">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      aria-invalid={!!(touched.phone && errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      placeholder="98765 43210"
                      className={`w-full h-12 pl-13 pr-4 rounded-xl bg-surface-container-low text-on-surface text-sm transition-all outline-none ${
                        touched.phone && errors.phone
                          ? 'border-2 border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                          : 'border border-surface-container focus:bg-white focus:ring-2 focus:ring-primary/30'
                      }`}
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <span id="phone-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Service, Date, Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="service"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    onBlur={() => handleBlur('service')}
                    aria-invalid={!!(touched.service && errors.service)}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    className={`h-12 px-3.5 rounded-xl bg-surface-container-low text-on-surface text-sm transition-all outline-none ${
                      touched.service && errors.service
                        ? 'border-2 border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border border-surface-container focus:bg-white focus:ring-2 focus:ring-primary/30'
                    }`}
                  >
                    <option value="">Select Department</option>
                    <option value="Dental Care">Dental Care &amp; Hygiene</option>
                    <option value="Women's Healthcare">Women&apos;s Healthcare / Gynecology</option>
                    <option value="Preventive Check-up">Preventive Check-up</option>
                    <option value="General Consultation">General Clinical Consultation</option>
                  </select>
                  {touched.service && errors.service && (
                    <span id="service-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.service}
                    </span>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="date"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Preferred Date *
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={todayStr}
                      required
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      onBlur={() => handleBlur('date')}
                      aria-invalid={!!(touched.date && errors.date)}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                      className={`w-full h-12 px-3.5 rounded-xl bg-surface-container-low text-on-surface text-sm transition-all outline-none ${
                        touched.date && errors.date
                          ? 'border-2 border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                          : 'border border-surface-container focus:bg-white focus:ring-2 focus:ring-primary/30'
                      }`}
                    />
                  </div>
                  {touched.date && errors.date && (
                    <span id="date-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.date}
                    </span>
                  )}
                </div>

                {/* Preferred Window */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="timeWindow"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Preferred Window *
                  </label>
                  <select
                    id="timeWindow"
                    name="timeWindow"
                    required
                    value={formData.timeWindow}
                    onChange={(e) => handleChange('timeWindow', e.target.value)}
                    onBlur={() => handleBlur('timeWindow')}
                    aria-invalid={!!(touched.timeWindow && errors.timeWindow)}
                    aria-describedby={errors.timeWindow ? 'timeWindow-error' : undefined}
                    className={`h-12 px-3.5 rounded-xl bg-surface-container-low text-on-surface text-sm transition-all outline-none ${
                      touched.timeWindow && errors.timeWindow
                        ? 'border-2 border-[#ba1a1a] focus:ring-2 focus:ring-[#ba1a1a]/20'
                        : 'border border-surface-container focus:bg-white focus:ring-2 focus:ring-primary/30'
                    }`}
                  >
                    <option value="">Select Window</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                  {touched.timeWindow && errors.timeWindow && (
                    <span id="timeWindow-error" className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.timeWindow}
                    </span>
                  )}
                </div>
              </div>

              {/* Optional Health Notes */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="notes"
                  className="text-xs sm:text-sm font-semibold text-on-surface flex items-center gap-1"
                >
                  <span>Optional Health Notes or Questions</span>
                  <span className="text-xs text-outline font-normal">(Non-sensitive)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Please share any existing symptoms or queries..."
                  className="p-3.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container focus:bg-white focus:ring-2 focus:ring-primary/30 transition-all outline-none resize-none"
                />
              </div>

              {/* Consent to Privacy Notice */}
              <div className="flex flex-col gap-1">
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleChange('consent', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-primary focus:ring-primary cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-on-surface-variant leading-relaxed cursor-pointer">
                    I consent to Pankti Women &amp; Dental Hospital contacting me via phone or SMS for scheduling this appointment. I acknowledge the{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-primary underline font-medium hover:text-primary-container"
                    >
                      privacy notice
                    </button>
                    .
                  </label>
                </div>
                {touched.consent && errors.consent && (
                  <span className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1 ml-7">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.consent}
                  </span>
                )}
              </div>

              {/* Bottom Notice & Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-on-surface-variant max-w-sm leading-relaxed text-center sm:text-left">
                  We respect your confidential medical privacy. Submitting this request does not confirm an immediate appointment; our reception team will contact you to finalize your slot.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary-container text-white text-sm font-semibold hover:bg-primary transition-all duration-200 shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0 focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
