const mongoose = require('mongoose');
const db = mongoose.connection;
const Booking = require('./schema');

mongoose.connect('mongodb://localhost/booking', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to MongoDB Skybnb Booking'));

const getBooking = (_id, callback) => {
  Booking.find({ _id }, callback);
}

module.exports = { db, getBooking };
