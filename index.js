const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const cookies = require("cookie-parser")
const morgan = require("morgan")

dotenv.config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

async function start() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("==> Connected to database")

    const app = express()

    app.use(express.json())
    app.use(cookies())
    app.use(morgan())

    app.listen(PORT, function (error) {
      if (error) {
        throw error
      }
      console.log("==> Listening on PORT " + PORT)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
