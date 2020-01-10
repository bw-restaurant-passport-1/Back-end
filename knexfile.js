module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/restaurantPassport.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './seeds'
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};