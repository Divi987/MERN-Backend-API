import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
   userName: {type: String, required: true},
   password: {type: String},
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() },

}, {
    timestamps: true,
});

const User = mongoose.model('Appointment', userSchema);

module.exports = User;