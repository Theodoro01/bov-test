export default {
  execute: async (dateYear, dateMonth, farmCod) => {
    return [
      { $match: { farmCod } },
      {
        $match: {
          $and: [{ createdAt: { $gte: new Date(dateYear, dateMonth - 1, 1) } },
            { createdAt: { $lte: new Date(dateYear, dateMonth, 0) } }]
        }
      }, {
        $group: {
          _id: '',
          sum: { $sum: '$diaryMilkProduction' },
          count: { $sum: 1 }
        }
      }
    ]
  }
}
