const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    title: String,
    message: String,
    statusCreator: {
      type: String,
      enum: ["Visto", "Borrado"],
      default: "Visto",
    },
    statusReceptor: {
      type: String,
      enum: ["Visto", "Nuevo", "Borrado"],
      default: "Nuevo",
    },
    creatorUserId: { type: Schema.Types.ObjectId, ref: "Users" },
    receptorUserId: { type: Schema.Types.ObjectId, ref: "Users" },
    aidRequestId: { type: Schema.Types.ObjectId, ref: "AidRequests" },
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model("Messages", userSchema);

module.exports = Messages;
