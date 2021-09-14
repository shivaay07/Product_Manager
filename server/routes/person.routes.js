// Import from person.controllers.js with require keyword
const personController = require('../controllers/person.controller')

module.exports = function(app){
    app.get('/api',personController.index);
    app.post('/api/people', personController.createPerson)
    app.get('/api/people',personController.getAllPeople)
    app.get('/api/people/:id', personController.getPerson)
    app.put('/api/people/:id',personController.updatePerson)
    app.delete('/api/people/:id',personController.deletePerson)
}
