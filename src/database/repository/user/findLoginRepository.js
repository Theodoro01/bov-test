import User from '../../../models/User.js'

export default {
  execute: async (email) => {
    const searchUser = await User.findOne({ email }).select(User.password)
    return searchUser
  }
}
