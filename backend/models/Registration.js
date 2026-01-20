const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // The "Smart Audition" Logic
  status: { 
    type: String, 
    enum: ['PENDING', 'CONFIRMED', 'WAITLIST', 'REJECTED'], 
    default: 'PENDING' 
  },
  
  // QR Code Data
  qrCode: { type: String }, // We will generate a unique string here later
  checkedIn: { type: Boolean, default: false }
}, { timestamps: true });

// Prevent duplicate registrations (One student, one ticket per event)
registrationSchema.index({ event: 1, student: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);