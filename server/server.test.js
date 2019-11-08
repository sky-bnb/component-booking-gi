import request from 'supertest';

import app from '../server/index.js';

describe('Express Server', () => {
  it('should respond with index.html', async () => {
    const res = await request(app).get('/');
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
