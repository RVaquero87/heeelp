const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    message: String,
    status: {
      type: String,
      enum: ["Visto", "Nuevo"],
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

const Notifications = mongoose.model("Notifications", userSchema);

module.exports = Notifications;
