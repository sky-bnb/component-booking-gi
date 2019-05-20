const express = require('express');
const { getBooking } = require('../database/index.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

app.get('/host/:hostid', (req, res) => {
  getBooking(req.params.hostid, (err, collection) => {
    if (err) {
      res.status(404).end(err);
    } else {
      res.status(200).send(collection);
    }
  });
});

module.exports = app;
