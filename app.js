const express = require('express')
const app = express()
require("./db/conn")
const port = 5000


app.use(express.json())
const studentrouter = require("./routers/student_Router")
app.use(studentrouter)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})