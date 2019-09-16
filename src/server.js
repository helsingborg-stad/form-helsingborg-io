const express = require('express');
const config = require('config');
const pino = require('express-pino-logger');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const $RefParser = require('json-schema-ref-parser');
const swaggerDocument = require('../swagger/swagger.js');
const routes = require('./components/form/form.api');
const logger = require('./utils/logger');

const app = express();

/**
 * Config
 */
const SERVER_PORT = config.get('SERVER.PORT');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Request logging
app.use(pino({ logger }));

app.use(routes());

$RefParser.dereference(swaggerDocument, (err, schema) => {
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
 */

// Listen on port specfied in env-file.
const server = app.listen(SERVER_PORT,
  () => logger.info(`Form service listening on port ${SERVER_PORT}!`));

// Export server to use it in tests.
module.exports = server;
