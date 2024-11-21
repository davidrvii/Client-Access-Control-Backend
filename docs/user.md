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
    "registerResult": {
        "username": "dave",
        "password": "dave1",
        "ip_address": "123.234.345.456"
    }
}
```
## Login User
- Endpoint : /user/login
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
    "message": "Login Success",
    "loginResult": {
        "username": "dave",
        "ip_address": "123.234.345.456",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLW1pNDVaOXZsem8xcjFqWHciLCJpYXQiOjE3MzIwOTE1NDJ9.G6qScOClhwnMQSXsv4a_nPe8gHoXDhoT7S3h93e1JpM"
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
## Get All User
- Endpoint : /user
- Request Body :
- Response Success :
```json
{
    "statusCode": 200,
    "message": "GET User Success",
    "users": [
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
    "error": "error"
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
    "userDetail": [
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
    "error": "error"
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
    "updatedUser": {
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
    "error": "error"
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
    "userId": "2"
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
