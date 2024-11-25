# RADIO API SPECIFICATION
## Create New Radio
- Endpoint : /radio/add
- Request Body :
```json
{
    "radio": "David"
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Radio Success",
    "newRadio": {
        "radio": "David"
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
## Get All Radio
- Endpoint : /radio/
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Radio Success",
    "radios": [
        {
            "radio_id": 1,
            "type": "No Data",
            "create_at": "2024-10-18T06:29:57.000Z",
            "update_at": "2024-10-18T06:29:57.000Z"
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

## Get All Client By Radio
- Endpoint : /radio/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Client By Radio Success",
    "clientsByRadio": [
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

## Delete Radio By ID
- Endpoint : /radio/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Radio Success",
    "radioId": "15"
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
