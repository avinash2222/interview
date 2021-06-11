require('dotenv').config()
import './env'
import { initClientDbConnection } from './src/db/dbConnection'
import express from 'express'
import user_route from './src/routes/user'
import unsecure_route from './src/routes/unSecure'
import cors from 'cors'
import helmet from 'helmet'
import {authenticate} from './src/security/auth'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 8080

app.use(helmet())

const corsOptions = {
  credentials: true, origin:(origin, callback)=> {
    callback(null, true)
  },
}

/* server page, general config */
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

/* joining public directory for testing socket*/
app.use('/socket', express.static(path.join(__dirname, 'public')))

app.use(cors(corsOptions))
app.enable('trust proxy')
app.set('trust proxy', 1)
app.use(express.json({ limit: '10kb' }))
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// global.clientConnection =  initClientDbConnection()
global.clientConnection =  initClientDbConnection()
unsecure_route(app)

/* authentication Added, all the bellow API must be authenticated */
app.use(authenticate)

user_route(app)

process.on('unhandledRejection', (reason, promise) => console.error('Unhandled Rejection at:', promise, 'reason:', reason))

//Error handler at global level
app.use(function (error, req, res, next) {
  console.error(error.stack)
  if (res.headersSent) { return next(error) }
  res.status(error.status ? error.status : 500).send(error.message ? error.message: error)
})

app.listen(PORT, () => {
  console.log(`Node_ENV : ${process.env.NODE_ENV}`)
  console.log(`Server is running on port ${PORT}`)
})

