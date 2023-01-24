const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fname: String,
  email: String,
  password: String,
});

const AdminModal = mongoose.model("mock-xiii-admin", UserSchema);

module.exports = AdminModal;
