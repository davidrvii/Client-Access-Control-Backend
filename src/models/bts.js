const dbPool = require('../config/database')

const getAllBTS = () => {
    const sqlQuery = 'SELECT * FROM bts'

    return dbPool.execute(sqlQuery)
}

const getAllClientByBTS = (id) => {
    const sqlQuery = `  SELECT  client.name,
                                network.ip_address,
                                access.internet_access
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                        WHERE network.fk_bts_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const createNewBTS = (body) => {
    const sqlQuery = `  INSERT INTO bts (bts)
                        VALUES ('${body.bts}')`

    return dbPool.execute(sqlQuery)
}

const deleteBTS = (id) => {
    const  sqlQuery = ` DELETE FROM bts WHERE bts_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllBTS,
    getAllClientByBTS,
    createNewBTS,
    deleteBTS
}