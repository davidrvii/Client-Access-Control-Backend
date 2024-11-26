const dbPool = require('../config/database')
const { get } = require('../routes/client')

const getAllAccess = () => {
    const sqlQuery = 'SELECT * FROM access'

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllAccess
}