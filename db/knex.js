const environment = process.env.JAWSDB_URL || 'development';
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);

  