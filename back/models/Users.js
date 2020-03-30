const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, index: true },
    password: String,
    rol: {
      type: String,
      enum: ["Admin", "Ayudantes / Helpers", "Ayudados / Helped"]
    },
    name: String,
    lastname: String,
    dni: String,
    birthYear: String,
    image: { type: String, default: "/images/default-profile.jpg" },
    street: String,
    number: Number,
    portal: String,
    stairs: String,
    floor: Number,
    letter: String,
    postalCode: Number,
    city: String,
    country: String,
    lat: Number,
    lng: Number,
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notifications" }],
    aidRequests: [{ type: Schema.Types.ObjectId, ref: "AidRequests" }],
    legalCheck: Boolean,
    visits: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Users = mongoose.model("Users", userSchema);

Users.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = Users;
