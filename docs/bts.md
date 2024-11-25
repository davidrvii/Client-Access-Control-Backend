# BTS API SPECIFICATION
## Create New BTS
- Endpoint : /bts/add
- Request Body :
```json
{
    "bts": "bts"
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE BTS Success",
    "newBTS": {
        "bts": "bts"
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
## Get All BTS
- Endpoint : /bts
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET BTS Success",
    "bts": [
        {
            "bts_id": 1,
            "bts": "No Data",
            "create_at": "2024-10-18T06:25:51.000Z",
            "update_at": "2024-10-18T06:25:51.000Z"
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
## Get All Client By BTS
- Endpoint : /bts/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Client By BTS Success",
    "clientsByBTS": [
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
## Delete BTS By ID
- Endpoint : /bts/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE BTS Success",
    "btsId": "2"
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
