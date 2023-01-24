const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
  company_name: String,
  position: String,
  contract: String,
  location: String,
});

const DataModal = mongoose.model("mock-xiii-data", DataSchema);

module.exports = DataModal;
