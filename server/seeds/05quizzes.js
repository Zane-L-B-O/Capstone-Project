/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quizzes').del()
  await knex('quizzes').insert([
    {id: 1, description: 'A quiz about food'},
    {id: 2, description: 'A quiz about drinks'},
    {id: 3, description: 'A quiz about ants'}
  ]);
  await knex.raw('ALTER SEQUENCE quizzes_id_seq RESTART WITH 4')
};
