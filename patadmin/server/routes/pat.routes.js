const PatController = require('../controllers/pat.controller')
module.exports = function (app) {
    app.get('/api', PatController.index)
    app.post('/api/pat', PatController.createPat)
    app.get('/api/pat', PatController.getAllPats)
    app.get('/api/pat/:id', PatController.getPat)
    app.put('/api/pat/:id', PatController.updatePat)
    app.delete('/api/pat/:id', PatController.deletePat)
}

