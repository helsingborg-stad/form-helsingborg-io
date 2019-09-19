const express = require('express');
const dal = require('./form.dal');
const { createJsonapiResponse } = require('../../utils/jsonapi');

const routes = () => {
  const router = express.Router();

  router.get('/', async (req, res) => res.json({
    jsonapi: {
      version: '1.0',
      meta: {
        service: 'form-helsingborg-io',
        owner: 'Helsingborg Stad',
        description: 'Defines templates of questions and answers for each e-service.',
      },
    },
  }));

  // Here we register what endpoints we want.
  router.get('/forms', async (req, res) => {
    try {
      const data = await dal.query.forms(req);
      const response = await createJsonapiResponse(req, 'forms', data);
      return res.json(response);
    } catch (e) {
      return res.status(e.status || 500).json(e);
    }
  });

  router.get('/forms/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const data = await dal.query.form(id);
      const response = await createJsonapiResponse(req, 'forms', data);
      return res.json(response);
    } catch (e) {
      return res.status(e.status || 500).json(e);
    }
  });

  return router;
};

module.exports = routes;
