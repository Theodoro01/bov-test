import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

export default {
  connectToDatabase: () => {
    mongoose.connect(
      process.env.DATABASE_URL,
      {},
      error => {
        const message = error
          ? `falha ao conectar no mmongo ${error}`
          : 'conectado ao MONGO com sucesso'
        console.log(message)
      }
    )
  }
}
