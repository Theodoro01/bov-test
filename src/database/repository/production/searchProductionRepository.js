import Production from '../../../models/Production.js'
import query from '../../query/queryMilkProduction.js'

export default {
  execute: async (dateYear, dateMonth, farmCod) => {
    const resultQuery = await query.execute(dateYear, dateMonth, farmCod)
    const total = await Production.aggregate(resultQuery)
    return { totalProduction: total[0].sum, totalRegister: total[0].count }
  }
}
