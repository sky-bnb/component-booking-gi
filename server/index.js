const express = require('express');

const server = express();
const port = 3004;

server.get('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => console.log(`Booking Express Server listening on port ${port}`));
