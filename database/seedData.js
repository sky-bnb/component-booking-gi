const mongoose = require('mongoose');
const { db, mongoLocation } = require('./index.js');
const BookingModel = require('./schema.js');
const faker = require('faker');
const moment = require('moment');

mongoose.connect(mongoLocation, {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to MongoDB Skybnb Booking'));

// seed data

let randomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
let threeMonthsAhead = new Date();
threeMonthsAhead.setMonth(new Date().getMonth() + 3);

const dates = new Set();
const dateArr = [];

console.log('data array: ', dateArr);

for (i = 0; i < 60; i++) {
  dates.add(faker.date.between(new Date(), threeMonthsAhead.toLocaleString('en-us')));
}

dates.forEach(element => dateArr.push(element));

console.log('Date Arr: ', dateArr);

// for (let i = 101; i <= 200; i++) {

  


// const newBooking = new BookingModel({
//   _id: i,
//   ownerName: faker.name.firstName(),
//   guestMax: randomNumber(2, 15),
//   price: randomNumber(50, 2000),
//   cleaningFee: randomNumber(5, 25),
//   occupancyFee: randomNumber(0, 5),
//   avgRating: Math.random() * 5,
//   numReviews: randomNumber(100, 2000),
//   numViews: randomNumber(10,600),
//   minStay: randomNumber(0, 2),
//   maxStay: randomNumber(14, 30),
//   available: [Date]
// });



// }

db.close(() => console.log('Data seeding completed: Mongo connection closed.'));
