const { Pat } = require('../models/pat.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPerson = (request, response) => {
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

module.exports.getAllPeople = (request, response) => {
    Pat.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Pat.findOne({ _id: request.params.id })
        .then(pat => response.json(pat))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Pat.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Pat.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}