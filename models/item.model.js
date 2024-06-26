//import mongoose from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, required: true, trim: true },
    description: { type: String },
    imageUrl: { type: String },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;