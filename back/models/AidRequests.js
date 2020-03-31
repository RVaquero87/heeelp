const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    creatorUserid: { type: Schema.Types.ObjectId, ref: "Users" },
    title: String,
    summary: String,
    content: String,
    shoppinglist: [{ type: Schema.Types.ObjectId, ref: "ListItems" }]
  },
  {
    timestamps: true
  }
);

const AidRequests = mongoose.model("AidRequests", userSchema);

module.exports = AidRequests;
