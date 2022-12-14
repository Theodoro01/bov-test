import express from 'express'
import UserController from '../controllers/UserController.js'
import FarmController from '../controllers/FarmController.js'
import ProductionController from '../controllers/productionController.js'
import validateRegister from '../middlewares/validateRoutes/validateRegister.js'
import validateLogin from '../middlewares/validateRoutes/validateLogin.js'
import validateAuth from '../middlewares/token/auth.js'
import validateFarm from '../middlewares/validateRoutes/validateFarm.js'
import validateInsertProduction from '../middlewares/validateRoutes/validateInsertProduction.js'
import validateSearchProduction from '../middlewares/validateRoutes/validateSearchProduction.js'
import validateMilkProduction from '../middlewares/validateRoutes/validateMilkProduction.js'
import validateAvgProduction from '../middlewares/validateRoutes/validateAvgProduction.js'
import validateAvgYearProduction from '../middlewares/validateRoutes/validateAvgYearProduction.js'

const routes = express.Router()

routes.get('/home', (_, res) => res.status(200).json({ msg: 'ok' }))

routes.post('/register', validateRegister.execute, UserController.register)
routes.post('/login', validateLogin.execute, UserController.login)
routes.post('/farmRegister', validateAuth.auth, validateFarm.execute, FarmController.farmRegister)
routes.get('/searchAllFarms', validateAuth.auth, FarmController.searchAllFarms)
routes.post('/insertProduction', validateAuth.auth, validateInsertProduction.execute, ProductionController.insertProduction)
routes.post('/searchAllProduction', validateAuth.auth, validateSearchProduction.execute, ProductionController.allProduction)
routes.post('/milkProduction', validateAuth.auth, validateMilkProduction.execute, ProductionController.milkProduction)
routes.post('/avgProduction', validateAuth.auth, validateAvgProduction.execute, ProductionController.averageProduction)
routes.post('/avgYearProduction', validateAuth.auth, validateAvgYearProduction.execute, ProductionController.milkAvgYearProduction)

export default routes
