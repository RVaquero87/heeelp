const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    type: {
      type: String,
      enum: [
        "Lavandería",
        "Supermercado",
        "Farmacia",
        "Tareas domésticas",
        "Animales domésticos",
      ],
    },
    list: [
      {
        summary: String,
        description: String,
        image: String,
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ShoppingLists = mongoose.model("ShoppingLists", userSchema);

module.exports = ShoppingLists;
