const dbPool = require('../config/database')

const getAllChannelWidth = () => {
    const sqlQuery = 'SELECT * FROM channel_width'

    return dbPool.execute(sqlQuery)
}

const getAllCLientByChannelWidth = (id) => {
    const sqlQuery = `  SELECT  client.name,
                                network.ip_address,
                                access.internet_access
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                        WHERE network.fk_channel_width_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const createNewChannelWidth = (body) => {
    const sqlQuery = `  INSERT INTO channel_width (channel_width)
                        VALUES ('${body.channel_width}')`

    return dbPool.execute(sqlQuery)
}

const deleteChannelWidth = (id) => {
    const  sqlQuery = ` DELETE FROM channel_width WHERE channel_width_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllChannelWidth,
    getAllCLientByChannelWidth,
    createNewChannelWidth,
    deleteChannelWidth
}