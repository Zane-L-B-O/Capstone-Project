const { Router } = require('express')

const router = new Router()

const {showAll, showById, showByFkId} = require('./controller')

router.get('/', showAll)
router.get('/:id', showById)
router.get('/fk/:id', showByFkId)

module.exports = router