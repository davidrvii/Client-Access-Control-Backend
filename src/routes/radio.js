const router = require('express').Router()
const radioController = require('../controller/radio')

router.post('/add', radioController.createNewRadio)

router.get('/', radioController.getAllRadio)

router.get('/:id', radioController.getAllClientByRadio)

router.delete('/:id', radioController.deleteRadio)

module.exports = router