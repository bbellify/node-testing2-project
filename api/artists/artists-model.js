const db = require('../../data/db-config');


function getAll () {
 return db('artists')
}







module.exports = {
    getAll
}