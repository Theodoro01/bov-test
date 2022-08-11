import Ajv from 'ajv'
import validateLogin from '../validateSchema/loginSchema.js'

const ajv = new Ajv({ allErrors: true })

export default {

  execute: (req, res, next) => {
    const authUser = req.body
    const userValidate = ajv.compile(validateLogin)
    const validateUser = userValidate(authUser)

    if (!validateUser) {
      return res.status(400).json({ message: userValidate.errors })
    }

    return next()
  }
}
