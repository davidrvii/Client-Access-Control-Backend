const router = require('express').Router()
const userController = require('../controller/user')
const { authentication } = require('../middleware/auth')

router.get('/', userController.getAllUser)

router.post('/add', userController.createNewUser)

router.post('/login', userController.loginUser)

router.get('/:ip', userController.getUserDetail)

router.patch('/:id', authentication, userController.updateUser)

router.delete('/:id', authentication, userController.deleteUser)

module.exports = router