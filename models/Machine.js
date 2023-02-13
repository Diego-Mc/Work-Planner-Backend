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
      unique: true,
    },
    amountOfWorkers: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
)

const Machine = mongoose.model('Machine', machineSchema)

export default Machine
