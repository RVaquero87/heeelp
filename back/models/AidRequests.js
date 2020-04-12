const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    title: String,
    content: String,
    creatorUserid: { type: Schema.Types.ObjectId, ref: "Users" },
    helperId: { type: Schema.Types.ObjectId, ref: "Users" },
    price: {
      type: String,
      enum: ["Free", "5€/h", "6€/h", "7€/h", "8€/h", "9€/h", "10€/h"],
    },
    time: Date,
    shoppinglist: { type: Schema.Types.ObjectId, ref: "ShoppingLists" },
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
    status: {
      type: String,
      enum: ["Realizada", "En Curso", "Publicada", "En creación"],
    },
  },
  {
    timestamps: true,
  }
);

const AidRequests = mongoose.model("AidRequests", userSchema);

module.exports = AidRequests;
