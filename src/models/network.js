const dbPool = require('../config/database')

const getAllNetwork = () => {
    const sqlQuery = 'SELECT * FROM network'

    return dbPool.execute(sqlQuery)
}

const getNetworkDetail = (id) => {
    const sqlQuery = ` SELECT * FROM network WHERE network_id='${id}'`
    
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