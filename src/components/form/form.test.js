/* eslint-disable no-unused-expressions */
require('dotenv').config({ path: './.env.test' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const should = chai.should();
chai.use(chaiHttp);

describe('Form', () => {
  after(async () => {
    server.close();
  });

  it('should return json on GET with faked query', async () => chai
    .request(server)
    .get('/forms')
    .send()
    .then((res) => {
      res.should.have.status(200);
      res.should.be.json;
      should.exist(res.body);
    }));

  it('should return json on GET with correct query params at fake', async () => chai
    .request(server)
    .get('/forms/1')
    .send()
    .then((res) => {
      res.should.have.status(200);
      res.should.be.json;
      should.exist(res.body);
    }));
});
