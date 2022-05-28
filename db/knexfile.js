const {knexSnakeCaseMappers} = require('objection')

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {


 development: {
    client: 'postgresql',
    connection: {
      database: 'sql_demo',
      user:     'ghost',
      password: 'createpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    knexSnakeCaseMappers

  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'sql_demo',
  //     user:     'ghost',
  //     password: 'ghost'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
