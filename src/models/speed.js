const dbPool = require('../config/database')

const getAllSpeed = () => {
    const sqlQuery = 'SELECT * FROM speed'

    return dbPool.execute(sqlQuery)
}

const createNewSpeed = (body) => {
    const sqlQuery = `INSERT INTO speed (internet_speed)
                        VALUES ('${body.internet_speed}')`

    return dbPool.execute(sqlQuery)
}

const updateSpeed = (id,  body) => {
    const fields = Object.keys(body).map(key => `${key}='${body[key]}'`).join(', ')
    const sqlQuery = `UPDATE speed SET ${fields} WHERE speed_id= ${id} `

    return dbPool.execute(sqlQuery)
}

const deleteSpeed = (id) => {
    const sqlQuery = `DELETE FROM speed WHERE speed_id = '${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllSpeed,
    createNewSpeed,
    updateSpeed,
    deleteSpeed
}