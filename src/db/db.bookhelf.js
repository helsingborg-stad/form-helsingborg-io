/* eslint-disable no-use-before-define */
const { bookshelf } = require('./db.client');

bookshelf.plugin('registry');

const Forms = bookshelf.Model.extend({
  tableName: 'forms',
  questions() { return this.hasMany(Questions); },
});

const Questions = bookshelf.Model.extend({
  tableName: 'questions',
  form() { return this.belongsTo(Forms); },
  validations() { return this.belongsToMany(Validations); },
  optionGroup() { return this.belongsTo(OptionGroups); },
  choices() { return this.belongsToMany(OptionChoices); },
  type() { return this.belongsTo(QuestionTypes); },
});

const QuestionTypes = bookshelf.Model.extend({
  tableName: 'question_types',
  questions() { return this.hasMany(Questions); },
});

const Validations = bookshelf.Model.extend({
  tableName: 'validations',
  question() { return this.belongsTo(Questions); },
});

const OptionGroups = bookshelf.Model.extend({
  tableName: 'option_groups',
  questions() { return this.hasMany(Questions); },
});

const OptionChoices = bookshelf.Model.extend({
  tableName: 'option_choices',
  questions() { return this.belongsToMany(Questions); },
});

module.exports = {
  forms: bookshelf.model('Forms', Forms),
  questions: bookshelf.model('Questions', Questions),
  questionTypes: bookshelf.model('QuestionTypes', QuestionTypes),
  validations: bookshelf.model('Validations', Validations),
  optionGroups: bookshelf.model('OptionGroups', OptionGroups),
  optionChoices: bookshelf.model('OptionChoices', OptionChoices),
};
