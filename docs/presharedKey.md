# Preshared Key API SPECIFICATION
## Create New Preshared Key
- Endpoint : /presharedKey/add
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE Preshared Key Success",
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
## Get All Preshared Key
- Endpoint : /presharedKey
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Preshared Key Success",
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

## Get Preshared Key By ID
- Endpoint : /presharedKey/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET Preshared Key Detail Success",
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
## Update Preshared Key By ID
- Endpoint : /presharedKey/:id
- Request Body :
```json
{
    
}
```
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE Preshared Key Success",
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
## Delete Preshared Key By ID
- Endpoint : /presharedKey/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE Preshared Key Success",
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
