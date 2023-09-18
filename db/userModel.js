const mongoose = require("mongoose");
let crypto = require("crypto");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    unique: true,
    required: [true, "Please enter username"],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Please enter password"],
  },
  admin: {
    type: Boolean,
  },
});



const User = mongoose.model("User", userSchema);

module.exports = User;
