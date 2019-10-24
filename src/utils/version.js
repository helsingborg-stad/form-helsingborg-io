const pjson = require('../../package.json')

const createApiVersionResponse = {
  jsonapi: {
    version: '1.0',
    meta: {
      apiVersion: '1',
      build: pjson.version,
      service: pjson.name,
      owner: pjson.auhtor,
      description: pjson.description,
    },
  },
}

module.exports = {createApiVersionResponse};
