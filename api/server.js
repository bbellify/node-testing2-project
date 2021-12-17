const express = require('express')
const cors = require('cors')

const artistsRouter = require('./artists/artists-router')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/artists', artistsRouter)

server.get('/', (req, res) => {
    res.json({ api: 'up' })
})


module.exports = server