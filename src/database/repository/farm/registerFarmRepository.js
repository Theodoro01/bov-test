import Farm from '../../../models/Farm.js'

export default {
  execute: async (farm) => {
    const resultCreate = await Farm.create(farm)
    return resultCreate
  }
}
