
exports.up = async function(knex) {
    await knex.schema.createTable('artists', tbl => {
        tbl.increments('artist_id')
        tbl.string('artist_name').notNullable()
    })

    await knex.schema.createTable('albums', tbl => {
        tbl.increments('album_id')
        tbl.string('album_name').notNullable()
        tbl.integer('artist_id')
            .unsigned()
            .notNullable()
            .references('artist_id')
            .inTable('artists')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('albums')
        .dropTableIfExists('artists')
};


// remember to mirror the up for the down - up in order, down in reverse order
// one to many relationships require an intermediary table