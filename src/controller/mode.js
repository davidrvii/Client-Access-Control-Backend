const modeModel = require('../models/mode')
const response = require('../../response')

const getAllMode = async (req, res) => {
    try {
        const [data] = await modeModel.getAllMode()
        response(200, data, 'GET All Mode Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const getAllClientByMode = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await modeModel.getAllCLientByMode(id)
        response(200, data, 'GET All Client By Mode Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const createNewMode = async (req, res) => {
    const { body } = req

    try {
        await modeModel.createNewMode(body)
        response(201, body, 'CREATE Mode Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const deleteMode = async (req, res) => {
    const { id } = req.params

    try {
        await modeModel.deleteMode(id)
        response(200, id, 'DELETE Mode Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

module.exports = {
    getAllMode,
    getAllClientByMode,
    createNewMode,
    deleteMode
}