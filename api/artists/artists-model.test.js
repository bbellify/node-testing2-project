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

it('tests sanity', () => {})

describe('artists model', () => {

    describe('getAll', () => {
        it('returns all artists', async () => {
            const res = await Artist.getAll()
            expect(res).toHaveLength(2)
        })
    })

    describe('insert', () => {
        let res
        beforeEach(async () => {
            res = await Artist.insert({ artist_name: 'Kurt Vile'})
        })
        it('returns new artist', async () => {
            expect(res).toMatchObject({ artist_name: 'Kurt Vile' })
        })
        it('adds a new artist to the db', async () => {
            const kurt = await db('artists')
                .where('artist_name', 'Kurt Vile')
                .first()
            expect(kurt).toMatchObject({ artist_name: 'Kurt Vile'})
        })
    })
})