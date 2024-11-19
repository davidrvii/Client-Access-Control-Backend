const dbPool = require('../config/database')

const getAllChannelWidht = () => {
    const sqlQuery = 'SELECT * FROM channel_widht'

    return dbPool.execute(sqlQuery)
}

const getAllCLientByChannelWidht = (id) => {
    const sqlQuery = `  SELECT  client.name,
                                network.ip_address,
                                access.internet_access
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                        WHERE network.fk_channel_width_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const createNewChannelWidht = (body) => {
    const sqlQuery = `  INSERT INTO channel_widht (channel_widht)
                        VALUES ('${body.channel_widht}')`

    return dbPool.execute(sqlQuery)
}

const deleteChannelWidht = (id) => {
    const  sqlQuery = ` DELETE FROM channel_widht WHERE channel_widht_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllChannelWidht,
    getAllCLientByChannelWidht,
    createNewChannelWidht,
    deleteChannelWidht
}