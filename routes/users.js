const router = require("express").Router();
let User = require("../models/user.model");

router.route("/new").post((req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const newUser = new User({ userName, password });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post((req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const user = User.findOne({ userName, password });

  console.log(user);
  return user;
    //.then(() => res.status(200).json("Logged IN"))
    //.catch((e) => res.status(400).json("Error: " + e));
});

module.exports = router;
