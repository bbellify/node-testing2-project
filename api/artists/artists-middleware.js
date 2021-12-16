const Artist = require('./artists-model')

function validateArtist(req, res, next) {
    const {artist_name} = req.body
    if (!artist_name || !artist_name.trim()) {
        next({ status: 400, message: 'artist_name is required' })
    } else {
        req.body.artist_name = artist_name.trim()
        next()
    }
}


module.exports = {
    validateArtist
}