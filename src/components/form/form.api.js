const express = require('express');
const dal = require('./form.dal');
const version = require('../../utils/version');

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => res.json(version.createApiVersionResponse));

  router.get('/forms', async (req, res) => {
    const response = await dal.read.forms(req, res);
    return response;
  });

  router.get('/forms/:id', async (req, res) => {
    const response = await dal.read.form(req, res);
    return response;
  });

  router.get('/forms/:id/questions', async (req, res) => {
    const response = await dal.read.formQuestions(req, res);
    return response;
  });

  return router;
};

module.exports = routes;
