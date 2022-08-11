const userSchema = {
  type: 'object',
  properties: {
    farmer: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' }
  },
  required: ['farmer', 'email', 'password'],
  additionalProperties: false
}

export default userSchema
