# RADIO API SPECIFICATION
## Create New Radio
- Endpoint : /radio/add
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Radio Success",
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
## Get All Radio
- Endpoint : /radio
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Radio Success",
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

## Get Radio By ID
- Endpoint : /radio/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Radio Detail Success",
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
## Update Radio By ID
- Endpoint : /radio/:id
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE Radio Success",
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
## Delete Radio By ID
- Endpoint : /radio/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Radio Success",
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
