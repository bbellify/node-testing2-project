const db = require('../../data/db-config');


function getAll () {
 return db('artists')
}

function getById(id) {
    return db('artists')
        .where('artist_id', id)
        .first()
}

function insert(artist) {
    return db('artists')
        .insert(artist)
        .then(ids => {
            return getById(ids[0])
        })
}

function getAlbums(id) {
    return db('albums')
        .where('artist_id', id)
        .select('album_name')
}

function insertAlbum(id, album) {
    const toAdd = {
        ...album,
        artist_id: id
    }

    return db('albums')
        .insert(toAdd)
        .then(ids => {
            return db('albums')
                .where('album_id', ids[0])
                .first()
        })
}


module.exports = {
    getAll,
    getById,
    insert,
    getAlbums,
    insertAlbum
}