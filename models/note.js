const db = require('../config/database');

module.exports = {
    find,
    findById
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