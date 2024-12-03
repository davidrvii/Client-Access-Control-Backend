# Client API SPECIFICATION
## Create New Client
- Endpoint : /client/add
- Request Body :
```json
{
    "name": "David",
    "phone": "08171929",
    "address": "jakarta",
    "comment": "davvavav"
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Client Success",
    "newClient": {
        "name": "David",
        "phone": "08171929",
        "address": "jakarta",
        "comment": "davvavav"
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
## Get All Client
- Endpoint : /client
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Client Success",
    "allClient": [
        {
            "client_id" : "1",
            "name": "David",
            "ip_address": "123.345.564.533",
            "internet_access": "Non-Actived"
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
## Get All Client By User
- Endpoint : /client/byUser
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Client",
    "clients": [
        {
            "name": "David",
            "ip_address": "123.345.564.533",
            "internet_access": "Non-Actived"
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

## Get Client By ID
- Endpoint : /client/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Client Detail Success",
    "clientDetail": [
        {
            "client_id": 1,
            "name": "David",
            "phone": "08171929",
            "password": "hahahha",
            "address": "jakarta",
            "comment": "davvavav",
            "internet_access": "Non-Actived",
            "internet_speed": "0 Mbps",
            "radio_name": "David",
            "frequency": "12 Hz",
            "ip_radio": "123.234.356.467",
            "ip_address": "123.345.564.533",
            "wlan_mac_address": "ajajajaja",
            "ssid": "1414",
            "radio_signal": "rajawali",
            "ap_location": "jakarta",
            "type": "No Data",
            "mode": "No Data",
            "channel_width": "No Data",
            "preshared_key": "No Data",
            "bts": "No Data"
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
## Update Client By ID
- Endpoint : /client/:id
- Request Body :
```json
{
    "name": "David",
    "phone": "08171929",
    "password": "hahahha",
    "address": "jakarta",
    "comment": "davvavav",
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE Client Success",
    "updatedClient": {
        "name": "David",
        "phone": "08171929",
        "password": "hahahha",
        "address": "jakarta",
        "comment": "davvavav",
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
## Delete Client By ID
- Endpoint : /client/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Client Success",
    "clientId": "2"
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
