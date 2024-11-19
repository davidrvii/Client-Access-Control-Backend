require("dotenv").config('../env')

const app = require("./app")
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`This app listening on post ${PORT}`)
})