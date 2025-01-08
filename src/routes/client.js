const router = require('express').Router()
const clientController = require('../controller/client')
const { authentication, authorization } = require('../middleware/auth')

router.get('/', authentication, clientController.getAllClient)

router.get('/byUser', authentication, clientController.getAllClientByUser)

router.post('/add', authentication, authorization, clientController.createNewClient)

router.get('/:id', authentication, clientController.getClientDetail)

router.get('/newClient', authentication, clientController.getNewClient)

router.patch('/:id', authentication, authorization, clientController.updateClient)

router.delete('/:id', authentication, authorization, clientController.deleteClient)

module.exports = router