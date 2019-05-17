const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  _id: Number,
  ownerName: String,
  guestMax: Number,
  price: Number,
  cleaningFee: Number,
  occupancyFee: Number,
  avgRating: Number,
  numReviews: Number,
  numViews: Number,
  minStay: Number,
  maxStay: Number,
  available: [Date]
});

const BookingModel = mongoose.model('bookingModel', BookingSchema);

module.exports = { BookingModel };
