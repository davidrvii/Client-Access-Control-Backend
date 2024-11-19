const router = require('express').Router()
const channelWidthController = require('../controller/channelWidth')

router.post('/add', channelWidthController.createNewChannelWidth)

router.get('/', channelWidthController.getAllChannelWidth)

router.get('/:id', channelWidthController.getAllClientByChannelWidth)

router.delete('/:id', channelWidthController.deleteChannelWidth)

module.exports = router