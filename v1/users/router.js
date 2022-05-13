const { Router } = require("express")

const controllers = require("./controllers")

const router = Router()

router.post("/register", controllers.register)

module.exports = router
