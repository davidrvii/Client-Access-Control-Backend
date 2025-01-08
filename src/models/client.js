const dbPool = require('../config/database')

const getAllClient = () => {
    const sqlQuery = `  SELECT  client.name,
                                client.client_id,
                                network.ip_address,
                                network.comment,
                                access.internet_access,
                                speed.speed_id
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                            INNER JOIN speed ON client.fk_speed_id=speed.speed_id`

    return dbPool.execute(sqlQuery)
}

const getAllClientByUser = (id) => {
    const sqlQuery = `  SELECT  client.client_id,
                                client.name,
                                network.ip_address,
                                network.comment,
                                access.internet_access,
                                speed.speed_id
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                            INNER JOIN speed ON client.fk_speed_id=speed.speed_id
                        WHERE client.fk_user_id='${id}'`
    
    return dbPool.execute(sqlQuery)
}

const getClientDetail = (id) => {
    const sqlQuery = `  SELECT  client.client_id, 
                                client.name, 
		                        client.phone,
                                client.address,
                                access.internet_access,
                                speed.internet_speed,
                                network.network_id,
                                network.radio_name,
                                network.frequency,
                                network.ip_radio,
                                network.ip_address,
                                network.wlan_mac_address,
                                network.ssid,
                                network.radio_signal,
                                network.ap_location,
                                network.comment,
                                network.password,
                                radio.type,
                                mode.mode,
                                channel_width.channel_width,
                                preshared_key.preshared_key,
                                bts.bts
                        FROM client
                            INNER JOIN network ON network.fk_client_id=client.client_id
                            INNER JOIN access ON client.fk_access_id=access.access_id
                            INNER JOIN speed ON client.fk_speed_id=speed.speed_id
                            INNER JOIN radio ON network.fk_radio_id=radio.radio_id
                            INNER JOIN mode ON network.fk_mode_id=mode.mode_id
                            INNER JOIN channel_width ON network.fk_channel_width_id=channel_width.channel_width_id
                            INNER JOIN preshared_key ON network.fk_preshared_key_id=preshared_key.preshared_key_id
                            INNER JOIN bts ON network.fk_bts_id=bts.bts_id
                        WHERE client_id='${id}'`

    return dbPool.execute(sqlQuery)
}

const getNewClient = (name, phone) => {
    const sqlQuery = `  SELECT client_id, name, phone,address
                        FROM client
                        WHERE name ='${name}' AND phone ='${phone}'`

    return dbPool.execute(sqlQuery)
}

const createNewClient = (body, userId) => {
    const sqlQuery = `  INSERT INTO client (name, phone, address, comment, fk_access_id, fk_speed_id, fk_user_id)
                        VALUES ('${body.name}', '${body.phone}', '${body.address}', '${body.comment}', '${body.access_id}', '${body.speed_id}' '${userId}')`

    return dbPool.execute(sqlQuery)
}

const updateClient = (body, id) => {
    const fields = Object.keys(body).map(key => `${key}='${body[key]}'`).join(', ')
    const sqlQuery = `UPDATE client SET ${fields} WHERE client_id=${id}`

    return dbPool.execute(sqlQuery)
}

const deleteClient = (id) => {
    const sqlQuery = `DELETE FROM client WHERE client_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllClient,
    getAllClientByUser,
    getClientDetail,
    getNewClient,
    createNewClient,
    updateClient,
    deleteClient
}