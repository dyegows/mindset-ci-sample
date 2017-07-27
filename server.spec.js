const request = require('supertest');

describe('server test',  () => {
  var server;
  
  beforeAll(() => {
    server = require('./server');
  });

  afterAll(() => {
    server.close();
  });

  describe('POST /sum', () => {
    var response;
  
    beforeAll((done) => {
      request(server)
        .post('/sum')
        .send({ a: 2, b: 3})
        .then(data => {
          response = data;
          done();
        });
    });

    it('return status code 200', () => {
      expect(response.statusCode).toBe(200);
    });

    it('return the sum of a and b', () => {
      expect(response.body).toEqual({ result: 5 });
    });
  });

  describe('Any other route', () => {
    var response;
  
    beforeAll((done) => {
      request(server)
        .post('/anyotherroute')
        .send({ a: 2, b: 3})
        .then(data => {
          response = data;
          done();
        });
    });

    it('return status code 404', () => {
      expect(response.statusCode).toBe(404);
    });
  });
});