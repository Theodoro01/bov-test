import Farm from '../models/Farm.js'

export default {
  farmRegister: async (req, res) => {
    try {
      const farm = req.body
      const resultCreate = await Farm.create(farm)
      return res.status(201).json(resultCreate)
    } catch (error) {
      return res.status(500).json({ error: 'Registration failed' })
    }
  },

  searchAllFarms: async (req, res) => {
    try {
      const farmerCod = req.body.farmerCod
      const resultSearch = await Farm.find({ farmerCod })

      if (resultSearch.length === 0) {
        return res.status(404).json({ error: 'Farm not found' })
      }
      return res.status(200).json({ resultSearch })
    } catch (error) {
      return res.status(500).json({ error: 'Registration failed' })
    }
  }

}
