const clientModel = require('../models/client')
const response = require('../../response')

const getAllClient = async (req, res) => {
    try {
        const [data] = await clientModel.getAllClient()
        response(200, {allClient: data}, 'GET Client Success', res)
    } catch (error) {
        response(500, {error: error},'Server Error',res)
        throw error
    }
}

const getAllClientByUser = async (req, res) => {
    try {
        const userId = req.userData.id
        const [data] = await clientModel.getAllClientByUser(userId)
        response(200, {clients: data}, 'GET Client By User Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const getAllClientFilter = async (req, res) => {

    //Remove queries with value '0'
    const filteredQuery = Object.entries(req.query).reduce((acc, [key, value]) => {
        if (value !== '0') {
            acc[key] = value;
        }
        return acc;
    }, {});

    try {
        const userId = req.userData.id
        const [data] = await clientModel.getAllClientFilter(userId, filteredQuery)
        response(200, {filteredClients: data}, 'Get Filtered Client Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const getSearchedClient = async (req, res) => {
    const { query } = req.query

    try {
        const userId = req.userData.id

        if (query !== '') {
            const [data] = await clientModel.getSearchedClient(userId, query)
            response(200, {clients: data}, 'Get Searched Client Success', res) 
        } else {
            const [data] = await clientModel.getAllClientByUser(userId)
            response(200, {clients: data}, 'GET Client By User Success', res)
        }  
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const getClientDetail = async (req, res) => {
    const { id } = req.params
    
    try {
        const [data] = await clientModel.getClientDetail(id)
        response(200, {clientDetail: data}, 'GET Client Detail Success', res)
    } catch (error) {
        response(500, {error: error},'Server Error',res)
        throw error
    }
}

const createNewClient = async (req, res) => {
    const {body} = req

    try {
        const [result] = await clientModel.createNewClient(body, req.userData.id)

        const newClientId = result.insertId

        const responseBody = {
            ...body,
            clientId : newClientId
        }

        response(201, {newClient: responseBody}, 'CREATE Client Success', res)
    } catch (error) {
        response(500, {error: error},'Server Error',res)
        throw error
    }
}

const updateClient = async (req, res) => {
    const { id } = req.params
    const { body } = req

    //Only Add Filled Body 
    const filteredBody = Object.entries(body).reduce((acc, [key, value]) => {
        if (value !== '') {
            acc[key] = value;
        }
        return acc;
    }, {});

    try {
        const [clientData] = await clientModel.getClientDetail(id)

        const client = {...clientData[0], ...body}

        await clientModel.updateClient(filteredBody, id)

        response(200, {updatedClient: client}, 'UPDATE Client Success', res)    
    } catch (error) {
        response(500, {error: error},'Server Error',res)
        throw error
    }
}

const deleteClient = async (req, res) => {
    const {id} = req.params
    try {
        await clientModel.deleteClient(id)
        response(200, {clientId: id}, 'DELETE Client Success',res)
    } catch (error) {
        response(500, {error: error},'Server Error',res)
        throw error
    }
}

module.exports = {
    getAllClient,
    getAllClientByUser,
    getAllClientFilter,
    getSearchedClient,
    getClientDetail,
    createNewClient,
    updateClient,
    deleteClient
}