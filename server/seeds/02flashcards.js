/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('flashcards').del()
  await knex('flashcards').insert([
    {id: 1, name: 'bread', description: 'bread is a very simple and the food of the common man', flashcardSetId: 1, image: 'egg'},
    {id: 2, name: 'butter', description: 'butter is an additive when making toast or helps with cooking with frying pans', flashcardSetId: 1, image: 'egg'},
    {id: 3, name: 'egg', description: 'eggs are from chickens and are often used in a lot of meals', flashcardSetId: 1, image: 'egg'},
    {id: 4, name: 'beans', description: 'beans', flashcardSetId: 1, image: 'egg'},
    {id: 5, name: 'water', description: 'just water', flashcardSetId: 2, image: 'egg'},
    {id: 6, name: 'soda', description: 'soda is a common fizzy drink that it is both loved and hated', flashcardSetId: 2, image: 'egg'},
    {id: 7, name: 'juice', description: 'juice is a common healthy drink made from fruits or veggies', flashcardSetId: 2, image: 'egg'},
    {id: 8, name: 'nector', description: 'just nector', flashcardSetId: 2, image: 'egg'},
    {id: 9, name: 'fire ant', description: 'invassive species of ant and mean ones at that', flashcardSetId: 3, image: 'egg'},
    {id: 10, name: 'sugar ant', description: 'sweet innocent ants unless you are in Georgia', flashcardSetId: 3, image: 'egg'},
    {id: 11, name: 'bullet ant', description: 'just do not get stung', flashcardSetId: 3, image: 'egg'},
    {id: 12, name: 'bull ant', description: 'high agressive species', flashcardSetId: 3, image: 'egg'},
  ]);
};
