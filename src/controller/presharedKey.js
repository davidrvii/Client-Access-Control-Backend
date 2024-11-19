const presharedKeyModel = require('../models/presharedKey')
const response = require('../../response')

const getAllPresharedKey = async (req, res) => {
    try {
        const [data] = await presharedKeyModel.getAllPresharedKey()
        response(200, data, 'GET All Preshared Key Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const getAllClientByPresharedKey = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await presharedKeyModel.getAllClientByPresharedKey(id)
        response(200, data, 'GET All Client By Preshared Key Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const createNewPresharedKey = async (req, res) => {
    const { body } = req

    try {
        await presharedKeyModel.createNewPresharedKey(body)
        response(201, body, 'CREATE Preshared Key Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const deletePresharedKey = async (req, res) => {
    const { id } = req.params

    try {
        await presharedKeyModel.deletePresharedKey(id)
        response(200, id, 'DELETE Preshared Key Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

module.exports = {
    getAllPresharedKey,
    getAllClientByPresharedKey,
    createNewPresharedKey,
    deletePresharedKey
}