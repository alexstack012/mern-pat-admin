const mongoose = require('mongoose')
const PatSchema = new mongoose.Schema({
    name: { type: String },
    insurance: { type: String },
    notes: [{ type: String}],
}, { timestamps: true });
module.exports.Pat = mongoose.model('Pat', PatSchema);