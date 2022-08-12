const productionSchema = {
  type: 'object',
  properties: {
    diaryMilkProduction: { type: 'number' },
    deliveredMilkQuantity: { type: 'number' },
    farmCod: { type: 'number' },
    farmerCod: { type: 'number' },
    date: { type: 'string' }
  },
  required: ['diaryMilkProduction', 'deliveredMilkQuantity', 'farmCod', 'date'],
  additionalProperties: false
}

export default productionSchema
