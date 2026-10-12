import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Server-side Appointment Submission Endpoint
app.post('/api/appointment', (req, res) => {
  const { fullName, phone, service, date, timeWindow, notes } = req.body || {};

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Valid full name required (minimum 2 characters).',
    });
  }

  const cleanedPhone = (phone || '').replace(/[\s\-\(\)\+]/g, '');
  const strippedPhone = cleanedPhone.startsWith('91') && cleanedPhone.length === 12
    ? cleanedPhone.slice(2)
    : cleanedPhone;

  if (!/^[6-9]\d{9}$/.test(strippedPhone)) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Valid 10-digit Indian mobile number required.',
    });
  }

  if (!service || !date || !timeWindow) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Service, date, and preferred time window are required.',
    });
  }

  const aptDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const normalizedApt = new Date(aptDate.getFullYear(), aptDate.getMonth(), aptDate.getDate());

  if (isNaN(aptDate.getTime()) || normalizedApt < today) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Appointment date cannot be in the past.',
    });
  }

  const referenceNumber = `PKT-${Math.floor(100000 + Math.random() * 900000)}`;

  console.log(`[Pankti Hospital Server] Appointment Logged:`, {
    referenceNumber,
    fullName: fullName.trim(),
    phone: strippedPhone,
    service,
    date,
    timeWindow,
    notes: notes ? notes.trim() : undefined,
    timestamp: new Date().toISOString(),
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
});

// Serve frontend dist assets in production
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Pankti Hospital server running on port ${PORT}`);
});
