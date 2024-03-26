const router = require("express").Router();
let Appointment = require("../models/appointment.model");

router.route("/user/:id").get((req, res) => {
   Appointment.find({ user: req.params.id })
    .then((item) => res.status(200).json(item))
    .catch((e) => res.status(400).json(e));

});

router.route("/new").post((req, res) => {
  const date = req.body.date;
  const branch = req.body.branch;
  const item = req.body.item;
  const user = req.body.user;

  const newAppointment = new Appointment({ date, branch, item, user });

  newAppointment
    .save()
    .then(() => res.json("New Appointment Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
