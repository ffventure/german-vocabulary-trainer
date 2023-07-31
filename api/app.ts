
import express from 'express'
import mongoose from 'mongoose'
import config from './utils/config'
import cors from 'cors'
import nounsRouter from './controllers/nouns'

const app = express()
// class App {
//   public app : express.Application = express()
// }
mongoose.set('strictQuery', false)

if(config.DB_URL){
  mongoose.connect(config.DB_URL).then(() => {console.log("connected to DB")})
}


app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/', nounsRouter)


export default app

