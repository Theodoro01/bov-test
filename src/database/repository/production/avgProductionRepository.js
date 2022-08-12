import Production from '../../../models/Production.js'
import query from '../../query/queryAvgProduction.js'

export default {
  execute: async (dateYear, dateMonth, farmCod) => {
    const resultQuery = await query.execute(dateYear, dateMonth, farmCod)
    const avgResult = await Production.aggregate(resultQuery)
    if (avgResult.length === 0) {
      return 0
    }
    const avg = { avg: avgResult[0].avg.toFixed(2) }
    return avg
  }
}
