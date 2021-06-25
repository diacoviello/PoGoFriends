const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  friend_ign: { type: String, required: true },
  friend_name: { type: String, required: false },
  status: { type: String, required: true },
  days_interacted: { type: String, required: true, unique: false },
});

const Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;
