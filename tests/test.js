import React from 'react';
import { shallow, mount, render } from 'enzyme';
import request from 'supertest';
import Booking from '../src/components/Booking.jsx';
import app from '../server/index.js';
import { db, getBooking } from '../database/index.js';

afterAll(() => db.close());

describe('Booking Component', () => {
  it('renders the Booking element', () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper.hasClass('booking')).toEqual(true);
  });
});

describe('Database', () => {
  it('retrieves listing data from the database', () => {
    return getBooking({ _id: 110}).exec()
      .then(data => expect(data[0]._id).toBe(110))});
});

describe('API Calls', () => {
  it('should respond with index.html', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200);
  });

  it('should respond with a 404 status with request to unspecified endpoint', async () => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toBe(404);
  });

  it('should respond to GET /host/:hostid with host data', async () => {
    const res = await request(app).get('/host/101');
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toHaveProperty('_id');
    expect(res.body[0]).toHaveProperty('ownerName');
    expect(res.body[0]).toHaveProperty('guestMax');
    expect(res.body[0]).toHaveProperty('price');
    expect(res.body[0]).toHaveProperty('cleaningFee');
    expect(res.body[0]).toHaveProperty('occupancyFee');
    expect(res.body[0]).toHaveProperty('avgRating');
    expect(res.body[0]).toHaveProperty('numReviews');
    expect(res.body[0]).toHaveProperty('numViews');
    expect(res.body[0]).toHaveProperty('minStay');
    expect(res.body[0]).toHaveProperty('maxStay');
    expect(res.body[0]).toHaveProperty('available');
    expect(res.body[0]._id).toBe(101);
  });
});
