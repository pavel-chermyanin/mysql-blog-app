import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import cookieParser from "cookie-parser";
import postRoutes from './routes/posts.js'

const app = express()

app.use(express.json())
app.use(cookieParser());
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(8800,() => {
    console.log('Connected server');
})