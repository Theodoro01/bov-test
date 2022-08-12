import Farm from '../../../models/Farm.js'

export default {
  execute: async (farmCod) => {
    const farm = await Farm.find({ farmCod })
    return farm[0].distance
  }
}
