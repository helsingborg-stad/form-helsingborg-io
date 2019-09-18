
exports.up = (knex, Promise) => knex.schema.createTable('validations',
  (t) => {
    t.increments();
    t.string('name');
    t.string('type');
    t.string('method');
    t.json('args');
    t.string('message');
    t.boolean('validWhen');
    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('validations');
