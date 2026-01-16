const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")
require('dotenv').config();
require("./db/conn")
const cookieParser = require("cookie-parser")

const Products = require("./models/productsSchema")
const Users = require("./models/userSchema")

const cors = require("cors")
const router = require("./routes/router")

app.use(express.json())
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}))
app.use(router)
app.use(cookieParser())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

