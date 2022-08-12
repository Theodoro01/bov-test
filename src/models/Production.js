import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const { model, Schema } = mongoose

const schema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  diaryMilkProduction: {
    type: Number,
    required: true
  },
  deliveredMilkQuantity: {
    type: Number,
    required: true
  },
  farmerCod: {
    type: Number
  },
  farmCod: {
    type: Number
  },
  month: {
    type: Number
  },
  year: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model('Production', schema, 'Production')
