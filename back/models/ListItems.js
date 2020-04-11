const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    quantity: String,
    image: String,
    kind: {
      type: String,
      enum: [
        "Farmacia",
        "Supermercado",
        "Lavandería",
        "Ayuda con máscotas",
        "Tareas domésticas",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const ListItems = mongoose.model("ListItems", userSchema);

module.exports = ListItems;
