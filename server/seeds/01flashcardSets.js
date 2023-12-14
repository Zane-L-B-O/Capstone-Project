/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('flashcardSets').del()
  await knex('flashcardSets').insert([
    {id: 1, title: 'food', description: 'igpayigpayatilay'},
    {id: 2, title: 'drinks', description: 'igpayigpayatilay'},
    {id: 3, title: 'ants', description: 'igpayigpayatilay'}
  ]);
};
