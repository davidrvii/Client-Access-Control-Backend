# MODE API SPECIFICATION
## Create New Mode
- Endpoint : /mode/add
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Mode Success",
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
## Get All Mode
- Endpoint : /mode
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Mode Success",
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

## Get Mode By ID
- Endpoint : /mode/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Mode Detail Success",
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
## Update Mode By ID
- Endpoint : /mode/:id
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE Mode Success",
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
## Delete Mode By ID
- Endpoint : /mode/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Mode Success",
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
