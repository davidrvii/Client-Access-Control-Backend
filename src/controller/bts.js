const btsModel = require('../models/bts')
const response = require('../../response')

const getAllBTS = async (req, res) => {
    try {
        const [data] = await btsModel.getAllBTS()
        response(200, {bts: data}, 'GET All BTS Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const getAllClientByBTS = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await btsModel.getAllClientByBTS(id)
        response(200, {clientsByBTS: data}, 'GET All Client By BTS Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const createNewBTS = async (req, res) => {
    const { body } = req

    try {
        await btsModel.createNewBTS(body)
        response(201, {newBTS: body}, 'CREATE BTS Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const deleteBTS = async (req, res) => {
    const { id } = req.params

    try {
        await btsModel.deleteBTS(id)
        response(200, {btsId: id}, 'DELETE BTS Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

module.exports = {
    getAllBTS,
    getAllClientByBTS,
    createNewBTS,
    deleteBTS
}