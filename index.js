import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import machineRoutes from './routes/machines.js'
import workerRoutes from './routes/workers.js'
import scheduleRoutes from './routes/schedules.js'
import cookieParser from 'cookie-parser'

/* CONFIG */
const __filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filepath)
dotenv.config()
const app = express()
app.use(express.json())
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
//TODO: setup cors for dist
app.use(cookieParser())
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')))
} else {
  app.use(cors({ credentials: true, origin: true }))
}

/* ROUTES */
app.use('/api/auth', authRoutes)
app.use('/api/machines', machineRoutes)
app.use('/api/workers', workerRoutes)
app.use('/api/schedules', scheduleRoutes)

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log('Server is live at ' + PORT))
  })
  .catch((err) => console.log('did not connect', err))
