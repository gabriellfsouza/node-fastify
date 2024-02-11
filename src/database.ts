// import knexLib from 'knex'
import { knex as setupKnex, type Knex } from 'knex'
import { env } from './env'

// const { knex: setupKnex, Knex } = knexLib

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
