const { Router } = require('express')

const router = new Router()

const {showAll, showById, create} = require('./controller')

router.get('/', showAll)
router.get('/:id', showById)
router.post('/', create)

module.exports = router