import express from 'express'
import dotenv from 'dotenv'
import HelloWorldRouter from './routes/hello.router.js'

dotenv.config({path:[".env",`.env${process.env.NODE_ENV}`]})

const PORT = process.env.PORT || 3030

const app = express();

app.use(express.json())

app.use(HelloWorldRouter)

app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`)
})