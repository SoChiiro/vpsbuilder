const { openDB } = require('idb');
const dbPromise = openDB('translations', 1, {
    upgrade(db) {
        db.createObjectStore('key-val');
    },
});

async function get(key) {
    return (await dbPromise).get('key-val', key);
}

async function set(key, val) {
    return (await dbPromise).put('key-val', val, key);
}

async function keys() {
    return (await dbPromise).getAllKeys('key-val');
}

async function getAll() {
    return (await dbPromise).getAll('key-val');

}

module.exports = { get, set, keys, getAll }