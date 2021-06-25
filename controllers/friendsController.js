const db = require("../models");

module.exports = {
  getFriends: function (req, res) {
    console.log("req: ", db.PastEvent);
    db.Friend.aggregate([
      { $group: { _id: req.params.id, count: { $sum: 1 } } },
    ])
      .then((dbResults) => res.json(dbResults))
      .then(console.log("New Data ", req.body))
      .catch((err) => res.status(422).json(err));
  },
};
