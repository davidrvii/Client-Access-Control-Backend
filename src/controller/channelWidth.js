const channelWidthModel = require('../models/channelWidth')
const response = require('../../response')

const getAllChannelWidth = async (req, res) => {
    try {
        const [data] = await channelWidthModel.getAllChannelWidht()
        response(200, {channelWidths: data}, 'GET All Channel Width Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const getAllClientByChannelWidth = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await channelWidthModel.getAllCLientByChannelWidht(id)
        response(200, {clientsByChannelWidth: data}, 'GET All Client By Channel Width Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const createNewChannelWidth = async (req, res) => {
    const { body } = req

    try {
        await channelWidthModel.createNewChannelWidht(body)
        response(201, {newChannelWidth: body}, 'CREATE Channel Width Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

const deleteChannelWidth = async (req, res) => {
    const { id } = req.params

    try {
        await channelWidthModel.deleteChannelWidht(id)
        response(200, {channelWidthId: id}, 'DELETE Channel Width Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw error
    }
}

module.exports = {
    getAllChannelWidth,
    getAllClientByChannelWidth,
    createNewChannelWidth,
    deleteChannelWidth
}