const bcrypt = require("bcryptjs")

function hashPassword(plainPassword){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(plainPassword,salt)
}

function comparedPassword (plainPassword,hashPassword){
    return bcrypt.compareSync(plainPassword,hashPassword)
}


module.exports={
    hashPassword,
    comparedPassword
}