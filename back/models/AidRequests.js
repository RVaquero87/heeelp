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
      enum: [
        "Free",
        "5€/hora",
        "6€/hora",
        "7€/hora",
        "8€/hora",
        "9€/hora",
        "10€/hora",
      ],
    },
    time: Date,
    shoppinglist: [{ type: Schema.Types.ObjectId, ref: "ShoppingLists" }],
    type: {
      type: String,
      enum: [
        "Lavandería",
        "Supermercado",
        "Parafarmacia",
        "Tareas domésticas",
        "Animales domésticos",
      ],
    },
    status: {
      type: String,
      enum: ["Cancelada", "Realizada", "En curso", "Publicada", "En creación"],
    },
    modifyCard: Date,
  },
  {
    timestamps: true,
  }
);

const AidRequests = mongoose.model("AidRequests", userSchema);

module.exports = AidRequests;
