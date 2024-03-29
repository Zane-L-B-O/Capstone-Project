const knex = require('../../knex.js')

exports.findAll = async ({page = 0, limit}) => {
    const data = await knex('flashcards')
      .select("*")
      .modify((queryBuilder) => {
        // conditionally add pagination only if a limit is set
        if (limit) {
          const offset = (page - 1) * limit // calculate the starting point
          queryBuilder.offset(offset).limit(limit) 
        }
      })

    const total = await knex('flashcards').count('id')
      .then((result) => {
        return result[0].count
      })
    // console.log(total)
    const results = {total, data}
    return results
  }

  exports.findById = async (id) => {

    const flashcard = await knex('flashcards')
      .where('id', id)
      .first('*')
  
    return flashcard
  }
  exports.findByFk = async (id) => {
    const flashcardSet = await knex('flashcards')
    .where('flashcardSetId', id)
    .select('*')
  
    return flashcardSet
  }