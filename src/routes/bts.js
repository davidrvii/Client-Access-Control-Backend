const router = require('express').Router()
const btsController = require('../controller/bts')

router.post('/add', btsController.createNewBTS)

router.get('/', btsController.getAllBTS)

router.get('/:id', btsController.getAllClientByBTS)

router.delete('/:id', btsController.deleteBTS)

module.exports = router