import express from 'express'
import { helloWorld } from '../controllers/hello.controller.js'

const router = express.Router()

router.get('/hello', helloWorld)

export default router