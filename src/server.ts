import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import logger from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Connected to MongoDB')
    app.listen(config.port, () => {
      logger.info(`Example app listening at http://localhost:${config.port}`)
    })
  } catch (err) {
    logger.error(err)
  }
}

bootstrap()
