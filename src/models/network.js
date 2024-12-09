const dbPool = require('../config/database')

const getAllNetwork = () => {
    const sqlQuery = 'SELECT * FROM network'

    return dbPool.execute(sqlQuery)
}

const getNetworkDetail = (id) => {
    const sqlQuery = ` SELECT   network.network_id
                                network.radio_name,
                                network.frequency,
                                network.ip_radio,
                                network.ip_address,
                                network.wlan_mac_address,
                                network.ssid,
                                network.radio_signal,
                                network.ap_location,
                                network.password,
                                network.comment,
                                radio.type,
                                mode.mode,
                                channel_width.channel_width,
                                preshared_key.preshared_key,
                                bts.bts 
                            FROM network 
                                INNER JOIN radio ON network.fk_radio_id=radio.radio_id
                                INNER JOIN mode ON network.fk_mode_id=mode.mode_id
                                INNER JOIN channel_width ON network.fk_channel_width_id=channel_width.channel_width_id
                                INNER JOIN preshared_key ON network.fk_preshared_key_id=preshared_key.preshared_key_id
                                INNER JOIN bts ON network.fk_bts_id=bts.bts_id
                            WHERE network_id='${id}'`
    
    return dbPool.execute(sqlQuery)
}

const createNewNetwork = (body) => {
    const sqlQuery = `  INSERT INTO network (radio_name, frequency, ip_radio, ip_address, wlan_mac_address, ssid, ap_location, fk_client_id)
                        VALUES ('${body.radio_name}', '${body.frequency}', '${body.ip_radio}', '${body.ip_address}', '${body.wlan_mac_address}', '${body.ssid}', '${body.ap_location}', '${body.fk_client_id}')`

    return dbPool.execute(sqlQuery)
}

const updateNetwork = (body, id) => {
    const fields = Object.keys(body).map(key => `${key}='${body[key]}'`).join(', ')
    const sqlQuery = ` UPDATE network SET ${fields} WHERE network_id=${id}`

    return dbPool.execute(sqlQuery)
}

const deleteNetwork = (id) => {
    const sqlQuery = ` DELETE FROM network WHERE network_id='${id}'`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllNetwork,
    getNetworkDetail,
    createNewNetwork,
    updateNetwork,
    deleteNetwork
}