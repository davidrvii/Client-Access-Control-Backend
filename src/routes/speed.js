const router = require('express').Router()
const speedController = require('../controller/speed')

router.get('/', speedController.getAllSpeed)

router.post('/add', speedController.createNewSpeed)

router.patch('/:d', speedController.updateSpeed)

router.delete('/:d', speedController.deleteSpeed)

module.exports = router