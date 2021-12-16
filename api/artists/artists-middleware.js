const Artist = require('./artists-model')



function validateId(req, res, next) {
    Artist.getById(req.params.id)
        .then(artist => {
            if (!artist) {
                next({ status: 404, message: `artist with id ${req.params.id} does not exist`})
            } else {
                req.body.artist = artist
                next()
            }
        })
        .catch(next)
}

// could add functionality here to make sure artist doesn't already exist

function validateArtist(req, res, next) {
    const {artist_name} = req.body
    if (!artist_name || !artist_name.trim()) {
        next({ status: 400, message: 'artist_name is required' })
    } else {
        req.body.artist_name = artist_name.trim()
        next()
    }
}

function validateAlbum(req, res, next) {
    const {album_name} = req.body
    if (!album_name || !album_name.trim()) {
        next({ status: 400, message: 'album_name is required' })
    } else {
        req.album_name = album_name.trim()
        next()
    }    
}



module.exports = {
    validateId,
    validateArtist,
    validateAlbum
}