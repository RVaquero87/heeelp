const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    creatorUserid: String,
    receptorUserid: String,
    title: String,
    message: String,
    rol: {
      type: String,
      enum: [
        "Admin",
        "Atudantes / Helpers",
        "Ayudados / Helped"
      ]
    }
  },
  {
    timestamps: true
  }
);

const Notifications = mongoose.model("Notifications", userSchema);

module.exports = Notifications;
