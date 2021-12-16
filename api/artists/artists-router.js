const express = require('express')
const Artist = require('./artists-model')
const { validateArtist } = require('./artists-middleware')

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

router.get('/:id', (req, res, next) => {
    Artist.getById(req.params.id)
        .then(artist => {
            res.json(artist)
        })
        .catch(next)
})

router.get('/:id/albums', (req, res, next) => {
    Artist.getAlbums(req.params.id)
        .then(albums => {
            res.json(albums)
        })
        .catch(next)
})

router.post('/:id/albums', (req, res, next) => {
    Artist.insertAlbum(req.params.id, req.body)
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