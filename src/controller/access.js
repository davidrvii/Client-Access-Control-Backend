const accessModel = require('../models/access')
const response = require('../../response')

const getAllAccess = async (req, res) => {
    try {
        const [access] = await accessModel.getAllAccess()
        response(200, {access: access}, 'GET All Access Success', res)
    } catch (error) {
        response(500, {error: error}, 'Server Error', res)
        throw 500
    }
}

module.exports = {
    getAllAccess
}