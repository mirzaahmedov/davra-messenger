const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")

dotenv.config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

async function start() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("==> Connected to database")

    const app = express()

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
