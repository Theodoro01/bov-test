const milkProductionSchema = {
  type: 'object',
  properties: {
    year: { type: 'number' },
    month: { type: 'number' },
    farmCod: { type: 'number' }
  },
  required: ['year', 'month', 'farmCod'],
  additionalProperties: false
}

export default milkProductionSchema
