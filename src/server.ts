import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/', async () => {
  return { hello: 'world' }
})

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transactions
})

app.get('/hello2', async () => {
  const transactions = await knex('transactions')
    .select('*')
    .where('amount', '>', 1000)

  return transactions
})

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server running on http://localhost:3333')
})
