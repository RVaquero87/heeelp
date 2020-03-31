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
        "Todos",
        "Farmacia",
        "Supermercado",
        "Lavandería",
        "Ayuda con máscotas",
        "Tareas de domésticas"
      ]
    }
  },
  {
    timestamps: true
  }
);

const ListItems = mongoose.model("ListItems", userSchema);

module.exports = ListItems;
