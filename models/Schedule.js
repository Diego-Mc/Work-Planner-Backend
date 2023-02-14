import mongoose from 'mongoose'

const ScheduleSchema = mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      from: { type: Number, required: true },
      to: { type: Number, required: true },
    },
    table: [
      {
        machine: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine' },
        data: {
          morning: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Worker',
            },
          ],
          evening: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Worker',
            },
          ],
          night: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Worker',
            },
          ],
        },
        locked: {
          morning: [Boolean],
          evening: [Boolean],
          night: [Boolean],
        },
      },
    ],
    workers: {
      used: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Worker',
        },
      ],
      unused: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Worker',
        },
      ],
    },
  },
  { timestamps: true }
)

const Schedule = mongoose.model('Schedule', ScheduleSchema)

export default Schedule
