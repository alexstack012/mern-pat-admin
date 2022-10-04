const { Pat } = require('../models/pat.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPat = (request, response) => {
    const {
        name,
        notes,
        meds,
        allergies,
        dob,
        religion,
        height,
        weight,
        insurName,
        insurGroupId,
        insurMemId,
        lastVisit,
        emergencyContact } = request.body;
    Pat.create({
        name,
        notes,
        meds,
        allergies,
        dob,
        religion,
        height,
        weight,
        insurName,
        insurGroupId,
        insurMemId,
        lastVisit,
        emergencyContact
    })
        .then(pat => response.json(pat))
        .catch(err => response.json(err));
}

module.exports.getAllPats = (request, response) => {
    Pat.find({})
        .then(pats => response.json(pats))
        .catch(err => response.json(err))
}

module.exports.getPat = (request, response) => {
    Pat.findOne({ _id: request.params.id })
        .then(pat => response.json(pat))
        .catch(err => response.json(err))
}

module.exports.updatePat = (request, response) => {
    Pat.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPat => response.json(updatedPat))
        .catch(err => response.json(err))
}

module.exports.deletePat = (request, response) => {
    Pat.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}