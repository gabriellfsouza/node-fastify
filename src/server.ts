import fastify from 'fastify'

const app = fastify()

app.get('/', async () => {
  return { hello: 'world' }
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server running on http://localhost:3333')
})
