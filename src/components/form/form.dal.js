const logger = require('../../utils/logger');
const { forms, questions } = require('../../db/db.bookhelf');
const { ResourceNotFoundError } = require('../../utils/error');
const jsonapi = require('../../jsonapi');

const createErrorResponse = async (error, res) => {
  // eslint-disable-next-line no-console
  console.log(error)
  logger.error(error);
  const serializedData = await jsonapi.serializer.serializeError(error);
  return res.status(error.status).json(serializedData);
};

const createSuccessResponse = async (data, res, jsonapiType, converter) => {
  const convertData = await jsonapi.convert[converter](data);
  const serializedData = await jsonapi.serializer.serialize(jsonapiType, convertData);
  return res.json(serializedData)
};


/**
 * CREATE RESOURCE METHODS
 */

const create = {};


/**
 * READ RESOURCE METHODS
 */

const readForms = async (req, res) => {
  // Write method for reading a resource (in this case a get request towards the testapi)
  try {
    const queryData = await forms.fetchAll({ withRelated: ['questions'] });

    if (!queryData) {
      throw new ResourceNotFoundError('No forms could be found');
    }

    return await createSuccessResponse(queryData, res, 'form', 'queryData');
  } catch (error) {
    return createErrorResponse(error, res)
  }
};

const readForm = async (req, res) => {
  // Write method for reading a resource (in this case a get request towards the testapi)
  try {
    const { id } = req.params;
    const queryData = await forms.where('id', id).fetch({ withRelated: ['questions'] });

    if (!queryData) {
      throw new ResourceNotFoundError(`The form with id ${id} could not be found`);
    }

    return await createSuccessResponse(queryData, res, 'form', 'queryData')
  } catch (error) {
    return createErrorResponse(error, res)
  }
};

const readFormQuestions = async (req, res) => {
  try {
    const {id} = req.params
    const queryData = await questions.where('form_id', id).fetchAll({
      withRelated: ['form', 'validations', 'choices', 'optionGroup', 'type'],
    });

    if (!queryData) {
      throw new ResourceNotFoundError();
    }

    return await createSuccessResponse(queryData, res, 'question', 'queryData');
  } catch (error) {
    return createErrorResponse(error, res)
  }
};

const read = {
  forms: readForms,
  form: readForm,
  formQuestions: readFormQuestions,
};


/**
 * UPDATE RESOURCE METHODS
 */

const update = {};


/**
 * DELETE RESOURCE METHODS
 */

const del = {};


module.exports = {
  create,
  read,
  update,
  del,
};
