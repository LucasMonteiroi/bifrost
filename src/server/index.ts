import fastify from 'fastify'
import fastifyHelmet from '@fastify/helmet'
import fastifyCompress from '@fastify/compress'

import '../../env'

const initServer = async () => {
  const server = fastify({
    logger: true,
  })

  await server.register(fastifyHelmet)
  await server.register(fastifyCompress)

  try {
    server.listen({
      port: parseInt(process.env.PORT as string) || 3030,
      host: '0.0.0.0',
    })
      .then((address) => {
        console.log(`Bifrost listening on ${address}`)
      })
      .catch(console.error)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }

  return server
}

export default initServer
