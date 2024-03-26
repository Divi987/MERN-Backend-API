const router = require("express").Router();
let Item = require("../models/item.model");

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/item/:id").get((req, res) => {
  Item.find({ _id: req.params.id })
   .then((item) => res.status(200).json(item))
   .catch((e) => res.status(400).json(e));

});

router.route("/item").post((req, res) => {
  const itemName = req.body.itemName;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  const newItem = new Item({ itemName, description, imageUrl });

  newItem
    .save()
    .then(() => res.status(201).json({ "message:": "Item Added", item: newItem }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
