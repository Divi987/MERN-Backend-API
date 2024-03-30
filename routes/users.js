const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route("/new").post((req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = new User({ ...req.body, password: hash });

  newUser
    .save()
    .then(() => {
      const token = jwt.sign({ id: newUser._id }, process.env.JWT);
      const { pass, ...othersData } = newUser._doc;
      res
        .cookie("access-token", token, {
          httpOnly: true,
        })
        .status(201)
        .json({status: '201' ,user:othersData, token: token});
    })
    .catch((err) => res.status(400).json("Err: " + err));
});

const login = async (req, res, next) => {
  try {
    const userName = req.body.userName;

    const user = await User.findOne({ userName: userName });

    console.log(user.password);

    if (!user) return res.status(404).json("User Not Found");

    const decodePass = await bcrypt.compare(req.body.password, user.password);

    if (!decodePass) return res.status(400).json("Wrong Password");

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { pass, ...userData } = user._doc;

    res
      .cookie("access-token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({logged_in: true, user: userData, token: token});
  } catch (err) {
    next(err);
  }
};

const autoLogin = async (req, res, next) => {
  try {
    const id = req.body._id;

    const user = await User.find({ _id: id });

    if (!user) return res.status(404).json("User Not Found");

    const { ...userData } = user._doc;

    res.status(200).json({logged_in: true, user: userData});
  } catch (err) {
    next({err: 'token is wrong or expired, please login again' + err});
  }
};

router.route("/login").post(login);
router.route("/login/auto_login").post(autoLogin);

module.exports = router;
