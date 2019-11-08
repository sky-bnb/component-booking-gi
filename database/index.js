const mongoose = require('mongoose');
const Booking = require('./schema.js');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/booking', { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to MongoDB Skybnb Booking'));

const getBooking = (_id, callback) => Booking.find({ _id }, callback);

module.exports = { db, getBooking };
