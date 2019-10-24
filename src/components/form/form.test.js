/* eslint-disable no-unused-expressions */
require('dotenv').config({ path: './.env.test' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const should = chai.should();
chai.use(chaiHttp);

describe('api/v1/forms', () => {
  after(async () => {
    server.close();
  });

  describe('GET /forms', () => {
    it('should return all forms', async () => {
      chai
        .request(server)
        .get('/api/v1/forms')
        .send()
        .then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          should.exist(res.body);
        });
    });
  });
  describe('GET /forms/:id', () => {
    it('should return a single form', async () => {
      chai
        .request(server)
        .get('/api/v1/forms/1')
        .send()
        .then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          should.exist(res.body);
        });
    });
  });
  describe('GET /forms/:id/questions', () => {
    it('should return all questions for a single form', async () => {
      chai
        .request(server)
        .get('/api/v1/forms/1/questions')
        .send()
        .then((res) => {
          res.should.have.status(200);
          res.should.be.json;
          should.exist(res.body);
        });
    });
  });
});
