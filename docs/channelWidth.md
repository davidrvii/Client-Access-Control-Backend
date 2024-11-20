# CHANNEL WIDTH API SPECIFICATION
## Create New Channel Width
- Endpoint : /channelWidth/add
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Channel Width Success",
    " ": {
        
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
- Endpoint : /channelWidth
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Channel Width Success",
    " ": [
        {
            
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

## Get Channel Width By ID
- Endpoint : /channelWidth/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Channel Width Detail Success",
    " ": [
        {
            
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
## Update Channel Width By ID
- Endpoint : /channelWidth/:id
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE Channel Width Success",
    " ": {
        
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
## Delete Channel Width By ID
- Endpoint : /channelWidth/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Channel Width Success",
    " ": "2"
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
