import User from '../../../models/User.js'
import passwordHash from '../../../use-cases/passwordHash.js'

export default {
  execute: async (user) => {
    try {
      const hashUser = await passwordHash.createHash(user)
      const resultCreate = await User.create(hashUser)
      resultCreate.password = undefined
      return resultCreate
    } catch (error) {
      throw new Error(error)
    }
  }
}
