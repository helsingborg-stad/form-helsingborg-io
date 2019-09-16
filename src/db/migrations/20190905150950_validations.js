
exports.up = (knex, Promise) => knex.schema.createTable('validations',
  (t) => {
    t.increments();
    t.string('type');
    t.string('method');
    t.json('options');
    t.string('message');
    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('validations');
