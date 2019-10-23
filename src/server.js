/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const pino = require('express-pino-logger');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const jsonSchemaRefParser = require('json-schema-ref-parser');
const swaggerDocument = require('../swagger/swagger.js');
const routes = require('./components/routes');
const logger = require('./utils/logger');

const app = express();

/**
 * CONFIG
 */
const { PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Logging
 */

app.use(pino({ logger }));

/**
 * Routes
 */

app.use(routes());

/**
 * Swagger
 */

jsonSchemaRefParser.dereference(swaggerDocument, (err, schema) => {
  if (err) {
    console.error(err);
  } else {
    // `schema` is just a normal JavaScript object that contains your entire JSON Schema,
    // including referenced files, combined into a single object
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(schema));
  }
});

/**
 * Start
 * Listen on port specfied in env-file.
 */

const server = app.listen(PORT,
  () => logger.info(`Form service listening on port ${PORT}!`));

// Export server to use it in tests.
module.exports = server;
