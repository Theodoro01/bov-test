import User from '../../../models/User.js'

export default {
  execute: async (user) => {
    const searchUser = await User.find({ email: user.email })
    return searchUser
  }
}
