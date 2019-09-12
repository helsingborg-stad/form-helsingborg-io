const logger = require('../../utils/logger');
const { forms } = require('../../db/db.bookhelf');
const { ResourceNotFoundError } = require('../../utils/error');

const queryForms = async () => {
  try {
    const formData = await forms.fetchAll({ withRelated: ['questions'] });
    if (!formData) {
      throw new ResourceNotFoundError();
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
      throw new ResourceNotFoundError();
    }
    return formData;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};


const query = {
  forms: queryForms,
  form: queryForm,
};

module.exports = {
  query,
};
