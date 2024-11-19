const clientModel = require('../models/client')
const response = require('../../response')

const getAllClient = async (req, res) => {
    try {
        const [data] = await clientModel.getAllClient()
        response(200, data, 'GET Client Success', res)
    } catch (error) {
        response(500, error,'Server Error',res)
        throw error
    }
}

const getAllClientByUser = async (req, res) => {
    try {
        const userId = req.userData.id
        const [data] = await clientModel.getAllClientByUser(userId)
        response(200, data, 'GET Client By User Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const getClientDetail = async (req, res) => {
    const { id } = req.params
    
    try {
        const [data] = await clientModel.getClientDetail(id)
        response(200, data, 'GET Client Detail Success', res)
    } catch (error) {
        response(500, error,'Server Error',res)
        throw error
    }
}

const createNewClient = async (req, res) => {
    const {body} = req

    try {
        await clientModel.createNewClient(body, req.userData.id)
        response(201, body, 'CREATE Client Success', res)
    } catch (error) {
        response(500, error,'Server Error',res)
        throw error
    }
}

const updateClient = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await clientModel.updateClient(body, id)
        response(200, body, 'UPDATE Client Success', res)    
    } catch (error) {
        response(500, error,'Server Error',res)
        throw error
    }
}

const deleteClient = async (req, res) => {
    const {id} = req.params
    try {
        await clientModel.deleteClient(id)
        response(200, id, 'DELETE Client Success',res)
    } catch (error) {
        response(500, error,'Server Error',res)
        throw error
    }
}

module.exports = {
    getAllClient,
    getAllClientByUser,
    getClientDetail,
    createNewClient,
    updateClient,
    deleteClient
}