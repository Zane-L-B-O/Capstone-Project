/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tagSets', function(table) {
        table.increments('id').notNullable()
        table.integer('flashcardSetId').references('id').inTable('flashcardSets').notNullable()
        table.integer('tagId').references('id').inTable('tags').notNullable()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tagSets');
};
