import User from '../models/User.js'
import token from '../middlewares/token.js'
// import bcrypt from 'bcrypt'
import passwordHash from '../use-cases/passwordHash.js'

export default {
  register: async (req, res) => {
    try {
      const user = req.body
      const searchUser = await User.find({ email: user.email })
      if (searchUser.length > 0) {
        return res.status(400).json({ error: 'User already exists' })
      }
      const hashUser = await passwordHash.createHash(user)
      const resultCreate = await User.create(hashUser)
      const tokenGeneration = token.generationToken({ user: resultCreate })
      const resultUser = {
        farmerCod: resultCreate.farmerCod,
        farmer: resultCreate.farmer,
        email: resultCreate.email,
        token: tokenGeneration
      }
      return res.status(201).json(resultUser)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Registration failed' })
    }
  }
}
