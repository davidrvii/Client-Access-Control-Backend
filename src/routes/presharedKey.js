const router = require('express').Router()
const presharedKeyController = require('../controller/presharedKey')

router.post('/add', presharedKeyController.createNewPresharedKey)

router.get('/', presharedKeyController.getAllPresharedKey)

router.get('/:id', presharedKeyController.getAllClientByPresharedKey)

router.delete('/:id', presharedKeyController.deletePresharedKey)

module.exports = router