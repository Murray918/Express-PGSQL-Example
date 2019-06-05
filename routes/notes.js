const router = require('express').Router()
const notesController = require('../controllers/notes');

router.get('/', notesController.index);
router.get('/notes/:id', notesController.show);
router.get('/error', notesController.error);

module.exports = router;