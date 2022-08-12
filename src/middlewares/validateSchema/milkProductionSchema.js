const milkProductionSchema = {
  type: 'object',
  properties: {
    year: { type: 'number' },
    month: { type: 'number' },
    farmCod: { type: 'number' }
  },
  required: ['year', 'month', 'farmCod'],
  additionalProperties: true
}

export default milkProductionSchema
