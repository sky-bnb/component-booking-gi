const express = require('express');
const path = require('path');
const { getBooking } = require('../database/index.js');

const server = express();
const port = 3004;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static(path.join(__dirname, '../public')));

server.get('/host', (req, res) => {
  getBooking(req.body._id, (err, collection) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(collection);
    }
  });
});

server.listen(port, () => console.log(`Booking Express Server listening on port ${port}`));
