const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

const ShoppingLists = mongoose.model("ShoppingLists", userSchema);

module.exports = ShoppingLists;
