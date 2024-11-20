const { verifyToken } = require('../utils/jwt')
const userModel = require('../models/user')
const response = require('../../response')

const authentication = async (req, res, next) => {
    try {
        const authHeader = req.headers['Authorization'] || req.headers['authorization']

        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return response(401, {authenticationHeader: authHeader}, 'Bearer Token Not Provided', res)
        }

        const token = authHeader.split(' ')[1]
        const decoded = verifyToken(token)

        const [userRows] = await userModel.authentication(decoded.username)
        if(userRows.length === 0 ) {
            return response(401, {authenticatedUser: userRows}, 'Authentication : User Not Found', res)
        }

        const user = userRows[0]
        req.userData = {
            id: user.user_id,
            ip_address: user.ip_address,
            username: user.username
        }

        next()
    
    } catch (error) {
        response(500, {error: error}, 'Interval Server Error', res)       
        throw error
    }
}

const authorization = async (req, res, next) => {
    try {
        const [userRows] = await userModel.getUserDetail(req.userData.ip_address)
        if(userRows.length === 0) {
            return response(403, {authorizatedUser: userRows}, 'Authorization : Access Denied', res)
        }

        next()

    } catch (error) {
        response(500, {error: error}, 'Internal Server Error', res)
        throw error
    }
}

module.exports = {
    authentication,
    authorization
}