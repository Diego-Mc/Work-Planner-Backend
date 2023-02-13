import mongoose from 'mongoose'

const ScheduleSchema = mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: Number,
      required: true,
      unique: true,
    },
    table: [
      {
        machine: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine' },
        data: {
          morning: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' }],
          evening: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' }],
          night: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' }],
        },
        locked: {
          morning: [Boolean],
          evening: [Boolean],
          night: [Boolean],
        },
      },
    ],
  },
  { timestamps: true }
)

const Schedule = mongoose.model('Schedule', ScheduleSchema)

export default Schedule
