import './config/env.js'
import express from "express"
import connectDb from "./config/db.js"
import authRouter from './routes/authRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import cookieParser from 'cookie-parser'
import clientRouter from './routes/clientRoutes.js'

const PORT = process.env.PORT

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser())
app.use('/uploads', express.static('uploads'))

connectDb()

app.use('/auth', authRouter)
app.use('/admin', adminRouter)
app.use('/', clientRouter)

app.listen(PORT, (err) => {
    console.log(`Server is running at http://localhost:${PORT}`)
    if (err) console.log("Server is down.");
})