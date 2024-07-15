import '../env'
import initServer from './server'

initServer().catch((error) => console.error(`Error on startup: ${error}`))
