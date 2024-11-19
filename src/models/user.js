const dbPool = require('../config/database')

const getAllUser = () => {
    const sqlQuery = 'SELECT * FROM user'

    return dbPool.execute(sqlQuery)
}

const getUserDetail = (ip_address) => {
    const sqlQuery = `SELECT * FROM user WHERE ip_address = '${ip_address}'`

    return dbPool.execute(sqlQuery)
}

const authentication = (username) => {
    const sqlQuery = `SELECT * FROM user WHERE username = '${username}'`

    return dbPool.execute(sqlQuery)
}

const createNewUser = (body) => {    
    const sqlQuery = `  INSERT INTO user (username, password, ip_address)
                        VALUES ('${body.username}', '${body.password}', '${body.ip_address}')`

    return dbPool.execute(sqlQuery)
}

const updateUser = (body, id) => {
    const fields = Object.keys(body).map(key => `${key}='${body[key]}'`).join(', ')
    const sqlQuery = `UPDATE user SET ${fields} WHERE user_id= ${id} `

    return dbPool.execute(sqlQuery)
}

const deleteUser = (id) => {
    const  sqlQuery = ` DELETE FROM user WHERE user_id= ${id} `

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllUser,
    getUserDetail,
    authentication,
    createNewUser,
    updateUser,
    deleteUser
}