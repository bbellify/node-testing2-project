const Artist = require('./artists-model')
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

it('tests sanity', () => {
    
})