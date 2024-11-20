# BTS API SPECIFICATION
## Create New BTS
- Endpoint : /bts/add
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE BTS Success",
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
## Get All BTS
- Endpoint : /bts
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET BTS Success",
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

## Get BTS By ID
- Endpoint : /bts/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET BTS Detail Success",
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
## Update BTS By ID
- Endpoint : /bts/:id
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE BTS Success",
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
## Delete BTS By ID
- Endpoint : /bts/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE BTS Success",
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
