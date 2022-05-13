const enums = require("#utils/enums")

exports.register = function (req, res) {
  let status = 500
  try {
    res.status(enums.CODE_OK).send({ ok: true })
  } catch (error) {
    res.status(status).send({ error: error.message })
  }
}
