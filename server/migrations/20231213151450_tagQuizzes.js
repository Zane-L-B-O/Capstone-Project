/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tagQuizzes', function(table) {
        table.increments('id').notNullable()
        table.integer('tagId').references('id').inTable('tags').notNullable()
        table.integer('quizId').references('id').inTable('quizzes').notNullable()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tagQuizzes');
};
