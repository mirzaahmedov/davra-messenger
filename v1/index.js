const { Router } = require("express")

const router = Router()

router.get("/", function (req, res) {
  console.log("request accepted")
  res.end()
})

module.exports = router
