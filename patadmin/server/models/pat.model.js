const mongoose = require('mongoose')
const PatSchema = new mongoose.Schema({
    name: { type: String },
    notes: [{ type: String }],
    meds: [{ type: String }],
    allergies: [{ type: String }],
    dob: { type: String },
    religion: { type: String },
    height: { type: String },
    weight: { type: Number },
    insurName:{ type: String },
    insurMemId:{ type: String },
    insurGroupId:{ type: String },
    lastVisit:{ type: String },
}, { timestamps: true });
module.exports.Pat = mongoose.model('Pat', PatSchema);