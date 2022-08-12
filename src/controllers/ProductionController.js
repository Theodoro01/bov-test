import createProductionRepository from '../database/repository/production/createProductionRepository.js'
import searchProductionRepository from '../database/repository/production/searchProductionRepository.js'

export default {
  insertProduction: async (req, res) => {
    try {
      const production = req.body
      const resultCreate = await createProductionRepository.execute(production)
      return res.status(201).json(resultCreate)
    } catch (error) {
      return res.status(500).json({ error: 'Registration failed' })
    }
  },
  allProduction: async (req, res) => {
    try {
      const { year, month, farmCod } = req.body
      const result = await searchProductionRepository.execute(year, month, farmCod)
      if (result?.totalRegister === 0) {
        return res.status(404).json({ error: 'production not found' })
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
