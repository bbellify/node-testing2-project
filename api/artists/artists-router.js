const express = require('express')
const Artist = require('./artists-model')
const { validateId, validateArtist, validateAlbum } = require('./artists-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Artist.getAll()
        .then( artists => {
            res.json(artists)
        })
        .catch(next)
})

router.post('/', validateArtist, (req, res, next) => {
    Artist.insert(req.body)
        .then(artist => {
            res.status(201).json(artist)
        })
        .catch(next)
})

router.get('/:id', validateId, (req, res) => {
    res.json(req.body.artist)
})

router.get('/:id/albums', validateId, (req, res, next) => {
    Artist.getAlbums(req.params.id)
        .then(albums => {
            res.json(albums)
        })
        .catch(next)
})

router.post('/:id/albums', validateId, validateAlbum, (req, res, next) => {
    Artist.insertAlbum(req.params.id, req.album_name)
        .then(album => {
            res.status(201).json(album)
        })
        .catch(next)
})



// error handling - doesn't have to be here, can be implemented in a few dif ways

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 400).json({
        message: `${err.message}`,
        stack: err.stack
    })
})


module.exports = router