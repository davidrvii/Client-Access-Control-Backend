const router = require('express').Router()
const modeController = require('../controller/mode')

router.post('/add', modeController.createNewMode)

router.get('/', modeController.getAllMode)

router.get('/:id', modeController.getAllClientByMode)

router.delete('/:id', modeController.deleteMode)

module.exports = router