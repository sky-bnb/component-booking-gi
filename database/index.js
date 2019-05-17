const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoLocation = 'mongodb://localhost/skybnb-booking';

// mongoose.connect(mongoLocation, {useNewUrlParser: true});
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', () => console.log('Connected to MongoDB Skybnb Booking'));

module.exports = {db, mongoLocation};
