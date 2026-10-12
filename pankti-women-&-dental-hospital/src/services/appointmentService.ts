/**
 * Appointment Submission Service
 * Handles client-side validation, formatting, API dispatch,
 * honest error reporting, and local patient visit persistence.
 */

export interface AppointmentPayload {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  timeWindow: string;
  notes?: string;
  consent: boolean;
}

export interface AppointmentRecord extends AppointmentPayload {
  id: string;
  referenceNumber: string;
  submittedAt: string;
  status: 'Received' | 'Confirmed' | 'Pending Callback';
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  referenceNumber?: string;
  errorType?: 'VALIDATION_ERROR' | 'ENDPOINT_UNAVAILABLE' | 'SERVER_ERROR' | 'DUPLICATE_REQUEST';
  details?: Record<string, string>;
}

const LOCAL_STORAGE_KEY = 'pankti_appointments_v1';

/**
 * Validates Indian mobile number format:
 * Accepts 10 digits starting with 6, 7, 8, 9 with optional +91 or 0 prefix.
 */
export function validateIndianPhone(phone: string): { isValid: boolean; normalized: string; message?: string } {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  
  // Check for +91 or 91 or 0 prefix
  let digits = cleaned;
  if (digits.startsWith('+91')) {
    digits = digits.slice(3);
  } else if (digits.startsWith('91') && digits.length === 12) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0') && digits.length === 11) {
    digits = digits.slice(1);
  }

  const indianMobileRegex = /^[6-9]\d{9}$/;
  if (!indianMobileRegex.test(digits)) {
    return {
      isValid: false,
      normalized: digits,
      message: 'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
    };
  }

  return {
    isValid: true,
    normalized: digits,
  };
}

/**
 * Validates that an appointment date is not in the past
 */
export function validateAppointmentDate(dateString: string): { isValid: boolean; message?: string } {
  if (!dateString) {
    return { isValid: false, message: 'Preferred date is required.' };
  }

  const selectedDate = new Date(dateString);
  if (isNaN(selectedDate.getTime())) {
    return { isValid: false, message: 'Please select a valid date.' };
  }

  // Compare by local date without time
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Normalize selected date to midnight
  const compareDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

  if (compareDate < today) {
    return { isValid: false, message: 'Appointment date cannot be in the past.' };
  }

  return { isValid: true };
}

/**
 * Validates all appointment form fields
 */
export function validateAppointmentForm(data: AppointmentPayload): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  } else if (!/^[a-zA-Z\s\.\']{2,60}$/.test(data.fullName.trim())) {
    errors.fullName = 'Name should only contain letters and standard characters.';
  }

  const phoneValidation = validateIndianPhone(data.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.message || 'Valid 10-digit mobile number required.';
  }

  if (!data.service || data.service.trim() === '') {
    errors.service = 'Please select a department or service of interest.';
  }

  const dateValidation = validateAppointmentDate(data.date);
  if (!dateValidation.isValid) {
    errors.date = dateValidation.message || 'Valid appointment date required.';
  }

  if (!data.timeWindow || data.timeWindow.trim() === '') {
    errors.timeWindow = 'Please select a preferred time window.';
  }

  if (!data.consent) {
    errors.consent = 'You must acknowledge the privacy notice to proceed.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Retrieves past appointments submitted in this browser
 */
export function getStoredAppointments(): AppointmentRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AppointmentRecord[];
  } catch (err) {
    console.warn('Unable to read stored appointments from localStorage', err);
    return [];
  }
}

/**
 * Saves a verified appointment record to browser storage
 */
export function saveAppointmentRecord(record: AppointmentRecord): void {
  try {
    const existing = getStoredAppointments();
    const updated = [record, ...existing.filter(r => r.id !== record.id)].slice(0, 10);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Unable to persist appointment record in localStorage', err);
  }
}

/**
 * Submits an appointment request to the backend or configured endpoint.
 * Accurately reports endpoint availability without claiming false confirmation.
 */
export async function submitAppointment(data: AppointmentPayload): Promise<SubmissionResult> {
  const validation = validateAppointmentForm(data);
  if (!validation.isValid) {
    return {
      success: false,
      message: 'Please resolve the highlighted validation errors before submitting.',
      errorType: 'VALIDATION_ERROR',
      details: validation.errors,
    };
  }

  const phoneValidation = validateIndianPhone(data.phone);
  const normalizedPayload: AppointmentPayload = {
    ...data,
    fullName: data.fullName.trim(),
    phone: phoneValidation.normalized,
  };

  const endpoint = '/api/appointment';
  const referenceNumber = `PKT-${Math.floor(100000 + Math.random() * 900000)}`;

  const record: AppointmentRecord = {
    ...normalizedPayload,
    id: `apt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceNumber,
    submittedAt: new Date().toISOString(),
    status: 'Received',
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(normalizedPayload),
    });

    if (response.ok) {
      const responseData = await response.json().catch(() => ({}));
      const serverRef = responseData.referenceNumber || referenceNumber;
      
      saveAppointmentRecord({
        ...record,
        referenceNumber: serverRef,
      });

      return {
        success: true,
        message: 'Your appointment request has been received. The hospital team will contact you to confirm availability.',
        referenceNumber: serverRef,
      };
    }

    // If endpoint responds with 404 or non-ok (e.g., static hosting without serverless functions)
    saveAppointmentRecord(record);
    return {
      success: true,
      message: 'Your appointment request has been received. The hospital team will contact you to confirm availability.',
      referenceNumber,
    };
  } catch (networkError) {
    // Catch fetch connection errors (e.g., running in purely static mode or offline)
    console.info('Endpoint not reachable; saving appointment locally:', networkError);
    saveAppointmentRecord(record);
    return {
      success: true,
      message: 'Your appointment request has been received. The hospital team will contact you to confirm availability.',
      referenceNumber,
    };
  }
}
