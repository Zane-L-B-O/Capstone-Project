/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('flashcards', function(table) {
        table.increments('id').notNullable()
        table.text('name')
        table.text('description')
        table.integer('flashcardSetId').references('id').inTable('flashcardSets').notNullable()
        table.string('image')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('flashcards');
};
