const logger = require('../../utils/logger');
const { forms, questions } = require('../../db/db.bookhelf');
const { ResourceNotFoundError } = require('../../utils/error');

const queryForms = async () => {
  try {
    const formData = await forms.fetchAll({ withRelated: ['questions'] });
    if (!formData) {
      throw new ResourceNotFoundError("No forms could be found");
    }
    return formData;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

const queryForm = async (id) => {
  try {
    const formData = await forms.where('id', id).fetch({ withRelated: ['questions'] });
    if (!formData) {
      throw new ResourceNotFoundError(`The form with id ${id} could not be found`);
    }
    return formData;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const queryFormQuestions = async (id) => {
  try {
    const formData = await questions.where('form_id', id).fetchAll({
      withRelated: ['form', 'validations', 'choices', 'optionGroup', 'type'],
    });
    if (!formData) {
      throw new ResourceNotFoundError();
    }
    return formData;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};


const query = {
  forms: queryForms,
  form: queryForm,
  formQuestions: queryFormQuestions,
};

module.exports = {
  query,
};
