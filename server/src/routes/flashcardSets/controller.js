require('dotenv').config()


const { findAll, findById, insert, insertFlashcards, insertTags } = require('./service')

exports.showAll = async (req, res) => {
    try {
  
      const {
        flashcardSets,
        query
      } = req
  
      // get allUsers from the database
      const allFlashcardSets = await findAll(query)

      // console.log(allflashcards)
  
      // return a response with allUsers
      return res.status(200).json({message: 'flashcardSets found!', data: allFlashcardSets.data, total: allFlashcardSets.total})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

  exports.showById = async (req, res) => {
    try {
      // get the id from the request
      const { 
        flashcardSet,
        id
      } = req.params
      
  
      // get user using id from the database
      const foundFlashcard = await findById(id)
      if (!foundFlashcard) {
        return res.status(404).json({message: 'flashcardSet not found'})
      }
  
      // return a response with the user at the specific id
      return res.status(200).json({message: 'flashcardSet found!', data: foundFlashcard})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

  exports.create = async (req, res) => {
    try {
  
      const setData = req.body
      console.log(setData)
      const set = await insert(setData)
      console.log(set)
      const cards = await insertFlashcards(setData.flashcards, set.id)
      // console.log("cards: ", cards)
      const tags = await insertTags(setData.tags, set.id)
      console.log(tags)
      return res.status(201).json({message: "Created"})
    } catch (error) {
      console.log(error)
  
      return res.status(500).json({ message: "Internal Server Error" })
    }
  }