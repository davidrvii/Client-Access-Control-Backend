const router = require('express').Router()
const networkController = require('../controller/network')

router.get('/', networkController.getAllNetwork)

router.post('/add', networkController.createNewNetwork)

router.get('/:id', networkController.getNetworkDetail)

router.patch('/:id', networkController.updateNetwork)

router.delete('/:id', networkController.deleteNetwork)

module.exports = router