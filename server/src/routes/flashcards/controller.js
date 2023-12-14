require('dotenv').config()


const { findAll, findById, findByFk} = require('./service')

exports.showAll = async (req, res) => {
    try {
  
      const {
        flashcards,
        query
      } = req
  
      // get allUsers from the database
      const allFlashcards = await findAll(query)

      // console.log(allflashcards)
  
      // return a response with allUsers
      return res.status(200).json({message: 'flashcards found!', data: allFlashcards.data, total: allFlashcards.total})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

  exports.showById = async (req, res) => {
    try {
      // get the id from the request
      const { 
        flashcard,
        id
      } = req.params
      
  
      // get user using id from the database
      const foundFlashcard = await findById(id)
      if (!foundFlashcard) {
        return res.status(404).json({message: 'flashcard not found'})
      }
  
      // return a response with the user at the specific id
      return res.status(200).json({message: 'flashcard found!', data: foundFlashcard})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }