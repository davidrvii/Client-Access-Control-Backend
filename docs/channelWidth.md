# CHANNEL WIDTH API SPECIFICATION
## Create New Channel Width
- Endpoint : /channelWidth/add
- Request Body :
```json
{
    "channel_width": "Channel Width"
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Channel Width Success",
    "newChannelWidth": {
        "channel_width": "David"
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
## Get All Channel Width
- Endpoint : /channelWidth/
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Channel Width Success",
    "channelWidths": [
        {
            "channel_width_id": 1,
            "channel_width": "No Data",
            "create_at": "2024-10-18T06:26:44.000Z",
            "update_at": "2024-10-18T06:26:44.000Z"
        },
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

## Get All Client By Channel Width
- Endpoint : /channelWidth/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET All Client By Channel Width Success",
    "clientsByChannelWidth": [
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

## Delete Channel Width By ID
- Endpoint : /channelWidth/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Channel Width Success",
    "channelWidthId": "2"
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
