const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    title: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.model("Contacts", userSchema);

module.exports = Contacts;
