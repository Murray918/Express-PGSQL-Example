const Note = require('../models/note');

module.exports = {
    index,
    show,
    error
};

async function index(req, res) {
    try {
        const notes = await Note.find({})
        res.render('index', { 
            title: 'Welcome to NoteApp',
            notes 
        });
    } catch (error) {
        res.redirect('/error')
    }
}

async function show(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        res.render('show', {
            title: `Details for: ${note.title}`,
            note
        });
    } catch (error) {
        res.redirect('/error');
    }
}


function error(req, res) {
    res.render('error', {
        title: 'Something Went Wrong'
    });
}