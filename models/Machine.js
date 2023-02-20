import mongoose from 'mongoose'

const machineSchema = mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amountOfWorkers: {
      type: Number,
      default: 1,
    },
    importance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

const Machine = mongoose.model('Machine', machineSchema)

export default Machine
