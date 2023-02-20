import mongoose from 'mongoose'

const workerSchema = mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    shiftTime: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

const Worker = mongoose.model('Worker', workerSchema)

export default Worker
