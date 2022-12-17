const HttpServer = require('../http-server');
const request = require('supertest');

describe('HttpServer', () => {
  let server;

  beforeEach(() => {
    server = new HttpServer();
  });

  it('should add a GET route', () => {
    server.get('/test', (req, res) => {
      res.send('Hello, World!');
    });

    return request(server.express)
      .get('/test')
      .expect(200)
      .expect('Hello, World!');
  });

  it('should add a POST route', () => {
    server.post('/test', (req, res) => {
      res.send('Hello, World!');
    });

    return request(server.express)
      .post('/test')
      .expect(200)
      .expect('Hello, World!');
  });

  it('should add a DELETE route', () => {
    server.delete('/test', (req, res) => {
      res.send('Hello, World!');
    });

    return request(server.express)
      .delete('/test')
      .expect(200)
      .expect('Hello, World!');
  });

  it('should add a PUT route', () => {
    server.put('/test', (req, res) => {
      res.send('Hello, World!');
    });

    return request(server.express)
      .put('/test')
      .expect(200)
      .expect('Hello, World!');
  });
});