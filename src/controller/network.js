const networkModel = require('../models/network')
const response = require('../../response')

const getAllNetwork = async (req, res) => {
    try {
        const [data] = await networkModel.getAllNetwork()
        response(200, {networks: data}, 'GET Network Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const getNetworkDetail = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await networkModel.getNetworkDetail(id)
        response(200, {networkDetail: data}, 'GET Network Detail Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error        
    }
}

const createNewNetwork = async (req, res) => {
    const { body } = req

    try {
        await networkModel.createNewNetwork(body)
        response(201, {newNetwork: body}, 'CREATE Network Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const updateNetwork = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await networkModel.updateNetwork(body, id)
        response(200, {updatedNetwork: body}, 'UPDATE Network Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const deleteNetwork = async (req, res) => {
    const { id } = req.params

    try {
        await networkModel.deleteNetwork(id)
        response(200, {networkId: id}, 'DELETE Network Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}


module.exports = {
    getAllNetwork,
    getNetworkDetail,
    createNewNetwork,
    updateNetwork,
    deleteNetwork
}