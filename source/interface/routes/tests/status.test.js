const request = require('supertest');
const router = require('../../router');

describe('status route', () => {
  beforeAll(() => {
    router();
  });

  it('returns status 200', async () => {
    const response = await request('http://localhost:3000').get('/status');
    expect(response.status).toEqual(200);
  });

  it('the message returned of this api is "API running"', async () => {
    const response = await request('http://localhost:3000').get('/status');
    expect(response.body).toEqual({"ok": "API running"})
  })
});