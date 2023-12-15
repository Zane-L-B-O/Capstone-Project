const knex = require('../../knex.js')

exports.findAll = async ({page = 0, limit}) => {
    const data = await knex('questions')
      .select("*")
      .modify((queryBuilder) => {
        // conditionally add pagination only if a limit is set
        if (limit) {
          const offset = (page - 1) * limit // calculate the starting point
          queryBuilder.offset(offset).limit(limit) 
        }
      })

    const total = await knex('questions').count('id')
      .then((result) => {
        return result[0].count
      })
    // console.log(total)
    const results = {total, data}
    return results
  }

  exports.findById = async (id) => {

    const question = await knex('questions')
      .where('id', id)
      .first('*')
  
    return question
  }
  exports.findByFk = async (id) => {
    const quizQuestions = await knex('questions')
    .where('quizId', id)
    .select('*')
  
    return quizQuestions
  }