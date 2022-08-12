const avgYearProductionSchema = {
  type: 'object',
  properties: {
    year: { type: 'number' },
    farmCod: { type: 'number' },
    farmerCod: { type: 'number' }
  },
  required: ['year', 'farmCod'],
  additionalProperties: false
}

export default avgYearProductionSchema
