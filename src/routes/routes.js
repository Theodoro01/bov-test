import express from 'express'

const routes = express.Router()

routes.get('/home', (_, res) => res.status(200).json({ msg: 'ok' }))

export default routes
