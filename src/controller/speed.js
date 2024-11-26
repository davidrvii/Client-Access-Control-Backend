const speedModel = require('../models/speed')
const response = require('../../response')

const getAllSpeed = async (req, res) => {
    try {
        const [speed] = await speedModel.getAllSpeed()
        response(200, {speed: speed}, 'GET All Speed Success', res)        
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }    
}

const createNewSpeed = async (req, res) => {
    const { body } = req
    try {
        await speedModel.createNewSpeed(body)
        response(201, {newSpeed: body}, 'CREATE New Speed Success', res)
    } catch (error) {
        response(500 , {error: error}, 'Server Error', res)
        throw error
    }
}

const updateSpeed = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        await speedModel.updateSpeed(id, body)
        response(200, {updatedSpeed: body}, 'UPDATE Speed Success')
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const deleteSpeed = async (req, res) => {
    const { id } = req.params

    try {
        await speedModel.deleteSpeed(id)
        response(200,{speedId: id}, 'DELETE Speed Success')
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

module.exports = {
    getAllSpeed,
    createNewSpeed,
    updateSpeed,
    deleteSpeed
}