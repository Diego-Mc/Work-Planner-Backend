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
      .populate('table')
      .exec()
    res.status(200).json(schedules)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const getSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const schedule = await Schedule.findById(scheduleId)
      .populate({
        path: 'table',
        populate: {
          path: 'machine',
          select: 'name amountOfWorkers',
          options: { retainNullValues: true },
        },
      })
      .populate({
        path: 'table',
        populate: {
          path: 'data.morning',
          select: 'name',
          options: { retainNullValues: true },
        },
      })
      .populate({
        path: 'table',
        populate: {
          path: 'data.evening',
          select: 'name',
          options: { retainNullValues: true },
        },
      })
      .populate({
        path: 'table',
        populate: {
          path: 'data.night',
          select: 'name',
          options: { retainNullValues: true },
        },
      })
      .exec()
    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

/* UPDATE */
export const moveWorkers = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { from, to } = req.body

    const schedule = await Schedule.findById(scheduleId)

    const { machine, shiftTime, idx } = from
    const { machine: machineTo, shiftTime: shiftTimeTo, idx: idxTo } = to
    const fromRow = schedule.table.find((row) => row.machine === machine)
    const toRow = schedule.table.find((row) => row.machine === machineTo)
    if (!toRow || !fromRow) return
    ;[fromRow.data[shiftTime][idx], toRow.data[shiftTimeTo][idxTo]] = [
      toRow.data[shiftTimeTo][idxTo],
      fromRow.data[shiftTime][idx],
    ]

    schedule = await schedule.save()

    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const toggleLock = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { workerDetails } = req.body

    const schedule = await Schedule.findById(scheduleId)

    const { machine, shiftTime, idx } = workerDetails
    const row = schedule.table.find((row) => row.machine === machine)
    if (!row) return
    row.locked[shiftTime][idx] = !row.locked[shiftTime][idx]

    schedule = await schedule.save()

    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

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
