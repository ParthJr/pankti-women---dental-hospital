/**
 * Vercel Serverless Function / Node API Handler
 * POST /api/appointment
 *
 * Validates appointment enquiries securely on the server-side
 * and returns appointment confirmation with a reference number.
 */

export default async function handler(req: any, res: any) {
  // CORS Headers for API accessibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { fullName, phone, service, date, timeWindow, notes, consent } = body || {};

    // Validate Full Name
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'A valid patient full name is required (minimum 2 characters).',
      });
    }

    // Validate Phone Number (Indian mobile format: 10 digits starting with 6-9)
    const cleanedPhone = (phone || '').replace(/[\s\-\(\)\+]/g, '');
    const strippedPhone = cleanedPhone.startsWith('91') && cleanedPhone.length === 12
      ? cleanedPhone.slice(2)
      : cleanedPhone;

    if (!/^[6-9]\d{9}$/.test(strippedPhone)) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Valid 10-digit Indian mobile number is required.',
      });
    }

    // Validate Service
    if (!service || typeof service !== 'string' || service.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Service of interest is required.',
      });
    }

    // Validate Date (must not be in the past)
    if (!date) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Preferred appointment date is required.',
      });
    }

    const aptDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const normalizedAptDate = new Date(aptDate.getFullYear(), aptDate.getMonth(), aptDate.getDate());

    if (isNaN(aptDate.getTime()) || normalizedAptDate < today) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Preferred appointment date cannot be in the past.',
      });
    }

    // Validate Time Window
    if (!timeWindow || typeof timeWindow !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Preferred time window is required.',
      });
    }

    // Generate unique reference number (e.g. PKT-749201)
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const referenceNumber = `PKT-${randomSuffix}`;

    // Log the appointment inquiry on the server
    console.log('[Pankti Hospital Appointment Log]:', {
      referenceNumber,
      fullName: fullName.trim(),
      phone: strippedPhone,
      service,
      date,
      timeWindow,
      notes: notes ? notes.trim() : undefined,
      receivedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      referenceNumber,
      message: 'Your appointment request has been received. The hospital team will contact you to confirm availability.',
      scheduledDetails: {
        fullName: fullName.trim(),
        service,
        date,
        timeWindow,
      },
    });
  } catch (err: any) {
    console.error('[Pankti Hospital API Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
      message: 'An unexpected error occurred while processing your appointment request. Please contact 063596 35941 directly.',
    });
  }
}
