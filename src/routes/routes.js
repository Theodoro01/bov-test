import express from 'express'
import UserController from '../controllers/UserController.js'

const routes = express.Router()

routes.get('/home', (_, res) => res.status(200).json({ msg: 'ok' }))
routes.post('/register', UserController.register)

export default routes
