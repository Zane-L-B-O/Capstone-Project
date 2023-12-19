const { Router } = require('express')

const router = new Router()

const {showAll, showById, showByFkId, register} = require('./controller')

router.get('/', showAll)
router.get('/:id', showById)
router.get('/fk/:id', showByFkId)
router.post('/register', register)

module.exports = router