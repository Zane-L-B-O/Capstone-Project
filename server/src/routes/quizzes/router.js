const { Router } = require('express')

const router = new Router()

const {showAll, showById} = require('./controller')

router.get('/', showAll)
router.get('/:id', showById)

module.exports = router