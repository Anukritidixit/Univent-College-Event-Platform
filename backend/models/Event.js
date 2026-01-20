const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  category: { type: String, default: 'General' }, // e.g., Technical, Cultural
  
  // The "Gatekeeper" Fields
  collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  organizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  
  // Logic
  maxSeats: { type: Number, default: 100 },
  registeredCount: { type: Number, default: 0 },
  status: { type: String, enum: ['OPEN', 'CLOSED', 'WAITLIST'], default: 'OPEN' },
  
  // For the UI
  theme: { type: String, default: 'default' }, 
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);