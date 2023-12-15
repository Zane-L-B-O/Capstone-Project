require('dotenv').config()


const { findAll, findById, findByFk} = require('./service')

exports.showAll = async (req, res) => {
    try {
  
      const {
        flashcards,
        query
      } = req
  
      // get allUsers from the database
      const allQuestions = await findAll(query)

      // console.log(allflashcards)
  
      // return a response with allUsers
      return res.status(200).json({message: 'flashcards found!', data: allQuestions.data, total: allQuestions.total})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

  exports.showById = async (req, res) => {
    try {
      // get the id from the request
      const { 
        question,
        id
      } = req.params
      
  
      // get user using id from the database
      const foundFlashcard = await findById(id)
      if (!foundFlashcard) {
        return res.status(404).json({message: 'question not found'})
      }
  
      // return a response with the user at the specific id
      return res.status(200).json({message: 'question found!', data: foundFlashcard})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }
  exports.showByFkId = async (req, res) => {
    try {
      // get the id from the request
      const { 
        question,
        id
      } = req.params
      
  
      // get user using id from the database
      const foundFlashcard = await findByFk(id)
      if (!foundFlashcard) {
        return res.status(404).json({message: 'question not found'})
      }
  
      // return a response with the user at the specific id
      return res.status(200).json({message: 'question found!', data: foundFlashcard})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }