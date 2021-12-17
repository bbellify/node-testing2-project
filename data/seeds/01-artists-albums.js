
// dummy data to insert below
const artists = [
  { artist_name: 'Brand New' },
  { artist_name: 'Weezer' }
]

const albums = [
  { album_name: 'Deja Entendu', artist_id: 1},
  { album_name: 'Science Fiction', artist_id: 1},
  { album_name: 'Make Believe', artist_id: 2},
  { album_name: 'Pinkerton', artist_id: 2}
]

exports.seed = async function(knex) {
  await knex('artists').truncate()
    .insert(artists)
  await knex('albums').truncate()
    .insert(albums)
};