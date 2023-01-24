const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fname: String,
  email: String,
  password: String,
});

const UserModal = mongoose.model("mock-xiii-user", UserSchema);

module.exports = UserModal;
