import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const generationToken = (params) => {
  const token = jwt.sign(
    {
      _id: params.user._id,
      farmerCod: params.user.farmerCod
    },
    process.env.SECRET,
    { expiresIn: Number(process.env.EXPIRES) }
  )
  return token
}

export default { generationToken }
