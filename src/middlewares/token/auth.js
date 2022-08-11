import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const auth = async (req, res, next) => {
  const authToken = req.headers?.authorization
  if (!authToken) {
    res.status(400).json({ err: 'token não localizado' })
  }
  const result = await validateToken(authToken)

  if (result?.status === 'authenticate') {
    req.body.farmerCod = result.farmerCod
    next()
  } else {
    res.status(result.code).json({ err: 'Não autorizado' })
  }
}
const validateToken = async (params) => {
  try {
    let resultValidate
    if (params !== undefined) {
      const bearer = params.split(' ')
      const token = bearer[1]

      jwt.verify(token, process.env.SECRET, (err, data) => {
        if (err) {
          if (err.message === 'jwt expired') {
            resultValidate = { status: 'Sessão inválida', code: 408 }
          }
          if (err.message === 'invalid token') {
            resultValidate = { status: 'Não autorizado', code: 401 }
          }
        } else {
          resultValidate = {
            status: 'authenticate',
            farmerCod: data.farmerCod
          }
        }
      })
    } else {
      resultValidate = { status: 'Não autorizado', code: 411 }
    }
    return resultValidate
  } catch (error) {
    return { error }
  }
}
export default { auth, validateToken }
