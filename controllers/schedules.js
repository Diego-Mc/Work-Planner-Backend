import Schedule from '../models/Schedule.js'

/* CREATE */
export const createSchedule = async (req, res) => {
  try {
    const { ownerId, date, table } = req.body
    const newSchedule = new Schedule({
      ownerId,
      date,
      table,
    })
    const savedSchedule = await newSchedule.save()

    res.status(201).json(savedSchedule)
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

/* READ */
export const getSchedules = async (req, res) => {
  try {
    const { userId } = req
    const schedules = await Schedule.find({ ownerId: userId })
      .populate('Machine')
      .populate('Worker')
    res.status(200).json(schedules)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const getSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const schedule = await Schedule.findById(scheduleId)
      .populate('Machine')
      .populate('Worker')
    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

/* UPDATE */
export const saveSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { ownerId, date, table } = req.body
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      scheduleId,
      {
        ownerId,
        date,
        table,
      },
      { new: true }
    )

    res.status(200).json(updatedSchedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const deleteSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { userId } = req

    let removedSchedule = await Schedule.findById(scheduleId)

    if (removedSchedule.ownerId !== userId) throw new Error('Not authorized')

    removedSchedule = await Schedule.deleteOne({ _id: scheduleId })
    res.status(200).json(removedSchedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
