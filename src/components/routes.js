const express = require('express');

const form = require('./form/form.api');

const routes = () => {
  const router = express.Router();

  // Register route to api-layer.
  router.use('/', form());

  return router;
};


module.exports = routes;
