import createProductionRepository from '../database/repository/production/createProductionRepository.js'

export default {
  insertProduction: async (req, res) => {
    try {
      const production = req.body
      const resultCreate = await createProductionRepository.execute(production)
      return res.status(201).json(resultCreate)
    } catch (error) {
      return res.status(500).json({ error: 'Registration failed' })
    }
  }
}
