const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    title: String,
    message: String,
    creatorUserId: { type: Schema.Types.ObjectId, ref: "Users" },
    receptorUserId: { type: Schema.Types.ObjectId, ref: "Users" },
    aidResquestId: { type: Schema.Types.ObjectId, ref: "AidRequests" },
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model("Messages", userSchema);

module.exports = Messages;
