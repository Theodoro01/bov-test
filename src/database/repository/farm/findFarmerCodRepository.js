import Farm from '../../../models/Farm.js'

export default {
  execute: async (farmerCod) => {
    const searchfarmerCod = await Farm.find({ farmerCod })
    return searchfarmerCod
  }
}
