const farmSchema = {
  type: 'object',
  properties: {
    farmCod: { type: 'number' },
    farm: { type: 'string' },
    address: { type: 'string' },
    distance: { type: 'number' },
    farmerCod: { type: 'number' }
  },
  required: ['farm', 'address', 'distance'],
  additionalProperties: true
}

export default farmSchema
