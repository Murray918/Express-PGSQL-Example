const db = require('../config/database');

module.exports = {
    find,
    findById,
    create,
    findByIdAndDelete
}

async function find() {
    try {
        const notes = await db.query(`SELECT * FROM notes`)
        return notes
    } catch (error) {
        return error
    }
}

async function findById(id) {
    try {
        const note = await db.one(`
        SELECT * 
        FROM notes
        WHERE note_id = $1`, id);
        return note;
    } catch (error) {
        return error;
    }
}

async function create({ title, body }) {
    try {
        const note = await db.one(`
        INSERT INTO notes(title, body)
        VALUES($1, $2) RETURNING *`, 
        [title,body]);
        return note;
    } catch (error) {
        return error;
    }
}

async function findByIdAndDelete(id) {
    try {
        const deletedNote = db.one(`
        DELETE FROM notes
        WHERE note_id = $1
        RETURNING *`, id)
        return deletedNote;
    } catch (error) {
        return error;
    }
}