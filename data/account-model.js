const db = require('./dbConfig');

function find() {
    return db('accounts');
}

function findById(id) {
    return db('accounts')
        .where({ id })
        .first();
    }

function insert({ name, budget }) {
    return db('accounts')
        .insert({ name, budget });
}

function update(id, fields) {
    return db('accounts')
        .where({ id })
        .update(fields);
}

function remove(id) {
    return db('accounts')
        .where({ id })
        .del();
}