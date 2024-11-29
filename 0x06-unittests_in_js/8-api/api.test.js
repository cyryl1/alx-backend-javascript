// api.test.js
const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return correct status code', (done) => {
    request(url, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have correct content type', (done) => {
    request(url, (error, response) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should handle request without error', (done) => {
    request(url, (error, response) => {
      expect(error).to.be.null;
      done();
    });
  });
});
