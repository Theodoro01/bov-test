import express from 'express'
import UserController from '../controllers/UserController.js'
import validateRegister from '../middlewares/validateRoutes/validateRegister.js'
const routes = express.Router()

routes.get('/home', (_, res) => res.status(200).json({ msg: 'ok' }))
routes.post('/register', validateRegister.execute, UserController.register)
routes.post('/login', UserController.login)

export default routes
