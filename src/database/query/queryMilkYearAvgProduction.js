export default {
  execute: async (year, farmCod) => {
    return [
      {
        $match: {
          farmCod,
          year
        }
      }, {
        $group: {
          _id: '$month',
          avg: { $avg: '$diaryMilkProduction' },
          sum: { $sum: '$diaryMilkProduction' }
        }
      }, {
        $sort: {
          _id: 1
        }
      }
    ]
  }
}
