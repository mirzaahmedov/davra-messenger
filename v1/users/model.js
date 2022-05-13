const mongoose = require("mongoose")

module.exports = mongoose.model(
  "user",
  new mongoose.Schema(
    {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        minlength: 2,
        maxlength: 20,
      },
      hashed: {
        type: String,
      },
      chats: {
        type: [mongoose.Types.ObjectId],
      },
      photo: {
        type: String,
      },
      hidden: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      collection: "users",
      toJSON: {
        transform(_, obj) {
          delete obj.__v
          delete obj.hashed
          return obj
        },
      },
    }
  )
)
