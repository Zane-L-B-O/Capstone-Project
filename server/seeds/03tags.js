/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tags').del()
  await knex('tags').insert([
    {id: 1, name: 'Food'},
    {id: 2, name: 'Drinks'},
    {id: 3, name: 'Animals'},
    {id: 4, name: 'Random Facts'},
    {id: 5, name: 'Interesting Facts'}
  ]);
  await knex.raw('ALTER SEQUENCE tags_id_seq RESTART WITH 6')
};
