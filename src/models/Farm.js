import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import randomInteger from 'random-int'

const { model, Schema } = mongoose

const schema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  farmCod: {
    type: Number,
    default: randomInteger(100, 100000)
  },
  farm: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  farmerCod: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now

  }
})

export default model('Farm', schema, 'Farm')
