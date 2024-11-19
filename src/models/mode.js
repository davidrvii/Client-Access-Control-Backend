const dbPool = require('../config/database')

const getAllMode = () => {
    const sqlQuery = 'SELECT * FROM mode'

    return dbPool.execute(sqlQuery)
}

const getAllCLientByMode = (id) => {
    const sqlQuery = `  SELECT  client.name,
                                network.ip_address,
                                access.internet_access
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                        WHERE network.fk_mode_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const createNewMode = (body) => {
    const sqlQuery = `  INSERT INTO mode (mode)
                        VALUES ('${body.mode}')`

    return dbPool.execute(sqlQuery)
}

const deleteMode = (id) => {
    const  sqlQuery = ` DELETE FROM mode WHERE mode_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllMode,
    getAllCLientByMode,
    createNewMode,
    deleteMode
}