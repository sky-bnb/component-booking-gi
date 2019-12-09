const date = '2019-11-08T19:28:54.467Z';

const moment = jest.fn(() => ({
  startOf: () => ({ format: () => 1 }),
  endOf: () => ({ format: () => 31 }),
  format: () => '2019-11',
  add: () => ({ format: () => '2019-09-11' })
}));

module.exports = moment;
