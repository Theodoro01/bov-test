import User from '../models/User.js'
import token from '../middlewares/token/token.js'
import bcrypt from 'bcrypt'
import registerUser from '../database/repository/user/registerUser.js'
import findEmailRepository from '../database/repository/user/findEmailRepository.js'

export default {
  register: async (req, res) => {
    try {
      const user = req.body
      const validateUser = await findEmailRepository.execute(user)
      if (validateUser.length > 0) {
        return res.status(400).json({ error: 'User already exists' })
      }
      const createUser = await registerUser.execute(user)
      const tokenGeneration = token.generationToken({ user: createUser })
      const resultUser = {
        farmerCod: createUser.farmerCod,
        farmer: createUser.farmer,
        email: createUser.email,
        token: tokenGeneration
      }
      return res.status(201).json(resultUser)
    } catch (error) {
      return res.status(500).json({ error: 'Registration failed' })
    }
  },
  login: async function (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email }).select('+password')
      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ error: 'Invalid user' })
      }
      const tokenGeneration = token.generationToken({ user })
      return res.status(201).json({ token: tokenGeneration })
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' })
    }
  }
}
