const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
  friend_ign: { type: String, required: true },
  status: { type: String, required: true },
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  days_interacted: { type: String, required: true, unique: false },
});

const PastEvent = mongoose.model("Friends", FriendsSchema);

module.exports = Friends;
