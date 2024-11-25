# Preshared Key API SPECIFICATION
## Create New Preshared Key
- Endpoint : /presharedKey/add
- Request Body :
```json
{
    "preshared_key": "David"
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Preshared Key Success",
    "newPresharedKey": {
        "preshared_key": "David"
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
## Get All Preshared Key
- Endpoint : /presharedKey/
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Preshared Key Success",
    "presharedKeys": [
        {
            "preshared_key_id": 1,
            "preshared_key": "No Data",
            "create_at": "2024-10-18T06:28:18.000Z",
            "update_at": "2024-10-18T06:28:18.000Z"
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

## Get All CLient By Preshared Key
- Endpoint : /presharedKey/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Client By Preshared Key Success",
    "ClientsByPresharedKey": [
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

## Delete Preshared Key By ID
- Endpoint : /presharedKey/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Preshared Key Success",
    "presharedKeyId": "5"
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
