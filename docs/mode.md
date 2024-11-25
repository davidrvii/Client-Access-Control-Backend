# MODE API SPECIFICATION
## Create New Mode
- Endpoint : /mode/add
- Request Body :
```json
{
    "mode": "David"
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Mode Success",
    "newMode": {
        "mode": "David"
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
## Get All Mode
- Endpoint : /mode
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Mode Success",
    "modes": [
        {
            "mode_id": 1,
            "mode": "No Data",
            "create_at": "2024-10-18T06:02:36.000Z",
            "update_at": "2024-10-18T06:20:36.000Z"
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

## Get All Client By Mode
- Endpoint : /mode/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Client By Mode Success",
    "clientsByMode": [
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

## Delete Mode By ID
- Endpoint : /mode/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Mode Success",
    "modeId": "2"
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
