import bcrypt from 'bcrypt'

const createHash = async (params) => {
  const hash = await bcrypt.hash(params.password, 10)
  params.password = hash
  return params
}

export default { createHash }
