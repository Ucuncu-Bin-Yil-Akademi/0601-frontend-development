const { mongoose } = require("mongoose");

const AdminSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

const AdminModel = mongoose.model("AdminExample", AdminSchema, "adminExample");
module.exports = AdminModel;
