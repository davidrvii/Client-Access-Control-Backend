const router = require('express').Router()
const accessController = require('../controller/access.js')

router.get('/', accessController.getAllAccess)

module.exports = router