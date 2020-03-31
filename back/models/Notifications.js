const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    creatorUserid: { type: Schema.Types.ObjectId, ref: "Users" },
    receptorUserid: { type: Schema.Types.ObjectId, ref: "Users" },
    title: String,
    message: String
  },
  {
    timestamps: true
  }
);

const Notifications = mongoose.model("Notifications", userSchema);

module.exports = Notifications;
