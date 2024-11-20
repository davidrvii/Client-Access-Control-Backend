# NETWORK API SPECIFICATION
## Create New Network
- Endpoint : /network/add
- Request Body :
```json
{
    "radio_name": "dave",
    "frequency": "12 Hz",
    "ip_radio": "123.234.356.467",
    "ip_address": "123.345.564.533",
    "wlan_mac_address": "ajajajaja",
    "ssid": "1414",
    "signal": "rajawali",
    "ap_location": "jakarta",
    "fk_client_id": 1 
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Network Success",
    "newNetwork": {
        "radio_name": "dave",
        "frequency": "12 Hz",
        "ip_radio": "123.234.356.467",
        "ip_address": "123.345.564.533",
        "wlan_mac_address": "ajajajaja",
        "ssid": "1414",
        "signal": "rajawali",
        "ap_location": "jakarta",
        "fk_client_id": 1
    }
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "error": "error"
}
```
## Get All Network
- Endpoint : /network
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Network Success",
    "networks": [
        {
            "network_id": 1,
            "radio_name": "fufufafa",
            "frequency": "12 Hz",
            "ip_radio": "123.234.356.467",
            "ip_address": "123.345.564.533",
            "wlan_mac_address": "ajajajaja",
            "ssid": "1414",
            "radio_signal": "rajawali",
            "ap_location": "jakarta",
            "create_at": "2024-10-21T04:50:23.000Z",
            "update_at": "2024-10-21T07:29:11.000Z",
            "fk_radio_id": 1,
            "fk_mode_id": 1,
            "fk_preshared_key_id": 1,
            "fk_channel_width_id": 1,
            "fk_bts_id": 1,
            "fk_client_id": 1
        }
    ]
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "error": "error"
}
```
## Get Network By ID
- Endpoint : /network/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Network Detail Success",
    "networkDetail": [
        {
            "network_id": 1,
            "radio_name": "fufufafa",
            "frequency": "12 Hz",
            "ip_radio": "123.234.356.467",
            "ip_address": "123.345.564.533",
            "wlan_mac_address": "ajajajaja",
            "ssid": "1414",
            "radio_signal": "rajawali",
            "ap_location": "jakarta",
            "create_at": "2024-10-21T04:50:23.000Z",
            "update_at": "2024-10-21T07:29:11.000Z",
            "fk_radio_id": 1,
            "fk_mode_id": 1,
            "fk_preshared_key_id": 1,
            "fk_channel_width_id": 1,
            "fk_bts_id": 1,
            "fk_client_id": 1
        }
    ]
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "error": "error"
}
```
## Update Network By ID
- Endpoint : /network/:id
- Request Body :
```json
{
    "radio_name": "dave",
    "frequency": "12 Hz",
    "ip_radio": "123.234.356.467",
    "ip_address": "123.345.564.533",
    "wlan_mac_address": "ajajajaja",
    "ssid": "1414",
    "signal": "rajawali",
    "ap_location": "jakarta",
    "fk_client_id": 1 
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE Network Success",
    "updatedNetwork": {
        "radio_name": "dave",
        "frequency": "12 Hz",
        "ip_radio": "123.234.356.467",
        "ip_address": "123.345.564.533",
        "wlan_mac_address": "ajajajaja",
        "ssid": "1414",
        "signal": "rajawali",
        "ap_location": "jakarta",
        "fk_client_id": 1
    }
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "error": "error"
}
```
## Delete Network By ID
- Endpoint : /network/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Network Success",
    "networkId": "5"
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "error": "error"
}
```
