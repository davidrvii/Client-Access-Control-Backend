const { hashPassword, comparedPassword, comparedUsername } = require('../utils/bcrypt')
const userModel = require('../models/user')
const response = require('../../response')
const { generateToken } = require('../utils/jwt')

const getAllUser = async (req, res) => {
    try {
        const [data] = await userModel.getAllUser()
        response(200, data, 'GET User Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const getUserDetail = async (req, res) => {
    const { ip_address } = req.body

    try {
        const [data] = await userModel.getUserDetail(ip_address)
        if (data.length === 0) {
            return response(404, null, 'User Not Found', res)
        } else {
            return response(200, data, 'GET User Detail Success', res)
        }
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const createNewUser = async (req, res) => {
    const { body } = req

    try {
        const hashedpassword = await hashPassword(body.password)
        const newUser = {
            ...body,
            password: hashedpassword
        }
        await userModel.createNewUser(newUser)
        response(201, body, 'CREATE User Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await userModel.updateUser(body, id)
        response(200, body, 'UPDATE User Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        await userModel.deleteUser(id)
        response(200, id, 'DELETE User Success', res)
    } catch (error) {
        response(500, error, 'Server Error', res)
        throw error
    }
}

const loginUser = async (req, res) => {
    const { ip_address, username, password } = req.body

    try {
        const [userRows] = await userModel.getUserDetail(ip_address)
        if (userRows.length === 0) {
            return response(401, null, 'Invalid IP Address', res)
        }

        const user = userRows[0]
    
        if (!username === user.username) {
            return response(401, null, 'Invalid Username', res)
        }

        const isPasswordMatch = comparedPassword(password, user.password)
        if (!isPasswordMatch) {
            return response(401, null, 'Invalid Password', res)
        }

        const token = generateToken({id: user.user_id, username: user.username})

        response(200, { username, ip_address, token }, 'Login Success', res)
    } catch (error) {
        response(500, error, 'Internal Server Error', res)
        throw error
    }
}

module.exports = {
    getAllUser,
    getUserDetail,
    createNewUser,
    updateUser,
    deleteUser,
    loginUser
}