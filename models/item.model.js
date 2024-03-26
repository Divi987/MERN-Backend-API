import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, required: true, trim: true },
    description: { type: String },
    imageUrl: { type: String },
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() }

}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;