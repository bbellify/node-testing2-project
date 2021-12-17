const request = require('supertest')
const server = require('../server')
const db = require('../../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy() // disconnects from db
})


it('is the correct env', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('artists router', () => {
    describe('[GET] artists', () => {
        let res
        beforeEach(async () => {
            res = await request(server)
                .get('/api/artists')
        })
        it('responds with 200 OK', async () => {
            expect(res.status).toBe(200)
        })
        it('responds with array of artists', () => {
            expect(res.body).toHaveLength(2)
        })
    })

    describe('[POST] new artists', () => {
        let res
        beforeEach(async () => {
            res = await request(server)
                .post('/api/artists')
                .send({ artist_name: "Third Eye Blind" })
        })
        it('responds with 201 OK', async () => {
            expect(res.status).toBe(201)
        })
        it('responds with new artist created', async () => {
            expect(res.body).toMatchObject({ artist_name: "Third Eye Blind"})
        })
    })

    describe('[GET] artist by id', () => {
        let res
        beforeEach(async () => {
            res = await request(server)
                .get('/api/artists/2')
        })
        it('responds with 200 OK', () => {
            expect(res.status).toBe(200)
        })
        it('responds with correct artist object', () => {
            expect(res.body).toMatchObject({ artist_name: 'Weezer' })
        })
    })

})

