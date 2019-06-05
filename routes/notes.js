const router = require('express').Router()
const notesController = require('../controllers/notes');

router.get('/', notesController.index);
router.get('/notes/new', notesController.new);
router.get('/notes/:id', notesController.show);
router.get('/notes/:id/edit', notesController.edit);
router.get('/error', notesController.error);
router.post('/notes', notesController.create);
router.delete('/notes/:id', notesController.remove);
router.put('/notes/:id', notesController.update);

module.exports = router;