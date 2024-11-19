const router = require('express').Router()

const clientRoutes = require('./client')
const networkRoutes = require('./network')
const userRoutes = require('./user')
const radioRoutes = require('./radio')
const modeRoutes = require('./mode')
const channelWidthRoutes = require('./channelWidth')
const presharedKeyRoutes = require('./presharedKey')
const btsRoutes = require('./bts')

router.get('/', (req, res) => {
    res.send("Welocome to Client Access Control <br><br> -Rajawali Sinergi Group-")
});

router.use('/user', userRoutes)
router.use('/client', clientRoutes)
router.use('/network', networkRoutes)
router.use('/radio', radioRoutes)
router.use('/mode', modeRoutes)
router.use('/channelWidth', channelWidthRoutes)
router.use('/presharedKey', presharedKeyRoutes)
router.use('/bts', btsRoutes)

module.exports = router