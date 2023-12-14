const { Router } = require('express')

// import routes
const root = require('./root/router')
const users = require('./users/router')
const flashcards = require('./flashcards/router')
const flashcardsets = require('./flashcardSets/router')

// create a new Router instance
const allRouters = new Router()

// create base routes
allRouters.use('/', root)
allRouters.use('/users', users)
allRouters.use('/flashcards', flashcards)
allRouters.use('/flashcardSets', flashcardsets)

// exporting router
module.exports = allRouters