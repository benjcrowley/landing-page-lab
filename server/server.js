const express = require('express')
require("dotenv").config()

const app = express()

app.use(express.json())

const {home, css} = require("./controllers/pageCtrl")

app.get("/", home)
app.get("/css", css)

const { PORT } = process.env

app.listen(PORT, () => console.log(`server is running on ${PORT}`))