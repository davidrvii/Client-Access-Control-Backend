const response = (statusCode, data, message, res) =>{
    res.status(statusCode).json(
        {
            statusCode: statusCode,
            message: message,
            content:  data,
        }
    )
}

module.exports = response