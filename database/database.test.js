import { db, getBooking } from '../database/index.js';

afterAll(() => db.close());

describe('Database', () => {
  it('retrieves listing data from the database', () => {
    return getBooking({ _id: 110 }).exec()
      .then(data => expect(data[0]._id).toBe(110))});
});
