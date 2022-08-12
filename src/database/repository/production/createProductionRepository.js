import Production from '../../../models/Production.js'

export default {
  execute: async (production) => {
    try {
      const date = production.date.split('-')
      production.month = date[1]
      production.year = date[0]
      return Production.create(production)
    } catch (error) {
      throw new Error(error)
    }
  }
}
