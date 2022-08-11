import express from 'express'
import UserController from '../controllers/UserController.js'
import validateRegister from '../middlewares/validateRoutes/validateRegister.js'
import validateLogin from '../middlewares/validateRoutes/validateLogin.js'
const routes = express.Router()

routes.get('/home', (_, res) => res.status(200).json({ msg: 'ok' }))
routes.post('/register', validateRegister.execute, UserController.register)
routes.post('/login', validateLogin.execute, UserController.login)

export default routes
