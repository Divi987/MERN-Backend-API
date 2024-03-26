import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: { type: Date, required: true},
    branch: { type: String},
    item: [
        {type: Schema.Types.ObjectId, ref: 'Item'}
      ],
    user: [
        {type: Schema.Types.ObjectId, ref: 'User'}
      ],
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() },

}, {
    timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;