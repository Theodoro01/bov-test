import Production from '../../../models/Production.js'
import query from '../../query/queryMilkYearAvgProduction.js'

export default {
  execute: async (year, farmCod) => {
    const resultQuery = await query.execute(year, farmCod)
    return Production.aggregate(resultQuery)
  }
}
