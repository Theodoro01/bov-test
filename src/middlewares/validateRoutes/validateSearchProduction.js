import Ajv from 'ajv'

import productionSchema from '../validateSchema/searchProductionSchema.js'
const ajv = new Ajv({ allErrors: true })

export default {
  execute: (req, res, next) => {
    const production = req.body
    const productionValidate = ajv.compile(productionSchema)
    const validateproduction = productionValidate(production)

    if (!validateproduction) {
      return res.status(400).json({ message: productionValidate.errors })
    }

    return next()
  }
}
