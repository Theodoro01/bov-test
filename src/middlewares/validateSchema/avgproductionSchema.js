const avgProductionSchema = {
  type: 'object',
  properties: {
    year: { type: 'number' },
    month: { type: 'number' },
    farmCod: { type: 'number' },
    farmerCod: { type: 'number' }
  },
  required: ['year', 'month', 'farmCod'],
  additionalProperties: false
}

export default avgProductionSchema
