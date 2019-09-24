const express = require('express');
const dal = require('./form.dal');
const jsonapi = require('../../jsonapi/index');

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

  router.get('/forms', async (req, res) => {
    try {
      const data = await dal.query.forms(req);

      const convertedData = await jsonapi.convert.queryData(data);
      const response = await jsonapi.serializer.serialize('form', convertedData);

      return res.json(response);
    } catch (e) {
      const errorResponse = await jsonapi.serializer.serializeError(e);
      return res.json(errorResponse);
    }
  });

  router.get('/forms/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const data = await dal.query.form(id);

      const convertedData = await jsonapi.convert.queryData(data);
      const response = await jsonapi.serializer.serialize('form', convertedData);

      return res.json(response);
    } catch (e) {
      const errorResponse = await jsonapi.serializer.serializeError(e);
      return res.json(errorResponse);
    }
  });

  router.get('/forms/:id/questions', async (req, res) => {
    try {
      const { id } = req.params;
      const data = await dal.query.formQuestions(id);

      const convertedData = await jsonapi.convert.queryData(data);
      const response = await jsonapi.serializer.serialize('question', convertedData);

      return res.json(response);
    } catch (e) {
      const errorResponse = await jsonapi.serializer.serializeError(e);
      return res.json(errorResponse);
    }
  });

  return router;
};

module.exports = routes;
