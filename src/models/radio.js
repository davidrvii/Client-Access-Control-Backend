const dbPool = require('../config/database')

const getAllRadio = () => {
    const sqlQuery = 'SELECT * FROM radio'

    return dbPool.execute(sqlQuery)
}

const getAllClientByRadio = (id) => {
    const sqlQuery = `  SELECT  client.name,
                                network.ip_address,
                                access.internet_access
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                        WHERE network.fk_radio_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const createNewRadio = (body) => {
    const sqlQuery = `  INSERT INTO radio (type)
                        VALUES ('${body.radio}')`

    return dbPool.execute(sqlQuery)
}

const deleteRadio = (id) => {
    const  sqlQuery = ` DELETE FROM radio WHERE radio_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllRadio,
    getAllClientByRadio,
    createNewRadio,
    deleteRadio
}