
exports.up = (knex, Promise) => knex.schema.createTable('option_groups',
  (t) => {
    t.increments();
    t.string('option_group_name');
    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('option_groups');
