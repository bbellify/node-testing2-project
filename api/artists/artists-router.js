const express = require('express')
const Artist = require('./artists-model')

const router = express.Router()


router.get('/', (req, res, next) => {
    Artist.getAll()
        .then( artists => {
            res.json(artists)
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