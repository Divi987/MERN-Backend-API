const router = require("express").Router();
let Item = require("../models/item.model");
const verifyToken = require('./auth.middleware');

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

const itemDetails = async (req, res, next) => {
  const {id} = req.params;

  try {
    const item = await Item.find({_id: id});
    if(!item || item.length === 0) {
      return res.status(403).json({message: "Item not Found"})
    } else {
      return res.status(200).json(item);
    }
  }catch (e) {
    return res.status(401).json('Error: ' + e.message);
  }
}
router.route("/item/:id").get(verifyToken, itemDetails);

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
