require('dotenv').config()


const { findAll, findById } = require('./service')

exports.showAll = async (req, res) => {
    try {
  
      const {
        quizzes,
        query
      } = req
  
      // get allUsers from the database
      const allQuizzes = await findAll(query)

      // console.log(allflashcards)
  
      // return a response with allUsers
      return res.status(200).json({message: 'quizzes found!', data: allQuizzes.data, total: allQuizzes.total})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

  exports.showById = async (req, res) => {
    try {
      // get the id from the request
      const { 
        quiz,
        id
      } = req.params
      
  
      // get user using id from the database
      const foundQuiz = await findById(id)
      if (!foundQuiz) {
        return res.status(404).json({message: 'quiz not found'})
      }
  
      // return a response with the user at the specific id
      return res.status(200).json({message: 'quiz found!', data: foundQuiz})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }