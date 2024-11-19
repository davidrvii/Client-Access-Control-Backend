const radioModel = require('../models/radio')
const response = require('../../response')

const getAllRadio = async (req, res) => {
    try {
        const [data] = await radioModel.getAllRadio()
        response(200, data, 'GET All Radio Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const getAllClientByRadio = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await radioModel.getAllClientByRadio(id)
        response(200, data, 'GET All Client By Radio Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const createNewRadio = async (req, res) => {
    const { body } = req

    try {
        await radioModel.createNewRadio(body)
        response(201, body, 'CREATE Radio Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const deleteRadio = async (req, res) => {
    const { id } = req.params

    try {
        await radioModel.deleteRadio(id)
        response(200, id, 'DELETE Radio Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

module.exports = {
    getAllRadio,
    getAllClientByRadio,
    createNewRadio,
    deleteRadio
}