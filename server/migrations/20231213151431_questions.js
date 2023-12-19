/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('questions', function(table) {
        table.increments('id').notNullable()
        table.string('name')
        table.text('description')
        table.integer('quizId').references('id').inTable('quizzes').notNullable().onDelete('CASCADE')
        table.string('image')
        table.string('correctAnswer')
        table.string('incorrectAnswer1')
        table.string('incorrectAnswer2')
        table.string('incorrectAnswer3')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
