import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import randomInteger from 'random-int'

const { model, Schema } = mongoose

const schema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  farmer: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  farmerCod: {
    type: Number,
    default: randomInteger(100, 100000)
  }
})

export default model('User', schema, 'User')
