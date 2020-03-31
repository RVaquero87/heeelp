const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    creatorUserid: { type: Schema.Types.ObjectId, ref: "Users" },
    title: String,
    message: String,
    stars: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5]
    }
  },
  {
    timestamps: true
  }
);

const Notifications = mongoose.model("Notifications", userSchema);

module.exports = Notifications;
