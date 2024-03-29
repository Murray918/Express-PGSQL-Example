const options = {
    query: e => {
        console.log(e.query)
    }
};

const pgp = require('pg-promise')(options);

module.exports = pgp(process.env.DATABASE_URL || 
    'postgres://localhost:5432/noteapp');
