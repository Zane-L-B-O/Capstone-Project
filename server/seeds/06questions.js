/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {id: 1, name: 'Question 1', description: 'What is the food of the common man?', quizId: 1, image: 'egg', correctAnswer: 'bread', incorrectAnswer1: 'butter', incorrectAnswer2: 'eggs', incorrectAnswer3: 'beans'},
    {id: 2, name: 'Question 2', description: 'What is normally in a can?', quizId: 1, image: 'egg', correctAnswer: 'beans', incorrectAnswer1: 'butter', incorrectAnswer2: 'bread', incorrectAnswer3: 'eggs'},
    {id: 3, name: 'Question 3', description: 'What comes from chickens?', quizId: 1, image: 'egg', correctAnswer: 'eggs', incorrectAnswer1: 'butter', incorrectAnswer2: 'bread', incorrectAnswer3: 'beans'},
    {id: 4, name: 'Question 4', description: 'What is normally used to help with cooking?', quizId: 1, image: 'egg', correctAnswer: 'butter', incorrectAnswer1: 'bread', incorrectAnswer2: 'eggs', incorrectAnswer3: 'beans'},
    {id: 5, name: 'Question 1', description: 'What is a basic part of the circle of life?', quizId: 2, image: 'egg', correctAnswer: 'water', incorrectAnswer1: 'soda', incorrectAnswer2: 'juice', incorrectAnswer3: 'nector'},
    {id: 6, name: 'Question 2', description: 'What is a fizzy drink that is both loved and hated?', quizId: 2, image: 'egg', correctAnswer: 'soda', incorrectAnswer1: 'water', incorrectAnswer2: 'juice', incorrectAnswer3: 'nector'},
    {id: 7, name: 'Question 3', description: 'What is normally made from fruit and sometimes veggies?', quizId: 2, image: 'egg', correctAnswer: 'juice', incorrectAnswer1: 'water', incorrectAnswer2: 'soda', incorrectAnswer3: 'nector'},
    {id: 8, name: 'Question 4', description: 'What is able to be consumable by both insects and humans?', quizId: 2, image: 'egg', correctAnswer: 'nector', incorrectAnswer1: 'water', incorrectAnswer2: 'soda', incorrectAnswer3: 'juice'},
    {id: 9, name: 'Question 1', description: 'Which is an invasise species and mean?', quizId: 3, image: 'egg', correctAnswer: 'fire ant', incorrectAnswer1: 'sugar ant', incorrectAnswer2: 'bullet ant', incorrectAnswer3: 'bull ant'},
    {id: 10, name: 'Question 2', description: 'Which is normally docile unless you are in Georgia?', quizId: 3, image: 'egg', correctAnswer: 'sugar ant', incorrectAnswer1: 'fire ant', incorrectAnswer2: 'bullet ant', incorrectAnswer3: 'bull ant'},
    {id: 11, name: 'Question 3', description: 'Which is a sepcies that you dont want to get stung by no matter what?', quizId: 3, image: 'egg', correctAnswer: 'bullet ant', incorrectAnswer1: 'fire ant', incorrectAnswer2: 'sugar ant', incorrectAnswer3: 'bull ant'},
    {id: 12, name: 'Question 4', description: 'Which is a highly agressive species?', quizId: 3, image: 'egg', correctAnswer: 'bull ant', incorrectAnswer1: 'fire ant', incorrectAnswer2: 'sugar ant', incorrectAnswer3: 'bullet ant'},
  ]);
};
