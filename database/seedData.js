const mongoose = require('mongoose');
const { db, mongoDbName } = require('./index.js');
const Booking = require('./schema.js');
const faker = require('faker');
const moment = require('moment');

mongoose.connect(mongoDbName, {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to MongoDB Skybnb Booking'));

let randomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
let currentDate = moment().format("YYYY-MM-DD");
let threeMonthsAhead = moment().month(new Date().getMonth() + 3).format("YYYY-MM-DD");
let bookingPromiseArr = [];

// create seed data for ID 101 - 200
for (let i = 101; i <= 200; i++) {

  const dateSet = new Set();
  const dateArr = [];

  for (let j = 0; j < randomNumber(30, 70); j++) {
    dateSet.add(moment(faker.date.between(currentDate, threeMonthsAhead)).format("YYYY-MM-DD"));
  }

  dateSet.forEach(element => dateArr.push(element));

  const newBooking = new Booking({
    _id: i,
    ownerName: faker.name.firstName(),
    guestMax: randomNumber(2, 15),
    price: randomNumber(50, 2000),
    cleaningFee: randomNumber(10, 30),
    occupancyFee: randomNumber(0, 5),
    avgRating: (Math.random() * 5).toFixed(2),
    numReviews: randomNumber(100, 2000),
    numViews: randomNumber(10, 600),
    minStay: randomNumber(0, 2),
    maxStay: randomNumber(14, 30),
    available: dateArr.sort()
  });

  bookingPromiseArr.push(newBooking.save());
}

Promise.all(bookingPromiseArr)
  .then(() => {
    console.log('Booking data successfully seeded.');
    db.close(() => console.log('Data seeding completed: Mongo connection closed.'))
  })
  .catch((err) => console.error(err, 'error'));
