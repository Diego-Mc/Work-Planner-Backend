import Schedule from '../models/Schedule.js'

/* CREATE */
export const createSchedule = async (req, res) => {
  try {
    const { date, table, workers } = req.body
    const { userId } = req
    const newSchedule = new Schedule({
      ownerId: userId,
      date,
      table,
      workers,
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
          select: 'name amountOfWorkers importance',
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
      .populate({
        path: 'workers.used',
        select: 'name shiftTime',
      })
      .populate({
        path: 'workers.unused',
        select: 'name shiftTime',
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

    let schedule = await Schedule.findById(scheduleId)

    const { machineId, shiftTime, idx } = from
    const { machineId: machineIdTo, shiftTime: shiftTimeTo, idx: idxTo } = to
    const fromRow = schedule.table.find(
      (row) => row.machine.toString() === machineId
    )
    const toRow = schedule.table.find(
      (row) => row.machine.toString() === machineIdTo
    )
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

export const placeWorker = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { destinationDetails, worker } = req.body

    let schedule = await Schedule.findById(scheduleId)

    const { machineId, shiftTime, idx } = destinationDetails
    const destinationRow = schedule.table.find(
      (row) => row.machine.toString() === machineId
    )
    if (!destinationRow) return
    destinationRow.data[shiftTime][idx] = worker._id

    const unusedIdx = schedule.workers.unused.findIndex(
      (w) => w._id.toString() === worker._id
    )
    schedule.workers.unused.splice(unusedIdx, 1)
    schedule.workers.used.push(worker)

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

    let schedule = await Schedule.findById(scheduleId)

    const { machineId, shiftTime, idx } = workerDetails
    const row = schedule.table.find(
      (row) => row.machine.toString() === machineId
    )
    if (!row) return
    row.locked[shiftTime][idx] = !row.locked[shiftTime][idx]

    schedule = await schedule.save()

    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const changeMachineWorkersAmount = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { changeDetails } = req.body

    let schedule = await Schedule.findById(scheduleId)

    const { machineId, newAmount } = changeDetails
    const row = schedule.table.find(
      (row) => row.machine._id.toString() === machineId
    )
    if (!row) return

    const len = () => row.data.morning.length

    if (newAmount === len()) return

    row.machine.amountOfWorkers = newAmount

    if (newAmount > len()) {
      while (len() < newAmount) {
        row.data.morning.push(null)
        row.locked.morning.push(false)
        row.data.evening.push(null)
        row.locked.evening.push(false)
        row.data.night.push(null)
        row.locked.night.push(false)
      }
    }

    if (newAmount < len()) {
      let maxActualWorkers = Math.max(
        row.data.morning.filter((w) => w !== null).length,
        row.data.evening.filter((w) => w !== null).length,
        row.data.night.filter((w) => w !== null).length
      )

      if (maxActualWorkers > newAmount)
        throw new Error('more workers assigned than requested')

      for (let i = 0; newAmount < len(); i++) {
        let shouldDecrement = false
        ;['morning', 'evening', 'night'].forEach((time) => {
          if (row.data[time][i] === null) {
            row.data[time].splice(i, 1)
            row.locked[time].splice(i, 1)
            shouldDecrement = true
          }
        })
        if (shouldDecrement) i--
      }
    }

    schedule = await schedule.save()

    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const setDate = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { date } = req.body

    let schedule = await Schedule.findById(scheduleId)

    schedule.date.to = date.to
    schedule.date.from = date.from

    schedule = await schedule.save()

    res.status(200).json(schedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const saveSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params
    const { ownerId, date, table, workers } = req.body
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      scheduleId,
      {
        ownerId,
        date,
        table,
        workers,
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

    if (removedSchedule.ownerId.toString() !== userId)
      throw new Error('Not authorized')

    removedSchedule = await Schedule.deleteOne({ _id: scheduleId })
    res.status(200).json(removedSchedule)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
