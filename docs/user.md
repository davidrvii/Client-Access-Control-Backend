# USER API SPECIFICATION
## Create New User
- Endpoint : /user/add
- Request Body :
```json
{
    "username": "dave",
    "password": "dave1",
    "ip_address": "123.234.345.456"
}
``` 
- Response Success :
```json
{
    "statusCode": 201,
    "message": "CREATE User Success",
    "content": {
        "username": "dave",
        "password": "dave1",
        "ip_address": "123.234.345.456"
    }
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "content": "error"
}
```
## Get All User
- Endpoint : /user
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET User Success",
    "content": [
        {
            "user_id": 1,
            "username": "david",
            "password": "david1",
            "ip_address": "192.168.203.162",
            "create_at": "2024-10-21T03:30:27.000Z",
            "update_at": "2024-10-21T03:30:27.000Z"
        }
    ]
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "content": "error"
}
```
## Get User By ID
- Endpoint : /user/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET User Detail Success",
    "content": [
        {
            "user_id": 1,
            "username": "david",
            "password": "david1",
            "ip_address": "192.168.203.162",
            "create_at": "2024-10-21T03:30:27.000Z",
            "update_at": "2024-10-21T03:30:27.000Z"
        }
    ]
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "content": "error"
}
```
## Update User By ID
- Endpoint : /user/:id
- Request Body :
```json
{
    "username": "dave",
    "password": "dave1",
    "ip_address": "123.234.345.456"
}
``` 
- Response Success :
```json
{
    "statusCode": 200,
    "message": "UPDATE User Success",
    "content": {
        "username": "dave",
        "password": "dave1",
        "ip_address": "123.234.345.456"
    }
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "content": "error"
}
```
## Delete User By ID
- Endpoint : /user/:id
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "DELETE User Success",
    "content": "2"
}
```
- Response Error :
```json
{
    "statusCode": 500,
    "message": "Server Error",
    "content": "error"
}
```
