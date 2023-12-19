const knex = require('../../knex.js')

exports.findAll = async ({page = 0, limit}) => {
    const data = await knex('flashcardSets')
      .select("*")
      .modify((queryBuilder) => {
        // conditionally add pagination only if a limit is set
        if (limit) {
          const offset = (page - 1) * limit // calculate the starting point
          queryBuilder.offset(offset).limit(limit) 
        }
      })

    const total = await knex('flashcardSets').count('id')
      .then((result) => {
        return result[0].count
      })
    // console.log(total)
    const results = {total, data}
    return results
  }

  exports.findById = async (id) => {

    const pack = await knex('flashcardSets')
      .where('id', id)
      .first('*')
  
    return pack
  }
  
  exports.insert = async (data) => {
  
    // destructure title and description
    const {title, description} = data
  
    // Insert the card set into the database and return
    const result = await knex('flashcardSets').insert({
      title: title,
      description: description 
    }).returning(['id', 'title', 'description']) // return the data
    
    return result[0]
  }

  exports.insertFlashcards = async (data, id) => {
    // console.log("insertFlashcards: ", data, "id:", id)
    const results = await knex('flashcards').insert(data.map((element) => {
      // console.log(element)
      return {
        name: element.name,
        description: element.description,
        flashcardSetId: id
      }
    })) 
    // console.log('results: ', results)
  }

  exports.insertTags = async (data, id) => {
    console.log(data)
    const results = await knex('tagSets').insert(data.map((element) => {
      console.log('insertTags loop value of element: ', element)
      return {
        flashcardSetId: id, 
        tagId: element.id
      }
    }))
    console.log(results)
  }