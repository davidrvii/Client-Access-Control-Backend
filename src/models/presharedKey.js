const dbPool = require('../config/database')

const getAllPresharedKey = () => {
    const sqlQuery = 'SELECT * FROM preshared_key'

    return dbPool.execute(sqlQuery)
}

const getAllClientByPresharedKey = (id) => {
    const sqlQuery = `  SELECT  client.name,
                                network.ip_address,
                                access.internet_access
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                        WHERE network.fk_preshared_key_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const createNewPresharedKey = (body) => {
    const sqlQuery = `  INSERT INTO preshared_key (preshared_key)
                        VALUES ('${body.preshared_key}')`

    return dbPool.execute(sqlQuery)
}

const deletePresharedKey = (id) => {
    const  sqlQuery = ` DELETE FROM preshared_key WHERE preshared_key_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllPresharedKey,
    getAllClientByPresharedKey,
    createNewPresharedKey,
    deletePresharedKey
}