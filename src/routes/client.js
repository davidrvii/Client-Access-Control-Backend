const router = require('express').Router()
const clientController = require('../controller/client')
const { authentication, authorization } = require('../middleware/auth')

router.get('/', authentication, clientController.getAllClient)

router.get('/byUser', authentication, clientController.getAllClientByUser)

router.get('/filter', authentication, authorization, clientController.getAllClientFilter)

router.post('/add', authentication, authorization, clientController.createNewClient)

router.get('/:id', authentication, clientController.getClientDetail)

router.patch('/:id', authentication, authorization, clientController.updateClient)

router.delete('/:id', authentication, authorization, clientController.deleteClient)

module.exports = router