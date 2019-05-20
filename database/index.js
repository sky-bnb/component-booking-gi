const mongoose = require('mongoose');
const Booking = require('./schema.js');

const db = mongoose.connection;
const mongoDbName = 'mongodb://localhost/booking';

mongoose.connect(mongoDbName, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to MongoDB Skybnb Booking'));

const getBooking = (_id, callback) => Booking.find({ _id }, callback);

module.exports = { db, mongoDbName, getBooking };
