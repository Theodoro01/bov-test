import Ajv from 'ajv'
import userSchema from '../validateSchema/registerSchema.js'

const ajv = new Ajv({ allErrors: true })

export default {
  execute: (req, res, next) => {
    const user = req.body
    const userValidate = ajv.compile(userSchema)
    const validateUser = userValidate(user)

    if (!validateUser) {
      return res.status(400).json({ message: userValidate.errors })
    }

    return next()
  }
}
