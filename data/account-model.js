const db = require('./dbConfig');

function find() {
    return db('accounts');
}

function findById(id) {
    return db('accounts')
        .select()
        .where({ id });
}
