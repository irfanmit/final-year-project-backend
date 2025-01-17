const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    designation : {type : String, required : true}
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
