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
  options() { return this.belongsToMany(OptionChoices); },
  type() { return this.belongsTo(QuestionTypes); },
  logics() { return this.hasOne(Logics, ['trigger_question']); },
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

const Logics = bookshelf.Model.extend({
  tableName: 'logics',
  question() { return this.belongsTo(Questions); },
  actions() { return this.hasMany(LogicActions)}
})

const LogicActions = bookshelf.Model.extend({
  tableName: 'logic_actions',
  logic() { return this.belongsTo(Logic)}
})

module.exports = {
  forms: bookshelf.model('Forms', Forms),
  questions: bookshelf.model('Questions', Questions),
  questionTypes: bookshelf.model('QuestionTypes', QuestionTypes),
  validations: bookshelf.model('Validations', Validations),
  optionGroups: bookshelf.model('OptionGroups', OptionGroups),
  optionChoices: bookshelf.model('OptionChoices', OptionChoices),
  logics: bookshelf.model('Logics', Logics),
  logicActions: bookshelf.model('LogicActions', LogicActions)
};
