const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/skybnb-booking');
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to MongoDB'));

const bookingSchema = new mongoose.Schema({
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

const bookingModel = mongoose.model('bookingModel', bookingSchema);

export default bookingModel;
