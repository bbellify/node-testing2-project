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
            res = await request(server).get('/artists')
        })
        it('responds with 200 OK', async () => {
            expect(res.status).toBe(200)
        })
    })
})

